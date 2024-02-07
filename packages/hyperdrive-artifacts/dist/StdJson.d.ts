export declare const StdJson: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220359e31d60d42bb864703a220e921cef9cc1b5519743e612a9e962525a091341564736f6c63430008140033";
        readonly sourceMap: "830:5374:102:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:102;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220359e31d60d42bb864703a220e921cef9cc1b5519743e612a9e962525a091341564736f6c63430008140033";
        readonly sourceMap: "830:5374:102:-:0;;;;;;;;";
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
        readonly id: 30972;
        readonly exportedSymbols: {
            readonly VmSafe: readonly [35773];
            readonly stdJson: readonly [30971];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:6173:102";
        readonly nodes: readonly [{
            readonly id: 30397;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:102";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 30398;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:102";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 30400;
            readonly nodeType: "ImportDirective";
            readonly src: "100:32:102";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 30972;
            readonly sourceUnit: 36246;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 30399;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35773;
                    readonly src: "108:6:102";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 30971;
            readonly nodeType: "ContractDefinition";
            readonly src: "830:5374:102";
            readonly nodes: readonly [{
                readonly id: 30417;
                readonly nodeType: "VariableDeclaration";
                readonly src: "852:92:102";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "876:2:102";
                readonly scope: 30971;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 30402;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 30401;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["852:6:102"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 35773;
                        readonly src: "852:6:102";
                    };
                    readonly referencedDeclaration: 35773;
                    readonly src: "852:6:102";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
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
                                        readonly id: 30411;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "922:17:102";
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
                                        readonly id: 30410;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "912:9:102";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 30412;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "912:28:102";
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
                                    readonly id: 30409;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "904:7:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 30408;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "904:7:102";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 30413;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "904:37:102";
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
                                readonly id: 30407;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "896:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 30406;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "896:7:102";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 30414;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "896:46:102";
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
                            readonly id: 30405;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "888:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 30404;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "888:7:102";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 30415;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "888:55:102";
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
                        readonly id: 30403;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 35773;
                        readonly src: "881:6:102";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$35773_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 30416;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "881:63:102";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30433;
                readonly nodeType: "FunctionDefinition";
                readonly src: "951:141:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30432;
                    readonly nodeType: "Block";
                    readonly src: "1045:47:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30428;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30419;
                                readonly src: "1075:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30429;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30421;
                                readonly src: "1081:3:102";
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
                                    readonly id: 30426;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1062:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30427;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1065:9:102";
                                readonly memberName: "parseJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35400;
                                readonly src: "1062:12:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure external returns (bytes memory)";
                                };
                            };
                            readonly id: 30430;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1062:23:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 30425;
                        readonly id: 30431;
                        readonly nodeType: "Return";
                        readonly src: "1055:30:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "parseRaw";
                readonly nameLocation: "960:8:102";
                readonly parameters: {
                    readonly id: 30422;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30419;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "983:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30433;
                        readonly src: "969:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30418;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "969:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30421;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1003:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30433;
                        readonly src: "989:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30420;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "989:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "968:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30425;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30424;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30433;
                        readonly src: "1031:12:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 30423;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1031:5:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1030:14:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30449;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1098:135:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30448;
                    readonly nodeType: "Block";
                    readonly src: "1182:51:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30444;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30435;
                                readonly src: "1216:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30445;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30437;
                                readonly src: "1222:3:102";
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
                                    readonly id: 30442;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1199:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30443;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1202:13:102";
                                readonly memberName: "parseJsonUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35416;
                                readonly src: "1199:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256)";
                                };
                            };
                            readonly id: 30446;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1199:27:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 30441;
                        readonly id: 30447;
                        readonly nodeType: "Return";
                        readonly src: "1192:34:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUint";
                readonly nameLocation: "1107:8:102";
                readonly parameters: {
                    readonly id: 30438;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30435;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1130:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30449;
                        readonly src: "1116:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30434;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1116:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30437;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1150:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30449;
                        readonly src: "1136:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30436;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1136:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1115:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30441;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30440;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30449;
                        readonly src: "1173:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 30439;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1173:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1172:9:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30466;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1239:154:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30465;
                    readonly nodeType: "Block";
                    readonly src: "1337:56:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30461;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30451;
                                readonly src: "1376:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30462;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30453;
                                readonly src: "1382:3:102";
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
                                    readonly id: 30459;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1354:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30460;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1357:18:102";
                                readonly memberName: "parseJsonUintArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35426;
                                readonly src: "1354:21:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256[] memory)";
                                };
                            };
                            readonly id: 30463;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1354:32:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30458;
                        readonly id: 30464;
                        readonly nodeType: "Return";
                        readonly src: "1347:39:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUintArray";
                readonly nameLocation: "1248:13:102";
                readonly parameters: {
                    readonly id: 30454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30451;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1276:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30466;
                        readonly src: "1262:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30450;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1262:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30453;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1296:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30466;
                        readonly src: "1282:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30452;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1282:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1261:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30458;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30457;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30466;
                        readonly src: "1319:16:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30455;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1319:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 30456;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1319:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1318:18:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30482;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1399:132:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30481;
                    readonly nodeType: "Block";
                    readonly src: "1481:50:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30477;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30468;
                                readonly src: "1514:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30478;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30470;
                                readonly src: "1520:3:102";
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
                                    readonly id: 30475;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1498:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30476;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1501:12:102";
                                readonly memberName: "parseJsonInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35435;
                                readonly src: "1498:15:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256)";
                                };
                            };
                            readonly id: 30479;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1498:26:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 30474;
                        readonly id: 30480;
                        readonly nodeType: "Return";
                        readonly src: "1491:33:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readInt";
                readonly nameLocation: "1408:7:102";
                readonly parameters: {
                    readonly id: 30471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30468;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1430:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30482;
                        readonly src: "1416:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30467;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1416:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30470;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1450:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30482;
                        readonly src: "1436:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30469;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1436:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1415:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30474;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30473;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30482;
                        readonly src: "1473:6:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 30472;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1473:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1472:8:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30499;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1537:151:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30498;
                    readonly nodeType: "Block";
                    readonly src: "1633:55:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30494;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30484;
                                readonly src: "1671:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30495;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30486;
                                readonly src: "1677:3:102";
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
                                    readonly id: 30492;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1650:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30493;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1653:17:102";
                                readonly memberName: "parseJsonIntArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35445;
                                readonly src: "1650:20:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256[] memory)";
                                };
                            };
                            readonly id: 30496;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1650:31:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                readonly typeString: "int256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30491;
                        readonly id: 30497;
                        readonly nodeType: "Return";
                        readonly src: "1643:38:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readIntArray";
                readonly nameLocation: "1546:12:102";
                readonly parameters: {
                    readonly id: 30487;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30484;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1573:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30499;
                        readonly src: "1559:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30483;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1559:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30486;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1593:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30499;
                        readonly src: "1579:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30485;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1579:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1558:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30491;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30490;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30499;
                        readonly src: "1616:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30488;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1616:6:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 30489;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1616:8:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:17:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30515;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1694:141:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30514;
                    readonly nodeType: "Block";
                    readonly src: "1781:54:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30510;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30501;
                                readonly src: "1818:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30511;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30503;
                                readonly src: "1824:3:102";
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
                                    readonly id: 30508;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1798:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30509;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1801:16:102";
                                readonly memberName: "parseJsonBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35530;
                                readonly src: "1798:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32)";
                                };
                            };
                            readonly id: 30512;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1798:30:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 30507;
                        readonly id: 30513;
                        readonly nodeType: "Return";
                        readonly src: "1791:37:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32";
                readonly nameLocation: "1703:11:102";
                readonly parameters: {
                    readonly id: 30504;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30501;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1729:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30515;
                        readonly src: "1715:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30500;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1715:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30503;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1749:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30515;
                        readonly src: "1735:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30502;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1735:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1714:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30507;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30506;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30515;
                        readonly src: "1772:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 30505;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1772:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1771:9:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30532;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1841:160:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30531;
                    readonly nodeType: "Block";
                    readonly src: "1942:59:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30527;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30517;
                                readonly src: "1984:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30528;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30519;
                                readonly src: "1990:3:102";
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
                                    readonly id: 30525;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "1959:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30526;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1962:21:102";
                                readonly memberName: "parseJsonBytes32Array";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35540;
                                readonly src: "1959:24:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32[] memory)";
                                };
                            };
                            readonly id: 30529;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1959:35:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30524;
                        readonly id: 30530;
                        readonly nodeType: "Return";
                        readonly src: "1952:42:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32Array";
                readonly nameLocation: "1850:16:102";
                readonly parameters: {
                    readonly id: 30520;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30517;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1881:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30532;
                        readonly src: "1867:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30516;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1867:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30519;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1901:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30532;
                        readonly src: "1887:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30518;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1887:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1866:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30524;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30523;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30532;
                        readonly src: "1924:16:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30521;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 30522;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:18:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30548;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2007:145:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30547;
                    readonly nodeType: "Block";
                    readonly src: "2099:53:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30543;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30534;
                                readonly src: "2135:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30544;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30536;
                                readonly src: "2141:3:102";
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
                                    readonly id: 30541;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2116:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30542;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2119:15:102";
                                readonly memberName: "parseJsonString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35492;
                                readonly src: "2116:18:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30545;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2116:29:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30540;
                        readonly id: 30546;
                        readonly nodeType: "Return";
                        readonly src: "2109:36:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readString";
                readonly nameLocation: "2016:10:102";
                readonly parameters: {
                    readonly id: 30537;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30534;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2041:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30548;
                        readonly src: "2027:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30533;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2027:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30536;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2061:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30548;
                        readonly src: "2047:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30535;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2047:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2026:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30540;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30539;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30548;
                        readonly src: "2084:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30538;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2084:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2083:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30565;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2158:157:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30564;
                    readonly nodeType: "Block";
                    readonly src: "2257:58:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30560;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30550;
                                readonly src: "2298:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30561;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30552;
                                readonly src: "2304:3:102";
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
                                    readonly id: 30558;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2274:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30559;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2277:20:102";
                                readonly memberName: "parseJsonStringArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35502;
                                readonly src: "2274:23:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory[] memory)";
                                };
                            };
                            readonly id: 30562;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2274:34:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30557;
                        readonly id: 30563;
                        readonly nodeType: "Return";
                        readonly src: "2267:41:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readStringArray";
                readonly nameLocation: "2167:15:102";
                readonly parameters: {
                    readonly id: 30553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30550;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2197:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30565;
                        readonly src: "2183:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30549;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2183:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30552;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2217:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30565;
                        readonly src: "2203:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30551;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2203:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2182:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30557;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30556;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30565;
                        readonly src: "2240:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30554;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2240:6:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 30555;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2240:8:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2239:17:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30581;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2321:141:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30580;
                    readonly nodeType: "Block";
                    readonly src: "2408:54:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30576;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30567;
                                readonly src: "2445:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30577;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30569;
                                readonly src: "2451:3:102";
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
                                    readonly id: 30574;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2425:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30575;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2428:16:102";
                                readonly memberName: "parseJsonAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35473;
                                readonly src: "2425:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address)";
                                };
                            };
                            readonly id: 30578;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2425:30:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 30573;
                        readonly id: 30579;
                        readonly nodeType: "Return";
                        readonly src: "2418:37:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddress";
                readonly nameLocation: "2330:11:102";
                readonly parameters: {
                    readonly id: 30570;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30567;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2356:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30581;
                        readonly src: "2342:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30566;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2342:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30569;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2376:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30581;
                        readonly src: "2362:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30568;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2341:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30573;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30572;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30581;
                        readonly src: "2399:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30571;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2399:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2398:9:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30598;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2468:160:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30597;
                    readonly nodeType: "Block";
                    readonly src: "2569:59:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30593;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30583;
                                readonly src: "2611:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30594;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30585;
                                readonly src: "2617:3:102";
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
                                    readonly id: 30591;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2586:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30592;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2589:21:102";
                                readonly memberName: "parseJsonAddressArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35483;
                                readonly src: "2586:24:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address[] memory)";
                                };
                            };
                            readonly id: 30595;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2586:35:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30590;
                        readonly id: 30596;
                        readonly nodeType: "Return";
                        readonly src: "2579:42:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddressArray";
                readonly nameLocation: "2477:16:102";
                readonly parameters: {
                    readonly id: 30586;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30583;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2508:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30598;
                        readonly src: "2494:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30582;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2494:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30585;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2528:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30598;
                        readonly src: "2514:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30584;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2514:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2493:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30590;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30589;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30598;
                        readonly src: "2551:16:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30587;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2551:7:102";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30588;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2551:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2550:18:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30614;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2634:132:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30613;
                    readonly nodeType: "Block";
                    readonly src: "2715:51:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30609;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30600;
                                readonly src: "2749:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30610;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30602;
                                readonly src: "2755:3:102";
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
                                    readonly id: 30607;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2732:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30608;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2735:13:102";
                                readonly memberName: "parseJsonBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35454;
                                readonly src: "2732:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool)";
                                };
                            };
                            readonly id: 30611;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2732:27:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 30606;
                        readonly id: 30612;
                        readonly nodeType: "Return";
                        readonly src: "2725:34:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBool";
                readonly nameLocation: "2643:8:102";
                readonly parameters: {
                    readonly id: 30603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30600;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2666:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30614;
                        readonly src: "2652:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30599;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30602;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2686:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30614;
                        readonly src: "2672:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30601;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2672:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30606;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30605;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30614;
                        readonly src: "2709:4:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 30604;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2709:4:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2708:6:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30631;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2772:151:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30630;
                    readonly nodeType: "Block";
                    readonly src: "2867:56:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30626;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30616;
                                readonly src: "2906:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30627;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30618;
                                readonly src: "2912:3:102";
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
                                    readonly id: 30624;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "2884:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30625;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2887:18:102";
                                readonly memberName: "parseJsonBoolArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35464;
                                readonly src: "2884:21:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool[] memory)";
                                };
                            };
                            readonly id: 30628;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2884:32:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                readonly typeString: "bool[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30623;
                        readonly id: 30629;
                        readonly nodeType: "Return";
                        readonly src: "2877:39:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBoolArray";
                readonly nameLocation: "2781:13:102";
                readonly parameters: {
                    readonly id: 30619;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30616;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2809:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30631;
                        readonly src: "2795:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30615;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2795:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30618;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2829:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30631;
                        readonly src: "2815:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30617;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2815:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2794:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30623;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30622;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30631;
                        readonly src: "2852:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30620;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2852:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 30621;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2852:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2851:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30647;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2929:142:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30646;
                    readonly nodeType: "Block";
                    readonly src: "3019:52:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30642;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30633;
                                readonly src: "3054:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30643;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30635;
                                readonly src: "3060:3:102";
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
                                    readonly id: 30640;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3036:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30641;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3039:14:102";
                                readonly memberName: "parseJsonBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35511;
                                readonly src: "3036:17:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory)";
                                };
                            };
                            readonly id: 30644;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3036:28:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 30639;
                        readonly id: 30645;
                        readonly nodeType: "Return";
                        readonly src: "3029:35:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes";
                readonly nameLocation: "2938:9:102";
                readonly parameters: {
                    readonly id: 30636;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30633;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2962:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30647;
                        readonly src: "2948:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30632;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2948:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30635;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2982:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30647;
                        readonly src: "2968:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30634;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2968:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2947:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30639;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30638;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30647;
                        readonly src: "3005:12:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 30637;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3005:5:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3004:14:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30664;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3077:154:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30663;
                    readonly nodeType: "Block";
                    readonly src: "3174:57:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30659;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30649;
                                readonly src: "3214:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30660;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30651;
                                readonly src: "3220:3:102";
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
                                    readonly id: 30657;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3191:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30658;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3194:19:102";
                                readonly memberName: "parseJsonBytesArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35521;
                                readonly src: "3191:22:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory[] memory)";
                                };
                            };
                            readonly id: 30661;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3191:33:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 30656;
                        readonly id: 30662;
                        readonly nodeType: "Return";
                        readonly src: "3184:40:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytesArray";
                readonly nameLocation: "3086:14:102";
                readonly parameters: {
                    readonly id: 30652;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30649;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "3115:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30664;
                        readonly src: "3101:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30648;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3101:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30651;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3135:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30664;
                        readonly src: "3121:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30650;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3121:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3100:39:102";
                };
                readonly returnParameters: {
                    readonly id: 30656;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30655;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30664;
                        readonly src: "3158:14:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30653;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3158:5:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 30654;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3158:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3157:16:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30683;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3237:167:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30682;
                    readonly nodeType: "Block";
                    readonly src: "3343:61:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30677;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30666;
                                readonly src: "3377:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30678;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30668;
                                readonly src: "3386:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30679;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30670;
                                readonly src: "3391:5:102";
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
                                    readonly id: 30675;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3360:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30676;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3363:13:102";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35561;
                                readonly src: "3360:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool) external returns (string memory)";
                                };
                            };
                            readonly id: 30680;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3360:37:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30674;
                        readonly id: 30681;
                        readonly nodeType: "Return";
                        readonly src: "3353:44:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3246:9:102";
                readonly parameters: {
                    readonly id: 30671;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30666;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3270:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30683;
                        readonly src: "3256:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30665;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3256:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30668;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3293:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30683;
                        readonly src: "3279:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30667;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30670;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3303:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30683;
                        readonly src: "3298:10:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 30669;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3298:4:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3255:54:102";
                };
                readonly returnParameters: {
                    readonly id: 30674;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30673;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30683;
                        readonly src: "3328:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30672;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3328:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3327:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30703;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3410:196:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30702;
                    readonly nodeType: "Block";
                    readonly src: "3545:61:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30697;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30685;
                                readonly src: "3579:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30698;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30687;
                                readonly src: "3588:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30699;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30690;
                                readonly src: "3593:5:102";
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
                                    readonly id: 30695;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3562:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30696;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3565:13:102";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35639;
                                readonly src: "3562:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30700;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3562:37:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30694;
                        readonly id: 30701;
                        readonly nodeType: "Return";
                        readonly src: "3555:44:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3419:9:102";
                readonly parameters: {
                    readonly id: 30691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30685;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3443:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30703;
                        readonly src: "3429:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30684;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3429:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30687;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3466:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30703;
                        readonly src: "3452:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30686;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3452:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30690;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3485:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30703;
                        readonly src: "3471:19:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30688;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3471:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 30689;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3471:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3428:63:102";
                };
                readonly returnParameters: {
                    readonly id: 30694;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30693;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30703;
                        readonly src: "3526:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30692;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3526:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3525:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30722;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3612:170:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30721;
                    readonly nodeType: "Block";
                    readonly src: "3721:61:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30716;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30705;
                                readonly src: "3755:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30717;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30707;
                                readonly src: "3764:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30718;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30709;
                                readonly src: "3769:5:102";
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
                                    readonly id: 30714;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3738:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30715;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3741:13:102";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35572;
                                readonly src: "3738:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256) external returns (string memory)";
                                };
                            };
                            readonly id: 30719;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3738:37:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30713;
                        readonly id: 30720;
                        readonly nodeType: "Return";
                        readonly src: "3731:44:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3621:9:102";
                readonly parameters: {
                    readonly id: 30710;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30705;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3645:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30722;
                        readonly src: "3631:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30704;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3631:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30707;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3668:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30722;
                        readonly src: "3654:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30706;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3654:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30709;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3681:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30722;
                        readonly src: "3673:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 30708;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3673:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3630:57:102";
                };
                readonly returnParameters: {
                    readonly id: 30713;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30712;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30722;
                        readonly src: "3706:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30711;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3706:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3705:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30742;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3788:199:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30741;
                    readonly nodeType: "Block";
                    readonly src: "3926:61:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30736;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30724;
                                readonly src: "3960:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30737;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30726;
                                readonly src: "3969:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30738;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30729;
                                readonly src: "3974:5:102";
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
                                    readonly id: 30734;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "3943:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30735;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3946:13:102";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35651;
                                readonly src: "3943:16:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30739;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3943:37:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30733;
                        readonly id: 30740;
                        readonly nodeType: "Return";
                        readonly src: "3936:44:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3797:9:102";
                readonly parameters: {
                    readonly id: 30730;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30724;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3821:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30742;
                        readonly src: "3807:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30723;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3807:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30726;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3844:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30742;
                        readonly src: "3830:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30725;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3830:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30729;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3866:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30742;
                        readonly src: "3849:22:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30727;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3849:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 30728;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3849:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3806:66:102";
                };
                readonly returnParameters: {
                    readonly id: 30733;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30732;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30742;
                        readonly src: "3907:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30731;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3907:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3906:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30761;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3993:168:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30760;
                    readonly nodeType: "Block";
                    readonly src: "4101:60:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30755;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30744;
                                readonly src: "4134:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30756;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30746;
                                readonly src: "4143:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30757;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30748;
                                readonly src: "4148:5:102";
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
                                    readonly id: 30753;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "4118:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30754;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4121:12:102";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35583;
                                readonly src: "4118:15:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256) external returns (string memory)";
                                };
                            };
                            readonly id: 30758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4118:36:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30752;
                        readonly id: 30759;
                        readonly nodeType: "Return";
                        readonly src: "4111:43:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4002:9:102";
                readonly parameters: {
                    readonly id: 30749;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30744;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4026:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30761;
                        readonly src: "4012:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30743;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4012:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30746;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4049:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30761;
                        readonly src: "4035:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30745;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4035:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30748;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4061:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30761;
                        readonly src: "4054:12:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 30747;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4054:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4011:56:102";
                };
                readonly returnParameters: {
                    readonly id: 30752;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30751;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30761;
                        readonly src: "4086:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30750;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4086:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4085:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30781;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4167:197:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30780;
                    readonly nodeType: "Block";
                    readonly src: "4304:60:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30775;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30763;
                                readonly src: "4337:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30776;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30765;
                                readonly src: "4346:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30777;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30768;
                                readonly src: "4351:5:102";
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
                                    readonly id: 30773;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "4321:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30774;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4324:12:102";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35663;
                                readonly src: "4321:15:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30778;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4321:36:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30772;
                        readonly id: 30779;
                        readonly nodeType: "Return";
                        readonly src: "4314:43:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4176:9:102";
                readonly parameters: {
                    readonly id: 30769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30763;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4200:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30781;
                        readonly src: "4186:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30762;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4186:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30765;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4223:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30781;
                        readonly src: "4209:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30764;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4209:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30768;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4244:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30781;
                        readonly src: "4228:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30766;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:6:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 30767;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4228:8:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4185:65:102";
                };
                readonly returnParameters: {
                    readonly id: 30772;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30771;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30781;
                        readonly src: "4285:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30770;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4285:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4284:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30800;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4370:173:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30799;
                    readonly nodeType: "Block";
                    readonly src: "4479:64:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30794;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30783;
                                readonly src: "4516:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30795;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30785;
                                readonly src: "4525:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30796;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30787;
                                readonly src: "4530:5:102";
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
                                    readonly id: 30792;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "4496:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30793;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4499:16:102";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35594;
                                readonly src: "4496:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address) external returns (string memory)";
                                };
                            };
                            readonly id: 30797;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4496:40:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30791;
                        readonly id: 30798;
                        readonly nodeType: "Return";
                        readonly src: "4489:47:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4379:9:102";
                readonly parameters: {
                    readonly id: 30788;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30783;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4403:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30800;
                        readonly src: "4389:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30782;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4389:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30785;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4426:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30800;
                        readonly src: "4412:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30784;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4412:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30787;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4439:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30800;
                        readonly src: "4431:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30786;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4431:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4388:57:102";
                };
                readonly returnParameters: {
                    readonly id: 30791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30790;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30800;
                        readonly src: "4464:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30789;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4464:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4463:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30820;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4549:202:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30819;
                    readonly nodeType: "Block";
                    readonly src: "4687:64:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30814;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30802;
                                readonly src: "4724:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30815;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30804;
                                readonly src: "4733:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30816;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30807;
                                readonly src: "4738:5:102";
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
                                    readonly id: 30812;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "4704:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30813;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4707:16:102";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35675;
                                readonly src: "4704:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30817;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4704:40:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30811;
                        readonly id: 30818;
                        readonly nodeType: "Return";
                        readonly src: "4697:47:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4558:9:102";
                readonly parameters: {
                    readonly id: 30808;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30802;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4582:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30820;
                        readonly src: "4568:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30801;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4568:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30804;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4605:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30820;
                        readonly src: "4591:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30803;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4591:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30807;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4627:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30820;
                        readonly src: "4610:22:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30805;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4610:7:102";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30806;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4610:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4567:66:102";
                };
                readonly returnParameters: {
                    readonly id: 30811;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30810;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30820;
                        readonly src: "4668:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30809;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4668:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4667:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30839;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4757:173:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30838;
                    readonly nodeType: "Block";
                    readonly src: "4866:64:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30833;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30822;
                                readonly src: "4903:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30834;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30824;
                                readonly src: "4912:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30835;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30826;
                                readonly src: "4917:5:102";
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
                                    readonly id: 30831;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "4883:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30832;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4886:16:102";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35605;
                                readonly src: "4883:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32) external returns (string memory)";
                                };
                            };
                            readonly id: 30836;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4883:40:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30830;
                        readonly id: 30837;
                        readonly nodeType: "Return";
                        readonly src: "4876:47:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4766:9:102";
                readonly parameters: {
                    readonly id: 30827;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30822;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4790:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30839;
                        readonly src: "4776:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30821;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4776:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30824;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4813:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30839;
                        readonly src: "4799:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30823;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4799:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30826;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4826:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30839;
                        readonly src: "4818:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 30825;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4818:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4775:57:102";
                };
                readonly returnParameters: {
                    readonly id: 30830;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30829;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30839;
                        readonly src: "4851:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30828;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4851:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4850:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30859;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4936:202:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30858;
                    readonly nodeType: "Block";
                    readonly src: "5074:64:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30853;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30841;
                                readonly src: "5111:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30854;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30843;
                                readonly src: "5120:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30855;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30846;
                                readonly src: "5125:5:102";
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
                                    readonly id: 30851;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "5091:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30852;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5094:16:102";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35687;
                                readonly src: "5091:19:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30856;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5091:40:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30850;
                        readonly id: 30857;
                        readonly nodeType: "Return";
                        readonly src: "5084:47:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4945:9:102";
                readonly parameters: {
                    readonly id: 30847;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30841;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4969:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30859;
                        readonly src: "4955:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30840;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4955:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30843;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4992:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30859;
                        readonly src: "4978:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30842;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4978:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30846;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5014:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30859;
                        readonly src: "4997:22:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30844;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4997:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 30845;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4997:9:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4954:66:102";
                };
                readonly returnParameters: {
                    readonly id: 30850;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30849;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30859;
                        readonly src: "5055:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30848;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5055:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5054:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30878;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5144:176:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30877;
                    readonly nodeType: "Block";
                    readonly src: "5258:62:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30872;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30861;
                                readonly src: "5293:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30873;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30863;
                                readonly src: "5302:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30874;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30865;
                                readonly src: "5307:5:102";
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
                                    readonly id: 30870;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "5275:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30871;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5278:14:102";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35627;
                                readonly src: "5275:17:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5275:38:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30869;
                        readonly id: 30876;
                        readonly nodeType: "Return";
                        readonly src: "5268:45:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5153:9:102";
                readonly parameters: {
                    readonly id: 30866;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30861;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5177:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30878;
                        readonly src: "5163:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30860;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5163:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30863;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5200:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30878;
                        readonly src: "5186:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30862;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5186:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30865;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5218:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30878;
                        readonly src: "5205:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 30864;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5205:5:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5162:62:102";
                };
                readonly returnParameters: {
                    readonly id: 30869;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30868;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30878;
                        readonly src: "5243:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30867;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5242:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30898;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5326:198:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30897;
                    readonly nodeType: "Block";
                    readonly src: "5462:62:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30892;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30880;
                                readonly src: "5497:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30893;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30882;
                                readonly src: "5506:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30894;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30885;
                                readonly src: "5511:5:102";
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
                                    readonly id: 30890;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "5479:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30891;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5482:14:102";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35711;
                                readonly src: "5479:17:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30895;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5479:38:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30889;
                        readonly id: 30896;
                        readonly nodeType: "Return";
                        readonly src: "5472:45:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5335:9:102";
                readonly parameters: {
                    readonly id: 30886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30880;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5359:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30898;
                        readonly src: "5345:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30879;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5345:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30882;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5382:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30898;
                        readonly src: "5368:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30881;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5368:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30885;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5402:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30898;
                        readonly src: "5387:20:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30883;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5387:5:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 30884;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5387:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5344:64:102";
                };
                readonly returnParameters: {
                    readonly id: 30889;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30888;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30898;
                        readonly src: "5443:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30887;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5443:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5442:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30917;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5530:198:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30916;
                    readonly nodeType: "Block";
                    readonly src: "5665:63:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30911;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30900;
                                readonly src: "5701:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30912;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30902;
                                readonly src: "5710:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30913;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30904;
                                readonly src: "5715:5:102";
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
                                    readonly id: 30909;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "5682:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30910;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5685:15:102";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35616;
                                readonly src: "5682:18:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30914;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5682:39:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30908;
                        readonly id: 30915;
                        readonly nodeType: "Return";
                        readonly src: "5675:46:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5539:9:102";
                readonly parameters: {
                    readonly id: 30905;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30900;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5563:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30917;
                        readonly src: "5549:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30899;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5549:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30902;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5586:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30917;
                        readonly src: "5572:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30901;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5572:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30904;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5605:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30917;
                        readonly src: "5591:19:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30903;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5591:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5548:63:102";
                };
                readonly returnParameters: {
                    readonly id: 30908;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30907;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30917;
                        readonly src: "5646:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30906;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5646:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5645:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30937;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5734:200:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30936;
                    readonly nodeType: "Block";
                    readonly src: "5871:63:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30931;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30919;
                                readonly src: "5907:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30932;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30921;
                                readonly src: "5916:3:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30933;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30924;
                                readonly src: "5921:5:102";
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
                                    readonly id: 30929;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "5888:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30930;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5891:15:102";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35699;
                                readonly src: "5888:18:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 30934;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5888:39:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 30928;
                        readonly id: 30935;
                        readonly nodeType: "Return";
                        readonly src: "5881:46:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5743:9:102";
                readonly parameters: {
                    readonly id: 30925;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30919;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5767:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30937;
                        readonly src: "5753:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30918;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5753:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30921;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5790:3:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30937;
                        readonly src: "5776:17:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30920;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5776:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30924;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5811:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30937;
                        readonly src: "5795:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30922;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5795:6:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 30923;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5795:8:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5752:65:102";
                };
                readonly returnParameters: {
                    readonly id: 30928;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30927;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30937;
                        readonly src: "5852:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30926;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5852:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5851:15:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30952;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5940:111:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30951;
                    readonly nodeType: "Block";
                    readonly src: "6007:44:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30947;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30939;
                                readonly src: "6030:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30948;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30941;
                                readonly src: "6039:4:102";
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
                                    readonly id: 30944;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "6017:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30946;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6020:9:102";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35718;
                                readonly src: "6017:12:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) external";
                                };
                            };
                            readonly id: 30949;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6017:27:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30950;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6017:27:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "5949:5:102";
                readonly parameters: {
                    readonly id: 30942;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30939;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5969:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30952;
                        readonly src: "5955:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30938;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30941;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "5992:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30952;
                        readonly src: "5978:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30940;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5978:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5954:43:102";
                };
                readonly returnParameters: {
                    readonly id: 30943;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6007:0:102";
                };
                readonly scope: 30971;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30970;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6057:145:102";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30969;
                    readonly nodeType: "Block";
                    readonly src: "6148:54:102";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30964;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30954;
                                readonly src: "6171:7:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30965;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30956;
                                readonly src: "6180:4:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 30966;
                                readonly name: "valueKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30958;
                                readonly src: "6186:8:102";
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
                                    readonly id: 30961;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30417;
                                    readonly src: "6158:2:102";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$35773";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 30963;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6161:9:102";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 35727;
                                readonly src: "6158:12:102";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory,string memory) external";
                                };
                            };
                            readonly id: 30967;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6158:37:102";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30968;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6158:37:102";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "6066:5:102";
                readonly parameters: {
                    readonly id: 30959;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30954;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "6086:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30970;
                        readonly src: "6072:21:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30953;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6072:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30956;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "6109:4:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30970;
                        readonly src: "6095:18:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30955;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6095:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 30958;
                        readonly mutability: "mutable";
                        readonly name: "valueKey";
                        readonly nameLocation: "6129:8:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30970;
                        readonly src: "6115:22:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30957;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6071:67:102";
                };
                readonly returnParameters: {
                    readonly id: 30960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6148:0:102";
                };
                readonly scope: 30971;
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
            readonly linearizedBaseContracts: readonly [30971];
            readonly name: "stdJson";
            readonly nameLocation: "838:7:102";
            readonly scope: 30972;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 102;
};
//# sourceMappingURL=StdJson.d.ts.map