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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]}},\"version\":1}";
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
                        readonly notice: "Allows governance to set arbitrary info for a Hyperdrive         instance.";
                    };
                    readonly "updateGovernance(address)": {
                        readonly notice: "Allows governance to transfer the governance role.";
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
                readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": "IHyperdriveGovernedRegistry";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                readonly keccak256: "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2";
                readonly urls: readonly ["bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99", "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol";
        readonly id: 11268;
        readonly exportedSymbols: {
            readonly IHyperdriveGovernedRegistry: readonly [11267];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:959:91";
        readonly nodes: readonly [{
            readonly id: 11237;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:91";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11267;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:933:91";
            readonly nodes: readonly [{
                readonly id: 11242;
                readonly nodeType: "EventDefinition";
                readonly src: "164:52:91";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11238;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "108:51:91";
                    readonly text: "@notice Emitted when governance is transferred.";
                };
                readonly eventSelector: "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab";
                readonly name: "GovernanceUpdated";
                readonly nameLocation: "170:17:91";
                readonly parameters: {
                    readonly id: 11241;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11240;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "governance";
                        readonly nameLocation: "204:10:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11242;
                        readonly src: "188:26:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11239;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "188:7:91";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "187:28:91";
                };
            }, {
                readonly id: 11249;
                readonly nodeType: "EventDefinition";
                readonly src: "279:70:91";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 11243;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "222:52:91";
                    readonly text: "@notice Emitted when hyperdrive info is updated.";
                };
                readonly eventSelector: "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356";
                readonly name: "HyperdriveInfoUpdated";
                readonly nameLocation: "285:21:91";
                readonly parameters: {
                    readonly id: 11248;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11245;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "hyperdrive";
                        readonly nameLocation: "323:10:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11249;
                        readonly src: "307:26:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11244;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "307:7:91";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11247;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "343:4:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11249;
                        readonly src: "335:12:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11246;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "335:7:91";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "306:42:91";
                };
            }, {
                readonly id: 11252;
                readonly nodeType: "ErrorDefinition";
                readonly src: "409:21:91";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11250;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "355:49:91";
                    readonly text: "@notice Thrown when caller is not governance.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "415:12:91";
                readonly parameters: {
                    readonly id: 11251;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "427:2:91";
                };
            }, {
                readonly id: 11258;
                readonly nodeType: "FunctionDefinition";
                readonly src: "558:56:91";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11253;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "436:117:91";
                    readonly text: "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address.";
                };
                readonly functionSelector: "b2561263";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateGovernance";
                readonly nameLocation: "567:16:91";
                readonly parameters: {
                    readonly id: 11256;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11255;
                        readonly mutability: "mutable";
                        readonly name: "_governance";
                        readonly nameLocation: "592:11:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11258;
                        readonly src: "584:19:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11254;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "584:7:91";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "583:21:91";
                };
                readonly returnParameters: {
                    readonly id: 11257;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "613:0:91";
                };
                readonly scope: 11267;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11266;
                readonly nodeType: "FunctionDefinition";
                readonly src: "893:102:91";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11259;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "620:268:91";
                    readonly text: "@notice Allows governance to set arbitrary info for a Hyperdrive\n         instance.\n @param _hyperdriveInstance The Hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the\n        instance.";
                };
                readonly functionSelector: "be44e71a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setHyperdriveInfo";
                readonly nameLocation: "902:17:91";
                readonly parameters: {
                    readonly id: 11264;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11261;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "937:19:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11266;
                        readonly src: "929:27:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11260;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "929:7:91";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11263;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "974:5:91";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11266;
                        readonly src: "966:13:91";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11262;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "966:7:91";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "919:66:91";
                };
                readonly returnParameters: {
                    readonly id: 11265;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "994:0:91";
                };
                readonly scope: 11267;
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
            readonly linearizedBaseContracts: readonly [11267];
            readonly name: "IHyperdriveGovernedRegistry";
            readonly nameLocation: "74:27:91";
            readonly scope: 11268;
            readonly usedErrors: readonly [11252];
            readonly usedEvents: readonly [11242, 11249];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 91;
};
//# sourceMappingURL=IHyperdriveGovernedRegistry.d.ts.map