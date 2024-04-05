export declare const stdJson: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033";
        readonly sourceMap: "830:5374:150:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:150;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033";
        readonly sourceMap: "830:5374:150:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
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
        readonly id: 35431;
        readonly exportedSymbols: {
            readonly VmSafe: readonly [40232];
            readonly stdJson: readonly [35430];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:6173:150";
        readonly nodes: readonly [{
            readonly id: 34856;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:150";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 34857;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:150";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 34859;
            readonly nodeType: "ImportDirective";
            readonly src: "100:32:150";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 35431;
            readonly sourceUnit: 40705;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 34858;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40232;
                    readonly src: "108:6:150";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 35430;
            readonly nodeType: "ContractDefinition";
            readonly src: "830:5374:150";
            readonly nodes: readonly [{
                readonly id: 34876;
                readonly nodeType: "VariableDeclaration";
                readonly src: "852:92:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "876:2:150";
                readonly scope: 35430;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 34861;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 34860;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["852:6:150"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40232;
                        readonly src: "852:6:150";
                    };
                    readonly referencedDeclaration: 40232;
                    readonly src: "852:6:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
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
                                        readonly id: 34870;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "922:17:150";
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
                                        readonly id: 34869;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "912:9:150";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34871;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "912:28:150";
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
                                    readonly id: 34868;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "904:7:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 34867;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "904:7:150";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 34872;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "904:37:150";
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
                                readonly id: 34866;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "896:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 34865;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "896:7:150";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 34873;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "896:46:150";
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
                            readonly id: 34864;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "888:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 34863;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "888:7:150";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 34874;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "888:55:150";
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
                        readonly id: 34862;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40232;
                        readonly src: "881:6:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40232_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 34875;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "881:63:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34892;
                readonly nodeType: "FunctionDefinition";
                readonly src: "951:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34891;
                    readonly nodeType: "Block";
                    readonly src: "1045:47:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34887;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34878;
                                readonly src: "1075:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34888;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34880;
                                readonly src: "1081:3:150";
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
                                    readonly id: 34885;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1062:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34886;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1065:9:150";
                                readonly memberName: "parseJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39859;
                                readonly src: "1062:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure external returns (bytes memory)";
                                };
                            };
                            readonly id: 34889;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1062:23:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 34884;
                        readonly id: 34890;
                        readonly nodeType: "Return";
                        readonly src: "1055:30:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "parseRaw";
                readonly nameLocation: "960:8:150";
                readonly parameters: {
                    readonly id: 34881;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34878;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "983:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34892;
                        readonly src: "969:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34877;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "969:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34880;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1003:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34892;
                        readonly src: "989:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34879;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "989:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "968:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34884;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34883;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34892;
                        readonly src: "1031:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34882;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1031:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1030:14:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34908;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1098:135:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34907;
                    readonly nodeType: "Block";
                    readonly src: "1182:51:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34903;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34894;
                                readonly src: "1216:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34904;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34896;
                                readonly src: "1222:3:150";
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
                                    readonly id: 34901;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1199:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34902;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1202:13:150";
                                readonly memberName: "parseJsonUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39875;
                                readonly src: "1199:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256)";
                                };
                            };
                            readonly id: 34905;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1199:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 34900;
                        readonly id: 34906;
                        readonly nodeType: "Return";
                        readonly src: "1192:34:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUint";
                readonly nameLocation: "1107:8:150";
                readonly parameters: {
                    readonly id: 34897;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34894;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1130:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34908;
                        readonly src: "1116:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34893;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1116:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34896;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1150:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34908;
                        readonly src: "1136:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34895;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1136:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1115:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34900;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34899;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34908;
                        readonly src: "1173:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 34898;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1173:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1172:9:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34925;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1239:154:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34924;
                    readonly nodeType: "Block";
                    readonly src: "1337:56:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34920;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34910;
                                readonly src: "1376:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34921;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34912;
                                readonly src: "1382:3:150";
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
                                    readonly id: 34918;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1354:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34919;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1357:18:150";
                                readonly memberName: "parseJsonUintArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39885;
                                readonly src: "1354:21:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256[] memory)";
                                };
                            };
                            readonly id: 34922;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1354:32:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 34917;
                        readonly id: 34923;
                        readonly nodeType: "Return";
                        readonly src: "1347:39:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUintArray";
                readonly nameLocation: "1248:13:150";
                readonly parameters: {
                    readonly id: 34913;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34910;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1276:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34925;
                        readonly src: "1262:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34909;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1262:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34912;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1296:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34925;
                        readonly src: "1282:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34911;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1282:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1261:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34916;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34925;
                        readonly src: "1319:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34914;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1319:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 34915;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1319:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1318:18:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34941;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1399:132:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34940;
                    readonly nodeType: "Block";
                    readonly src: "1481:50:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34936;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34927;
                                readonly src: "1514:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34937;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34929;
                                readonly src: "1520:3:150";
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
                                    readonly id: 34934;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1498:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34935;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1501:12:150";
                                readonly memberName: "parseJsonInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39894;
                                readonly src: "1498:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256)";
                                };
                            };
                            readonly id: 34938;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1498:26:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 34933;
                        readonly id: 34939;
                        readonly nodeType: "Return";
                        readonly src: "1491:33:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readInt";
                readonly nameLocation: "1408:7:150";
                readonly parameters: {
                    readonly id: 34930;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34927;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1430:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34941;
                        readonly src: "1416:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34926;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1416:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34929;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1450:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34941;
                        readonly src: "1436:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34928;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1436:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1415:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34932;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34941;
                        readonly src: "1473:6:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 34931;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1473:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1472:8:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34958;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1537:151:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34957;
                    readonly nodeType: "Block";
                    readonly src: "1633:55:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34953;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34943;
                                readonly src: "1671:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34954;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34945;
                                readonly src: "1677:3:150";
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
                                    readonly id: 34951;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1650:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34952;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1653:17:150";
                                readonly memberName: "parseJsonIntArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39904;
                                readonly src: "1650:20:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256[] memory)";
                                };
                            };
                            readonly id: 34955;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1650:31:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                readonly typeString: "int256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 34950;
                        readonly id: 34956;
                        readonly nodeType: "Return";
                        readonly src: "1643:38:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readIntArray";
                readonly nameLocation: "1546:12:150";
                readonly parameters: {
                    readonly id: 34946;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34943;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1573:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34958;
                        readonly src: "1559:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34942;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1559:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34945;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1593:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34958;
                        readonly src: "1579:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34944;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1579:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1558:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34950;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34949;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34958;
                        readonly src: "1616:15:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34947;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1616:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 34948;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1616:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:17:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34974;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1694:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34973;
                    readonly nodeType: "Block";
                    readonly src: "1781:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34969;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34960;
                                readonly src: "1818:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34970;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34962;
                                readonly src: "1824:3:150";
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
                                    readonly id: 34967;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1798:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34968;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1801:16:150";
                                readonly memberName: "parseJsonBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39989;
                                readonly src: "1798:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32)";
                                };
                            };
                            readonly id: 34971;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1798:30:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 34966;
                        readonly id: 34972;
                        readonly nodeType: "Return";
                        readonly src: "1791:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32";
                readonly nameLocation: "1703:11:150";
                readonly parameters: {
                    readonly id: 34963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34960;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1729:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34974;
                        readonly src: "1715:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34959;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1715:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34962;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1749:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34974;
                        readonly src: "1735:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34961;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1735:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1714:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34965;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34974;
                        readonly src: "1772:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 34964;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1772:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1771:9:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34991;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1841:160:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34990;
                    readonly nodeType: "Block";
                    readonly src: "1942:59:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34986;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34976;
                                readonly src: "1984:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34987;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34978;
                                readonly src: "1990:3:150";
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
                                    readonly id: 34984;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "1959:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34985;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1962:21:150";
                                readonly memberName: "parseJsonBytes32Array";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39999;
                                readonly src: "1959:24:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32[] memory)";
                                };
                            };
                            readonly id: 34988;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1959:35:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[] memory";
                            };
                        };
                        readonly functionReturnParameters: 34983;
                        readonly id: 34989;
                        readonly nodeType: "Return";
                        readonly src: "1952:42:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32Array";
                readonly nameLocation: "1850:16:150";
                readonly parameters: {
                    readonly id: 34979;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34976;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1881:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34991;
                        readonly src: "1867:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34975;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1867:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34978;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1901:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34991;
                        readonly src: "1887:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34977;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1887:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1866:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34983;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34982;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34991;
                        readonly src: "1924:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34980;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 34981;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:18:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35007;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2007:145:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35006;
                    readonly nodeType: "Block";
                    readonly src: "2099:53:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35002;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34993;
                                readonly src: "2135:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35003;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34995;
                                readonly src: "2141:3:150";
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
                                    readonly id: 35000;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2116:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35001;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2119:15:150";
                                readonly memberName: "parseJsonString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39951;
                                readonly src: "2116:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35004;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2116:29:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 34999;
                        readonly id: 35005;
                        readonly nodeType: "Return";
                        readonly src: "2109:36:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readString";
                readonly nameLocation: "2016:10:150";
                readonly parameters: {
                    readonly id: 34996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34993;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2041:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35007;
                        readonly src: "2027:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34992;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2027:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34995;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2061:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35007;
                        readonly src: "2047:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34994;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2047:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2026:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34999;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34998;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35007;
                        readonly src: "2084:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34997;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2084:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2083:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35024;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2158:157:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35023;
                    readonly nodeType: "Block";
                    readonly src: "2257:58:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35019;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35009;
                                readonly src: "2298:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35020;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35011;
                                readonly src: "2304:3:150";
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
                                    readonly id: 35017;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2274:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35018;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2277:20:150";
                                readonly memberName: "parseJsonStringArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39961;
                                readonly src: "2274:23:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory[] memory)";
                                };
                            };
                            readonly id: 35021;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2274:34:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35016;
                        readonly id: 35022;
                        readonly nodeType: "Return";
                        readonly src: "2267:41:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readStringArray";
                readonly nameLocation: "2167:15:150";
                readonly parameters: {
                    readonly id: 35012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35009;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2197:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35024;
                        readonly src: "2183:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35008;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2183:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35011;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2217:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35024;
                        readonly src: "2203:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35010;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2203:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2182:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35016;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35015;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35024;
                        readonly src: "2240:15:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35013;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2240:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35014;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2240:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2239:17:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35040;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2321:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35039;
                    readonly nodeType: "Block";
                    readonly src: "2408:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35035;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35026;
                                readonly src: "2445:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35036;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35028;
                                readonly src: "2451:3:150";
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
                                    readonly id: 35033;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2425:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35034;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2428:16:150";
                                readonly memberName: "parseJsonAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39932;
                                readonly src: "2425:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address)";
                                };
                            };
                            readonly id: 35037;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2425:30:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 35032;
                        readonly id: 35038;
                        readonly nodeType: "Return";
                        readonly src: "2418:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddress";
                readonly nameLocation: "2330:11:150";
                readonly parameters: {
                    readonly id: 35029;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35026;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2356:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35040;
                        readonly src: "2342:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35025;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2342:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35028;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2376:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35040;
                        readonly src: "2362:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35027;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2341:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35031;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35040;
                        readonly src: "2399:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35030;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2399:7:150";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2398:9:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35057;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2468:160:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35056;
                    readonly nodeType: "Block";
                    readonly src: "2569:59:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35052;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35042;
                                readonly src: "2611:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35053;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35044;
                                readonly src: "2617:3:150";
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
                                    readonly id: 35050;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2586:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35051;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2589:21:150";
                                readonly memberName: "parseJsonAddressArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39942;
                                readonly src: "2586:24:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address[] memory)";
                                };
                            };
                            readonly id: 35054;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2586:35:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35049;
                        readonly id: 35055;
                        readonly nodeType: "Return";
                        readonly src: "2579:42:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddressArray";
                readonly nameLocation: "2477:16:150";
                readonly parameters: {
                    readonly id: 35045;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35042;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2508:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35057;
                        readonly src: "2494:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35041;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2494:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35044;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2528:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35057;
                        readonly src: "2514:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35043;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2514:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2493:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35049;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35048;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35057;
                        readonly src: "2551:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35046;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2551:7:150";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35047;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2551:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2550:18:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35073;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2634:132:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35072;
                    readonly nodeType: "Block";
                    readonly src: "2715:51:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35068;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35059;
                                readonly src: "2749:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35069;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35061;
                                readonly src: "2755:3:150";
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
                                    readonly id: 35066;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2732:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35067;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2735:13:150";
                                readonly memberName: "parseJsonBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39913;
                                readonly src: "2732:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool)";
                                };
                            };
                            readonly id: 35070;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2732:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 35065;
                        readonly id: 35071;
                        readonly nodeType: "Return";
                        readonly src: "2725:34:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBool";
                readonly nameLocation: "2643:8:150";
                readonly parameters: {
                    readonly id: 35062;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35059;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2666:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35073;
                        readonly src: "2652:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35058;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35061;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2686:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35073;
                        readonly src: "2672:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35060;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2672:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35065;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35064;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35073;
                        readonly src: "2709:4:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35063;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2709:4:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2708:6:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35090;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2772:151:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35089;
                    readonly nodeType: "Block";
                    readonly src: "2867:56:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35085;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35075;
                                readonly src: "2906:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35086;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35077;
                                readonly src: "2912:3:150";
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
                                    readonly id: 35083;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "2884:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35084;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2887:18:150";
                                readonly memberName: "parseJsonBoolArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39923;
                                readonly src: "2884:21:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool[] memory)";
                                };
                            };
                            readonly id: 35087;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2884:32:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                readonly typeString: "bool[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35082;
                        readonly id: 35088;
                        readonly nodeType: "Return";
                        readonly src: "2877:39:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBoolArray";
                readonly nameLocation: "2781:13:150";
                readonly parameters: {
                    readonly id: 35078;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35075;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2809:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35090;
                        readonly src: "2795:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35074;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2795:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35077;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2829:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35090;
                        readonly src: "2815:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35076;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2815:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2794:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35082;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35081;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35090;
                        readonly src: "2852:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35079;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2852:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35080;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2852:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2851:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35106;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2929:142:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35105;
                    readonly nodeType: "Block";
                    readonly src: "3019:52:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35101;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35092;
                                readonly src: "3054:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35102;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35094;
                                readonly src: "3060:3:150";
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
                                    readonly id: 35099;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3036:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35100;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3039:14:150";
                                readonly memberName: "parseJsonBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39970;
                                readonly src: "3036:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory)";
                                };
                            };
                            readonly id: 35103;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3036:28:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 35098;
                        readonly id: 35104;
                        readonly nodeType: "Return";
                        readonly src: "3029:35:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes";
                readonly nameLocation: "2938:9:150";
                readonly parameters: {
                    readonly id: 35095;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35092;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2962:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35106;
                        readonly src: "2948:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35091;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2948:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35094;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2982:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35106;
                        readonly src: "2968:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35093;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2968:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2947:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35098;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35097;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35106;
                        readonly src: "3005:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35096;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3005:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3004:14:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35123;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3077:154:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35122;
                    readonly nodeType: "Block";
                    readonly src: "3174:57:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35118;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35108;
                                readonly src: "3214:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35119;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35110;
                                readonly src: "3220:3:150";
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
                                    readonly id: 35116;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3191:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35117;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3194:19:150";
                                readonly memberName: "parseJsonBytesArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39980;
                                readonly src: "3191:22:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory[] memory)";
                                };
                            };
                            readonly id: 35120;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3191:33:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35115;
                        readonly id: 35121;
                        readonly nodeType: "Return";
                        readonly src: "3184:40:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytesArray";
                readonly nameLocation: "3086:14:150";
                readonly parameters: {
                    readonly id: 35111;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35108;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "3115:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35123;
                        readonly src: "3101:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35107;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3101:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35110;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3135:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35123;
                        readonly src: "3121:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35109;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3121:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3100:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35115;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35114;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35123;
                        readonly src: "3158:14:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35112;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3158:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35113;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3158:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3157:16:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35142;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3237:167:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35141;
                    readonly nodeType: "Block";
                    readonly src: "3343:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35136;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35125;
                                readonly src: "3377:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35137;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35127;
                                readonly src: "3386:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35138;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35129;
                                readonly src: "3391:5:150";
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
                                    readonly id: 35134;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3360:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35135;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3363:13:150";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40020;
                                readonly src: "3360:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool) external returns (string memory)";
                                };
                            };
                            readonly id: 35139;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3360:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35133;
                        readonly id: 35140;
                        readonly nodeType: "Return";
                        readonly src: "3353:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3246:9:150";
                readonly parameters: {
                    readonly id: 35130;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35125;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3270:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35142;
                        readonly src: "3256:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35124;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3256:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35127;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3293:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35142;
                        readonly src: "3279:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35126;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35129;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3303:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35142;
                        readonly src: "3298:10:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35128;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3298:4:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3255:54:150";
                };
                readonly returnParameters: {
                    readonly id: 35133;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35132;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35142;
                        readonly src: "3328:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35131;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3328:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3327:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35162;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3410:196:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35161;
                    readonly nodeType: "Block";
                    readonly src: "3545:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35156;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35144;
                                readonly src: "3579:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35157;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35146;
                                readonly src: "3588:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35158;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35149;
                                readonly src: "3593:5:150";
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
                                    readonly id: 35154;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3562:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35155;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3565:13:150";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40098;
                                readonly src: "3562:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35159;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3562:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35153;
                        readonly id: 35160;
                        readonly nodeType: "Return";
                        readonly src: "3555:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3419:9:150";
                readonly parameters: {
                    readonly id: 35150;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35144;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3443:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35162;
                        readonly src: "3429:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35143;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3429:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35146;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3466:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35162;
                        readonly src: "3452:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35145;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3452:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35149;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3485:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35162;
                        readonly src: "3471:19:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35147;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3471:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35148;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3471:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3428:63:150";
                };
                readonly returnParameters: {
                    readonly id: 35153;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35152;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35162;
                        readonly src: "3526:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35151;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3526:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3525:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35181;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3612:170:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35180;
                    readonly nodeType: "Block";
                    readonly src: "3721:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35175;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35164;
                                readonly src: "3755:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35176;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35166;
                                readonly src: "3764:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35177;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35168;
                                readonly src: "3769:5:150";
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
                                    readonly id: 35173;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3738:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35174;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3741:13:150";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40031;
                                readonly src: "3738:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256) external returns (string memory)";
                                };
                            };
                            readonly id: 35178;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3738:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35172;
                        readonly id: 35179;
                        readonly nodeType: "Return";
                        readonly src: "3731:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3621:9:150";
                readonly parameters: {
                    readonly id: 35169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35164;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3645:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35181;
                        readonly src: "3631:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35163;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3631:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35166;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3668:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35181;
                        readonly src: "3654:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35165;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3654:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35168;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3681:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35181;
                        readonly src: "3673:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3673:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3630:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35172;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35171;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35181;
                        readonly src: "3706:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35170;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3706:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3705:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35201;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3788:199:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35200;
                    readonly nodeType: "Block";
                    readonly src: "3926:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35195;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35183;
                                readonly src: "3960:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35196;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35185;
                                readonly src: "3969:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35197;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35188;
                                readonly src: "3974:5:150";
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
                                    readonly id: 35193;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "3943:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35194;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3946:13:150";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40110;
                                readonly src: "3943:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35198;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3943:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35192;
                        readonly id: 35199;
                        readonly nodeType: "Return";
                        readonly src: "3936:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3797:9:150";
                readonly parameters: {
                    readonly id: 35189;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35183;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3821:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35201;
                        readonly src: "3807:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35182;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3807:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35185;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3844:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35201;
                        readonly src: "3830:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35184;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3830:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35188;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3866:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35201;
                        readonly src: "3849:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35186;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3849:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35187;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3849:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3806:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35192;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35191;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35201;
                        readonly src: "3907:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35190;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3907:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3906:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35220;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3993:168:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35219;
                    readonly nodeType: "Block";
                    readonly src: "4101:60:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35214;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35203;
                                readonly src: "4134:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35215;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35205;
                                readonly src: "4143:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35216;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35207;
                                readonly src: "4148:5:150";
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
                                    readonly id: 35212;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "4118:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35213;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4121:12:150";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40042;
                                readonly src: "4118:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256) external returns (string memory)";
                                };
                            };
                            readonly id: 35217;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4118:36:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35211;
                        readonly id: 35218;
                        readonly nodeType: "Return";
                        readonly src: "4111:43:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4002:9:150";
                readonly parameters: {
                    readonly id: 35208;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35203;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4026:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35220;
                        readonly src: "4012:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35202;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4012:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35205;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4049:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35220;
                        readonly src: "4035:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35204;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4035:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35207;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4061:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35220;
                        readonly src: "4054:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35206;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4054:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4011:56:150";
                };
                readonly returnParameters: {
                    readonly id: 35211;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35210;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35220;
                        readonly src: "4086:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35209;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4086:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4085:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35240;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4167:197:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35239;
                    readonly nodeType: "Block";
                    readonly src: "4304:60:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35234;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35222;
                                readonly src: "4337:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35235;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35224;
                                readonly src: "4346:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35236;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35227;
                                readonly src: "4351:5:150";
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
                                    readonly id: 35232;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "4321:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35233;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4324:12:150";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40122;
                                readonly src: "4321:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35237;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4321:36:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35231;
                        readonly id: 35238;
                        readonly nodeType: "Return";
                        readonly src: "4314:43:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4176:9:150";
                readonly parameters: {
                    readonly id: 35228;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35222;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4200:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35240;
                        readonly src: "4186:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35221;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4186:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35224;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4223:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35240;
                        readonly src: "4209:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35223;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4209:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35227;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4244:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35240;
                        readonly src: "4228:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35225;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 35226;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4228:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4185:65:150";
                };
                readonly returnParameters: {
                    readonly id: 35231;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35230;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35240;
                        readonly src: "4285:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35229;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4285:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4284:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35259;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4370:173:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35258;
                    readonly nodeType: "Block";
                    readonly src: "4479:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35253;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35242;
                                readonly src: "4516:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35254;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35244;
                                readonly src: "4525:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35255;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35246;
                                readonly src: "4530:5:150";
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
                                    readonly id: 35251;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "4496:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35252;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4499:16:150";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40053;
                                readonly src: "4496:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address) external returns (string memory)";
                                };
                            };
                            readonly id: 35256;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4496:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35250;
                        readonly id: 35257;
                        readonly nodeType: "Return";
                        readonly src: "4489:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4379:9:150";
                readonly parameters: {
                    readonly id: 35247;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35242;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4403:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35259;
                        readonly src: "4389:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35241;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4389:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35244;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4426:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35259;
                        readonly src: "4412:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35243;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4412:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35246;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4439:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35259;
                        readonly src: "4431:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35245;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4431:7:150";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4388:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35250;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35249;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35259;
                        readonly src: "4464:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35248;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4464:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4463:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35279;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4549:202:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35278;
                    readonly nodeType: "Block";
                    readonly src: "4687:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35273;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35261;
                                readonly src: "4724:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35274;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35263;
                                readonly src: "4733:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35275;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35266;
                                readonly src: "4738:5:150";
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
                                    readonly id: 35271;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "4704:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35272;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4707:16:150";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40134;
                                readonly src: "4704:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35276;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4704:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35270;
                        readonly id: 35277;
                        readonly nodeType: "Return";
                        readonly src: "4697:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4558:9:150";
                readonly parameters: {
                    readonly id: 35267;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35261;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4582:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35279;
                        readonly src: "4568:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35260;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4568:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35263;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4605:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35279;
                        readonly src: "4591:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35262;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4591:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35266;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4627:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35279;
                        readonly src: "4610:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35264;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4610:7:150";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35265;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4610:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4567:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35270;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35269;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35279;
                        readonly src: "4668:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35268;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4668:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4667:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35298;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4757:173:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35297;
                    readonly nodeType: "Block";
                    readonly src: "4866:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35292;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35281;
                                readonly src: "4903:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35293;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35283;
                                readonly src: "4912:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35294;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35285;
                                readonly src: "4917:5:150";
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
                                    readonly id: 35290;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "4883:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35291;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4886:16:150";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40064;
                                readonly src: "4883:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32) external returns (string memory)";
                                };
                            };
                            readonly id: 35295;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4883:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35289;
                        readonly id: 35296;
                        readonly nodeType: "Return";
                        readonly src: "4876:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4766:9:150";
                readonly parameters: {
                    readonly id: 35286;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35281;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4790:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35298;
                        readonly src: "4776:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35280;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4776:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35283;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4813:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35298;
                        readonly src: "4799:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35282;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4799:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35285;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4826:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35298;
                        readonly src: "4818:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 35284;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4818:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4775:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35289;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35288;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35298;
                        readonly src: "4851:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35287;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4851:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4850:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35318;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4936:202:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35317;
                    readonly nodeType: "Block";
                    readonly src: "5074:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35312;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35300;
                                readonly src: "5111:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35313;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35302;
                                readonly src: "5120:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35314;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35305;
                                readonly src: "5125:5:150";
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
                                    readonly id: 35310;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "5091:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35311;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5094:16:150";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40146;
                                readonly src: "5091:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35315;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5091:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35309;
                        readonly id: 35316;
                        readonly nodeType: "Return";
                        readonly src: "5084:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4945:9:150";
                readonly parameters: {
                    readonly id: 35306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35300;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4969:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35318;
                        readonly src: "4955:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35299;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4955:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35302;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4992:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35318;
                        readonly src: "4978:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35301;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4978:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35305;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5014:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35318;
                        readonly src: "4997:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35303;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4997:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 35304;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4997:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4954:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35308;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35318;
                        readonly src: "5055:13:150";
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
                            readonly src: "5055:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5054:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35337;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5144:176:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35336;
                    readonly nodeType: "Block";
                    readonly src: "5258:62:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35331;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35320;
                                readonly src: "5293:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35332;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35322;
                                readonly src: "5302:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35333;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35324;
                                readonly src: "5307:5:150";
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
                                    readonly id: 35329;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "5275:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35330;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5278:14:150";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40086;
                                readonly src: "5275:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35334;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5275:38:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35328;
                        readonly id: 35335;
                        readonly nodeType: "Return";
                        readonly src: "5268:45:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5153:9:150";
                readonly parameters: {
                    readonly id: 35325;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35320;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5177:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35337;
                        readonly src: "5163:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35319;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5163:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35322;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5200:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35337;
                        readonly src: "5186:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35321;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5186:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35324;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5218:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35337;
                        readonly src: "5205:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35323;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5205:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5162:62:150";
                };
                readonly returnParameters: {
                    readonly id: 35328;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35327;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35337;
                        readonly src: "5243:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35326;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5242:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35357;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5326:198:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35356;
                    readonly nodeType: "Block";
                    readonly src: "5462:62:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35351;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35339;
                                readonly src: "5497:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35352;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35341;
                                readonly src: "5506:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35353;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35344;
                                readonly src: "5511:5:150";
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
                                    readonly id: 35349;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "5479:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35350;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5482:14:150";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40170;
                                readonly src: "5479:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35354;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5479:38:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35348;
                        readonly id: 35355;
                        readonly nodeType: "Return";
                        readonly src: "5472:45:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5335:9:150";
                readonly parameters: {
                    readonly id: 35345;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35339;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5359:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35357;
                        readonly src: "5345:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35338;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5345:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35341;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5382:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35357;
                        readonly src: "5368:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35340;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5368:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35344;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5402:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35357;
                        readonly src: "5387:20:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35342;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5387:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35343;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5387:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5344:64:150";
                };
                readonly returnParameters: {
                    readonly id: 35348;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35347;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35357;
                        readonly src: "5443:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35346;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5443:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5442:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35376;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5530:198:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35375;
                    readonly nodeType: "Block";
                    readonly src: "5665:63:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35370;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35359;
                                readonly src: "5701:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35371;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35361;
                                readonly src: "5710:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35372;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35363;
                                readonly src: "5715:5:150";
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
                                    readonly id: 35368;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "5682:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35369;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5685:15:150";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40075;
                                readonly src: "5682:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35373;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5682:39:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35367;
                        readonly id: 35374;
                        readonly nodeType: "Return";
                        readonly src: "5675:46:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5539:9:150";
                readonly parameters: {
                    readonly id: 35364;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35359;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5563:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35376;
                        readonly src: "5549:21:150";
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
                            readonly src: "5549:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35361;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5586:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35376;
                        readonly src: "5572:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35360;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5572:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35363;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5605:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35376;
                        readonly src: "5591:19:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35362;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5591:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5548:63:150";
                };
                readonly returnParameters: {
                    readonly id: 35367;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35366;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35376;
                        readonly src: "5646:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35365;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5646:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5645:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35396;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5734:200:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35395;
                    readonly nodeType: "Block";
                    readonly src: "5871:63:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35390;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35378;
                                readonly src: "5907:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35391;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35380;
                                readonly src: "5916:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35392;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35383;
                                readonly src: "5921:5:150";
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
                                    readonly id: 35388;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "5888:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35389;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5891:15:150";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40158;
                                readonly src: "5888:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35393;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5888:39:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35387;
                        readonly id: 35394;
                        readonly nodeType: "Return";
                        readonly src: "5881:46:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5743:9:150";
                readonly parameters: {
                    readonly id: 35384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35378;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5767:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35396;
                        readonly src: "5753:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35377;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5753:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35380;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5790:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35396;
                        readonly src: "5776:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35379;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5776:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35383;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5811:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35396;
                        readonly src: "5795:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35381;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5795:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35382;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5795:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5752:65:150";
                };
                readonly returnParameters: {
                    readonly id: 35387;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35386;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35396;
                        readonly src: "5852:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35385;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5852:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5851:15:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35411;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5940:111:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35410;
                    readonly nodeType: "Block";
                    readonly src: "6007:44:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35406;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35398;
                                readonly src: "6030:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35407;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35400;
                                readonly src: "6039:4:150";
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
                                    readonly id: 35403;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "6017:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35405;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6020:9:150";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40177;
                                readonly src: "6017:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) external";
                                };
                            };
                            readonly id: 35408;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6017:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35409;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6017:27:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "5949:5:150";
                readonly parameters: {
                    readonly id: 35401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35398;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5969:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35411;
                        readonly src: "5955:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35397;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35400;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "5992:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35411;
                        readonly src: "5978:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35399;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5978:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5954:43:150";
                };
                readonly returnParameters: {
                    readonly id: 35402;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6007:0:150";
                };
                readonly scope: 35430;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35429;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6057:145:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35428;
                    readonly nodeType: "Block";
                    readonly src: "6148:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35423;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35413;
                                readonly src: "6171:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35424;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35415;
                                readonly src: "6180:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35425;
                                readonly name: "valueKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35417;
                                readonly src: "6186:8:150";
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
                                    readonly id: 35420;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34876;
                                    readonly src: "6158:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40232";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35422;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6161:9:150";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40186;
                                readonly src: "6158:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory,string memory) external";
                                };
                            };
                            readonly id: 35426;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6158:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35427;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6158:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "6066:5:150";
                readonly parameters: {
                    readonly id: 35418;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35413;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "6086:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35429;
                        readonly src: "6072:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35412;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6072:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35415;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "6109:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35429;
                        readonly src: "6095:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35414;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6095:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35417;
                        readonly mutability: "mutable";
                        readonly name: "valueKey";
                        readonly nameLocation: "6129:8:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35429;
                        readonly src: "6115:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35416;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6071:67:150";
                };
                readonly returnParameters: {
                    readonly id: 35419;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6148:0:150";
                };
                readonly scope: 35430;
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
            readonly linearizedBaseContracts: readonly [35430];
            readonly name: "stdJson";
            readonly nameLocation: "838:7:150";
            readonly scope: 35431;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 150;
};
//# sourceMappingURL=stdJson.d.ts.map