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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Base.sol\":\"CommonBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
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
        readonly id: 30217;
        readonly exportedSymbols: {
            readonly CommonBase: readonly [30204];
            readonly ScriptBase: readonly [30216];
            readonly StdStorage: readonly [36212];
            readonly TestBase: readonly [30207];
            readonly Vm: readonly [41312];
            readonly VmSafe: readonly [40840];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:1761:150";
        readonly nodes: readonly [{
            readonly id: 30143;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:150";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 30145;
            readonly nodeType: "ImportDirective";
            readonly src: "65:44:150";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStorage.sol";
            readonly file: "./StdStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 30217;
            readonly sourceUnit: 37666;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 30144;
                    readonly name: "StdStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 36212;
                    readonly src: "73:10:150";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 30148;
            readonly nodeType: "ImportDirective";
            readonly src: "110:36:150";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 30217;
            readonly sourceUnit: 41313;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 30146;
                    readonly name: "Vm";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 41312;
                    readonly src: "118:2:150";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 30147;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40840;
                    readonly src: "122:6:150";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 30204;
            readonly nodeType: "ContractDefinition";
            readonly src: "148:1493:150";
            readonly nodes: readonly [{
                readonly id: 30162;
                readonly nodeType: "VariableDeclaration";
                readonly src: "254:94:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "VM_ADDRESS";
                readonly nameLocation: "280:10:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30149;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "254:7:150";
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
                                    readonly id: 30157;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "327:17:150";
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
                                    readonly id: 30156;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "317:9:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 30158;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "317:28:150";
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
                                readonly id: 30155;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "309:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 30154;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "309:7:150";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 30159;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "309:37:150";
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
                            readonly id: 30153;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "301:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint160_$";
                                readonly typeString: "type(uint160)";
                            };
                            readonly typeName: {
                                readonly id: 30152;
                                readonly name: "uint160";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "301:7:150";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 30160;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "301:46:150";
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
                        readonly id: 30151;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly nodeType: "ElementaryTypeNameExpression";
                        readonly src: "293:7:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_address_$";
                            readonly typeString: "type(address)";
                        };
                        readonly typeName: {
                            readonly id: 30150;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "293:7:150";
                            readonly typeDescriptions: {};
                        };
                    };
                    readonly id: 30161;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "293:55:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30165;
                readonly nodeType: "VariableDeclaration";
                readonly src: "438:78:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CONSOLE";
                readonly nameLocation: "464:7:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30163;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "438:7:150";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307830303030303030303030303030303030303036333646366537333646366336353265366336663637";
                    readonly id: 30164;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "474:42:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x000000000000000000636F6e736F6c652e6c6f67";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30168;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:86:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CREATE2_FACTORY";
                readonly nameLocation: "649:15:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30166;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:150";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307834653539623434383437623337393537383538383932306341373846624632366330423439353643";
                    readonly id: 30167;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "667:42:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x4e59b44847b379578588920cA78FbF26c0B4956C";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30182;
                readonly nodeType: "VariableDeclaration";
                readonly src: "812:105:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DEFAULT_SENDER";
                readonly nameLocation: "838:14:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30169;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "812:7:150";
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
                                    readonly id: 30177;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "889:24:150";
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
                                    readonly id: 30176;
                                    readonly name: "keccak256";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -8;
                                    readonly src: "879:9:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                        readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                    };
                                };
                                readonly id: 30178;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "879:35:150";
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
                                readonly id: 30175;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "871:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 30174;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "871:7:150";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 30179;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "871:44:150";
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
                            readonly id: 30173;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "863:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint160_$";
                                readonly typeString: "type(uint160)";
                            };
                            readonly typeName: {
                                readonly id: 30172;
                                readonly name: "uint160";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "863:7:150";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 30180;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "863:53:150";
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
                        readonly id: 30171;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly nodeType: "ElementaryTypeNameExpression";
                        readonly src: "855:7:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_address_$";
                            readonly typeString: "type(address)";
                        };
                        readonly typeName: {
                            readonly id: 30170;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "855:7:150";
                            readonly typeDescriptions: {};
                        };
                    };
                    readonly id: 30181;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "855:62:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30185;
                readonly nodeType: "VariableDeclaration";
                readonly src: "992:92:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DEFAULT_TEST_CONTRACT";
                readonly nameLocation: "1018:21:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30183;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "992:7:150";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307835363135644542373938424233453464466130313339644661316233443433334363323362373266";
                    readonly id: 30184;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1042:42:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30188;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1158:89:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MULTICALL3_ADDRESS";
                readonly nameLocation: "1184:18:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 30186;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1158:7:150";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly value: {
                    readonly hexValue: "307863413131626465303539373762333633313136373032383836326245326131373339373643413131";
                    readonly id: 30187;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1205:42:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly value: "0xcA11bde05977b3631167028862bE2a173976CA11";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30191;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1294:130:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SECP256K1_ORDER";
                readonly nameLocation: "1320:15:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 30189;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1294:7:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337";
                    readonly id: 30190;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1346:78:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...4337";
                    };
                    readonly value: "115792089237316195423570985008687907852837564279074904382605163141518161494337";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30194;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1431:126:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UINT256_MAX";
                readonly nameLocation: "1457:11:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 30192;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1431:7:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335";
                    readonly id: 30193;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1479:78:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly value: "115792089237316195423570985008687907853269984665640564039457584007913129639935";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30200;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1564:40:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "1585:2:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_Vm_$41312";
                    readonly typeString: "contract Vm";
                };
                readonly typeName: {
                    readonly id: 30196;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 30195;
                        readonly name: "Vm";
                        readonly nameLocations: readonly ["1564:2:150"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 41312;
                        readonly src: "1564:2:150";
                    };
                    readonly referencedDeclaration: 41312;
                    readonly src: "1564:2:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Vm_$41312";
                        readonly typeString: "contract Vm";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly id: 30198;
                        readonly name: "VM_ADDRESS";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 30162;
                        readonly src: "1593:10:150";
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
                        readonly id: 30197;
                        readonly name: "Vm";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 41312;
                        readonly src: "1590:2:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_Vm_$41312_$";
                            readonly typeString: "type(contract Vm)";
                        };
                    };
                    readonly id: 30199;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1590:14:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Vm_$41312";
                        readonly typeString: "contract Vm";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 30203;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1610:28:150";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "stdstore";
                readonly nameLocation: "1630:8:150";
                readonly scope: 30204;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_StdStorage_$36212_storage";
                    readonly typeString: "struct StdStorage";
                };
                readonly typeName: {
                    readonly id: 30202;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 30201;
                        readonly name: "StdStorage";
                        readonly nameLocations: readonly ["1610:10:150"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 36212;
                        readonly src: "1610:10:150";
                    };
                    readonly referencedDeclaration: 36212;
                    readonly src: "1610:10:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_StdStorage_$36212_storage_ptr";
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
            readonly linearizedBaseContracts: readonly [30204];
            readonly name: "CommonBase";
            readonly nameLocation: "166:10:150";
            readonly scope: 30217;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 30207;
            readonly nodeType: "ContractDefinition";
            readonly src: "1643:43:150";
            readonly nodes: readonly [];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 30205;
                    readonly name: "CommonBase";
                    readonly nameLocations: readonly ["1673:10:150"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 30204;
                    readonly src: "1673:10:150";
                };
                readonly id: 30206;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1673:10:150";
            }];
            readonly canonicalName: "TestBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [30207, 30204];
            readonly name: "TestBase";
            readonly nameLocation: "1661:8:150";
            readonly scope: 30217;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 30216;
            readonly nodeType: "ContractDefinition";
            readonly src: "1688:104:150";
            readonly nodes: readonly [{
                readonly id: 30215;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1737:52:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vmSafe";
                readonly nameLocation: "1762:6:150";
                readonly scope: 30216;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 30211;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 30210;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["1737:6:150"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40840;
                        readonly src: "1737:6:150";
                    };
                    readonly referencedDeclaration: 40840;
                    readonly src: "1737:6:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly id: 30213;
                        readonly name: "VM_ADDRESS";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 30162;
                        readonly src: "1778:10:150";
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
                        readonly id: 30212;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40840;
                        readonly src: "1771:6:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40840_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 30214;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1771:18:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 30208;
                    readonly name: "CommonBase";
                    readonly nameLocations: readonly ["1720:10:150"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 30204;
                    readonly src: "1720:10:150";
                };
                readonly id: 30209;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1720:10:150";
            }];
            readonly canonicalName: "ScriptBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [30216, 30204];
            readonly name: "ScriptBase";
            readonly nameLocation: "1706:10:150";
            readonly scope: 30217;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 150;
};
//# sourceMappingURL=CommonBase.d.ts.map