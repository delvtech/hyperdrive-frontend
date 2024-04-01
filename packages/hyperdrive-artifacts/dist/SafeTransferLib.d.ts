export declare const SafeTransferLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a7c08fae4c1bbb9ef98642b1922f8c6467cdc5b8a01102ce5d692c01aa4623c164736f6c63430008140033";
        readonly sourceMap: "586:5750:175:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;586:5750:175;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a7c08fae4c1bbb9ef98642b1922f8c6467cdc5b8a01102ce5d692c01aa4623c164736f6c63430008140033";
        readonly sourceMap: "586:5750:175:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\",\"details\":\"Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}";
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
        readonly id: 73305;
        readonly exportedSymbols: {
            readonly ERC20: readonly [72539];
            readonly SafeTransferLib: readonly [73304];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:6295:175";
        readonly nodes: readonly [{
            readonly id: 73221;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:175";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 73223;
            readonly nodeType: "ImportDirective";
            readonly src: "68:42:175";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/solmate/src/tokens/ERC20.sol";
            readonly file: "../tokens/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 73305;
            readonly sourceUnit: 72540;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 73222;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72539;
                    readonly src: "76:5:175";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 73304;
            readonly nodeType: "ContractDefinition";
            readonly src: "586:5750:175";
            readonly nodes: readonly [{
                readonly id: 73241;
                readonly nodeType: "FunctionDefinition";
                readonly src: "799:339:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73240;
                    readonly nodeType: "Block";
                    readonly src: "861:277:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73232];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73232;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "876:7:175";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73240;
                            readonly src: "871:12:175";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73231;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "871:4:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73233;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "871:12:175";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "946:136:175";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "1026:46:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [];
                                        readonly functionName: {
                                            readonly name: "gas";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1042:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1042:5:175";
                                    }, {
                                        readonly name: "to";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1049:2:175";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1053:6:175";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1061:1:175";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1064:1:175";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1067:1:175";
                                        readonly type: "";
                                        readonly value: "0";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1070:1:175";
                                        readonly type: "";
                                        readonly value: "0";
                                    }];
                                    readonly functionName: {
                                        readonly name: "call";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1037:4:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1037:35:175";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "1026:7:175";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73228;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1053:6:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73232;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1026:7:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73226;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1049:2:175";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73234;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "937:145:175";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73236;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73232;
                                readonly src: "1100:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "4554485f5452414e534645525f4641494c4544";
                                readonly id: 73237;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1109:21:175";
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
                                readonly id: 73235;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1092:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73238;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1092:39:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73239;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1092:39:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferETH";
                readonly nameLocation: "808:15:175";
                readonly parameters: {
                    readonly id: 73229;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73226;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "832:2:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73241;
                        readonly src: "824:10:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73225;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "824:7:175";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73228;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "844:6:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73241;
                        readonly src: "836:14:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73227;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "836:7:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "823:28:175";
                };
                readonly returnParameters: {
                    readonly id: 73230;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "861:0:175";
                };
                readonly scope: 73304;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73263;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1328:1782:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73262;
                    readonly nodeType: "Block";
                    readonly src: "1456:1654:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73254];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73254;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1471:7:175";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73262;
                            readonly src: "1466:12:175";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73253;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1466:4:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73255;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1466:12:175";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1541:1512:175";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "1605:36:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1636:4:175";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1630:5:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1630:11:175";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "1609:17:175";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1759:17:175";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "1778:66:175";
                                        readonly type: "";
                                        readonly value: "0x23b872dd00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1752:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1752:93:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1752:93:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1869:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1888:1:175";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1865:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1865:25:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "from";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1896:4:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1902:42:175";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1892:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1892:53:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1858:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1858:88:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1858:88:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2010:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2029:2:175";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2006:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2006:26:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2038:2:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2042:42:175";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2034:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2034:51:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1999:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1999:87:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "1999:87:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2148:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2167:2:175";
                                            readonly type: "";
                                            readonly value: "68";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2144:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2144:26:175";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2172:6:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2137:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2137:42:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "2137:42:175";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2276:767:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "2503:1:175";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2497:5:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2497:8:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2507:1:175";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2494:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2494:15:175";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2514:14:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2514:16:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "2532:2:175";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2511:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2511:24:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2490:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2490:46:175";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2545:14:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2545:16:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2538:6:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2538:24:175";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2487:2:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2487:76:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2982:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2982:5:175";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2989:5:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2996:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2999:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3018:3:175";
                                            readonly type: "";
                                            readonly value: "100";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3023:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3026:2:175";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2977:4:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2977:52:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2287:3:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2287:756:175";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2276:7:175";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73250;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2172:6:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73246;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1896:4:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73254;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2276:7:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73248;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2038:2:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73244;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2989:5:175";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73256;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1532:1521:175";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73258;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73254;
                                readonly src: "3071:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f46524f4d5f4641494c4544";
                                readonly id: 73259;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3080:22:175";
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
                                readonly id: 73257;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3063:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73260;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3063:40:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73261;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3063:40:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1337:16:175";
                readonly parameters: {
                    readonly id: 73251;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73244;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1369:5:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73263;
                        readonly src: "1363:11:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$72539";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73243;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73242;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["1363:5:175"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72539;
                                readonly src: "1363:5:175";
                            };
                            readonly referencedDeclaration: 72539;
                            readonly src: "1363:5:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$72539";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73246;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1392:4:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73263;
                        readonly src: "1384:12:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73245;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1384:7:175";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73248;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1414:2:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73263;
                        readonly src: "1406:10:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73247;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1406:7:175";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73250;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1434:6:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73263;
                        readonly src: "1426:14:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73249;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1426:7:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1353:93:175";
                };
                readonly returnParameters: {
                    readonly id: 73252;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1456:0:175";
                };
                readonly scope: 73304;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73283;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3116:1607:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73282;
                    readonly nodeType: "Block";
                    readonly src: "3218:1505:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73274];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73274;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3233:7:175";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73282;
                            readonly src: "3228:12:175";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73273;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3228:4:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73275;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3228:12:175";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "3303:1368:175";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "3367:36:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3398:4:175";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3392:5:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3392:11:175";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "3371:17:175";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3521:17:175";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3540:66:175";
                                        readonly type: "";
                                        readonly value: "0xa9059cbb00000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3514:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3514:93:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3514:93:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3631:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3650:1:175";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3627:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3627:25:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3658:2:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3662:42:175";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3654:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3654:51:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3620:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3620:86:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3620:86:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3768:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3787:2:175";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3764:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3764:26:175";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3792:6:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3757:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3757:42:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "3757:42:175";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "3896:765:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "4123:1:175";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4117:5:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4117:8:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4127:1:175";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4114:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4114:15:175";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4134:14:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "4134:16:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "4152:2:175";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4131:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4131:24:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4110:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4110:46:175";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "4165:14:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "4165:16:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4158:6:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4158:24:175";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4107:2:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4107:76:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "4601:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "4601:5:175";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4608:5:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4615:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4618:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4637:2:175";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4641:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "4644:2:175";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "4596:4:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "4596:51:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3907:3:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3907:754:175";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3896:7:175";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73270;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3792:6:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73274;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3896:7:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73268;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3658:2:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73266;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4608:5:175";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73276;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "3294:1377:175";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73278;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73274;
                                readonly src: "4689:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "5452414e534645525f4641494c4544";
                                readonly id: 73279;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4698:17:175";
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
                                readonly id: 73277;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4681:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73280;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4681:35:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73281;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4681:35:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "3125:12:175";
                readonly parameters: {
                    readonly id: 73271;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73266;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3153:5:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73283;
                        readonly src: "3147:11:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$72539";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73265;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73264;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["3147:5:175"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72539;
                                readonly src: "3147:5:175";
                            };
                            readonly referencedDeclaration: 72539;
                            readonly src: "3147:5:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$72539";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73268;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "3176:2:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73283;
                        readonly src: "3168:10:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73267;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3168:7:175";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73270;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "3196:6:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73283;
                        readonly src: "3188:14:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73269;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3188:7:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3137:71:175";
                };
                readonly returnParameters: {
                    readonly id: 73272;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3218:0:175";
                };
                readonly scope: 73304;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73303;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4729:1605:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73302;
                    readonly nodeType: "Block";
                    readonly src: "4830:1504:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [73294];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 73294;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4845:7:175";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 73302;
                            readonly src: "4840:12:175";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 73293;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4840:4:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 73295;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4840:12:175";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "4915:1368:175";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "4979:36:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5010:4:175";
                                        readonly type: "";
                                        readonly value: "0x40";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mload";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5004:5:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5004:11:175";
                                };
                                readonly variables: readonly [{
                                    readonly name: "freeMemoryPointer";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "4983:17:175";
                                    readonly type: "";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "freeMemoryPointer";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5133:17:175";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "5152:66:175";
                                        readonly type: "";
                                        readonly value: "0x095ea7b300000000000000000000000000000000000000000000000000000000";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5126:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5126:93:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5126:93:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5243:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5262:1:175";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5239:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5239:25:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "to";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5270:2:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5274:42:175";
                                            readonly type: "";
                                            readonly value: "0xffffffffffffffffffffffffffffffffffffffff";
                                        }];
                                        readonly functionName: {
                                            readonly name: "and";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5266:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5266:51:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5232:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5232:86:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5232:86:175";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5380:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "5399:2:175";
                                            readonly type: "";
                                            readonly value: "36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5376:3:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5376:26:175";
                                    }, {
                                        readonly name: "amount";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5404:6:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5369:6:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5369:42:175";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5369:42:175";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5508:765:175";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly kind: "number";
                                                        readonly nodeType: "YulLiteral";
                                                        readonly src: "5735:1:175";
                                                        readonly type: "";
                                                        readonly value: "0";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "mload";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5729:5:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5729:8:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5739:1:175";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "eq";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5726:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5726:15:175";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly functionName: {
                                                        readonly name: "returndatasize";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "5746:14:175";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "5746:16:175";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "5764:2:175";
                                                    readonly type: "";
                                                    readonly value: "31";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "gt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5743:2:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5743:24:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "and";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5722:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5722:46:175";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly functionName: {
                                                    readonly name: "returndatasize";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "5777:14:175";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "5777:16:175";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "5770:6:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "5770:24:175";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5719:2:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5719:76:175";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [];
                                            readonly functionName: {
                                                readonly name: "gas";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6213:3:175";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6213:5:175";
                                        }, {
                                            readonly name: "token";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6220:5:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6227:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly name: "freeMemoryPointer";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6230:17:175";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6249:2:175";
                                            readonly type: "";
                                            readonly value: "68";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6253:1:175";
                                            readonly type: "";
                                            readonly value: "0";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6256:2:175";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "call";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6208:4:175";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6208:51:175";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5519:3:175";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5519:754:175";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "success";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5508:7:175";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73290;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5404:6:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73294;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5508:7:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73288;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5270:2:175";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73286;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6220:5:175";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73296;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "4906:1377:175";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73298;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73294;
                                readonly src: "6301:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "415050524f56455f4641494c4544";
                                readonly id: 73299;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6310:16:175";
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
                                readonly id: 73297;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "6293:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 73300;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6293:34:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73301;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6293:34:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeApprove";
                readonly nameLocation: "4738:11:175";
                readonly parameters: {
                    readonly id: 73291;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73286;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4765:5:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73303;
                        readonly src: "4759:11:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_ERC20_$72539";
                            readonly typeString: "contract ERC20";
                        };
                        readonly typeName: {
                            readonly id: 73285;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 73284;
                                readonly name: "ERC20";
                                readonly nameLocations: readonly ["4759:5:175"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72539;
                                readonly src: "4759:5:175";
                            };
                            readonly referencedDeclaration: 72539;
                            readonly src: "4759:5:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_ERC20_$72539";
                                readonly typeString: "contract ERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73288;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "4788:2:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73303;
                        readonly src: "4780:10:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 73287;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4780:7:175";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73290;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "4808:6:175";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73303;
                        readonly src: "4800:14:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73289;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4800:7:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4749:71:175";
                };
                readonly returnParameters: {
                    readonly id: 73292;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4830:0:175";
                };
                readonly scope: 73304;
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
                readonly id: 73224;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "112:474:175";
                readonly text: "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @dev Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.\n @dev Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [73304];
            readonly name: "SafeTransferLib";
            readonly nameLocation: "594:15:175";
            readonly scope: 73305;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 175;
};
//# sourceMappingURL=SafeTransferLib.d.ts.map