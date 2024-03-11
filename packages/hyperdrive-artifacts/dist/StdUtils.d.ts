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
        readonly id: 34610;
        readonly exportedSymbols: {
            readonly IMulticall3: readonly [52549];
            readonly StdUtils: readonly [34609];
            readonly VmSafe: readonly [35725];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10492:106";
        readonly nodes: readonly [{
            readonly id: 33763;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:106";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 33764;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:106";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 33766;
            readonly nodeType: "ImportDirective";
            readonly src: "100:57:106";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/interfaces/IMulticall3.sol";
            readonly file: "./interfaces/IMulticall3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 34610;
            readonly sourceUnit: 52550;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 33765;
                    readonly name: "IMulticall3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 52549;
                    readonly src: "108:11:106";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 33768;
            readonly nodeType: "ImportDirective";
            readonly src: "158:32:106";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 34610;
            readonly sourceUnit: 36198;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 33767;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35725;
                    readonly src: "166:6:106";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 34609;
            readonly nodeType: "ContractDefinition";
            readonly src: "192:10331:106";
            readonly nodes: readonly [{
                readonly id: 33774;
                readonly nodeType: "VariableDeclaration";
                readonly src: "435:96:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "multicall";
                readonly nameLocation: "464:9:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IMulticall3_$52549";
                    readonly typeString: "contract IMulticall3";
                };
                readonly typeName: {
                    readonly id: 33770;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 33769;
                        readonly name: "IMulticall3";
                        readonly nameLocations: readonly ["435:11:106"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 52549;
                        readonly src: "435:11:106";
                    };
                    readonly referencedDeclaration: 52549;
                    readonly src: "435:11:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IMulticall3_$52549";
                        readonly typeString: "contract IMulticall3";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "307863413131626465303539373762333633313136373032383836326245326131373339373643413131";
                        readonly id: 33772;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "488:42:106";
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
                        readonly id: 33771;
                        readonly name: "IMulticall3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 52549;
                        readonly src: "476:11:106";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_IMulticall3_$52549_$";
                            readonly typeString: "type(contract IMulticall3)";
                        };
                    };
                    readonly id: 33773;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "476:55:106";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IMulticall3_$52549";
                        readonly typeString: "contract IMulticall3";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 33791;
                readonly nodeType: "VariableDeclaration";
                readonly src: "537:92:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "561:2:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 33776;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 33775;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["537:6:106"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 35725;
                        readonly src: "537:6:106";
                    };
                    readonly referencedDeclaration: 35725;
                    readonly src: "537:6:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
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
                                        readonly id: 33785;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "607:17:106";
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
                                        readonly id: 33784;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "597:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 33786;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "597:28:106";
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
                                    readonly id: 33783;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "589:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 33782;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "589:7:106";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 33787;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "589:37:106";
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
                                readonly id: 33781;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "581:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 33780;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "581:7:106";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 33788;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "581:46:106";
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
                            readonly id: 33779;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "573:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 33778;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "573:7:106";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 33789;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "573:55:106";
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
                        readonly id: 33777;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 35725;
                        readonly src: "566:6:106";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$35725_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 33790;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "566:63:106";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 33794;
                readonly nodeType: "VariableDeclaration";
                readonly src: "635:86:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CONSOLE2_ADDRESS";
                readonly nameLocation: "660:16:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 33792;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "635:7:106";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307830303030303030303030303030303030303036333646366537333646366336353265366336663637";
                    readonly id: 33793;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "679:42:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x000000000000000000636F6e736F6c652e6c6f67";
                };
                readonly visibility: "private";
            }, {
                readonly id: 33797;
                readonly nodeType: "VariableDeclaration";
                readonly src: "727:127:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INT256_MIN_ABS";
                readonly nameLocation: "752:14:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 33795;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "727:7:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638";
                    readonly id: 33796;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "777:77:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1";
                        readonly typeString: "int_const 5789...(69 digits omitted)...9968";
                    };
                    readonly value: "57896044618658097711785492504343953926634992332820282019728792003956564819968";
                };
                readonly visibility: "private";
            }, {
                readonly id: 33800;
                readonly nodeType: "VariableDeclaration";
                readonly src: "860:129:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SECP256K1_ORDER";
                readonly nameLocation: "885:15:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 33798;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "860:7:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337";
                    readonly id: 33799;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "911:78:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...4337";
                    };
                    readonly value: "115792089237316195423570985008687907852837564279074904382605163141518161494337";
                };
                readonly visibility: "private";
            }, {
                readonly id: 33803;
                readonly nodeType: "VariableDeclaration";
                readonly src: "995:125:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UINT256_MAX";
                readonly nameLocation: "1020:11:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 33801;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "995:7:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335";
                    readonly id: 33802;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1042:78:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly value: "115792089237316195423570985008687907853269984665640564039457584007913129639935";
                };
                readonly visibility: "private";
            }, {
                readonly id: 33806;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1239:85:106";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CREATE2_FACTORY";
                readonly nameLocation: "1264:15:106";
                readonly scope: 34609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 33804;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1239:7:106";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307834653539623434383437623337393537383538383932306341373846624632366330423439353643";
                    readonly id: 33805;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1282:42:106";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x4e59b44847b379578588920cA78FbF26c0B4956C";
                };
                readonly visibility: "private";
            }, {
                readonly id: 33936;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1546:1263:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 33935;
                    readonly nodeType: "Block";
                    readonly src: "1646:1163:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33820;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33818;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33810;
                                    readonly src: "1664:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 33819;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33812;
                                    readonly src: "1671:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1664:10:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320626f756e642875696e743235362c75696e743235362c75696e74323536293a204d6178206973206c657373207468616e206d696e2e";
                                readonly id: 33821;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1676:64:106";
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
                                readonly id: 33817;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1656:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 33822;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1656:85:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 33823;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1656:85:106";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 33830;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33826;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33824;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "1970:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">=";
                                readonly rightExpression: {
                                    readonly id: 33825;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33810;
                                    readonly src: "1975:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1970:8:106";
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
                                readonly id: 33829;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33827;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "1982:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 33828;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33812;
                                    readonly src: "1987:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "1982:8:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1970:20:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 33833;
                        readonly nodeType: "IfStatement";
                        readonly src: "1966:34:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly id: 33831;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33808;
                                readonly src: "1999:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 33816;
                            readonly id: 33832;
                            readonly nodeType: "Return";
                            readonly src: "1992:8:106";
                        };
                    }, {
                        readonly assignments: readonly [33835];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 33835;
                            readonly mutability: "mutable";
                            readonly name: "size";
                            readonly nameLocation: "2019:4:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 33935;
                            readonly src: "2011:12:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 33834;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2011:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 33841;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 33840;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33838;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33836;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33812;
                                    readonly src: "2026:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 33837;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33810;
                                    readonly src: "2032:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2026:9:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly hexValue: "31";
                                readonly id: 33839;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2038:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_1_by_1";
                                    readonly typeString: "int_const 1";
                                };
                                readonly value: "1";
                            };
                            readonly src: "2026:13:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2011:28:106";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 33848;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33844;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33842;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "2229:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly hexValue: "33";
                                    readonly id: 33843;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "2234:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_3_by_1";
                                        readonly typeString: "int_const 3";
                                    };
                                    readonly value: "3";
                                };
                                readonly src: "2229:6:106";
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
                                readonly id: 33847;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33845;
                                    readonly name: "size";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33835;
                                    readonly src: "2239:4:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 33846;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "2246:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2239:8:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2229:18:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 33853;
                        readonly nodeType: "IfStatement";
                        readonly src: "2225:38:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33851;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33849;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33810;
                                    readonly src: "2256:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 33850;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "2262:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2256:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 33816;
                            readonly id: 33852;
                            readonly nodeType: "Return";
                            readonly src: "2249:14:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 33864;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33858;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33854;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "2277:1:106";
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
                                    readonly id: 33857;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 33855;
                                        readonly name: "UINT256_MAX";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33803;
                                        readonly src: "2282:11:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "33";
                                        readonly id: 33856;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2296:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3_by_1";
                                            readonly typeString: "int_const 3";
                                        };
                                        readonly value: "3";
                                    };
                                    readonly src: "2282:15:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2277:20:106";
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
                                readonly id: 33863;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33859;
                                    readonly name: "size";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33835;
                                    readonly src: "2301:4:106";
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
                                    readonly id: 33862;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 33860;
                                        readonly name: "UINT256_MAX";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33803;
                                        readonly src: "2308:11:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 33861;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33808;
                                        readonly src: "2322:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2308:15:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2301:22:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2277:46:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 33872;
                        readonly nodeType: "IfStatement";
                        readonly src: "2273:82:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 33870;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33865;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33812;
                                    readonly src: "2332:3:106";
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
                                        readonly id: 33868;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 33866;
                                            readonly name: "UINT256_MAX";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33803;
                                            readonly src: "2339:11:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 33867;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33808;
                                            readonly src: "2353:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2339:15:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 33869;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "2338:17:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2332:23:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly functionReturnParameters: 33816;
                            readonly id: 33871;
                            readonly nodeType: "Return";
                            readonly src: "2325:30:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 33875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 33873;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33808;
                                readonly src: "2455:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 33874;
                                readonly name: "max";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33812;
                                readonly src: "2459:3:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2455:7:106";
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
                                readonly id: 33905;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33903;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33808;
                                    readonly src: "2634:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 33904;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33810;
                                    readonly src: "2638:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2634:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 33933;
                            readonly nodeType: "IfStatement";
                            readonly src: "2630:173:106";
                            readonly trueBody: {
                                readonly id: 33932;
                                readonly nodeType: "Block";
                                readonly src: "2643:160:106";
                                readonly statements: readonly [{
                                    readonly assignments: readonly [33907];
                                    readonly declarations: readonly [{
                                        readonly constant: false;
                                        readonly id: 33907;
                                        readonly mutability: "mutable";
                                        readonly name: "diff";
                                        readonly nameLocation: "2665:4:106";
                                        readonly nodeType: "VariableDeclaration";
                                        readonly scope: 33932;
                                        readonly src: "2657:12:106";
                                        readonly stateVariable: false;
                                        readonly storageLocation: "default";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly typeName: {
                                            readonly id: 33906;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2657:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly visibility: "internal";
                                    }];
                                    readonly id: 33911;
                                    readonly initialValue: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 33910;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 33908;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33810;
                                            readonly src: "2672:3:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 33909;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33808;
                                            readonly src: "2678:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2672:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "VariableDeclarationStatement";
                                    readonly src: "2657:22:106";
                                }, {
                                    readonly assignments: readonly [33913];
                                    readonly declarations: readonly [{
                                        readonly constant: false;
                                        readonly id: 33913;
                                        readonly mutability: "mutable";
                                        readonly name: "rem";
                                        readonly nameLocation: "2701:3:106";
                                        readonly nodeType: "VariableDeclaration";
                                        readonly scope: 33932;
                                        readonly src: "2693:11:106";
                                        readonly stateVariable: false;
                                        readonly storageLocation: "default";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly typeName: {
                                            readonly id: 33912;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2693:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly visibility: "internal";
                                    }];
                                    readonly id: 33917;
                                    readonly initialValue: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 33916;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 33914;
                                            readonly name: "diff";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33907;
                                            readonly src: "2707:4:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "%";
                                        readonly rightExpression: {
                                            readonly id: 33915;
                                            readonly name: "size";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33835;
                                            readonly src: "2714:4:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2707:11:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "VariableDeclarationStatement";
                                    readonly src: "2693:25:106";
                                }, {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 33920;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 33918;
                                            readonly name: "rem";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33913;
                                            readonly src: "2736:3:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 33919;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "2743:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "2736:8:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 33923;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "2732:24:106";
                                    readonly trueBody: {
                                        readonly expression: {
                                            readonly id: 33921;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33810;
                                            readonly src: "2753:3:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly functionReturnParameters: 33816;
                                        readonly id: 33922;
                                        readonly nodeType: "Return";
                                        readonly src: "2746:10:106";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 33930;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 33924;
                                            readonly name: "result";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33815;
                                            readonly src: "2770:6:106";
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
                                            readonly id: 33929;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 33927;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 33925;
                                                    readonly name: "max";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 33812;
                                                    readonly src: "2779:3:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 33926;
                                                    readonly name: "rem";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 33913;
                                                    readonly src: "2785:3:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "2779:9:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 33928;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "2791:1:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly src: "2779:13:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2770:22:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 33931;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "2770:22:106";
                                }];
                            };
                        };
                        readonly id: 33934;
                        readonly nodeType: "IfStatement";
                        readonly src: "2451:352:106";
                        readonly trueBody: {
                            readonly id: 33902;
                            readonly nodeType: "Block";
                            readonly src: "2464:160:106";
                            readonly statements: readonly [{
                                readonly assignments: readonly [33877];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 33877;
                                    readonly mutability: "mutable";
                                    readonly name: "diff";
                                    readonly nameLocation: "2486:4:106";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 33902;
                                    readonly src: "2478:12:106";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 33876;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2478:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 33881;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 33880;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 33878;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33808;
                                        readonly src: "2493:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 33879;
                                        readonly name: "max";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33812;
                                        readonly src: "2497:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2493:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "2478:22:106";
                            }, {
                                readonly assignments: readonly [33883];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 33883;
                                    readonly mutability: "mutable";
                                    readonly name: "rem";
                                    readonly nameLocation: "2522:3:106";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 33902;
                                    readonly src: "2514:11:106";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 33882;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2514:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 33887;
                                readonly initialValue: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 33886;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 33884;
                                        readonly name: "diff";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33877;
                                        readonly src: "2528:4:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "%";
                                    readonly rightExpression: {
                                        readonly id: 33885;
                                        readonly name: "size";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33835;
                                        readonly src: "2535:4:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2528:11:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "2514:25:106";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 33890;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 33888;
                                        readonly name: "rem";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33883;
                                        readonly src: "2557:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 33889;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2564:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "2557:8:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 33893;
                                readonly nodeType: "IfStatement";
                                readonly src: "2553:24:106";
                                readonly trueBody: {
                                    readonly expression: {
                                        readonly id: 33891;
                                        readonly name: "max";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33812;
                                        readonly src: "2574:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly functionReturnParameters: 33816;
                                    readonly id: 33892;
                                    readonly nodeType: "Return";
                                    readonly src: "2567:10:106";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 33900;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 33894;
                                        readonly name: "result";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33815;
                                        readonly src: "2591:6:106";
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
                                        readonly id: 33899;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 33897;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 33895;
                                                readonly name: "min";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 33810;
                                                readonly src: "2600:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly id: 33896;
                                                readonly name: "rem";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 33883;
                                                readonly src: "2606:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "2600:9:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly hexValue: "31";
                                            readonly id: 33898;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "2612:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "2600:13:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2591:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 33901;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2591:22:106";
                            }];
                        };
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_bound";
                readonly nameLocation: "1555:6:106";
                readonly parameters: {
                    readonly id: 33813;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33808;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1570:1:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33936;
                        readonly src: "1562:9:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33807;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1562:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33810;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "1581:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33936;
                        readonly src: "1573:11:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33809;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1573:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33812;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "1594:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33936;
                        readonly src: "1586:11:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33811;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1586:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1561:37:106";
                };
                readonly returnParameters: {
                    readonly id: 33816;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33815;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "1638:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33936;
                        readonly src: "1630:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33814;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1630:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1629:16:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 33961;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2815:190:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 33960;
                    readonly nodeType: "Block";
                    readonly src: "2914:91:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 33953;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 33947;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33945;
                                readonly src: "2924:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 33949;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33938;
                                    readonly src: "2940:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 33950;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33940;
                                    readonly src: "2943:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 33951;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33942;
                                    readonly src: "2948:3:106";
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
                                    readonly id: 33948;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [33936, 34083];
                                    readonly referencedDeclaration: 33936;
                                    readonly src: "2933:6:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 33952;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2933:19:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2924:28:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 33954;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2924:28:106";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "426f756e6420526573756c74";
                                readonly id: 33956;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2975:14:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52";
                                    readonly typeString: "literal_string \"Bound Result\"";
                                };
                                readonly value: "Bound Result";
                            }, {
                                readonly id: 33957;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33945;
                                readonly src: "2991:6:106";
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
                                readonly id: 33955;
                                readonly name: "console2_log";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [34583, 34608];
                                readonly referencedDeclaration: 34583;
                                readonly src: "2962:12:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (string memory,uint256) view";
                                };
                            };
                            readonly id: 33958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2962:36:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 33959;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2962:36:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bound";
                readonly nameLocation: "2824:5:106";
                readonly parameters: {
                    readonly id: 33943;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33938;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2838:1:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33961;
                        readonly src: "2830:9:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33937;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2830:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33940;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "2849:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33961;
                        readonly src: "2841:11:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33939;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2841:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33942;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "2862:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33961;
                        readonly src: "2854:11:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33941;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2854:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2829:37:106";
                };
                readonly returnParameters: {
                    readonly id: 33946;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33945;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "2906:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 33961;
                        readonly src: "2898:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 33944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2898:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2897:16:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34083;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3011:1145:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34082;
                    readonly nodeType: "Block";
                    readonly src: "3107:1049:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 33975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33973;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33965;
                                    readonly src: "3125:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 33974;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33967;
                                    readonly src: "3132:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "3125:10:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320626f756e6428696e743235362c696e743235362c696e74323536293a204d6178206973206c657373207468616e206d696e2e";
                                readonly id: 33976;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3137:61:106";
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
                                readonly id: 33972;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3117:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 33977;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3117:82:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 33978;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3117:82:106";
                    }, {
                        readonly assignments: readonly [33980];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 33980;
                            readonly mutability: "mutable";
                            readonly name: "_x";
                            readonly nameLocation: "3635:2:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34082;
                            readonly src: "3627:10:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 33979;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3627:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34002;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 33983;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 33981;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33963;
                                    readonly src: "3640:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 33982;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3644:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3640:5:106";
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
                                    readonly id: 33999;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 33996;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33963;
                                            readonly src: "3694:1:106";
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
                                            readonly id: 33995;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3686:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 33994;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3686:7:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 33997;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3686:10:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 33998;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33797;
                                        readonly src: "3699:14:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3686:27:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 34000;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3685:29:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 34001;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3640:74:106";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 33992;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 33990;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 33984;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33797;
                                            readonly src: "3649:14:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 33989;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3666:11:106";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 33987;
                                                    readonly name: "x";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 33963;
                                                    readonly src: "3675:1:106";
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
                                                    readonly id: 33986;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3667:7:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 33985;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3667:7:106";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 33988;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3667:10:106";
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
                                        readonly src: "3649:28:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 33991;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3680:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3649:32:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 33993;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3648:34:106";
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
                        readonly src: "3627:87:106";
                    }, {
                        readonly assignments: readonly [34004];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34004;
                            readonly mutability: "mutable";
                            readonly name: "_min";
                            readonly nameLocation: "3732:4:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34082;
                            readonly src: "3724:12:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 34003;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3724:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34026;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 34007;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 34005;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33965;
                                    readonly src: "3739:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 34006;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3745:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3739:7:106";
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
                                    readonly id: 34023;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 34020;
                                            readonly name: "min";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33965;
                                            readonly src: "3797:3:106";
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
                                            readonly id: 34019;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3789:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34018;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3789:7:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34021;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3789:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 34022;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33797;
                                        readonly src: "3804:14:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3789:29:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 34024;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3788:31:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 34025;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3739:80:106";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 34016;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 34014;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 34008;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33797;
                                            readonly src: "3750:14:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 34013;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3767:13:106";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 34011;
                                                    readonly name: "min";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 33965;
                                                    readonly src: "3776:3:106";
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
                                                    readonly id: 34010;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3768:7:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 34009;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3768:7:106";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 34012;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3768:12:106";
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
                                        readonly src: "3750:30:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 34015;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3783:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3750:34:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 34017;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3749:36:106";
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
                        readonly src: "3724:95:106";
                    }, {
                        readonly assignments: readonly [34028];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34028;
                            readonly mutability: "mutable";
                            readonly name: "_max";
                            readonly nameLocation: "3837:4:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34082;
                            readonly src: "3829:12:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 34027;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3829:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34050;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 34031;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 34029;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33967;
                                    readonly src: "3844:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 34030;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3850:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3844:7:106";
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
                                    readonly id: 34047;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 34044;
                                            readonly name: "max";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33967;
                                            readonly src: "3902:3:106";
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
                                            readonly id: 34043;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3894:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34042;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3894:7:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34045;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3894:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 34046;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33797;
                                        readonly src: "3909:14:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3894:29:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 34048;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3893:31:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 34049;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "3844:80:106";
                            readonly trueExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 34040;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 34038;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 34032;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33797;
                                            readonly src: "3855:14:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 34037;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "3872:13:106";
                                            readonly subExpression: {
                                                readonly arguments: readonly [{
                                                    readonly id: 34035;
                                                    readonly name: "max";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 33967;
                                                    readonly src: "3881:3:106";
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
                                                    readonly id: 34034;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3873:7:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 34033;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3873:7:106";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 34036;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3873:12:106";
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
                                        readonly src: "3855:30:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 34039;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3888:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "3855:34:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 34041;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3854:36:106";
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
                        readonly src: "3829:95:106";
                    }, {
                        readonly assignments: readonly [34052];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34052;
                            readonly mutability: "mutable";
                            readonly name: "y";
                            readonly nameLocation: "3943:1:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34082;
                            readonly src: "3935:9:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 34051;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3935:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34058;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 34054;
                                readonly name: "_x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33980;
                                readonly src: "3954:2:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 34055;
                                readonly name: "_min";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34004;
                                readonly src: "3958:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 34056;
                                readonly name: "_max";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34028;
                                readonly src: "3964:4:106";
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
                                readonly id: 34053;
                                readonly name: "_bound";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [33936, 34083];
                                readonly referencedDeclaration: 33936;
                                readonly src: "3947:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 34057;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3947:22:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3935:34:106";
                    }, {
                        readonly expression: {
                            readonly id: 34080;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34059;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33970;
                                readonly src: "4057:6:106";
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
                                    readonly id: 34062;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 34060;
                                        readonly name: "y";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34052;
                                        readonly src: "4066:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 34061;
                                        readonly name: "INT256_MIN_ABS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33797;
                                        readonly src: "4070:14:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4066:18:106";
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
                                        readonly id: 34077;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 34075;
                                            readonly name: "y";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34052;
                                            readonly src: "4130:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 34076;
                                            readonly name: "INT256_MIN_ABS";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 33797;
                                            readonly src: "4134:14:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4130:18:106";
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
                                        readonly id: 34074;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4123:6:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_int256_$";
                                            readonly typeString: "type(int256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34073;
                                            readonly name: "int256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4123:6:106";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 34078;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4123:26:106";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 34079;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "4066:83:106";
                                readonly trueExpression: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 34071;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 34069;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "UnaryOperation";
                                            readonly operator: "~";
                                            readonly prefix: true;
                                            readonly src: "4094:21:106";
                                            readonly subExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 34067;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 34065;
                                                        readonly name: "INT256_MIN_ABS";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 33797;
                                                        readonly src: "4096:14:106";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly id: 34066;
                                                        readonly name: "y";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 34052;
                                                        readonly src: "4113:1:106";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "4096:18:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly id: 34068;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "4095:20:106";
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
                                            readonly id: 34070;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4118:1:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_1_by_1";
                                                readonly typeString: "int_const 1";
                                            };
                                            readonly value: "1";
                                        };
                                        readonly src: "4094:25:106";
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
                                        readonly id: 34064;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4087:6:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_int256_$";
                                            readonly typeString: "type(int256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34063;
                                            readonly name: "int256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4087:6:106";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 34072;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4087:33:106";
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
                            readonly src: "4057:92:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 34081;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4057:92:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_bound";
                readonly nameLocation: "3020:6:106";
                readonly parameters: {
                    readonly id: 33968;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33963;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "3034:1:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34083;
                        readonly src: "3027:8:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 33962;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3027:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33965;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "3044:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34083;
                        readonly src: "3037:10:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 33964;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3037:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 33967;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "3056:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34083;
                        readonly src: "3049:10:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 33966;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3049:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3026:34:106";
                };
                readonly returnParameters: {
                    readonly id: 33971;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 33970;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "3099:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34083;
                        readonly src: "3092:13:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 33969;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3092:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3091:15:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34111;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4162:199:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34110;
                    readonly nodeType: "Block";
                    readonly src: "4257:104:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34100;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34094;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34092;
                                readonly src: "4267:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 34096;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34085;
                                    readonly src: "4283:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 34097;
                                    readonly name: "min";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34087;
                                    readonly src: "4286:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }, {
                                    readonly id: 34098;
                                    readonly name: "max";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34089;
                                    readonly src: "4291:3:106";
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
                                    readonly id: 34095;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [33936, 34083];
                                    readonly referencedDeclaration: 34083;
                                    readonly src: "4276:6:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$";
                                        readonly typeString: "function (int256,int256,int256) pure returns (int256)";
                                    };
                                };
                                readonly id: 34099;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4276:19:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "4267:28:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 34101;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4267:28:106";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "426f756e6420726573756c74";
                                readonly id: 34103;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4318:14:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f";
                                    readonly typeString: "literal_string \"Bound result\"";
                                };
                                readonly value: "Bound result";
                            }, {
                                readonly arguments: readonly [{
                                    readonly id: 34106;
                                    readonly name: "result";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34092;
                                    readonly src: "4346:6:106";
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
                                        readonly id: 34104;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33791;
                                        readonly src: "4334:2:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 34105;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4337:8:106";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 35264;
                                    readonly src: "4334:11:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 34107;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4334:19:106";
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
                                readonly id: 34102;
                                readonly name: "console2_log";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [34583, 34608];
                                readonly referencedDeclaration: 34608;
                                readonly src: "4305:12:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) view";
                                };
                            };
                            readonly id: 34108;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4305:49:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34109;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4305:49:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bound";
                readonly nameLocation: "4171:5:106";
                readonly parameters: {
                    readonly id: 34090;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34085;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "4184:1:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34111;
                        readonly src: "4177:8:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 34084;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4177:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34087;
                        readonly mutability: "mutable";
                        readonly name: "min";
                        readonly nameLocation: "4194:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34111;
                        readonly src: "4187:10:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 34086;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4187:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34089;
                        readonly mutability: "mutable";
                        readonly name: "max";
                        readonly nameLocation: "4206:3:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34111;
                        readonly src: "4199:10:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 34088;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4199:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4176:34:106";
                };
                readonly returnParameters: {
                    readonly id: 34093;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34092;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4249:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34111;
                        readonly src: "4242:13:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 34091;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4242:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4241:15:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34129;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4367:160:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34128;
                    readonly nodeType: "Block";
                    readonly src: "4459:68:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34126;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34118;
                                readonly name: "result";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34116;
                                readonly src: "4469:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 34120;
                                    readonly name: "privateKey";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34113;
                                    readonly src: "4485:10:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly hexValue: "31";
                                    readonly id: 34121;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4497:1:106";
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
                                    readonly id: 34124;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 34122;
                                        readonly name: "SECP256K1_ORDER";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33800;
                                        readonly src: "4500:15:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "31";
                                        readonly id: 34123;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4518:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_1_by_1";
                                            readonly typeString: "int_const 1";
                                        };
                                        readonly value: "1";
                                    };
                                    readonly src: "4500:19:106";
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
                                    readonly id: 34119;
                                    readonly name: "_bound";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [33936, 34083];
                                    readonly referencedDeclaration: 33936;
                                    readonly src: "4478:6:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 34125;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4478:42:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "4469:51:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 34127;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4469:51:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "boundPrivateKey";
                readonly nameLocation: "4376:15:106";
                readonly parameters: {
                    readonly id: 34114;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34113;
                        readonly mutability: "mutable";
                        readonly name: "privateKey";
                        readonly nameLocation: "4400:10:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34129;
                        readonly src: "4392:18:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34112;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4392:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4391:20:106";
                };
                readonly returnParameters: {
                    readonly id: 34117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34116;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4451:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34129;
                        readonly src: "4443:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34115;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4443:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4442:16:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34163;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4533:259:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34162;
                    readonly nodeType: "Block";
                    readonly src: "4610:182:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 34140;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 34137;
                                        readonly name: "b";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34131;
                                        readonly src: "4628:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 34138;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4630:6:106";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4628:8:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly hexValue: "3332";
                                    readonly id: 34139;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4640:2:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_32_by_1";
                                        readonly typeString: "int_const 32";
                                    };
                                    readonly value: "32";
                                };
                                readonly src: "4628:14:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c73206279746573546f55696e74286279746573293a204279746573206c656e67746820657863656564732033322e";
                                readonly id: 34141;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4644:55:106";
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
                                readonly id: 34136;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4620:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 34142;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4620:80:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34143;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4620:80:106";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 34153;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "3332";
                                            readonly id: 34150;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "4755:2:106";
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
                                                readonly id: 34151;
                                                readonly name: "b";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34131;
                                                readonly src: "4760:1:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 34152;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4762:6:106";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4760:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4755:13:106";
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
                                        readonly id: 34149;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "NewExpression";
                                        readonly src: "4745:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function (uint256) pure returns (bytes memory)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34148;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4749:5:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                                readonly typeString: "bytes";
                                            };
                                        };
                                    };
                                    readonly id: 34154;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4745:24:106";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }, {
                                    readonly id: 34155;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34131;
                                    readonly src: "4771:1:106";
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
                                        readonly id: 34146;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "4728:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 34147;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4732:12:106";
                                    readonly memberName: "encodePacked";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4728:16:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 34156;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4728:45:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 34158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4776:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 34157;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4776:7:106";
                                        readonly typeDescriptions: {};
                                    };
                                }];
                                readonly id: 34159;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "4775:9:106";
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
                                    readonly id: 34144;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "4717:3:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 34145;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4721:6:106";
                                readonly memberName: "decode";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4717:10:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                    readonly typeString: "function () pure";
                                };
                            };
                            readonly id: 34160;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4717:68:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 34135;
                        readonly id: 34161;
                        readonly nodeType: "Return";
                        readonly src: "4710:75:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bytesToUint";
                readonly nameLocation: "4542:11:106";
                readonly parameters: {
                    readonly id: 34132;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34131;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "4567:1:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34163;
                        readonly src: "4554:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34130;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4554:5:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4553:16:106";
                };
                readonly returnParameters: {
                    readonly id: 34135;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34134;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34163;
                        readonly src: "4601:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34133;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4601:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4600:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34348;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5026:1962:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34347;
                    readonly nodeType: "Block";
                    readonly src: "5129:1859:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34175;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34173;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34168;
                                readonly src: "5455:5:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30783030";
                                readonly id: 34174;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5464:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0x00";
                            };
                            readonly src: "5455:13:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34197;
                        readonly nodeType: "IfStatement";
                        readonly src: "5451:134:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786436";
                                                readonly id: 34182;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5539:4:106";
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
                                                readonly id: 34181;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5532:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34180;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5532:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34183;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5532:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 34186;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5553:4:106";
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
                                                readonly id: 34185;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5546:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34184;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5546:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34187;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5546:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 34188;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34166;
                                            readonly src: "5560:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783830";
                                                readonly id: 34191;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5577:4:106";
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
                                                readonly id: 34190;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5570:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34189;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5570:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34192;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5570:12:106";
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
                                                readonly id: 34178;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5515:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34179;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5519:12:106";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5515:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 34193;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5515:68:106";
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
                                        readonly id: 34177;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5505:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34194;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5505:79:106";
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
                                    readonly id: 34176;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34558;
                                    readonly src: "5482:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 34195;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5482:103:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 34172;
                            readonly id: 34196;
                            readonly nodeType: "Return";
                            readonly src: "5475:110:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34200;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34198;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34168;
                                readonly src: "5599:5:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<=";
                            readonly rightExpression: {
                                readonly hexValue: "30783766";
                                readonly id: 34199;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5608:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_127_by_1";
                                    readonly typeString: "int_const 127";
                                };
                                readonly value: "0x7f";
                            };
                            readonly src: "5599:13:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34222;
                        readonly nodeType: "IfStatement";
                        readonly src: "5595:134:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786436";
                                                readonly id: 34207;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5683:4:106";
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
                                                readonly id: 34206;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5676:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34205;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5676:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34208;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5676:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 34211;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5697:4:106";
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
                                                readonly id: 34210;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5690:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34209;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5690:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34212;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5690:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 34213;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34166;
                                            readonly src: "5704:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 34216;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34168;
                                                readonly src: "5720:5:106";
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
                                                readonly id: 34215;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5714:5:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint8_$";
                                                    readonly typeString: "type(uint8)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34214;
                                                    readonly name: "uint8";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5714:5:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34217;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5714:12:106";
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
                                                readonly id: 34203;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5659:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34204;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5663:12:106";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5659:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 34218;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5659:68:106";
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
                                        readonly id: 34202;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5649:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34219;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5649:79:106";
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
                                    readonly id: 34201;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34558;
                                    readonly src: "5626:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 34220;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5626:103:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 34172;
                            readonly id: 34221;
                            readonly nodeType: "Return";
                            readonly src: "5619:110:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34229;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34223;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34168;
                                readonly src: "5882:5:106";
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
                                readonly id: 34228;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_256_by_1";
                                        readonly typeString: "int_const 256";
                                    };
                                    readonly id: 34226;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 34224;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5891:1:106";
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
                                        readonly id: 34225;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5894:1:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_8_by_1";
                                            readonly typeString: "int_const 8";
                                        };
                                        readonly value: "8";
                                    };
                                    readonly src: "5891:4:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_256_by_1";
                                        readonly typeString: "int_const 256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 34227;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5898:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "5891:8:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_255_by_1";
                                    readonly typeString: "int_const 255";
                                };
                            };
                            readonly src: "5882:17:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34255;
                        readonly nodeType: "IfStatement";
                        readonly src: "5878:148:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786437";
                                                readonly id: 34236;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5966:4:106";
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
                                                readonly id: 34235;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5959:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34234;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5959:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34237;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5959:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 34240;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5980:4:106";
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
                                                readonly id: 34239;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5973:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34238;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5973:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34241;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5973:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 34242;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34166;
                                            readonly src: "5987:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783831";
                                                readonly id: 34245;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6004:4:106";
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
                                                readonly id: 34244;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5997:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34243;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5997:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34246;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5997:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 34249;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34168;
                                                readonly src: "6017:5:106";
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
                                                readonly id: 34248;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6011:5:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint8_$";
                                                    readonly typeString: "type(uint8)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34247;
                                                    readonly name: "uint8";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6011:5:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34250;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6011:12:106";
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
                                                readonly id: 34232;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "5942:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34233;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5946:12:106";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5942:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 34251;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5942:82:106";
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
                                        readonly id: 34231;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "5932:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34252;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5932:93:106";
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
                                    readonly id: 34230;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34558;
                                    readonly src: "5909:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 34253;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5909:117:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 34172;
                            readonly id: 34254;
                            readonly nodeType: "Return";
                            readonly src: "5902:124:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34262;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34256;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34168;
                                readonly src: "6040:5:106";
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
                                readonly id: 34261;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_65536_by_1";
                                        readonly typeString: "int_const 65536";
                                    };
                                    readonly id: 34259;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 34257;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6049:1:106";
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
                                        readonly id: 34258;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6052:2:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_16_by_1";
                                            readonly typeString: "int_const 16";
                                        };
                                        readonly value: "16";
                                    };
                                    readonly src: "6049:5:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_65536_by_1";
                                        readonly typeString: "int_const 65536";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 34260;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6057:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "6049:9:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_65535_by_1";
                                    readonly typeString: "int_const 65535";
                                };
                            };
                            readonly src: "6040:18:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34288;
                        readonly nodeType: "IfStatement";
                        readonly src: "6036:149:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786438";
                                                readonly id: 34269;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6124:4:106";
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
                                                readonly id: 34268;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6117:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34267;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6117:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34270;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6117:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 34273;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6138:4:106";
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
                                                readonly id: 34272;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6131:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34271;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6131:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34274;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6131:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 34275;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34166;
                                            readonly src: "6145:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783832";
                                                readonly id: 34278;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6162:4:106";
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
                                                readonly id: 34277;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6155:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34276;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6155:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34279;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6155:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 34282;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34168;
                                                readonly src: "6176:5:106";
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
                                                readonly id: 34281;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6169:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint16_$";
                                                    readonly typeString: "type(uint16)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34280;
                                                    readonly name: "uint16";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6169:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34283;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6169:13:106";
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
                                                readonly id: 34265;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "6100:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34266;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6104:12:106";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6100:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 34284;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6100:83:106";
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
                                        readonly id: 34264;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "6090:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34285;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6090:94:106";
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
                                    readonly id: 34263;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34558;
                                    readonly src: "6067:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 34286;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6067:118:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 34172;
                            readonly id: 34287;
                            readonly nodeType: "Return";
                            readonly src: "6060:125:106";
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34295;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34289;
                                readonly name: "nonce";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34168;
                                readonly src: "6199:5:106";
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
                                readonly id: 34294;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_rational_16777216_by_1";
                                        readonly typeString: "int_const 16777216";
                                    };
                                    readonly id: 34292;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "32";
                                        readonly id: 34290;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6208:1:106";
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
                                        readonly id: 34291;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6211:2:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_24_by_1";
                                            readonly typeString: "int_const 24";
                                        };
                                        readonly value: "24";
                                    };
                                    readonly src: "6208:5:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_16777216_by_1";
                                        readonly typeString: "int_const 16777216";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 34293;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6216:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly src: "6208:9:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_16777215_by_1";
                                    readonly typeString: "int_const 16777215";
                                };
                            };
                            readonly src: "6199:18:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34321;
                        readonly nodeType: "IfStatement";
                        readonly src: "6195:149:106";
                        readonly trueBody: {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30786439";
                                                readonly id: 34302;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6283:4:106";
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
                                                readonly id: 34301;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6276:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34300;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6276:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34303;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6276:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783934";
                                                readonly id: 34306;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6297:4:106";
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
                                                readonly id: 34305;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6290:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34304;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6290:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34307;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6290:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly id: 34308;
                                            readonly name: "deployer";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34166;
                                            readonly src: "6304:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783833";
                                                readonly id: 34311;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6321:4:106";
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
                                                readonly id: 34310;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6314:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                    readonly typeString: "type(bytes1)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34309;
                                                    readonly name: "bytes1";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6314:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34312;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6314:12:106";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 34315;
                                                readonly name: "nonce";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34168;
                                                readonly src: "6335:5:106";
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
                                                readonly id: 34314;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "6328:6:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint24_$";
                                                    readonly typeString: "type(uint24)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34313;
                                                    readonly name: "uint24";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6328:6:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 34316;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "6328:13:106";
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
                                                readonly id: 34298;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "6259:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34299;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6263:12:106";
                                            readonly memberName: "encodePacked";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "6259:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 34317;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6259:83:106";
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
                                        readonly id: 34297;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "6249:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34318;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6249:94:106";
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
                                    readonly id: 34296;
                                    readonly name: "addressFromLast20Bytes";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34558;
                                    readonly src: "6226:22:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                        readonly typeString: "function (bytes32) pure returns (address)";
                                    };
                                };
                                readonly id: 34319;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6226:118:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly functionReturnParameters: 34172;
                            readonly id: 34320;
                            readonly nodeType: "Return";
                            readonly src: "6219:125:106";
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30786461";
                                            readonly id: 34328;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6911:4:106";
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
                                            readonly id: 34327;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6904:6:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34326;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6904:6:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34329;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6904:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30783934";
                                            readonly id: 34332;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6925:4:106";
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
                                            readonly id: 34331;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6918:6:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34330;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6918:6:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34333;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6918:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly id: 34334;
                                        readonly name: "deployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34166;
                                        readonly src: "6932:8:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30783834";
                                            readonly id: 34337;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6949:4:106";
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
                                            readonly id: 34336;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6942:6:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34335;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6942:6:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34338;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6942:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 34341;
                                            readonly name: "nonce";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34168;
                                            readonly src: "6963:5:106";
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
                                            readonly id: 34340;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "6956:6:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint32_$";
                                                readonly typeString: "type(uint32)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34339;
                                                readonly name: "uint32";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6956:6:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34342;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "6956:13:106";
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
                                            readonly id: 34324;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "6887:3:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 34325;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6891:12:106";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "6887:16:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 34343;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6887:83:106";
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
                                    readonly id: 34323;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "6877:9:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 34344;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6877:94:106";
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
                                readonly id: 34322;
                                readonly name: "addressFromLast20Bytes";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34558;
                                readonly src: "6841:22:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32) pure returns (address)";
                                };
                            };
                            readonly id: 34345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6841:140:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 34172;
                        readonly id: 34346;
                        readonly nodeType: "Return";
                        readonly src: "6834:147:106";
                    }];
                };
                readonly documentation: {
                    readonly id: 34164;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4798:223:106";
                    readonly text: "@dev Compute the address a contract will be deployed at for a given deployer address and nonce\n @notice adapted from Solmate implementation (https://github.com/Rari-Capital/solmate/blob/main/src/utils/LibRLP.sol)";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreateAddress";
                readonly nameLocation: "5035:20:106";
                readonly parameters: {
                    readonly id: 34169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34166;
                        readonly mutability: "mutable";
                        readonly name: "deployer";
                        readonly nameLocation: "5064:8:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34348;
                        readonly src: "5056:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34165;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5056:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34168;
                        readonly mutability: "mutable";
                        readonly name: "nonce";
                        readonly nameLocation: "5082:5:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34348;
                        readonly src: "5074:13:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5074:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5055:33:106";
                };
                readonly returnParameters: {
                    readonly id: 34172;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34171;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34348;
                        readonly src: "5120:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34170;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5120:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5119:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34375;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6994:280:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34374;
                    readonly nodeType: "Block";
                    readonly src: "7155:119:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "30786666";
                                            readonly id: 34365;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7229:4:106";
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
                                            readonly id: 34364;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "7222:6:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 34363;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "7222:6:106";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 34366;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7222:12:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    }, {
                                        readonly id: 34367;
                                        readonly name: "deployer";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34354;
                                        readonly src: "7236:8:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 34368;
                                        readonly name: "salt";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34350;
                                        readonly src: "7246:4:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 34369;
                                        readonly name: "initcodeHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34352;
                                        readonly src: "7252:12:106";
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
                                            readonly id: 34361;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "7205:3:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 34362;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7209:12:106";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "7205:16:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 34370;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7205:60:106";
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
                                    readonly id: 34360;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "7195:9:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 34371;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7195:71:106";
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
                                readonly id: 34359;
                                readonly name: "addressFromLast20Bytes";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34558;
                                readonly src: "7172:22:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32) pure returns (address)";
                                };
                            };
                            readonly id: 34372;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7172:95:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 34358;
                        readonly id: 34373;
                        readonly nodeType: "Return";
                        readonly src: "7165:102:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreate2Address";
                readonly nameLocation: "7003:21:106";
                readonly parameters: {
                    readonly id: 34355;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34350;
                        readonly mutability: "mutable";
                        readonly name: "salt";
                        readonly nameLocation: "7033:4:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34375;
                        readonly src: "7025:12:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34349;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7025:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34352;
                        readonly mutability: "mutable";
                        readonly name: "initcodeHash";
                        readonly nameLocation: "7047:12:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34375;
                        readonly src: "7039:20:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34351;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7039:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34354;
                        readonly mutability: "mutable";
                        readonly name: "deployer";
                        readonly nameLocation: "7069:8:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34375;
                        readonly src: "7061:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34353;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7061:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7024:54:106";
                };
                readonly returnParameters: {
                    readonly id: 34358;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34357;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34375;
                        readonly src: "7142:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34356;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7142:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7141:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34392;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7383:181:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34391;
                    readonly nodeType: "Block";
                    readonly src: "7482:82:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34386;
                                readonly name: "salt";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34378;
                                readonly src: "7521:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 34387;
                                readonly name: "initCodeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34380;
                                readonly src: "7527:12:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 34388;
                                readonly name: "CREATE2_FACTORY";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 33806;
                                readonly src: "7541:15:106";
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
                                readonly id: 34385;
                                readonly name: "computeCreate2Address";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [34375, 34392];
                                readonly referencedDeclaration: 34375;
                                readonly src: "7499:21:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_address_$returns$_t_address_$";
                                    readonly typeString: "function (bytes32,bytes32,address) pure returns (address)";
                                };
                            };
                            readonly id: 34389;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7499:58:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 34384;
                        readonly id: 34390;
                        readonly nodeType: "Return";
                        readonly src: "7492:65:106";
                    }];
                };
                readonly documentation: {
                    readonly id: 34376;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7280:98:106";
                    readonly text: "@dev returns the address of a contract created with CREATE2 using the default CREATE2 deployer";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "computeCreate2Address";
                readonly nameLocation: "7392:21:106";
                readonly parameters: {
                    readonly id: 34381;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34378;
                        readonly mutability: "mutable";
                        readonly name: "salt";
                        readonly nameLocation: "7422:4:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34392;
                        readonly src: "7414:12:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34377;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7414:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34380;
                        readonly mutability: "mutable";
                        readonly name: "initCodeHash";
                        readonly nameLocation: "7436:12:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34392;
                        readonly src: "7428:20:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34379;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7428:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7413:36:106";
                };
                readonly returnParameters: {
                    readonly id: 34384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34383;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34392;
                        readonly src: "7473:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34382;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7473:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7472:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34406;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7788:135:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34405;
                    readonly nodeType: "Block";
                    readonly src: "7869:54:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34401;
                                readonly name: "creationCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34395;
                                readonly src: "7899:12:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly hexValue: "";
                                readonly id: 34402;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7913:2:106";
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
                                readonly id: 34400;
                                readonly name: "hashInitCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [34406, 34425];
                                readonly referencedDeclaration: 34425;
                                readonly src: "7886:12:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory,bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 34403;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7886:30:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 34399;
                        readonly id: 34404;
                        readonly nodeType: "Return";
                        readonly src: "7879:37:106";
                    }];
                };
                readonly documentation: {
                    readonly id: 34393;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7570:213:106";
                    readonly text: "@dev returns the hash of the init code (creation code + no args) used in CREATE2 with no constructor arguments\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "hashInitCode";
                readonly nameLocation: "7797:12:106";
                readonly parameters: {
                    readonly id: 34396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34395;
                        readonly mutability: "mutable";
                        readonly name: "creationCode";
                        readonly nameLocation: "7823:12:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34406;
                        readonly src: "7810:25:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34394;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7810:5:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7809:27:106";
                };
                readonly returnParameters: {
                    readonly id: 34399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34398;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34406;
                        readonly src: "7860:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34397;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7860:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7859:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34425;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8196:171:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34424;
                    readonly nodeType: "Block";
                    readonly src: "8296:71:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 34419;
                                    readonly name: "creationCode";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34409;
                                    readonly src: "8340:12:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }, {
                                    readonly id: 34420;
                                    readonly name: "args";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34411;
                                    readonly src: "8354:4:106";
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
                                        readonly id: 34417;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "8323:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 34418;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8327:12:106";
                                    readonly memberName: "encodePacked";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "8323:16:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 34421;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8323:36:106";
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
                                readonly id: 34416;
                                readonly name: "keccak256";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -8;
                                readonly src: "8313:9:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 34422;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8313:47:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 34415;
                        readonly id: 34423;
                        readonly nodeType: "Return";
                        readonly src: "8306:54:106";
                    }];
                };
                readonly documentation: {
                    readonly id: 34407;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7929:262:106";
                    readonly text: "@dev returns the hash of the init code (creation code + ABI-encoded args) used in CREATE2\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode\n @param args the ABI-encoded arguments to the constructor of C";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "hashInitCode";
                readonly nameLocation: "8205:12:106";
                readonly parameters: {
                    readonly id: 34412;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34409;
                        readonly mutability: "mutable";
                        readonly name: "creationCode";
                        readonly nameLocation: "8231:12:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34425;
                        readonly src: "8218:25:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34408;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8218:5:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34411;
                        readonly mutability: "mutable";
                        readonly name: "args";
                        readonly nameLocation: "8258:4:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34425;
                        readonly src: "8245:17:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34410;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8245:5:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8217:46:106";
                };
                readonly returnParameters: {
                    readonly id: 34415;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34414;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34425;
                        readonly src: "8287:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34413;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8287:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8286:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34539;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8478:1124:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34538;
                    readonly nodeType: "Block";
                    readonly src: "8628:974:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [34437];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34437;
                            readonly mutability: "mutable";
                            readonly name: "tokenCodeSize";
                            readonly nameLocation: "8646:13:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34538;
                            readonly src: "8638:21:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 34436;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8638:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34438;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8638:21:106";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "8678:59:106";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "8692:35:106";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "token";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8721:5:106";
                                    }];
                                    readonly functionName: {
                                        readonly name: "extcodesize";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8709:11:106";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8709:18:106";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "tokenCodeSize";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8692:13:106";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 34427;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8721:5:106";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 34437;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8692:13:106";
                            readonly valueSize: 1;
                        }];
                        readonly id: 34439;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "8669:68:106";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 34443;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 34441;
                                    readonly name: "tokenCodeSize";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34437;
                                    readonly src: "8754:13:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 34442;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8770:1:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8754:17:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5374645574696c7320676574546f6b656e42616c616e63657328616464726573732c616464726573735b5d293a20546f6b656e2061646472657373206973206e6f74206120636f6e74726163742e";
                                readonly id: 34444;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8773:80:106";
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
                                readonly id: 34440;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "8746:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 34445;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8746:108:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34446;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8746:108:106";
                    }, {
                        readonly assignments: readonly [34448];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34448;
                            readonly mutability: "mutable";
                            readonly name: "length";
                            readonly nameLocation: "8929:6:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34538;
                            readonly src: "8921:14:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 34447;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8921:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34451;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 34449;
                                readonly name: "addresses";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34430;
                                readonly src: "8938:9:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly id: 34450;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "8948:6:106";
                            readonly memberName: "length";
                            readonly nodeType: "MemberAccess";
                            readonly src: "8938:16:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8921:33:106";
                    }, {
                        readonly assignments: readonly [34457];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34457;
                            readonly mutability: "mutable";
                            readonly name: "calls";
                            readonly nameLocation: "8990:5:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34538;
                            readonly src: "8964:31:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct IMulticall3.Call[]";
                            };
                            readonly typeName: {
                                readonly baseType: {
                                    readonly id: 34455;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 34454;
                                        readonly name: "IMulticall3.Call";
                                        readonly nameLocations: readonly ["8964:11:106", "8976:4:106"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 52394;
                                        readonly src: "8964:16:106";
                                    };
                                    readonly referencedDeclaration: 52394;
                                    readonly src: "8964:16:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                        readonly typeString: "struct IMulticall3.Call";
                                    };
                                };
                                readonly id: 34456;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "8964:18:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                    readonly typeString: "struct IMulticall3.Call[]";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34464;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 34462;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34448;
                                readonly src: "9021:6:106";
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
                                readonly id: 34461;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "8998:22:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (struct IMulticall3.Call memory[] memory)";
                                };
                                readonly typeName: {
                                    readonly baseType: {
                                        readonly id: 34459;
                                        readonly nodeType: "UserDefinedTypeName";
                                        readonly pathNode: {
                                            readonly id: 34458;
                                            readonly name: "IMulticall3.Call";
                                            readonly nameLocations: readonly ["9002:11:106", "9014:4:106"];
                                            readonly nodeType: "IdentifierPath";
                                            readonly referencedDeclaration: 52394;
                                            readonly src: "9002:16:106";
                                        };
                                        readonly referencedDeclaration: 52394;
                                        readonly src: "9002:16:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$52394_storage_ptr";
                                            readonly typeString: "struct IMulticall3.Call";
                                        };
                                    };
                                    readonly id: 34460;
                                    readonly nodeType: "ArrayTypeName";
                                    readonly src: "9002:18:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_storage_$dyn_storage_ptr";
                                        readonly typeString: "struct IMulticall3.Call[]";
                                    };
                                };
                            };
                            readonly id: 34463;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8998:30:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct IMulticall3.Call memory[] memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8964:64:106";
                    }, {
                        readonly body: {
                            readonly id: 34492;
                            readonly nodeType: "Block";
                            readonly src: "9075:189:106";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 34490;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 34475;
                                            readonly name: "calls";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34457;
                                            readonly src: "9147:5:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr";
                                                readonly typeString: "struct IMulticall3.Call memory[] memory";
                                            };
                                        };
                                        readonly id: 34477;
                                        readonly indexExpression: {
                                            readonly id: 34476;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34466;
                                            readonly src: "9153:1:106";
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
                                        readonly src: "9147:8:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$52394_memory_ptr";
                                            readonly typeString: "struct IMulticall3.Call memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 34480;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34427;
                                            readonly src: "9184:5:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30783730613038323331";
                                                readonly id: 34483;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "9224:10:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1889567281_by_1";
                                                    readonly typeString: "int_const 1889567281";
                                                };
                                                readonly value: "0x70a08231";
                                            }, {
                                                readonly components: readonly [{
                                                    readonly baseExpression: {
                                                        readonly id: 34484;
                                                        readonly name: "addresses";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 34430;
                                                        readonly src: "9237:9:106";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                                            readonly typeString: "address[] memory";
                                                        };
                                                    };
                                                    readonly id: 34486;
                                                    readonly indexExpression: {
                                                        readonly id: 34485;
                                                        readonly name: "i";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 34466;
                                                        readonly src: "9247:1:106";
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
                                                    readonly src: "9237:12:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                }];
                                                readonly id: 34487;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "9236:14:106";
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
                                                    readonly id: 34481;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "9201:3:106";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 34482;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9205:18:106";
                                                readonly memberName: "encodeWithSelector";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "9201:22:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes4) pure returns (bytes memory)";
                                                };
                                            };
                                            readonly id: 34488;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9201:50:106";
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
                                                readonly id: 34478;
                                                readonly name: "IMulticall3";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 52549;
                                                readonly src: "9158:11:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IMulticall3_$52549_$";
                                                    readonly typeString: "type(contract IMulticall3)";
                                                };
                                            };
                                            readonly id: 34479;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9170:4:106";
                                            readonly memberName: "Call";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 52394;
                                            readonly src: "9158:16:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_Call_$52394_storage_ptr_$";
                                                readonly typeString: "type(struct IMulticall3.Call storage pointer)";
                                            };
                                        };
                                        readonly id: 34489;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly ["9176:6:106", "9191:8:106"];
                                        readonly names: readonly ["target", "callData"];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9158:95:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Call_$52394_memory_ptr";
                                            readonly typeString: "struct IMulticall3.Call memory";
                                        };
                                    };
                                    readonly src: "9147:106:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Call_$52394_memory_ptr";
                                        readonly typeString: "struct IMulticall3.Call memory";
                                    };
                                };
                                readonly id: 34491;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9147:106:106";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34471;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34469;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34466;
                                readonly src: "9058:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 34470;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34448;
                                readonly src: "9062:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9058:10:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34493;
                        readonly initializationExpression: {
                            readonly assignments: readonly [34466];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 34466;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "9051:1:106";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 34493;
                                readonly src: "9043:9:106";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 34465;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9043:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 34468;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 34467;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9055:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "9043:13:106";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 34473;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: true;
                                readonly src: "9070:3:106";
                                readonly subExpression: {
                                    readonly id: 34472;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34466;
                                    readonly src: "9072:1:106";
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
                            readonly id: 34474;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9070:3:106";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "9038:226:106";
                    }, {
                        readonly assignments: readonly [null, 34498];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 34498;
                            readonly mutability: "mutable";
                            readonly name: "returnData";
                            readonly nameLocation: "9328:10:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34538;
                            readonly src: "9313:25:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes[]";
                            };
                            readonly typeName: {
                                readonly baseType: {
                                    readonly id: 34496;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9313:5:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                                readonly id: 34497;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "9313:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                    readonly typeString: "bytes[]";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 34503;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 34501;
                                readonly name: "calls";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34457;
                                readonly src: "9362:5:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct IMulticall3.Call memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct IMulticall3.Call memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 34499;
                                    readonly name: "multicall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 33774;
                                    readonly src: "9342:9:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IMulticall3_$52549";
                                        readonly typeString: "contract IMulticall3";
                                    };
                                };
                                readonly id: 34500;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9352:9:106";
                                readonly memberName: "aggregate";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 52427;
                                readonly src: "9342:19:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_payable$_t_array$_t_struct$_Call_$52394_memory_ptr_$dyn_memory_ptr_$returns$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (struct IMulticall3.Call memory[] memory) payable external returns (uint256,bytes memory[] memory)";
                                };
                            };
                            readonly id: 34502;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9342:26:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                readonly typeString: "tuple(uint256,bytes memory[] memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9310:58:106";
                    }, {
                        readonly expression: {
                            readonly id: 34510;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34504;
                                readonly name: "balances";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34434;
                                readonly src: "9442:8:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 34508;
                                    readonly name: "length";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34448;
                                    readonly src: "9467:6:106";
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
                                    readonly id: 34507;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "NewExpression";
                                    readonly src: "9453:13:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure returns (uint256[] memory)";
                                    };
                                    readonly typeName: {
                                        readonly baseType: {
                                            readonly id: 34505;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9457:7:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 34506;
                                        readonly nodeType: "ArrayTypeName";
                                        readonly src: "9457:9:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                            readonly typeString: "uint256[]";
                                        };
                                    };
                                };
                                readonly id: 34509;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9453:21:106";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            };
                            readonly src: "9442:32:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly id: 34511;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9442:32:106";
                    }, {
                        readonly body: {
                            readonly id: 34536;
                            readonly nodeType: "Block";
                            readonly src: "9521:75:106";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 34534;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 34522;
                                            readonly name: "balances";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34434;
                                            readonly src: "9535:8:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                                readonly typeString: "uint256[] memory";
                                            };
                                        };
                                        readonly id: 34524;
                                        readonly indexExpression: {
                                            readonly id: 34523;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 34513;
                                            readonly src: "9544:1:106";
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
                                        readonly src: "9535:11:106";
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
                                                readonly id: 34527;
                                                readonly name: "returnData";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34498;
                                                readonly src: "9560:10:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                                    readonly typeString: "bytes memory[] memory";
                                                };
                                            };
                                            readonly id: 34529;
                                            readonly indexExpression: {
                                                readonly id: 34528;
                                                readonly name: "i";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 34513;
                                                readonly src: "9571:1:106";
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
                                            readonly src: "9560:13:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 34531;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "9576:7:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 34530;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "9576:7:106";
                                                    readonly typeDescriptions: {};
                                                };
                                            }];
                                            readonly id: 34532;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "9575:9:106";
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
                                                readonly id: 34525;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "9549:3:106";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 34526;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9553:6:106";
                                            readonly memberName: "decode";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "9549:10:106";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 34533;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9549:36:106";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9535:50:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 34535;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9535:50:106";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 34518;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 34516;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34513;
                                readonly src: "9504:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 34517;
                                readonly name: "length";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34448;
                                readonly src: "9508:6:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9504:10:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34537;
                        readonly initializationExpression: {
                            readonly assignments: readonly [34513];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 34513;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "9497:1:106";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 34537;
                                readonly src: "9489:9:106";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 34512;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9489:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 34515;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 34514;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9501:1:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "9489:13:106";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 34520;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: true;
                                readonly src: "9516:3:106";
                                readonly subExpression: {
                                    readonly id: 34519;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34513;
                                    readonly src: "9518:1:106";
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
                            readonly id: 34521;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9516:3:106";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "9484:112:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTokenBalances";
                readonly nameLocation: "8487:16:106";
                readonly parameters: {
                    readonly id: 34431;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34427;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "8512:5:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34539;
                        readonly src: "8504:13:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34426;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8504:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34430;
                        readonly mutability: "mutable";
                        readonly name: "addresses";
                        readonly nameLocation: "8536:9:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34539;
                        readonly src: "8519:26:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34428;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8519:7:106";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 34429;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "8519:9:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8503:43:106";
                };
                readonly returnParameters: {
                    readonly id: 34435;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34434;
                        readonly mutability: "mutable";
                        readonly name: "balances";
                        readonly nameLocation: "8614:8:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34539;
                        readonly src: "8597:25:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34432;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8597:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 34433;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "8597:9:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8596:27:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 34558;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9822:144:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34557;
                    readonly nodeType: "Block";
                    readonly src: "9905:61:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 34552;
                                        readonly name: "bytesValue";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 34541;
                                        readonly src: "9946:10:106";
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
                                        readonly id: 34551;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "9938:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34550;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9938:7:106";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 34553;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9938:19:106";
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
                                    readonly id: 34549;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9930:7:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint160_$";
                                        readonly typeString: "type(uint160)";
                                    };
                                    readonly typeName: {
                                        readonly id: 34548;
                                        readonly name: "uint160";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9930:7:106";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 34554;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9930:28:106";
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
                                readonly id: 34547;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "9922:7:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_address_$";
                                    readonly typeString: "type(address)";
                                };
                                readonly typeName: {
                                    readonly id: 34546;
                                    readonly name: "address";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9922:7:106";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 34555;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9922:37:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 34545;
                        readonly id: 34556;
                        readonly nodeType: "Return";
                        readonly src: "9915:44:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "addressFromLast20Bytes";
                readonly nameLocation: "9831:22:106";
                readonly parameters: {
                    readonly id: 34542;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34541;
                        readonly mutability: "mutable";
                        readonly name: "bytesValue";
                        readonly nameLocation: "9862:10:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34558;
                        readonly src: "9854:18:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34540;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9854:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9853:20:106";
                };
                readonly returnParameters: {
                    readonly id: 34545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34544;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34558;
                        readonly src: "9896:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34543;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9896:7:106";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9895:9:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 34583;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10096:207:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34582;
                    readonly nodeType: "Block";
                    readonly src: "10161:142:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [34566, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34566;
                            readonly mutability: "mutable";
                            readonly name: "status";
                            readonly nameLocation: "10177:6:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34582;
                            readonly src: "10172:11:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 34565;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10172:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 34579;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "6c6f6728737472696e672c75696e7432353629";
                                    readonly id: 34574;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10249:21:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e";
                                        readonly typeString: "literal_string \"log(string,uint256)\"";
                                    };
                                    readonly value: "log(string,uint256)";
                                }, {
                                    readonly id: 34575;
                                    readonly name: "p0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34560;
                                    readonly src: "10272:2:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 34576;
                                    readonly name: "p1";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34562;
                                    readonly src: "10276:2:106";
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
                                        readonly id: 34572;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10225:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 34573;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10229:19:106";
                                    readonly memberName: "encodeWithSignature";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10225:23:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 34577;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10225:54:106";
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
                                        readonly id: 34569;
                                        readonly name: "CONSOLE2_ADDRESS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33794;
                                        readonly src: "10196:16:106";
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
                                        readonly id: 34568;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10188:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34567;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10188:7:106";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 34570;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10188:25:106";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 34571;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10214:10:106";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "10188:36:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 34578;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10188:92:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10171:109:106";
                    }, {
                        readonly expression: {
                            readonly id: 34580;
                            readonly name: "status";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 34566;
                            readonly src: "10290:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34581;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10290:6:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "console2_log";
                readonly nameLocation: "10105:12:106";
                readonly parameters: {
                    readonly id: 34563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34560;
                        readonly mutability: "mutable";
                        readonly name: "p0";
                        readonly nameLocation: "10132:2:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34583;
                        readonly src: "10118:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34559;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10118:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34562;
                        readonly mutability: "mutable";
                        readonly name: "p1";
                        readonly nameLocation: "10144:2:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34583;
                        readonly src: "10136:10:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34561;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10136:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10117:30:106";
                };
                readonly returnParameters: {
                    readonly id: 34564;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10161:0:106";
                };
                readonly scope: 34609;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 34608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10309:212:106";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34607;
                    readonly nodeType: "Block";
                    readonly src: "10380:141:106";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [34591, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 34591;
                            readonly mutability: "mutable";
                            readonly name: "status";
                            readonly nameLocation: "10396:6:106";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 34607;
                            readonly src: "10391:11:106";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 34590;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10391:4:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 34604;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "6c6f6728737472696e672c737472696e6729";
                                    readonly id: 34599;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10468:20:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac";
                                        readonly typeString: "literal_string \"log(string,string)\"";
                                    };
                                    readonly value: "log(string,string)";
                                }, {
                                    readonly id: 34600;
                                    readonly name: "p0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34585;
                                    readonly src: "10490:2:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 34601;
                                    readonly name: "p1";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34587;
                                    readonly src: "10494:2:106";
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
                                        readonly id: 34597;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10444:3:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 34598;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10448:19:106";
                                    readonly memberName: "encodeWithSignature";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10444:23:106";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 34602;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10444:53:106";
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
                                        readonly id: 34594;
                                        readonly name: "CONSOLE2_ADDRESS";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 33794;
                                        readonly src: "10415:16:106";
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
                                        readonly id: 34593;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10407:7:106";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 34592;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10407:7:106";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 34595;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10407:25:106";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 34596;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10433:10:106";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "10407:36:106";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 34603;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10407:91:106";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10390:108:106";
                    }, {
                        readonly expression: {
                            readonly id: 34605;
                            readonly name: "status";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 34591;
                            readonly src: "10508:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 34606;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10508:6:106";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "console2_log";
                readonly nameLocation: "10318:12:106";
                readonly parameters: {
                    readonly id: 34588;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34585;
                        readonly mutability: "mutable";
                        readonly name: "p0";
                        readonly nameLocation: "10345:2:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34608;
                        readonly src: "10331:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34584;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10331:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34587;
                        readonly mutability: "mutable";
                        readonly name: "p1";
                        readonly nameLocation: "10363:2:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34608;
                        readonly src: "10349:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34586;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10349:6:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10330:36:106";
                };
                readonly returnParameters: {
                    readonly id: 34589;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10380:0:106";
                };
                readonly scope: 34609;
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
            readonly linearizedBaseContracts: readonly [34609];
            readonly name: "StdUtils";
            readonly nameLocation: "210:8:106";
            readonly scope: 34610;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 106;
};
//# sourceMappingURL=StdUtils.d.ts.map