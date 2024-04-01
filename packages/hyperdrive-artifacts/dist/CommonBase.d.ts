export declare const CommonBase: {
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Base.sol\":\"CommonBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "lib/forge-std/src/Base.sol": "CommonBase";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/Base.sol": {
                readonly keccak256: "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c";
                readonly urls: readonly ["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224", "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdStorage.sol": {
                readonly keccak256: "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d";
                readonly urls: readonly ["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26", "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/Base.sol";
        readonly id: 29718;
        readonly exportedSymbols: {
            readonly CommonBase: readonly [29705];
            readonly ScriptBase: readonly [29717];
            readonly StdStorage: readonly [35713];
            readonly TestBase: readonly [29708];
            readonly Vm: readonly [40813];
            readonly VmSafe: readonly [40341];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:1761:144";
        readonly nodes: readonly [{
            readonly id: 29644;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:144";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 29646;
            readonly nodeType: "ImportDirective";
            readonly src: "65:44:144";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStorage.sol";
            readonly file: "./StdStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 29718;
            readonly sourceUnit: 37167;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 29645;
                    readonly name: "StdStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35713;
                    readonly src: "73:10:144";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 29649;
            readonly nodeType: "ImportDirective";
            readonly src: "110:36:144";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 29718;
            readonly sourceUnit: 40814;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 29647;
                    readonly name: "Vm";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40813;
                    readonly src: "118:2:144";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 29648;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40341;
                    readonly src: "122:6:144";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 29705;
            readonly nodeType: "ContractDefinition";
            readonly src: "148:1493:144";
            readonly nodes: readonly [{
                readonly id: 29663;
                readonly nodeType: "VariableDeclaration";
                readonly src: "254:94:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "VM_ADDRESS";
                readonly nameLocation: "280:10:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29650;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "254:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "6865766d20636865617420636f6465";
                                    readonly id: 29658;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "327:17:144";
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
                                    readonly id: 29657;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "317:9:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 29659;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "317:28:144";
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
                                readonly id: 29656;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "309:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 29655;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "309:7:144";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 29660;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "309:37:144";
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
                            readonly id: 29654;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "301:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint160_$";
                                readonly typeString: "type(uint160)";
                            };
                            readonly typeName: {
                                readonly id: 29653;
                                readonly name: "uint160";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "301:7:144";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 29661;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "301:46:144";
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
                        readonly id: 29652;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly nodeType: "ElementaryTypeNameExpression";
                        readonly src: "293:7:144";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_address_$";
                            readonly typeString: "type(address)";
                        };
                        readonly typeName: {
                            readonly id: 29651;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "293:7:144";
                            readonly typeDescriptions: {};
                        };
                    };
                    readonly id: 29662;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "293:55:144";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29666;
                readonly nodeType: "VariableDeclaration";
                readonly src: "438:78:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CONSOLE";
                readonly nameLocation: "464:7:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29664;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "438:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307830303030303030303030303030303030303036333646366537333646366336353265366336663637";
                    readonly id: 29665;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "474:42:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x000000000000000000636F6e736F6c652e6c6f67";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29669;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:86:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CREATE2_FACTORY";
                readonly nameLocation: "649:15:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29667;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307834653539623434383437623337393537383538383932306341373846624632366330423439353643";
                    readonly id: 29668;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "667:42:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x4e59b44847b379578588920cA78FbF26c0B4956C";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29683;
                readonly nodeType: "VariableDeclaration";
                readonly src: "812:105:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DEFAULT_SENDER";
                readonly nameLocation: "838:14:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29670;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "812:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly hexValue: "666f756e6472792064656661756c742063616c6c6572";
                                    readonly id: 29678;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "889:24:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_ee6e12ba256a78bc5d3ab9651804c8ab1f12e6bbf3894d4083f33e07309d1f38";
                                        readonly typeString: "literal_string \"foundry default caller\"";
                                    };
                                    readonly value: "foundry default caller";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_ee6e12ba256a78bc5d3ab9651804c8ab1f12e6bbf3894d4083f33e07309d1f38";
                                        readonly typeString: "literal_string \"foundry default caller\"";
                                    }];
                                    readonly id: 29677;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "879:9:144";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 29679;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "879:35:144";
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
                                readonly id: 29676;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "871:7:144";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 29675;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "871:7:144";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 29680;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "871:44:144";
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
                            readonly id: 29674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "863:7:144";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint160_$";
                                readonly typeString: "type(uint160)";
                            };
                            readonly typeName: {
                                readonly id: 29673;
                                readonly name: "uint160";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "863:7:144";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 29681;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "863:53:144";
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
                        readonly id: 29672;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly nodeType: "ElementaryTypeNameExpression";
                        readonly src: "855:7:144";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_address_$";
                            readonly typeString: "type(address)";
                        };
                        readonly typeName: {
                            readonly id: 29671;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "855:7:144";
                            readonly typeDescriptions: {};
                        };
                    };
                    readonly id: 29682;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "855:62:144";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29686;
                readonly nodeType: "VariableDeclaration";
                readonly src: "992:92:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DEFAULT_TEST_CONTRACT";
                readonly nameLocation: "1018:21:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29684;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "992:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307835363135644542373938424233453464466130313339644661316233443433334363323362373266";
                    readonly id: 29685;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1042:42:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29689;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1158:89:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MULTICALL3_ADDRESS";
                readonly nameLocation: "1184:18:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 29687;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1158:7:144";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307863413131626465303539373762333633313136373032383836326245326131373339373643413131";
                    readonly id: 29688;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1205:42:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0xcA11bde05977b3631167028862bE2a173976CA11";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29692;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1294:130:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SECP256K1_ORDER";
                readonly nameLocation: "1320:15:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 29690;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1294:7:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337";
                    readonly id: 29691;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1346:78:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...4337";
                    };
                    readonly value: "115792089237316195423570985008687907852837564279074904382605163141518161494337";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29695;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1431:126:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UINT256_MAX";
                readonly nameLocation: "1457:11:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 29693;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1431:7:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335";
                    readonly id: 29694;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1479:78:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly value: "115792089237316195423570985008687907853269984665640564039457584007913129639935";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29701;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1564:40:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "1585:2:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_Vm_$40813";
                    readonly typeString: "contract Vm";
                };
                readonly typeName: {
                    readonly id: 29697;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 29696;
                        readonly name: "Vm";
                        readonly nameLocations: readonly ["1564:2:144"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40813;
                        readonly src: "1564:2:144";
                    };
                    readonly referencedDeclaration: 40813;
                    readonly src: "1564:2:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Vm_$40813";
                        readonly typeString: "contract Vm";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly id: 29699;
                        readonly name: "VM_ADDRESS";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 29663;
                        readonly src: "1593:10:144";
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
                        readonly id: 29698;
                        readonly name: "Vm";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40813;
                        readonly src: "1590:2:144";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_Vm_$40813_$";
                            readonly typeString: "type(contract Vm)";
                        };
                    };
                    readonly id: 29700;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1590:14:144";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Vm_$40813";
                        readonly typeString: "contract Vm";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 29704;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1610:28:144";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "stdstore";
                readonly nameLocation: "1630:8:144";
                readonly scope: 29705;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_StdStorage_$35713_storage";
                    readonly typeString: "struct StdStorage";
                };
                readonly typeName: {
                    readonly id: 29703;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 29702;
                        readonly name: "StdStorage";
                        readonly nameLocations: readonly ["1610:10:144"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 35713;
                        readonly src: "1610:10:144";
                    };
                    readonly referencedDeclaration: 35713;
                    readonly src: "1610:10:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_StdStorage_$35713_storage_ptr";
                        readonly typeString: "struct StdStorage";
                    };
                };
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "CommonBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [29705];
            readonly name: "CommonBase";
            readonly nameLocation: "166:10:144";
            readonly scope: 29718;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 29708;
            readonly nodeType: "ContractDefinition";
            readonly src: "1643:43:144";
            readonly nodes: readonly [];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 29706;
                    readonly name: "CommonBase";
                    readonly nameLocations: readonly ["1673:10:144"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 29705;
                    readonly src: "1673:10:144";
                };
                readonly id: 29707;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1673:10:144";
            }];
            readonly canonicalName: "TestBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [29708, 29705];
            readonly name: "TestBase";
            readonly nameLocation: "1661:8:144";
            readonly scope: 29718;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 29717;
            readonly nodeType: "ContractDefinition";
            readonly src: "1688:104:144";
            readonly nodes: readonly [{
                readonly id: 29716;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1737:52:144";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vmSafe";
                readonly nameLocation: "1762:6:144";
                readonly scope: 29717;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 29712;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 29711;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["1737:6:144"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40341;
                        readonly src: "1737:6:144";
                    };
                    readonly referencedDeclaration: 40341;
                    readonly src: "1737:6:144";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly id: 29714;
                        readonly name: "VM_ADDRESS";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 29663;
                        readonly src: "1778:10:144";
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
                        readonly id: 29713;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40341;
                        readonly src: "1771:6:144";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40341_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 29715;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1771:18:144";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 29709;
                    readonly name: "CommonBase";
                    readonly nameLocations: readonly ["1720:10:144"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 29705;
                    readonly src: "1720:10:144";
                };
                readonly id: 29710;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1720:10:144";
            }];
            readonly canonicalName: "ScriptBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [29717, 29705];
            readonly name: "ScriptBase";
            readonly nameLocation: "1706:10:144";
            readonly scope: 29718;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 144;
};
//# sourceMappingURL=CommonBase.d.ts.map