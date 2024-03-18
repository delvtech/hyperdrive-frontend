export declare const StdJson: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220359e31d60d42bb864703a220e921cef9cc1b5519743e612a9e962525a091341564736f6c63430008140033";
        readonly sourceMap: "830:5374:152:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:152;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220359e31d60d42bb864703a220e921cef9cc1b5519743e612a9e962525a091341564736f6c63430008140033";
        readonly sourceMap: "830:5374:152:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
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
                readonly "lib/forge-std/src/StdJson.sol": "stdJson";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdJson.sol": {
                readonly keccak256: "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b";
                readonly urls: readonly ["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c", "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"];
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
        readonly absolutePath: "lib/forge-std/src/StdJson.sol";
        readonly id: 35861;
        readonly exportedSymbols: {
            readonly VmSafe: readonly [40662];
            readonly stdJson: readonly [35860];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:6173:152";
        readonly nodes: readonly [{
            readonly id: 35286;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:152";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 35287;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:152";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 35289;
            readonly nodeType: "ImportDirective";
            readonly src: "100:32:152";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 35861;
            readonly sourceUnit: 41135;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 35288;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40662;
                    readonly src: "108:6:152";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 35860;
            readonly nodeType: "ContractDefinition";
            readonly src: "830:5374:152";
            readonly nodes: readonly [{
                readonly id: 35306;
                readonly nodeType: "VariableDeclaration";
                readonly src: "852:92:152";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "876:2:152";
                readonly scope: 35860;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 35291;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 35290;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["852:6:152"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40662;
                        readonly src: "852:6:152";
                    };
                    readonly referencedDeclaration: 40662;
                    readonly src: "852:6:152";
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
                                        readonly id: 35300;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "922:17:152";
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
                                        readonly id: 35299;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "912:9:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 35301;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "912:28:152";
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
                                    readonly id: 35298;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "904:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 35297;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "904:7:152";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 35302;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "904:37:152";
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
                                readonly id: 35296;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "896:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 35295;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "896:7:152";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 35303;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "896:46:152";
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
                            readonly id: 35294;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "888:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 35293;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "888:7:152";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 35304;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "888:55:152";
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
                        readonly id: 35292;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40662;
                        readonly src: "881:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40662_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 35305;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "881:63:152";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35322;
                readonly nodeType: "FunctionDefinition";
                readonly src: "951:141:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35321;
                    readonly nodeType: "Block";
                    readonly src: "1045:47:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35317;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35308;
                                readonly src: "1075:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35318;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35310;
                                readonly src: "1081:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35315;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1062:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35316;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1065:9:152";
                                readonly memberName: "parseJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40289;
                                readonly src: "1062:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure external returns (bytes memory)";
                                };
                            };
                            readonly id: 35319;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1062:23:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 35314;
                        readonly id: 35320;
                        readonly nodeType: "Return";
                        readonly src: "1055:30:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "parseRaw";
                readonly nameLocation: "960:8:152";
                readonly parameters: {
                    readonly id: 35311;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35308;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "983:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35322;
                        readonly src: "969:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35307;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "969:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35310;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1003:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35322;
                        readonly src: "989:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35309;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "989:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "968:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35314;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35313;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35322;
                        readonly src: "1031:12:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35312;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1031:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1030:14:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35338;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1098:135:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35337;
                    readonly nodeType: "Block";
                    readonly src: "1182:51:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35333;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35324;
                                readonly src: "1216:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35334;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35326;
                                readonly src: "1222:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35331;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1199:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35332;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1202:13:152";
                                readonly memberName: "parseJsonUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40305;
                                readonly src: "1199:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256)";
                                };
                            };
                            readonly id: 35335;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1199:27:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 35330;
                        readonly id: 35336;
                        readonly nodeType: "Return";
                        readonly src: "1192:34:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUint";
                readonly nameLocation: "1107:8:152";
                readonly parameters: {
                    readonly id: 35327;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35324;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1130:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35338;
                        readonly src: "1116:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35323;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1116:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35326;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1150:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35338;
                        readonly src: "1136:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35325;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1136:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1115:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35330;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35329;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35338;
                        readonly src: "1173:7:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35328;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1173:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1172:9:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35355;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1239:154:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35354;
                    readonly nodeType: "Block";
                    readonly src: "1337:56:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35350;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35340;
                                readonly src: "1376:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35351;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35342;
                                readonly src: "1382:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35348;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1354:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35349;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1357:18:152";
                                readonly memberName: "parseJsonUintArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40315;
                                readonly src: "1354:21:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256[] memory)";
                                };
                            };
                            readonly id: 35352;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1354:32:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35347;
                        readonly id: 35353;
                        readonly nodeType: "Return";
                        readonly src: "1347:39:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUintArray";
                readonly nameLocation: "1248:13:152";
                readonly parameters: {
                    readonly id: 35343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35340;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1276:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35355;
                        readonly src: "1262:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35339;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1262:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35342;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1296:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35355;
                        readonly src: "1282:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35341;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1282:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1261:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35347;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35346;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35355;
                        readonly src: "1319:16:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35344;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1319:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35345;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1319:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1318:18:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35371;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1399:132:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35370;
                    readonly nodeType: "Block";
                    readonly src: "1481:50:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35366;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35357;
                                readonly src: "1514:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35367;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35359;
                                readonly src: "1520:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35364;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1498:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35365;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1501:12:152";
                                readonly memberName: "parseJsonInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40324;
                                readonly src: "1498:15:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256)";
                                };
                            };
                            readonly id: 35368;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1498:26:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 35363;
                        readonly id: 35369;
                        readonly nodeType: "Return";
                        readonly src: "1491:33:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readInt";
                readonly nameLocation: "1408:7:152";
                readonly parameters: {
                    readonly id: 35360;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35357;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1430:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35371;
                        readonly src: "1416:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35356;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1416:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35359;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1450:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35371;
                        readonly src: "1436:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35358;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1436:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1415:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35363;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35362;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35371;
                        readonly src: "1473:6:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35361;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1473:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1472:8:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35388;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1537:151:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35387;
                    readonly nodeType: "Block";
                    readonly src: "1633:55:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35383;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35373;
                                readonly src: "1671:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35384;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35375;
                                readonly src: "1677:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35381;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1650:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35382;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1653:17:152";
                                readonly memberName: "parseJsonIntArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40334;
                                readonly src: "1650:20:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256[] memory)";
                                };
                            };
                            readonly id: 35385;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1650:31:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                readonly typeString: "int256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35380;
                        readonly id: 35386;
                        readonly nodeType: "Return";
                        readonly src: "1643:38:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readIntArray";
                readonly nameLocation: "1546:12:152";
                readonly parameters: {
                    readonly id: 35376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35373;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1573:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "1559:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35372;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1559:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35375;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1593:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "1579:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35374;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1579:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1558:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35380;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35379;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "1616:15:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35377;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1616:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 35378;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1616:8:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:17:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35404;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1694:141:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35403;
                    readonly nodeType: "Block";
                    readonly src: "1781:54:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35399;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35390;
                                readonly src: "1818:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35400;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35392;
                                readonly src: "1824:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35397;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1798:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35398;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1801:16:152";
                                readonly memberName: "parseJsonBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40419;
                                readonly src: "1798:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32)";
                                };
                            };
                            readonly id: 35401;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1798:30:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 35396;
                        readonly id: 35402;
                        readonly nodeType: "Return";
                        readonly src: "1791:37:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32";
                readonly nameLocation: "1703:11:152";
                readonly parameters: {
                    readonly id: 35393;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35390;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1729:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35404;
                        readonly src: "1715:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35389;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1715:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35392;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1749:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35404;
                        readonly src: "1735:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35391;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1735:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1714:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35395;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35404;
                        readonly src: "1772:7:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 35394;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1772:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1771:9:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35421;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1841:160:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35420;
                    readonly nodeType: "Block";
                    readonly src: "1942:59:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35416;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35406;
                                readonly src: "1984:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35417;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35408;
                                readonly src: "1990:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35414;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "1959:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35415;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1962:21:152";
                                readonly memberName: "parseJsonBytes32Array";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40429;
                                readonly src: "1959:24:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32[] memory)";
                                };
                            };
                            readonly id: 35418;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1959:35:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35413;
                        readonly id: 35419;
                        readonly nodeType: "Return";
                        readonly src: "1952:42:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32Array";
                readonly nameLocation: "1850:16:152";
                readonly parameters: {
                    readonly id: 35409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35406;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1881:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35421;
                        readonly src: "1867:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35405;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1867:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35408;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1901:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35421;
                        readonly src: "1887:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35407;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1887:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1866:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35413;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35412;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35421;
                        readonly src: "1924:16:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35410;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 35411;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:18:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35437;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2007:145:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35436;
                    readonly nodeType: "Block";
                    readonly src: "2099:53:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35432;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35423;
                                readonly src: "2135:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35433;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35425;
                                readonly src: "2141:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35430;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2116:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35431;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2119:15:152";
                                readonly memberName: "parseJsonString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40381;
                                readonly src: "2116:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2116:29:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35429;
                        readonly id: 35435;
                        readonly nodeType: "Return";
                        readonly src: "2109:36:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readString";
                readonly nameLocation: "2016:10:152";
                readonly parameters: {
                    readonly id: 35426;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35423;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2041:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35437;
                        readonly src: "2027:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35422;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2027:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35425;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2061:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35437;
                        readonly src: "2047:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35424;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2047:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2026:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35429;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35428;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35437;
                        readonly src: "2084:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35427;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2084:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2083:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35454;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2158:157:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35453;
                    readonly nodeType: "Block";
                    readonly src: "2257:58:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35449;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35439;
                                readonly src: "2298:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35450;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35441;
                                readonly src: "2304:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35447;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2274:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35448;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2277:20:152";
                                readonly memberName: "parseJsonStringArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40391;
                                readonly src: "2274:23:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory[] memory)";
                                };
                            };
                            readonly id: 35451;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2274:34:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35446;
                        readonly id: 35452;
                        readonly nodeType: "Return";
                        readonly src: "2267:41:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readStringArray";
                readonly nameLocation: "2167:15:152";
                readonly parameters: {
                    readonly id: 35442;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35439;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2197:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35454;
                        readonly src: "2183:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35438;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2183:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35441;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2217:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35454;
                        readonly src: "2203:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35440;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2203:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2182:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35446;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35445;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35454;
                        readonly src: "2240:15:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35443;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2240:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35444;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2240:8:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2239:17:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35470;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2321:141:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35469;
                    readonly nodeType: "Block";
                    readonly src: "2408:54:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35465;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35456;
                                readonly src: "2445:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35466;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35458;
                                readonly src: "2451:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35463;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2425:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35464;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2428:16:152";
                                readonly memberName: "parseJsonAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40362;
                                readonly src: "2425:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address)";
                                };
                            };
                            readonly id: 35467;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2425:30:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 35462;
                        readonly id: 35468;
                        readonly nodeType: "Return";
                        readonly src: "2418:37:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddress";
                readonly nameLocation: "2330:11:152";
                readonly parameters: {
                    readonly id: 35459;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35456;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2356:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35470;
                        readonly src: "2342:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35455;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2342:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35458;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2376:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35470;
                        readonly src: "2362:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35457;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2341:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35462;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35461;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35470;
                        readonly src: "2399:7:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35460;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2399:7:152";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2398:9:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35487;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2468:160:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35486;
                    readonly nodeType: "Block";
                    readonly src: "2569:59:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35482;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35472;
                                readonly src: "2611:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35483;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35474;
                                readonly src: "2617:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35480;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2586:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35481;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2589:21:152";
                                readonly memberName: "parseJsonAddressArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40372;
                                readonly src: "2586:24:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address[] memory)";
                                };
                            };
                            readonly id: 35484;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2586:35:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35479;
                        readonly id: 35485;
                        readonly nodeType: "Return";
                        readonly src: "2579:42:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddressArray";
                readonly nameLocation: "2477:16:152";
                readonly parameters: {
                    readonly id: 35475;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35472;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2508:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35487;
                        readonly src: "2494:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35471;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2494:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35474;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2528:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35487;
                        readonly src: "2514:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35473;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2514:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2493:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35479;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35478;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35487;
                        readonly src: "2551:16:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35476;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2551:7:152";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35477;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2551:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2550:18:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35503;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2634:132:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35502;
                    readonly nodeType: "Block";
                    readonly src: "2715:51:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35498;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35489;
                                readonly src: "2749:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35499;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35491;
                                readonly src: "2755:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35496;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2732:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35497;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2735:13:152";
                                readonly memberName: "parseJsonBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40343;
                                readonly src: "2732:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool)";
                                };
                            };
                            readonly id: 35500;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2732:27:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 35495;
                        readonly id: 35501;
                        readonly nodeType: "Return";
                        readonly src: "2725:34:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBool";
                readonly nameLocation: "2643:8:152";
                readonly parameters: {
                    readonly id: 35492;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35489;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2666:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35503;
                        readonly src: "2652:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35488;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35491;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2686:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35503;
                        readonly src: "2672:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35490;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2672:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35495;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35494;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35503;
                        readonly src: "2709:4:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35493;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2709:4:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2708:6:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35520;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2772:151:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35519;
                    readonly nodeType: "Block";
                    readonly src: "2867:56:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35515;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35505;
                                readonly src: "2906:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35516;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35507;
                                readonly src: "2912:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35513;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "2884:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35514;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2887:18:152";
                                readonly memberName: "parseJsonBoolArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40353;
                                readonly src: "2884:21:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool[] memory)";
                                };
                            };
                            readonly id: 35517;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2884:32:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                readonly typeString: "bool[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35512;
                        readonly id: 35518;
                        readonly nodeType: "Return";
                        readonly src: "2877:39:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBoolArray";
                readonly nameLocation: "2781:13:152";
                readonly parameters: {
                    readonly id: 35508;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35505;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2809:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35520;
                        readonly src: "2795:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35504;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2795:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35507;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2829:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35520;
                        readonly src: "2815:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35506;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2815:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2794:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35511;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35520;
                        readonly src: "2852:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35509;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2852:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35510;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2852:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2851:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35536;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2929:142:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35535;
                    readonly nodeType: "Block";
                    readonly src: "3019:52:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35531;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35522;
                                readonly src: "3054:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35532;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35524;
                                readonly src: "3060:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35529;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3036:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35530;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3039:14:152";
                                readonly memberName: "parseJsonBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40400;
                                readonly src: "3036:17:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory)";
                                };
                            };
                            readonly id: 35533;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3036:28:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 35528;
                        readonly id: 35534;
                        readonly nodeType: "Return";
                        readonly src: "3029:35:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes";
                readonly nameLocation: "2938:9:152";
                readonly parameters: {
                    readonly id: 35525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35522;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2962:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35536;
                        readonly src: "2948:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35521;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2948:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35524;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2982:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35536;
                        readonly src: "2968:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35523;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2968:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2947:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35527;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35536;
                        readonly src: "3005:12:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35526;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3005:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3004:14:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35553;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3077:154:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35552;
                    readonly nodeType: "Block";
                    readonly src: "3174:57:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35548;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35538;
                                readonly src: "3214:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35549;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35540;
                                readonly src: "3220:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35546;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3191:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35547;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3194:19:152";
                                readonly memberName: "parseJsonBytesArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40410;
                                readonly src: "3191:22:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory[] memory)";
                                };
                            };
                            readonly id: 35550;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3191:33:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35545;
                        readonly id: 35551;
                        readonly nodeType: "Return";
                        readonly src: "3184:40:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytesArray";
                readonly nameLocation: "3086:14:152";
                readonly parameters: {
                    readonly id: 35541;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35538;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "3115:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35553;
                        readonly src: "3101:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35537;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3101:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35540;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3135:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35553;
                        readonly src: "3121:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35539;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3121:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3100:39:152";
                };
                readonly returnParameters: {
                    readonly id: 35545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35544;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35553;
                        readonly src: "3158:14:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35542;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3158:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35543;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3158:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3157:16:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35572;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3237:167:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35571;
                    readonly nodeType: "Block";
                    readonly src: "3343:61:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35566;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35555;
                                readonly src: "3377:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35567;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35557;
                                readonly src: "3386:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35568;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35559;
                                readonly src: "3391:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly expression: {
                                    readonly id: 35564;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3360:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35565;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3363:13:152";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40450;
                                readonly src: "3360:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool) external returns (string memory)";
                                };
                            };
                            readonly id: 35569;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3360:37:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35563;
                        readonly id: 35570;
                        readonly nodeType: "Return";
                        readonly src: "3353:44:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3246:9:152";
                readonly parameters: {
                    readonly id: 35560;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35555;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3270:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35572;
                        readonly src: "3256:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35554;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3256:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35557;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3293:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35572;
                        readonly src: "3279:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35556;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35559;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3303:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35572;
                        readonly src: "3298:10:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35558;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3298:4:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3255:54:152";
                };
                readonly returnParameters: {
                    readonly id: 35563;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35562;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35572;
                        readonly src: "3328:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35561;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3328:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3327:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35592;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3410:196:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35591;
                    readonly nodeType: "Block";
                    readonly src: "3545:61:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35586;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35574;
                                readonly src: "3579:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35587;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35576;
                                readonly src: "3588:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35588;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35579;
                                readonly src: "3593:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                    readonly typeString: "bool[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                    readonly typeString: "bool[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35584;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3562:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35585;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3565:13:152";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40528;
                                readonly src: "3562:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35589;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3562:37:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35583;
                        readonly id: 35590;
                        readonly nodeType: "Return";
                        readonly src: "3555:44:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3419:9:152";
                readonly parameters: {
                    readonly id: 35580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35574;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3443:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35592;
                        readonly src: "3429:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35573;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3429:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35576;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3466:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35592;
                        readonly src: "3452:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35575;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3452:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35579;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3485:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35592;
                        readonly src: "3471:19:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35577;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3471:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35578;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3471:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3428:63:152";
                };
                readonly returnParameters: {
                    readonly id: 35583;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35582;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35592;
                        readonly src: "3526:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35581;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3526:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3525:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35611;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3612:170:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35610;
                    readonly nodeType: "Block";
                    readonly src: "3721:61:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35605;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35594;
                                readonly src: "3755:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35606;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35596;
                                readonly src: "3764:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35607;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35598;
                                readonly src: "3769:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 35603;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3738:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35604;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3741:13:152";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40461;
                                readonly src: "3738:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256) external returns (string memory)";
                                };
                            };
                            readonly id: 35608;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3738:37:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35602;
                        readonly id: 35609;
                        readonly nodeType: "Return";
                        readonly src: "3731:44:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3621:9:152";
                readonly parameters: {
                    readonly id: 35599;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35594;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3645:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35611;
                        readonly src: "3631:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35593;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3631:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35596;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3668:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35611;
                        readonly src: "3654:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35595;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3654:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35598;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3681:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35611;
                        readonly src: "3673:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35597;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3673:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3630:57:152";
                };
                readonly returnParameters: {
                    readonly id: 35602;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35601;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35611;
                        readonly src: "3706:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35600;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3706:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3705:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35631;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3788:199:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35630;
                    readonly nodeType: "Block";
                    readonly src: "3926:61:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35625;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35613;
                                readonly src: "3960:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35626;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35615;
                                readonly src: "3969:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35627;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35618;
                                readonly src: "3974:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35623;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "3943:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35624;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3946:13:152";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40540;
                                readonly src: "3943:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35628;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3943:37:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35622;
                        readonly id: 35629;
                        readonly nodeType: "Return";
                        readonly src: "3936:44:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3797:9:152";
                readonly parameters: {
                    readonly id: 35619;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35613;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3821:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35631;
                        readonly src: "3807:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35612;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3807:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35615;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3844:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35631;
                        readonly src: "3830:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35614;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3830:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35618;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3866:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35631;
                        readonly src: "3849:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35616;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3849:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35617;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3849:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3806:66:152";
                };
                readonly returnParameters: {
                    readonly id: 35622;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35621;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35631;
                        readonly src: "3907:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35620;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3907:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3906:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35650;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3993:168:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35649;
                    readonly nodeType: "Block";
                    readonly src: "4101:60:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35644;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35633;
                                readonly src: "4134:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35645;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35635;
                                readonly src: "4143:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35646;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35637;
                                readonly src: "4148:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly expression: {
                                    readonly id: 35642;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "4118:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35643;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4121:12:152";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40472;
                                readonly src: "4118:15:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256) external returns (string memory)";
                                };
                            };
                            readonly id: 35647;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4118:36:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35641;
                        readonly id: 35648;
                        readonly nodeType: "Return";
                        readonly src: "4111:43:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4002:9:152";
                readonly parameters: {
                    readonly id: 35638;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35633;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4026:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35650;
                        readonly src: "4012:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35632;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4012:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35635;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4049:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35650;
                        readonly src: "4035:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35634;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4035:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35637;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4061:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35650;
                        readonly src: "4054:12:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35636;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4054:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4011:56:152";
                };
                readonly returnParameters: {
                    readonly id: 35641;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35640;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35650;
                        readonly src: "4086:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35639;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4086:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4085:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35670;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4167:197:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35669;
                    readonly nodeType: "Block";
                    readonly src: "4304:60:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35664;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35652;
                                readonly src: "4337:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35665;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35654;
                                readonly src: "4346:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35666;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35657;
                                readonly src: "4351:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                    readonly typeString: "int256[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                    readonly typeString: "int256[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35662;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "4321:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35663;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4324:12:152";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40552;
                                readonly src: "4321:15:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35667;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4321:36:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35661;
                        readonly id: 35668;
                        readonly nodeType: "Return";
                        readonly src: "4314:43:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4176:9:152";
                readonly parameters: {
                    readonly id: 35658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35652;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4200:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35670;
                        readonly src: "4186:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35651;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4186:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35654;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4223:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35670;
                        readonly src: "4209:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35653;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4209:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35657;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4244:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35670;
                        readonly src: "4228:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35655;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 35656;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4228:8:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4185:65:152";
                };
                readonly returnParameters: {
                    readonly id: 35661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35660;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35670;
                        readonly src: "4285:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35659;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4285:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4284:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4370:173:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35688;
                    readonly nodeType: "Block";
                    readonly src: "4479:64:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35683;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35672;
                                readonly src: "4516:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35684;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35674;
                                readonly src: "4525:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35685;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35676;
                                readonly src: "4530:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 35681;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "4496:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35682;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4499:16:152";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40483;
                                readonly src: "4496:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address) external returns (string memory)";
                                };
                            };
                            readonly id: 35686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4496:40:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35680;
                        readonly id: 35687;
                        readonly nodeType: "Return";
                        readonly src: "4489:47:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4379:9:152";
                readonly parameters: {
                    readonly id: 35677;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35672;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4403:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35689;
                        readonly src: "4389:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35671;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4389:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35674;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4426:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35689;
                        readonly src: "4412:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35673;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4412:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35676;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4439:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35689;
                        readonly src: "4431:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35675;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4431:7:152";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4388:57:152";
                };
                readonly returnParameters: {
                    readonly id: 35680;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35679;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35689;
                        readonly src: "4464:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35678;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4464:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4463:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35709;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4549:202:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35708;
                    readonly nodeType: "Block";
                    readonly src: "4687:64:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35703;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35691;
                                readonly src: "4724:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35704;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35693;
                                readonly src: "4733:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35705;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35696;
                                readonly src: "4738:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35701;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "4704:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35702;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4707:16:152";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40564;
                                readonly src: "4704:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35706;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4704:40:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35700;
                        readonly id: 35707;
                        readonly nodeType: "Return";
                        readonly src: "4697:47:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4558:9:152";
                readonly parameters: {
                    readonly id: 35697;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35691;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4582:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35709;
                        readonly src: "4568:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35690;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4568:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35693;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4605:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35709;
                        readonly src: "4591:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35692;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4591:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35696;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4627:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35709;
                        readonly src: "4610:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35694;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4610:7:152";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35695;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4610:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4567:66:152";
                };
                readonly returnParameters: {
                    readonly id: 35700;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35699;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35709;
                        readonly src: "4668:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35698;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4668:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4667:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35728;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4757:173:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35727;
                    readonly nodeType: "Block";
                    readonly src: "4866:64:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35722;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35711;
                                readonly src: "4903:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35723;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35713;
                                readonly src: "4912:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35724;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35715;
                                readonly src: "4917:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }];
                                readonly expression: {
                                    readonly id: 35720;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "4883:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35721;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4886:16:152";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40494;
                                readonly src: "4883:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32) external returns (string memory)";
                                };
                            };
                            readonly id: 35725;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4883:40:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35719;
                        readonly id: 35726;
                        readonly nodeType: "Return";
                        readonly src: "4876:47:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4766:9:152";
                readonly parameters: {
                    readonly id: 35716;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35711;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4790:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35728;
                        readonly src: "4776:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35710;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4776:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35713;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4813:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35728;
                        readonly src: "4799:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35712;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4799:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35715;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4826:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35728;
                        readonly src: "4818:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 35714;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4818:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4775:57:152";
                };
                readonly returnParameters: {
                    readonly id: 35719;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35718;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35728;
                        readonly src: "4851:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35717;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4851:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4850:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35748;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4936:202:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35747;
                    readonly nodeType: "Block";
                    readonly src: "5074:64:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35742;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35730;
                                readonly src: "5111:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35743;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35732;
                                readonly src: "5120:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35744;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35735;
                                readonly src: "5125:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                    readonly typeString: "bytes32[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                    readonly typeString: "bytes32[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35740;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "5091:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35741;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5094:16:152";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40576;
                                readonly src: "5091:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35745;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5091:40:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35739;
                        readonly id: 35746;
                        readonly nodeType: "Return";
                        readonly src: "5084:47:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4945:9:152";
                readonly parameters: {
                    readonly id: 35736;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35730;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4969:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35748;
                        readonly src: "4955:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35729;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4955:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35732;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4992:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35748;
                        readonly src: "4978:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35731;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4978:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35735;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5014:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35748;
                        readonly src: "4997:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35733;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4997:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 35734;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4997:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4954:66:152";
                };
                readonly returnParameters: {
                    readonly id: 35739;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35738;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35748;
                        readonly src: "5055:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35737;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5055:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5054:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35767;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5144:176:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35766;
                    readonly nodeType: "Block";
                    readonly src: "5258:62:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35761;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35750;
                                readonly src: "5293:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35762;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35752;
                                readonly src: "5302:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35763;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35754;
                                readonly src: "5307:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 35759;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "5275:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35760;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5278:14:152";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40516;
                                readonly src: "5275:17:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35764;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5275:38:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35758;
                        readonly id: 35765;
                        readonly nodeType: "Return";
                        readonly src: "5268:45:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5153:9:152";
                readonly parameters: {
                    readonly id: 35755;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35750;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5177:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35767;
                        readonly src: "5163:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35749;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5163:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35752;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5200:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35767;
                        readonly src: "5186:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35751;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5186:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35754;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5218:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35767;
                        readonly src: "5205:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35753;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5205:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5162:62:152";
                };
                readonly returnParameters: {
                    readonly id: 35758;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35757;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35767;
                        readonly src: "5243:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35756;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5242:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35787;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5326:198:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35786;
                    readonly nodeType: "Block";
                    readonly src: "5462:62:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35781;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35769;
                                readonly src: "5497:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35782;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35771;
                                readonly src: "5506:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35783;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35774;
                                readonly src: "5511:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "bytes memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "bytes memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35779;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "5479:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35780;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5482:14:152";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40600;
                                readonly src: "5479:17:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35784;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5479:38:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35778;
                        readonly id: 35785;
                        readonly nodeType: "Return";
                        readonly src: "5472:45:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5335:9:152";
                readonly parameters: {
                    readonly id: 35775;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35769;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5359:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35787;
                        readonly src: "5345:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35768;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5345:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35771;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5382:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35787;
                        readonly src: "5368:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35770;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5368:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35774;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5402:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35787;
                        readonly src: "5387:20:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35772;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5387:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35773;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5387:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5344:64:152";
                };
                readonly returnParameters: {
                    readonly id: 35778;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35777;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35787;
                        readonly src: "5443:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35776;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5443:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5442:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35806;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5530:198:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35805;
                    readonly nodeType: "Block";
                    readonly src: "5665:63:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35800;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35789;
                                readonly src: "5701:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35801;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35791;
                                readonly src: "5710:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35802;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35793;
                                readonly src: "5715:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35798;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "5682:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35799;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5685:15:152";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40505;
                                readonly src: "5682:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35803;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5682:39:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35797;
                        readonly id: 35804;
                        readonly nodeType: "Return";
                        readonly src: "5675:46:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5539:9:152";
                readonly parameters: {
                    readonly id: 35794;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35789;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5563:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35806;
                        readonly src: "5549:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35788;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5549:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35791;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5586:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35806;
                        readonly src: "5572:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35790;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5572:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35793;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5605:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35806;
                        readonly src: "5591:19:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35792;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5591:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5548:63:152";
                };
                readonly returnParameters: {
                    readonly id: 35797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35796;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35806;
                        readonly src: "5646:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35795;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5646:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5645:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35826;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5734:200:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35825;
                    readonly nodeType: "Block";
                    readonly src: "5871:63:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35820;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35808;
                                readonly src: "5907:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35821;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35810;
                                readonly src: "5916:3:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35822;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35813;
                                readonly src: "5921:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35818;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "5888:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35819;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5891:15:152";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40588;
                                readonly src: "5888:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35823;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5888:39:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35817;
                        readonly id: 35824;
                        readonly nodeType: "Return";
                        readonly src: "5881:46:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5743:9:152";
                readonly parameters: {
                    readonly id: 35814;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35808;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5767:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35826;
                        readonly src: "5753:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35807;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5753:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35810;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5790:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35826;
                        readonly src: "5776:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35809;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5776:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35813;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5811:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35826;
                        readonly src: "5795:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35811;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5795:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35812;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5795:8:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5752:65:152";
                };
                readonly returnParameters: {
                    readonly id: 35817;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35816;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35826;
                        readonly src: "5852:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35815;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5852:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5851:15:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35841;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5940:111:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35840;
                    readonly nodeType: "Block";
                    readonly src: "6007:44:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35836;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35828;
                                readonly src: "6030:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35837;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35830;
                                readonly src: "6039:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35833;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "6017:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35835;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6020:9:152";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40607;
                                readonly src: "6017:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) external";
                                };
                            };
                            readonly id: 35838;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6017:27:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35839;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6017:27:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "5949:5:152";
                readonly parameters: {
                    readonly id: 35831;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35828;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5969:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35841;
                        readonly src: "5955:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35827;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35830;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "5992:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35841;
                        readonly src: "5978:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35829;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5978:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5954:43:152";
                };
                readonly returnParameters: {
                    readonly id: 35832;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6007:0:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35859;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6057:145:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35858;
                    readonly nodeType: "Block";
                    readonly src: "6148:54:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35853;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35843;
                                readonly src: "6171:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35854;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35845;
                                readonly src: "6180:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35855;
                                readonly name: "valueKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35847;
                                readonly src: "6186:8:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35850;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35306;
                                    readonly src: "6158:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40662";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35852;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6161:9:152";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40616;
                                readonly src: "6158:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory,string memory) external";
                                };
                            };
                            readonly id: 35856;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6158:37:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35857;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6158:37:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "6066:5:152";
                readonly parameters: {
                    readonly id: 35848;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35843;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "6086:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35859;
                        readonly src: "6072:21:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35842;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6072:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35845;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "6109:4:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35859;
                        readonly src: "6095:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35844;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6095:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35847;
                        readonly mutability: "mutable";
                        readonly name: "valueKey";
                        readonly nameLocation: "6129:8:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35859;
                        readonly src: "6115:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35846;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6071:67:152";
                };
                readonly returnParameters: {
                    readonly id: 35849;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6148:0:152";
                };
                readonly scope: 35860;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "stdJson";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [35860];
            readonly name: "stdJson";
            readonly nameLocation: "838:7:152";
            readonly scope: 35861;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 152;
};
//# sourceMappingURL=StdJson.d.ts.map