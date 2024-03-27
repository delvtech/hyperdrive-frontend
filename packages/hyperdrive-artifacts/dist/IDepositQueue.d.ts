export declare const IDepositQueue: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositETHFromProtocol";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "totalEarned";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly "depositETHFromProtocol()": "d123ccd5";
        readonly "totalEarned(address)": "649aca4a";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"depositETHFromProtocol\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"totalEarned\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRenzo.sol\":\"IDepositQueue\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IRenzo.sol\":{\"keccak256\":\"0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d\",\"dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "depositETHFromProtocol";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "tokenAddress";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalEarned";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
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
                readonly "contracts/src/interfaces/IRenzo.sol": "IDepositQueue";
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
        readonly id: 12457;
        readonly exportedSymbols: {
            readonly IDepositQueue: readonly [12456];
            readonly IERC20: readonly [10417];
            readonly IRenzoOracle: readonly [12445];
            readonly IRestakeManager: readonly [12390];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2264:105";
        readonly nodes: readonly [{
            readonly id: 12358;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:105";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12360;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:105";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 12457;
            readonly sourceUnit: 10418;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12359;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10417;
                    readonly src: "73:6:105";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12390;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:1246:105";
            readonly nodes: readonly [{
                readonly id: 12366;
                readonly nodeType: "FunctionDefinition";
                readonly src: "289:49:105";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12361;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "136:148:105";
                    readonly text: " @notice Returns the ezETH token contract address\n @dev Getter for public state variable of the ezETH token contract address";
                };
                readonly functionSelector: "13a73c78";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ezETH";
                readonly nameLocation: "298:5:105";
                readonly parameters: {
                    readonly id: 12362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "303:2:105";
                };
                readonly returnParameters: {
                    readonly id: 12365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12364;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12366;
                        readonly src: "329:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12363;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "329:7:105";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "328:9:105";
                };
                readonly scope: 12390;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12372;
                readonly nodeType: "FunctionDefinition";
                readonly src: "499:55:105";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12367;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "344:150:105";
                    readonly text: " @notice Returns the renzo oracle contract address\n @dev Getter for public state variable of the renzo oracle contract address";
                };
                readonly functionSelector: "892866a4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "renzoOracle";
                readonly nameLocation: "508:11:105";
                readonly parameters: {
                    readonly id: 12368;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "519:2:105";
                };
                readonly returnParameters: {
                    readonly id: 12371;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12370;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12372;
                        readonly src: "545:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12369;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "545:7:105";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "544:9:105";
                };
                readonly scope: 12390;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12376;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:39:105";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12373;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "560:191:105";
                    readonly text: " @notice  Allows a user to deposit ETH into the protocol and get back ezETH\n @dev     Convenience function to deposit without a referral ID and backwards compatibility";
                };
                readonly functionSelector: "f6326fb3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETH";
                readonly nameLocation: "765:10:105";
                readonly parameters: {
                    readonly id: 12374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "775:2:105";
                };
                readonly returnParameters: {
                    readonly id: 12375;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "794:0:105";
                };
                readonly scope: 12390;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12389;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:119:105";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12377;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "801:423:105";
                    readonly text: "@dev This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\n @return operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\n @return operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\n @return totalTVL The total TVL across all operator delegators.";
                };
                readonly functionSelector: "ff9969cd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTVLs";
                readonly nameLocation: "1238:13:105";
                readonly parameters: {
                    readonly id: 12378;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1251:2:105";
                };
                readonly returnParameters: {
                    readonly id: 12388;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12382;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12389;
                        readonly src: "1301:18:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "uint256[][]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly baseType: {
                                    readonly id: 12379;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1301:7:105";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 12380;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "1301:9:105";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                    readonly typeString: "uint256[]";
                                };
                            };
                            readonly id: 12381;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1301:11:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_storage_$dyn_storage_ptr";
                                readonly typeString: "uint256[][]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12385;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12389;
                        readonly src: "1321:16:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 12383;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1321:7:105";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 12384;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1321:9:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12387;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12389;
                        readonly src: "1339:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12386;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1300:47:105";
                };
                readonly scope: 12390;
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
            readonly linearizedBaseContracts: readonly [12390];
            readonly name: "IRestakeManager";
            readonly nameLocation: "114:15:105";
            readonly scope: 12457;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 12445;
            readonly nodeType: "ContractDefinition";
            readonly src: "1352:784:105";
            readonly nodes: readonly [{
                readonly id: 12400;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1381:113:105";
                readonly nodes: readonly [];
                readonly functionSelector: "0052e3fd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValue";
                readonly nameLocation: "1390:16:105";
                readonly parameters: {
                    readonly id: 12396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12393;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1423:6:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12400;
                        readonly src: "1416:13:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 12392;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 12391;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1416:6:105"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10417;
                                readonly src: "1416:6:105";
                            };
                            readonly referencedDeclaration: 10417;
                            readonly src: "1416:6:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12395;
                        readonly mutability: "mutable";
                        readonly name: "_balance";
                        readonly nameLocation: "1447:8:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12400;
                        readonly src: "1439:16:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12394;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1439:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1406:55:105";
                };
                readonly returnParameters: {
                    readonly id: 12399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12398;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12400;
                        readonly src: "1485:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12397;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1485:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1484:9:105";
                };
                readonly scope: 12445;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12410;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1500:121:105";
                readonly nodes: readonly [];
                readonly functionSelector: "37933625";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenAmountFromValue";
                readonly nameLocation: "1509:26:105";
                readonly parameters: {
                    readonly id: 12406;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12403;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1552:6:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12410;
                        readonly src: "1545:13:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 12402;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 12401;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1545:6:105"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10417;
                                readonly src: "1545:6:105";
                            };
                            readonly referencedDeclaration: 10417;
                            readonly src: "1545:6:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12405;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1576:6:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12410;
                        readonly src: "1568:14:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12404;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1568:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1535:53:105";
                };
                readonly returnParameters: {
                    readonly id: 12409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12408;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12410;
                        readonly src: "1612:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12407;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1611:9:105";
                };
                readonly scope: 12445;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12422;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1627:134:105";
                readonly nodes: readonly [];
                readonly functionSelector: "ba28a571";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValues";
                readonly nameLocation: "1636:17:105";
                readonly parameters: {
                    readonly id: 12418;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12414;
                        readonly mutability: "mutable";
                        readonly name: "_tokens";
                        readonly nameLocation: "1679:7:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12422;
                        readonly src: "1663:23:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_contract$_IERC20_$10417_$dyn_memory_ptr";
                            readonly typeString: "contract IERC20[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 12412;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 12411;
                                    readonly name: "IERC20";
                                    readonly nameLocations: readonly ["1663:6:105"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10417;
                                    readonly src: "1663:6:105";
                                };
                                readonly referencedDeclaration: 10417;
                                readonly src: "1663:6:105";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly id: 12413;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1663:8:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_contract$_IERC20_$10417_$dyn_storage_ptr";
                                readonly typeString: "contract IERC20[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12417;
                        readonly mutability: "mutable";
                        readonly name: "_balances";
                        readonly nameLocation: "1713:9:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12422;
                        readonly src: "1696:26:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 12415;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1696:7:105";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 12416;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1696:9:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1653:75:105";
                };
                readonly returnParameters: {
                    readonly id: 12421;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12420;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12422;
                        readonly src: "1752:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12419;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1752:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1751:9:105";
                };
                readonly scope: 12445;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12433;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1767:178:105";
                readonly nodes: readonly [];
                readonly functionSelector: "8f686e6a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMintAmount";
                readonly nameLocation: "1776:19:105";
                readonly parameters: {
                    readonly id: 12429;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12424;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "1813:23:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12433;
                        readonly src: "1805:31:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12423;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1805:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12426;
                        readonly mutability: "mutable";
                        readonly name: "_newValueAdded";
                        readonly nameLocation: "1854:14:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12433;
                        readonly src: "1846:22:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12425;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1846:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12428;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "1886:20:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12433;
                        readonly src: "1878:28:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12427;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1878:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1795:117:105";
                };
                readonly returnParameters: {
                    readonly id: 12432;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12431;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12433;
                        readonly src: "1936:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12430;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1936:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1935:9:105";
                };
                readonly scope: 12445;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12444;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1951:183:105";
                readonly nodes: readonly [];
                readonly functionSelector: "c5c83cb0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateRedeemAmount";
                readonly nameLocation: "1960:21:105";
                readonly parameters: {
                    readonly id: 12440;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12435;
                        readonly mutability: "mutable";
                        readonly name: "_ezETHBeingBurned";
                        readonly nameLocation: "1999:17:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12444;
                        readonly src: "1991:25:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12434;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1991:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12437;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "2034:20:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12444;
                        readonly src: "2026:28:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12436;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2026:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12439;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "2072:23:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12444;
                        readonly src: "2064:31:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12438;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2064:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1981:120:105";
                };
                readonly returnParameters: {
                    readonly id: 12443;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12442;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12444;
                        readonly src: "2125:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12441;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2125:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2124:9:105";
                };
                readonly scope: 12445;
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
            readonly linearizedBaseContracts: readonly [12445];
            readonly name: "IRenzoOracle";
            readonly nameLocation: "1362:12:105";
            readonly scope: 12457;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 12456;
            readonly nodeType: "ContractDefinition";
            readonly src: "2138:164:105";
            readonly nodes: readonly [{
                readonly id: 12448;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2168:51:105";
                readonly nodes: readonly [];
                readonly functionSelector: "d123ccd5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETHFromProtocol";
                readonly nameLocation: "2177:22:105";
                readonly parameters: {
                    readonly id: 12446;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2199:2:105";
                };
                readonly returnParameters: {
                    readonly id: 12447;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2218:0:105";
                };
                readonly scope: 12456;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12455;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2225:75:105";
                readonly nodes: readonly [];
                readonly functionSelector: "649aca4a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalEarned";
                readonly nameLocation: "2234:11:105";
                readonly parameters: {
                    readonly id: 12451;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12450;
                        readonly mutability: "mutable";
                        readonly name: "tokenAddress";
                        readonly nameLocation: "2254:12:105";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12455;
                        readonly src: "2246:20:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12449;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2246:7:105";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2245:22:105";
                };
                readonly returnParameters: {
                    readonly id: 12454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12453;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12455;
                        readonly src: "2291:7:105";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12452;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2291:7:105";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2290:9:105";
                };
                readonly scope: 12456;
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
            readonly linearizedBaseContracts: readonly [12456];
            readonly name: "IDepositQueue";
            readonly nameLocation: "2148:13:105";
            readonly scope: 12457;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 105;
};
//# sourceMappingURL=IDepositQueue.d.ts.map