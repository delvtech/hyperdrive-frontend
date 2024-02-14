export declare const IHyperdriveGovernedRegistry: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "hyperdrive";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "data";
            readonly type: "uint256";
        }];
        readonly name: "HyperdriveInfoUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hyperdriveInstance";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_data";
            readonly type: "uint256";
        }];
        readonly name: "setHyperdriveInfo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }];
        readonly name: "updateGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly "setHyperdriveInfo(address,uint256)": "be44e71a";
        readonly "updateGovernance(address)": "b2561263";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a Hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x1cd2b2a7476d18906ec76ebc5d97602657959af2538aa7cdff5e8e0b01afdbc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://468886cc86a60176b121e15086516bce7e94c619c9426337b56f4231ff006929\",\"dweb:/ipfs/QmW6n28BmkbAJjXqGLZw1LQe4MrnzLwBk6gV3UuMTSjp4E\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "governance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "hyperdrive";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "data";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "HyperdriveInfoUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_hyperdriveInstance";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_data";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setHyperdriveInfo";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governance";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "updateGovernance";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "setHyperdriveInfo(address,uint256)": {
                        readonly params: {
                            readonly _data: "The uint256 value to be set to convey information about the        instance.";
                            readonly _hyperdriveInstance: "The Hyperdrive instance address.";
                        };
                    };
                    readonly "updateGovernance(address)": {
                        readonly params: {
                            readonly _governance: "The new governance address.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "setHyperdriveInfo(address,uint256)": {
                        readonly notice: "Allows governance set arbitrary info for a Hyperdrive instance.";
                    };
                    readonly "updateGovernance(address)": {
                        readonly notice: "Allows governance to transfer the governance role.";
                    };
                };
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
                readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": "IHyperdriveGovernedRegistry";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                readonly keccak256: "0x1cd2b2a7476d18906ec76ebc5d97602657959af2538aa7cdff5e8e0b01afdbc5";
                readonly urls: readonly ["bzz-raw://468886cc86a60176b121e15086516bce7e94c619c9426337b56f4231ff006929", "dweb:/ipfs/QmW6n28BmkbAJjXqGLZw1LQe4MrnzLwBk6gV3UuMTSjp4E"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol";
        readonly id: 8147;
        readonly exportedSymbols: {
            readonly IHyperdriveGovernedRegistry: readonly [8146];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:940:50";
        readonly nodes: readonly [{
            readonly id: 8116;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:50";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 8146;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:914:50";
            readonly nodes: readonly [{
                readonly id: 8121;
                readonly nodeType: "EventDefinition";
                readonly src: "164:52:50";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8117;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "108:51:50";
                    readonly text: "@notice Emitted when governance is transferred.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "170:17:50";
                readonly parameters: {
                    readonly id: 8120;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8119;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "204:10:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8121;
                        readonly src: "188:26:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8118;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "188:7:50";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "187:28:50";
                };
            }, {
                readonly id: 8128;
                readonly nodeType: "EventDefinition";
                readonly src: "279:70:50";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 8122;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "222:52:50";
                    readonly text: "@notice Emitted when hyperdrive info is updated.";
                };
                readonly eventSelector: "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356";
                readonly name: "HyperdriveInfoUpdated";
                readonly nameLocation: "285:21:50";
                readonly parameters: {
                    readonly id: 8127;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8124;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "323:10:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8128;
                        readonly src: "307:26:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8123;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "307:7:50";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8126;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "343:4:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8128;
                        readonly src: "335:12:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8125;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "335:7:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "306:42:50";
                };
            }, {
                readonly id: 8131;
                readonly nodeType: "ErrorDefinition";
                readonly src: "409:21:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8129;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "355:49:50";
                    readonly text: "@notice Thrown when caller is not governance.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "415:12:50";
                readonly parameters: {
                    readonly id: 8130;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "427:2:50";
                };
            }, {
                readonly id: 8137;
                readonly nodeType: "FunctionDefinition";
                readonly src: "558:56:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8132;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "436:117:50";
                    readonly text: "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address.";
                };
                readonly functionSelector: "b2561263";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateGovernance";
                readonly nameLocation: "567:16:50";
                readonly parameters: {
                    readonly id: 8135;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8134;
                        readonly mutability: "mutable";
                        readonly name: "_governance";
                        readonly nameLocation: "592:11:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8137;
                        readonly src: "584:19:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8133;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "584:7:50";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "583:21:50";
                };
                readonly returnParameters: {
                    readonly id: 8136;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "613:0:50";
                };
                readonly scope: 8146;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 8145;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:102:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 8138;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "620:249:50";
                    readonly text: "@notice Allows governance set arbitrary info for a Hyperdrive instance.\n @param _hyperdriveInstance The Hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the\n        instance.";
                };
                readonly functionSelector: "be44e71a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setHyperdriveInfo";
                readonly nameLocation: "883:17:50";
                readonly parameters: {
                    readonly id: 8143;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8140;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "918:19:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8145;
                        readonly src: "910:27:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 8139;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "910:7:50";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8142;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "955:5:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8145;
                        readonly src: "947:13:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 8141;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "947:7:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "900:66:50";
                };
                readonly returnParameters: {
                    readonly id: 8144;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "975:0:50";
                };
                readonly scope: 8146;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IHyperdriveGovernedRegistry";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [8146];
            readonly name: "IHyperdriveGovernedRegistry";
            readonly nameLocation: "74:27:50";
            readonly scope: 8147;
            readonly usedErrors: readonly [8131];
            readonly usedEvents: readonly [8121, 8128];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 50;
};
//# sourceMappingURL=IHyperdriveGovernedRegistry.d.ts.map