export declare const SafeTransferLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220286a006efc6c8a33b5de61931d83ab3c98f3c10c91b5f33ff587451031d9f5ce64736f6c63430008140033";
        readonly sourceMap: "586:5750:126:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5750:126;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220286a006efc6c8a33b5de61931d83ab3c98f3c10c91b5f33ff587451031d9f5ce64736f6c63430008140033";
        readonly sourceMap: "586:5750:126:-:0;;;;;;;;";
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
        readonly id: 68989;
        readonly exportedSymbols: {
            readonly ERC20: readonly [68223];
            readonly SafeTransferLib: readonly [68988];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:6295:126";
        readonly nodes: readonly [{
            readonly id: 68905;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:126";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 68907;
            readonly nodeType: "ImportDirective";
            readonly src: "68:42:126";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "../tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 68989;
            readonly sourceUnit: 68224;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 68906;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 68223;
                    readonly src: "76:5:126";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 68988;
            readonly nodeType: "ContractDefinition";
            readonly src: "586:5750:126";
            readonly nodes: readonly [{
                readonly id: 68925;
                readonly nodeType: "FunctionDefinition";
                readonly src: "799:339:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68924;
                    readonly nodeType: "Block";
                    readonly src: "861:277:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [68916];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 68916;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "876:7:126";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 68924;
                            readonly src: "871:12:126";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 68915;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "871:4:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 68917;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "871:12:126";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "946:136:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "1026:46:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [];
                                        readonly functionName: {
                                            readonly name: "gas";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1042:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1042:5:126";
                                    }, {
                                        readonly name: "to";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1049:2:126";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1053:6:126";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1061:1:126";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1064:1:126";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1067:1:126";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1070:1:126";
                                        readonly type: "";
                                        readonly value: "0";
                                    }];
                                    readonly functionName: {
                                        readonly name: "call";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1037:4:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1037:35:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "1026:7:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68912;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1053:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68916;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1026:7:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68910;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1049:2:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68918;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "937:145:126";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68920;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68916;
                                readonly src: "1100:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4554485f5452414e534645525f4641494c4544";
                                readonly id: 68921;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1109:21:126";
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
                                readonly id: 68919;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1092:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 68922;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1092:39:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68923;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1092:39:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferETH";
                readonly nameLocation: "808:15:126";
                readonly parameters: {
                    readonly id: 68913;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68910;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "832:2:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68925;
                        readonly src: "824:10:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68909;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "824:7:126";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68912;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "844:6:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68925;
                        readonly src: "836:14:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68911;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "836:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "823:28:126";
                };
                readonly returnParameters: {
                    readonly id: 68914;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "861:0:126";
                };
                readonly scope: 68988;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68947;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1328:1782:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68946;
                    readonly nodeType: "Block";
                    readonly src: "1456:1654:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [68938];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 68938;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1471:7:126";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 68946;
                            readonly src: "1466:12:126";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 68937;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1466:4:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 68939;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1466:12:126";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1541:1512:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "1605:36:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1636:4:126";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1630:5:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1630:11:126";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "1609:17:126";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1759:17:126";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1778:66:126";
                                        readonly type: "";
                                        readonly value: "0x23b872dd00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1752:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1752:93:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1752:93:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1869:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1888:1:126";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1865:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1865:25:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "from";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1896:4:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1902:42:126";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1892:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1892:53:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1858:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1858:88:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1858:88:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2010:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2029:2:126";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2006:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2006:26:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2038:2:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2042:42:126";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2034:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2034:51:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1999:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1999:87:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1999:87:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2148:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2167:2:126";
                                            readonly type: "";
                                            readonly value: "68";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2144:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2144:26:126";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2172:6:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2137:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2137:42:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "2137:42:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2276:767:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "2503:1:126";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2497:5:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2497:8:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2507:1:126";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2494:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2494:15:126";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2514:14:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2514:16:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2532:2:126";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2511:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2511:24:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2490:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2490:46:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2545:14:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2545:16:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2538:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2538:24:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2487:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2487:76:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2982:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2982:5:126";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2989:5:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2996:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2999:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3018:3:126";
                                            readonly type: "";
                                            readonly value: "100";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3023:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3026:2:126";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2977:4:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2977:52:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2287:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2287:756:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2276:7:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68934;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2172:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68930;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1896:4:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68938;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2276:7:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68932;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2038:2:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68928;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2989:5:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68940;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1532:1521:126";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68942;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68938;
                                readonly src: "3071:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f46524f4d5f4641494c4544";
                                readonly id: 68943;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3080:22:126";
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
                                readonly id: 68941;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3063:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 68944;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3063:40:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68945;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3063:40:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1337:16:126";
                readonly parameters: {
                    readonly id: 68935;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68928;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1369:5:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68947;
                        readonly src: "1363:11:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$68223";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 68927;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 68926;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["1363:5:126"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 68223;
                                readonly src: "1363:5:126";
                            };
                            readonly referencedDeclaration: 68223;
                            readonly src: "1363:5:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$68223";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68930;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1392:4:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68947;
                        readonly src: "1384:12:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68929;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1384:7:126";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68932;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1414:2:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68947;
                        readonly src: "1406:10:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68931;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1406:7:126";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68934;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1434:6:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68947;
                        readonly src: "1426:14:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68933;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1426:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1353:93:126";
                };
                readonly returnParameters: {
                    readonly id: 68936;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1456:0:126";
                };
                readonly scope: 68988;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68967;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3116:1607:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68966;
                    readonly nodeType: "Block";
                    readonly src: "3218:1505:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [68958];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 68958;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3233:7:126";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 68966;
                            readonly src: "3228:12:126";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 68957;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3228:4:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 68959;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3228:12:126";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "3303:1368:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "3367:36:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3398:4:126";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3392:5:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3392:11:126";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "3371:17:126";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3521:17:126";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3540:66:126";
                                        readonly type: "";
                                        readonly value: "0xa9059cbb00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3514:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3514:93:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3514:93:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3631:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3650:1:126";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3627:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3627:25:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3658:2:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3662:42:126";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3654:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3654:51:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3620:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3620:86:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3620:86:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3768:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3787:2:126";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3764:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3764:26:126";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3792:6:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3757:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3757:42:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3757:42:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "3896:765:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "4123:1:126";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4117:5:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4117:8:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4127:1:126";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4114:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4114:15:126";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4134:14:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4134:16:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4152:2:126";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4131:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4131:24:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4110:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4110:46:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4165:14:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4165:16:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4158:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4158:24:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4107:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4107:76:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4601:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4601:5:126";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4608:5:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4615:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4618:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4637:2:126";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4641:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4644:2:126";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4596:4:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4596:51:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3907:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3907:754:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3896:7:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68954;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3792:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68958;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3896:7:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68952;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3658:2:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68950;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4608:5:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68960;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "3294:1377:126";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68962;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68958;
                                readonly src: "4689:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f4641494c4544";
                                readonly id: 68963;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4698:17:126";
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
                                readonly id: 68961;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4681:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 68964;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4681:35:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68965;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4681:35:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "3125:12:126";
                readonly parameters: {
                    readonly id: 68955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68950;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3153:5:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68967;
                        readonly src: "3147:11:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$68223";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 68949;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 68948;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["3147:5:126"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 68223;
                                readonly src: "3147:5:126";
                            };
                            readonly referencedDeclaration: 68223;
                            readonly src: "3147:5:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$68223";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68952;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "3176:2:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68967;
                        readonly src: "3168:10:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68951;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3168:7:126";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68954;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "3196:6:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68967;
                        readonly src: "3188:14:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68953;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3188:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3137:71:126";
                };
                readonly returnParameters: {
                    readonly id: 68956;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3218:0:126";
                };
                readonly scope: 68988;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68987;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4729:1605:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68986;
                    readonly nodeType: "Block";
                    readonly src: "4830:1504:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [68978];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 68978;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4845:7:126";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 68986;
                            readonly src: "4840:12:126";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 68977;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4840:4:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 68979;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4840:12:126";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "4915:1368:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "4979:36:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5010:4:126";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5004:5:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5004:11:126";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "4983:17:126";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5133:17:126";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5152:66:126";
                                        readonly type: "";
                                        readonly value: "0x095ea7b300000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5126:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5126:93:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5126:93:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5243:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5262:1:126";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5239:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5239:25:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5270:2:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5274:42:126";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5266:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5266:51:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5232:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5232:86:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5232:86:126";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5380:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5399:2:126";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5376:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5376:26:126";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5404:6:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5369:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5369:42:126";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5369:42:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5508:765:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "5735:1:126";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5729:5:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5729:8:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5739:1:126";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5726:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5726:15:126";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5746:14:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5746:16:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5764:2:126";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5743:2:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5743:24:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5722:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5722:46:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5777:14:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5777:16:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5770:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5770:24:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5719:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5719:76:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6213:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6213:5:126";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6220:5:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6227:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6230:17:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6249:2:126";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6253:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6256:2:126";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6208:4:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6208:51:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5519:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5519:754:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5508:7:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68974;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5404:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68978;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5508:7:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68972;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5270:2:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68970;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6220:5:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68980;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "4906:1377:126";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68982;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68978;
                                readonly src: "6301:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "415050524f56455f4641494c4544";
                                readonly id: 68983;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6310:16:126";
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
                                readonly id: 68981;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6293:7:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 68984;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6293:34:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68985;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6293:34:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeApprove";
                readonly nameLocation: "4738:11:126";
                readonly parameters: {
                    readonly id: 68975;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68970;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4765:5:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68987;
                        readonly src: "4759:11:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$68223";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 68969;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 68968;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["4759:5:126"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 68223;
                                readonly src: "4759:5:126";
                            };
                            readonly referencedDeclaration: 68223;
                            readonly src: "4759:5:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$68223";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68972;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "4788:2:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68987;
                        readonly src: "4780:10:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 68971;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4780:7:126";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68974;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "4808:6:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68987;
                        readonly src: "4800:14:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68973;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4800:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4749:71:126";
                };
                readonly returnParameters: {
                    readonly id: 68976;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4830:0:126";
                };
                readonly scope: 68988;
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
                readonly id: 68908;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "112:474:126";
                readonly text: "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [68988];
            readonly name: "SafeTransferLib";
            readonly nameLocation: "594:15:126";
            readonly scope: 68989;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 126;
};
//# sourceMappingURL=SafeTransferLib.d.ts.map