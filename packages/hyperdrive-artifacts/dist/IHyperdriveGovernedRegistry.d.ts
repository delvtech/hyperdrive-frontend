export declare const IHyperdriveGovernedRegistry: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setHyperdriveInfo";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveInstance";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_data";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateGovernance";
        readonly inputs: readonly [{
            readonly name: "_governance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "GovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "governance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HyperdriveInfoUpdated";
        readonly inputs: readonly [{
            readonly name: "hyperdrive";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the instance.\",\"_hyperdriveInstance\":\"The hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1\",\"dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP\"]}},\"version\":1}";
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
                            readonly _data: "The uint256 value to be set to convey information about the instance.";
                            readonly _hyperdriveInstance: "The hyperdrive instance address.";
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
                        readonly notice: "Allows governance set arbitrary info for a hyperdrive instance.";
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
                readonly keccak256: "0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965";
                readonly urls: readonly ["bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1", "dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol";
        readonly id: 7998;
        readonly exportedSymbols: {
            readonly IHyperdriveGovernedRegistry: readonly [7997];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:925:50";
        readonly nodes: readonly [{
            readonly id: 7967;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:50";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7997;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:899:50";
            readonly nodes: readonly [{
                readonly id: 7972;
                readonly nodeType: "EventDefinition";
                readonly src: "164:52:50";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 7968;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "108:51:50";
                    readonly text: "@notice Emitted when governance is transferred.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "170:17:50";
                readonly parameters: {
                    readonly id: 7971;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7970;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "204:10:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7972;
                        readonly src: "188:26:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7969;
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
                readonly id: 7979;
                readonly nodeType: "EventDefinition";
                readonly src: "279:70:50";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 7973;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "222:52:50";
                    readonly text: "@notice Emitted when hyperdrive info is updated.";
                };
                readonly eventSelector: "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356";
                readonly name: "HyperdriveInfoUpdated";
                readonly nameLocation: "285:21:50";
                readonly parameters: {
                    readonly id: 7978;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7975;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "323:10:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7979;
                        readonly src: "307:26:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7974;
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
                        readonly id: 7977;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "343:4:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7979;
                        readonly src: "335:12:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7976;
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
                readonly id: 7982;
                readonly nodeType: "ErrorDefinition";
                readonly src: "409:21:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7980;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "355:49:50";
                    readonly text: "@notice Thrown when caller is not governance.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "415:12:50";
                readonly parameters: {
                    readonly id: 7981;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "427:2:50";
                };
            }, {
                readonly id: 7988;
                readonly nodeType: "FunctionDefinition";
                readonly src: "558:56:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7983;
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
                    readonly id: 7986;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7985;
                        readonly mutability: "mutable";
                        readonly name: "_governance";
                        readonly nameLocation: "592:11:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7988;
                        readonly src: "584:19:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7984;
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
                    readonly id: 7987;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "613:0:50";
                };
                readonly scope: 7997;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7996;
                readonly nodeType: "FunctionDefinition";
                readonly src: "859:102:50";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7989;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "620:234:50";
                    readonly text: "@notice Allows governance set arbitrary info for a hyperdrive instance.\n @param _hyperdriveInstance The hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the instance.";
                };
                readonly functionSelector: "be44e71a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setHyperdriveInfo";
                readonly nameLocation: "868:17:50";
                readonly parameters: {
                    readonly id: 7994;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7991;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "903:19:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7996;
                        readonly src: "895:27:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7990;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "895:7:50";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7993;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "940:5:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7996;
                        readonly src: "932:13:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7992;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "932:7:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "885:66:50";
                };
                readonly returnParameters: {
                    readonly id: 7995;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "960:0:50";
                };
                readonly scope: 7997;
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
            readonly linearizedBaseContracts: readonly [7997];
            readonly name: "IHyperdriveGovernedRegistry";
            readonly nameLocation: "74:27:50";
            readonly scope: 7998;
            readonly usedErrors: readonly [7982];
            readonly usedEvents: readonly [7972, 7979];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 50;
};
//# sourceMappingURL=IHyperdriveGovernedRegistry.d.ts.map