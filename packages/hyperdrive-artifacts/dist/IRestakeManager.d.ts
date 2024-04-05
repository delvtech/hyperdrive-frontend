export declare const IRestakeManager: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "calculateTVLs";
        readonly outputs: readonly [{
            readonly internalType: "uint256[][]";
            readonly name: "";
            readonly type: "uint256[][]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "depositETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ezETH";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renzoOracle";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
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
    readonly methodIdentifiers: {
        readonly "calculateTVLs()": "ff9969cd";
        readonly "depositETH()": "f6326fb3";
        readonly "ezETH()": "13a73c78";
        readonly "renzoOracle()": "892866a4";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"calculateTVLs\",\"outputs\":[{\"internalType\":\"uint256[][]\",\"name\":\"\",\"type\":\"uint256[][]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"depositETH\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ezETH\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renzoOracle\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"calculateTVLs()\":{\"details\":\"This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\",\"returns\":{\"_0\":\"operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\",\"_1\":\"operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\",\"_2\":\"totalTVL The total TVL across all operator delegators.\"}},\"depositETH()\":{\"details\":\"Convenience function to deposit without a referral ID and backwards compatibility\"},\"ezETH()\":{\"details\":\"Getter for public state variable of the ezETH token contract address\"},\"renzoOracle()\":{\"details\":\"Getter for public state variable of the renzo oracle contract address\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"depositETH()\":{\"notice\":\"Allows a user to deposit ETH into the protocol and get back ezETH\"},\"ezETH()\":{\"notice\":\"Returns the ezETH token contract address\"},\"renzoOracle()\":{\"notice\":\"Returns the renzo oracle contract address\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRenzo.sol\":\"IRestakeManager\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IRenzo.sol\":{\"keccak256\":\"0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d\",\"dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "calculateTVLs";
                readonly outputs: readonly [{
                    readonly internalType: "uint256[][]";
                    readonly name: "";
                    readonly type: "uint256[][]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "depositETH";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "ezETH";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "renzoOracle";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "calculateTVLs()": {
                        readonly details: "This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.";
                        readonly returns: {
                            readonly _0: "operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array";
                            readonly _1: "operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array";
                            readonly _2: "totalTVL The total TVL across all operator delegators.";
                        };
                    };
                    readonly "depositETH()": {
                        readonly details: "Convenience function to deposit without a referral ID and backwards compatibility";
                    };
                    readonly "ezETH()": {
                        readonly details: "Getter for public state variable of the ezETH token contract address";
                    };
                    readonly "renzoOracle()": {
                        readonly details: "Getter for public state variable of the renzo oracle contract address";
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "depositETH()": {
                        readonly notice: "Allows a user to deposit ETH into the protocol and get back ezETH";
                    };
                    readonly "ezETH()": {
                        readonly notice: "Returns the ezETH token contract address";
                    };
                    readonly "renzoOracle()": {
                        readonly notice: "Returns the renzo oracle contract address";
                    };
                };
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
                readonly "contracts/src/interfaces/IRenzo.sol": "IRestakeManager";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IRenzo.sol": {
                readonly keccak256: "0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00";
                readonly urls: readonly ["bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d", "dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IRenzo.sol";
        readonly id: 11827;
        readonly exportedSymbols: {
            readonly IDepositQueue: readonly [11826];
            readonly IERC20: readonly [9810];
            readonly IRenzoOracle: readonly [11815];
            readonly IRestakeManager: readonly [11760];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2264:103";
        readonly nodes: readonly [{
            readonly id: 11728;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:103";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11730;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:103";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11827;
            readonly sourceUnit: 9811;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11729;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9810;
                    readonly src: "73:6:103";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11760;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:1246:103";
            readonly nodes: readonly [{
                readonly id: 11736;
                readonly nodeType: "FunctionDefinition";
                readonly src: "289:49:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11731;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "136:148:103";
                    readonly text: " @notice Returns the ezETH token contract address\n @dev Getter for public state variable of the ezETH token contract address";
                };
                readonly functionSelector: "13a73c78";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ezETH";
                readonly nameLocation: "298:5:103";
                readonly parameters: {
                    readonly id: 11732;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "303:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11735;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11734;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11736;
                        readonly src: "329:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11733;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "329:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "328:9:103";
                };
                readonly scope: 11760;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11742;
                readonly nodeType: "FunctionDefinition";
                readonly src: "499:55:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11737;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "344:150:103";
                    readonly text: " @notice Returns the renzo oracle contract address\n @dev Getter for public state variable of the renzo oracle contract address";
                };
                readonly functionSelector: "892866a4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "renzoOracle";
                readonly nameLocation: "508:11:103";
                readonly parameters: {
                    readonly id: 11738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "519:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11741;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11740;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11742;
                        readonly src: "545:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11739;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "545:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "544:9:103";
                };
                readonly scope: 11760;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11746;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:39:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11743;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "560:191:103";
                    readonly text: " @notice  Allows a user to deposit ETH into the protocol and get back ezETH\n @dev     Convenience function to deposit without a referral ID and backwards compatibility";
                };
                readonly functionSelector: "f6326fb3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETH";
                readonly nameLocation: "765:10:103";
                readonly parameters: {
                    readonly id: 11744;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "775:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11745;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "794:0:103";
                };
                readonly scope: 11760;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11759;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:119:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11747;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "801:423:103";
                    readonly text: "@dev This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\n @return operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\n @return operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\n @return totalTVL The total TVL across all operator delegators.";
                };
                readonly functionSelector: "ff9969cd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTVLs";
                readonly nameLocation: "1238:13:103";
                readonly parameters: {
                    readonly id: 11748;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1251:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11758;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11752;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11759;
                        readonly src: "1301:18:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "uint256[][]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly baseType: {
                                    readonly id: 11749;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1301:7:103";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 11750;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "1301:9:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                    readonly typeString: "uint256[]";
                                };
                            };
                            readonly id: 11751;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1301:11:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_storage_$dyn_storage_ptr";
                                readonly typeString: "uint256[][]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11755;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11759;
                        readonly src: "1321:16:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11753;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1321:7:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 11754;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1321:9:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11757;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11759;
                        readonly src: "1339:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11756;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1300:47:103";
                };
                readonly scope: 11760;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRestakeManager";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11760];
            readonly name: "IRestakeManager";
            readonly nameLocation: "114:15:103";
            readonly scope: 11827;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 11815;
            readonly nodeType: "ContractDefinition";
            readonly src: "1352:784:103";
            readonly nodes: readonly [{
                readonly id: 11770;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1381:113:103";
                readonly nodes: readonly [];
                readonly functionSelector: "0052e3fd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValue";
                readonly nameLocation: "1390:16:103";
                readonly parameters: {
                    readonly id: 11766;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11763;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1423:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11770;
                        readonly src: "1416:13:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 11762;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11761;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1416:6:103"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 9810;
                                readonly src: "1416:6:103";
                            };
                            readonly referencedDeclaration: 9810;
                            readonly src: "1416:6:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11765;
                        readonly mutability: "mutable";
                        readonly name: "_balance";
                        readonly nameLocation: "1447:8:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11770;
                        readonly src: "1439:16:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11764;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1439:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1406:55:103";
                };
                readonly returnParameters: {
                    readonly id: 11769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11768;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11770;
                        readonly src: "1485:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11767;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1485:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1484:9:103";
                };
                readonly scope: 11815;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11780;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1500:121:103";
                readonly nodes: readonly [];
                readonly functionSelector: "37933625";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenAmountFromValue";
                readonly nameLocation: "1509:26:103";
                readonly parameters: {
                    readonly id: 11776;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11773;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1552:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11780;
                        readonly src: "1545:13:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 11772;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11771;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1545:6:103"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 9810;
                                readonly src: "1545:6:103";
                            };
                            readonly referencedDeclaration: 9810;
                            readonly src: "1545:6:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11775;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1576:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11780;
                        readonly src: "1568:14:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11774;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1568:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1535:53:103";
                };
                readonly returnParameters: {
                    readonly id: 11779;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11778;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11780;
                        readonly src: "1612:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11777;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1611:9:103";
                };
                readonly scope: 11815;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11792;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1627:134:103";
                readonly nodes: readonly [];
                readonly functionSelector: "ba28a571";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValues";
                readonly nameLocation: "1636:17:103";
                readonly parameters: {
                    readonly id: 11788;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11784;
                        readonly mutability: "mutable";
                        readonly name: "_tokens";
                        readonly nameLocation: "1679:7:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11792;
                        readonly src: "1663:23:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_contract$_IERC20_$9810_$dyn_memory_ptr";
                            readonly typeString: "contract IERC20[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11782;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 11781;
                                    readonly name: "IERC20";
                                    readonly nameLocations: readonly ["1663:6:103"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 9810;
                                    readonly src: "1663:6:103";
                                };
                                readonly referencedDeclaration: 9810;
                                readonly src: "1663:6:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly id: 11783;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1663:8:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_contract$_IERC20_$9810_$dyn_storage_ptr";
                                readonly typeString: "contract IERC20[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11787;
                        readonly mutability: "mutable";
                        readonly name: "_balances";
                        readonly nameLocation: "1713:9:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11792;
                        readonly src: "1696:26:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11785;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1696:7:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 11786;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1696:9:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1653:75:103";
                };
                readonly returnParameters: {
                    readonly id: 11791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11790;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11792;
                        readonly src: "1752:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11789;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1752:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1751:9:103";
                };
                readonly scope: 11815;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11803;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1767:178:103";
                readonly nodes: readonly [];
                readonly functionSelector: "8f686e6a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMintAmount";
                readonly nameLocation: "1776:19:103";
                readonly parameters: {
                    readonly id: 11799;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11794;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "1813:23:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11803;
                        readonly src: "1805:31:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11793;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1805:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11796;
                        readonly mutability: "mutable";
                        readonly name: "_newValueAdded";
                        readonly nameLocation: "1854:14:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11803;
                        readonly src: "1846:22:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11795;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1846:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11798;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "1886:20:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11803;
                        readonly src: "1878:28:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11797;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1878:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1795:117:103";
                };
                readonly returnParameters: {
                    readonly id: 11802;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11801;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11803;
                        readonly src: "1936:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11800;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1936:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1935:9:103";
                };
                readonly scope: 11815;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11814;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1951:183:103";
                readonly nodes: readonly [];
                readonly functionSelector: "c5c83cb0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateRedeemAmount";
                readonly nameLocation: "1960:21:103";
                readonly parameters: {
                    readonly id: 11810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11805;
                        readonly mutability: "mutable";
                        readonly name: "_ezETHBeingBurned";
                        readonly nameLocation: "1999:17:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11814;
                        readonly src: "1991:25:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11804;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1991:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11807;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "2034:20:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11814;
                        readonly src: "2026:28:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11806;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2026:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11809;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "2072:23:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11814;
                        readonly src: "2064:31:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11808;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2064:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1981:120:103";
                };
                readonly returnParameters: {
                    readonly id: 11813;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11812;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11814;
                        readonly src: "2125:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11811;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2125:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2124:9:103";
                };
                readonly scope: 11815;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRenzoOracle";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11815];
            readonly name: "IRenzoOracle";
            readonly nameLocation: "1362:12:103";
            readonly scope: 11827;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 11826;
            readonly nodeType: "ContractDefinition";
            readonly src: "2138:164:103";
            readonly nodes: readonly [{
                readonly id: 11818;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2168:51:103";
                readonly nodes: readonly [];
                readonly functionSelector: "d123ccd5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETHFromProtocol";
                readonly nameLocation: "2177:22:103";
                readonly parameters: {
                    readonly id: 11816;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2199:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11817;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2218:0:103";
                };
                readonly scope: 11826;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11825;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2225:75:103";
                readonly nodes: readonly [];
                readonly functionSelector: "649aca4a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalEarned";
                readonly nameLocation: "2234:11:103";
                readonly parameters: {
                    readonly id: 11821;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11820;
                        readonly mutability: "mutable";
                        readonly name: "tokenAddress";
                        readonly nameLocation: "2254:12:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11825;
                        readonly src: "2246:20:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11819;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2246:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2245:22:103";
                };
                readonly returnParameters: {
                    readonly id: 11824;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11823;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11825;
                        readonly src: "2291:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11822;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2291:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2290:9:103";
                };
                readonly scope: 11826;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IDepositQueue";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11826];
            readonly name: "IDepositQueue";
            readonly nameLocation: "2148:13:103";
            readonly scope: 11827;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 103;
};
//# sourceMappingURL=IRestakeManager.d.ts.map