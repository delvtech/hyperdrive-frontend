export declare const SafeTransferLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220286a006efc6c8a33b5de61931d83ab3c98f3c10c91b5f33ff587451031d9f5ce64736f6c63430008140033";
        readonly sourceMap: "586:5750:181:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5750:181;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220286a006efc6c8a33b5de61931d83ab3c98f3c10c91b5f33ff587451031d9f5ce64736f6c63430008140033";
        readonly sourceMap: "586:5750:181:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\",\"details\":\"Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}";
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
                readonly "lib/solmate/src/utils/SafeTransferLib.sol": "SafeTransferLib";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/utils/SafeTransferLib.sol": {
                readonly keccak256: "0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b";
                readonly urls: readonly ["bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060", "dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/utils/SafeTransferLib.sol";
        readonly id: 73804;
        readonly exportedSymbols: {
            readonly ERC20: readonly [73038];
            readonly SafeTransferLib: readonly [73803];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:6295:181";
        readonly nodes: readonly [{
            readonly id: 73720;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:181";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 73722;
            readonly nodeType: "ImportDirective";
            readonly src: "68:42:181";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "../tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 73804;
            readonly sourceUnit: 73039;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 73721;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 73038;
                    readonly src: "76:5:181";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 73803;
            readonly nodeType: "ContractDefinition";
            readonly src: "586:5750:181";
            readonly nodes: readonly [{
                readonly id: 73740;
                readonly nodeType: "FunctionDefinition";
                readonly src: "799:339:181";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73739;
                    readonly nodeType: "Block";
                    readonly src: "861:277:181";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73731];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73731;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "876:7:181";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73739;
                            readonly src: "871:12:181";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73730;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "871:4:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73732;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "871:12:181";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "946:136:181";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "1026:46:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [];
                                        readonly functionName: {
                                            readonly name: "gas";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1042:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1042:5:181";
                                    }, {
                                        readonly name: "to";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1049:2:181";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1053:6:181";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1061:1:181";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1064:1:181";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1067:1:181";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1070:1:181";
                                        readonly type: "";
                                        readonly value: "0";
                                    }];
                                    readonly functionName: {
                                        readonly name: "call";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1037:4:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1037:35:181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "1026:7:181";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73727;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1053:6:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73731;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1026:7:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73725;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1049:2:181";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73733;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "937:145:181";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73735;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73731;
                                readonly src: "1100:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4554485f5452414e534645525f4641494c4544";
                                readonly id: 73736;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1109:21:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29";
                                    readonly typeString: "literal_string \"ETH_TRANSFER_FAILED\"";
                                };
                                readonly value: "ETH_TRANSFER_FAILED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_d383913ea1996930a2623a0d739b8fc033c734c1d71d4759d3ccba1d3a719c29";
                                    readonly typeString: "literal_string \"ETH_TRANSFER_FAILED\"";
                                }];
                                readonly id: 73734;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1092:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73737;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1092:39:181";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73738;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1092:39:181";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferETH";
                readonly nameLocation: "808:15:181";
                readonly parameters: {
                    readonly id: 73728;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73725;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "832:2:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73740;
                        readonly src: "824:10:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73724;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "824:7:181";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73727;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "844:6:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73740;
                        readonly src: "836:14:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73726;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "836:7:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "823:28:181";
                };
                readonly returnParameters: {
                    readonly id: 73729;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "861:0:181";
                };
                readonly scope: 73803;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73762;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1328:1782:181";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73761;
                    readonly nodeType: "Block";
                    readonly src: "1456:1654:181";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73753];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73753;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1471:7:181";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73761;
                            readonly src: "1466:12:181";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73752;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1466:4:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73754;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1466:12:181";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1541:1512:181";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "1605:36:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1636:4:181";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1630:5:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1630:11:181";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "1609:17:181";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1759:17:181";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1778:66:181";
                                        readonly type: "";
                                        readonly value: "0x23b872dd00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1752:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1752:93:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1752:93:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1869:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1888:1:181";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1865:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1865:25:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "from";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1896:4:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1902:42:181";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1892:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1892:53:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1858:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1858:88:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1858:88:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2010:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2029:2:181";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2006:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2006:26:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2038:2:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2042:42:181";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2034:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2034:51:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1999:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1999:87:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1999:87:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2148:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2167:2:181";
                                            readonly type: "";
                                            readonly value: "68";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2144:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2144:26:181";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2172:6:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2137:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2137:42:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "2137:42:181";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2276:767:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "2503:1:181";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2497:5:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2497:8:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2507:1:181";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2494:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2494:15:181";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2514:14:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2514:16:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2532:2:181";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2511:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2511:24:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2490:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2490:46:181";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2545:14:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2545:16:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2538:6:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2538:24:181";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2487:2:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2487:76:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2982:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2982:5:181";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2989:5:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2996:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2999:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3018:3:181";
                                            readonly type: "";
                                            readonly value: "100";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3023:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3026:2:181";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2977:4:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2977:52:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2287:3:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2287:756:181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2276:7:181";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73749;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2172:6:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73745;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1896:4:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73753;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2276:7:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73747;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2038:2:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73743;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2989:5:181";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73755;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1532:1521:181";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73757;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73753;
                                readonly src: "3071:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f46524f4d5f4641494c4544";
                                readonly id: 73758;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3080:22:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7";
                                    readonly typeString: "literal_string \"TRANSFER_FROM_FAILED\"";
                                };
                                readonly value: "TRANSFER_FROM_FAILED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_77631768048ee92f9dcf4b9b9d762877d6b9723214862c733f0596708fc219b7";
                                    readonly typeString: "literal_string \"TRANSFER_FROM_FAILED\"";
                                }];
                                readonly id: 73756;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3063:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73759;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3063:40:181";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73760;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3063:40:181";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1337:16:181";
                readonly parameters: {
                    readonly id: 73750;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73743;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1369:5:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73762;
                        readonly src: "1363:11:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$73038";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73742;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73741;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["1363:5:181"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 73038;
                                readonly src: "1363:5:181";
                            };
                            readonly referencedDeclaration: 73038;
                            readonly src: "1363:5:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$73038";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73745;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1392:4:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73762;
                        readonly src: "1384:12:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73744;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1384:7:181";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73747;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1414:2:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73762;
                        readonly src: "1406:10:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73746;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1406:7:181";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73749;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1434:6:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73762;
                        readonly src: "1426:14:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73748;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1426:7:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1353:93:181";
                };
                readonly returnParameters: {
                    readonly id: 73751;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1456:0:181";
                };
                readonly scope: 73803;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73782;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3116:1607:181";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73781;
                    readonly nodeType: "Block";
                    readonly src: "3218:1505:181";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73773];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73773;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3233:7:181";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73781;
                            readonly src: "3228:12:181";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73772;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3228:4:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73774;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3228:12:181";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "3303:1368:181";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "3367:36:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3398:4:181";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3392:5:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3392:11:181";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "3371:17:181";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3521:17:181";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3540:66:181";
                                        readonly type: "";
                                        readonly value: "0xa9059cbb00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3514:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3514:93:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3514:93:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3631:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3650:1:181";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3627:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3627:25:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3658:2:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3662:42:181";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3654:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3654:51:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3620:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3620:86:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3620:86:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3768:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3787:2:181";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3764:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3764:26:181";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3792:6:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3757:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3757:42:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3757:42:181";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "3896:765:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "4123:1:181";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4117:5:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4117:8:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4127:1:181";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4114:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4114:15:181";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4134:14:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4134:16:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4152:2:181";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4131:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4131:24:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4110:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4110:46:181";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4165:14:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4165:16:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4158:6:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4158:24:181";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4107:2:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4107:76:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4601:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4601:5:181";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4608:5:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4615:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4618:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4637:2:181";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4641:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4644:2:181";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4596:4:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4596:51:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3907:3:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3907:754:181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3896:7:181";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73769;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3792:6:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73773;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3896:7:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73767;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3658:2:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73765;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4608:5:181";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73775;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "3294:1377:181";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73777;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73773;
                                readonly src: "4689:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f4641494c4544";
                                readonly id: 73778;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4698:17:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72";
                                    readonly typeString: "literal_string \"TRANSFER_FAILED\"";
                                };
                                readonly value: "TRANSFER_FAILED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72";
                                    readonly typeString: "literal_string \"TRANSFER_FAILED\"";
                                }];
                                readonly id: 73776;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4681:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73779;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4681:35:181";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73780;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4681:35:181";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "3125:12:181";
                readonly parameters: {
                    readonly id: 73770;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73765;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3153:5:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73782;
                        readonly src: "3147:11:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$73038";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73764;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73763;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["3147:5:181"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 73038;
                                readonly src: "3147:5:181";
                            };
                            readonly referencedDeclaration: 73038;
                            readonly src: "3147:5:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$73038";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73767;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "3176:2:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73782;
                        readonly src: "3168:10:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73766;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3168:7:181";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73769;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "3196:6:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73782;
                        readonly src: "3188:14:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73768;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3188:7:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3137:71:181";
                };
                readonly returnParameters: {
                    readonly id: 73771;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3218:0:181";
                };
                readonly scope: 73803;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73802;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4729:1605:181";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73801;
                    readonly nodeType: "Block";
                    readonly src: "4830:1504:181";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73793];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73793;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4845:7:181";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73801;
                            readonly src: "4840:12:181";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73792;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4840:4:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73794;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4840:12:181";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "4915:1368:181";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "4979:36:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5010:4:181";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5004:5:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5004:11:181";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "4983:17:181";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5133:17:181";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5152:66:181";
                                        readonly type: "";
                                        readonly value: "0x095ea7b300000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5126:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5126:93:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5126:93:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5243:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5262:1:181";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5239:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5239:25:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5270:2:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5274:42:181";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5266:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5266:51:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5232:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5232:86:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5232:86:181";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5380:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5399:2:181";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5376:3:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5376:26:181";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5404:6:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5369:6:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5369:42:181";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5369:42:181";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5508:765:181";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "5735:1:181";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5729:5:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5729:8:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5739:1:181";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5726:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5726:15:181";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5746:14:181";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5746:16:181";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5764:2:181";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5743:2:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5743:24:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5722:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5722:46:181";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5777:14:181";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5777:16:181";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5770:6:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5770:24:181";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5719:2:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5719:76:181";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6213:3:181";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6213:5:181";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6220:5:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6227:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6230:17:181";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6249:2:181";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6253:1:181";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6256:2:181";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6208:4:181";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6208:51:181";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5519:3:181";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5519:754:181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5508:7:181";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73789;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5404:6:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73793;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5508:7:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73787;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5270:2:181";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73785;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6220:5:181";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73795;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "4906:1377:181";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73797;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73793;
                                readonly src: "6301:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "415050524f56455f4641494c4544";
                                readonly id: 73798;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6310:16:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2";
                                    readonly typeString: "literal_string \"APPROVE_FAILED\"";
                                };
                                readonly value: "APPROVE_FAILED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_cd400c5237ae346977ee020ef8d0d26a880c07edf7eba69a8848f0d31e9a88f2";
                                    readonly typeString: "literal_string \"APPROVE_FAILED\"";
                                }];
                                readonly id: 73796;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6293:7:181";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73799;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6293:34:181";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73800;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6293:34:181";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeApprove";
                readonly nameLocation: "4738:11:181";
                readonly parameters: {
                    readonly id: 73790;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73785;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4765:5:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73802;
                        readonly src: "4759:11:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$73038";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73784;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73783;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["4759:5:181"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 73038;
                                readonly src: "4759:5:181";
                            };
                            readonly referencedDeclaration: 73038;
                            readonly src: "4759:5:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$73038";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73787;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "4788:2:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73802;
                        readonly src: "4780:10:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73786;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4780:7:181";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73789;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "4808:6:181";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73802;
                        readonly src: "4800:14:181";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73788;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4800:7:181";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4749:71:181";
                };
                readonly returnParameters: {
                    readonly id: 73791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4830:0:181";
                };
                readonly scope: 73803;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "SafeTransferLib";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 73723;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "112:474:181";
                readonly text: "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [73803];
            readonly name: "SafeTransferLib";
            readonly nameLocation: "594:15:181";
            readonly scope: 73804;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 181;
};
//# sourceMappingURL=SafeTransferLib.d.ts.map