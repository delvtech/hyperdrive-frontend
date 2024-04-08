export declare const HyperdriveRegistry: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
        }];
        readonly name: "getHyperdriveInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly object: "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122048be1ce4969d37315390b46c58c301eb9430773adb0108c3191fffaa463acd1264736f6c63430008140033";
        readonly sourceMap: "235:1176:43:-:0;;;436:54;;;;;;;;;-1:-1:-1;460:10:43;:23;;-1:-1:-1;;;;;;460:23:43;473:10;460:23;;;235:1176;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122048be1ce4969d37315390b46c58c301eb9430773adb0108c3191fffaa463acd1264736f6c63430008140033";
        readonly sourceMap: "235:1176:43:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1238:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1366:36:43;1340:7;1366:36;;;:15;:36;;;;;;;1238:171;;;;529:25:234;;;517:2;502:18;1238:171:43;;;;;;;;329:25;;;;;-1:-1:-1;;;;;329:25:43;;;;;;-1:-1:-1;;;;;729:32:234;;;711:51;;699:2;684:18;329:25:43;565:203:234;707:180:43;;;;;;:::i;:::-;;:::i;:::-;;941:251;;;;;;:::i;:::-;;:::i;707:180::-;550:10;;-1:-1:-1;;;;;550:10:43;536;:24;532:104;;583:42;;-1:-1:-1;;;583:42:43;;;;;;;;;;;532:104;811:10:::1;:24:::0;;-1:-1:-1;;;;;;811:24:43::1;-1:-1:-1::0;;;;;811:24:43;::::1;::::0;;::::1;::::0;;850:30:::1;::::0;811:24;;850:30:::1;::::0;::::1;707:180:::0;:::o;941:251::-;550:10;;-1:-1:-1;;;;;550:10:43;536;:24;532:104;;583:42;;-1:-1:-1;;;583:42:43;;;;;;;;;;;532:104;-1:-1:-1;;;;;1077:36:43;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1136:49;::::1;::::0;::::1;::::0;1116:5;529:25:234;;517:2;502:18;;383:177;1136:49:43::1;;;;;;;;941:251:::0;;:::o;14:173:234:-;82:20;;-1:-1:-1;;;;;131:31:234;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:234:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:234:o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "getHyperdriveInfo(address)": "32ddcb88";
        readonly "governance()": "5aa6e675";
        readonly "setHyperdriveInfo(address,uint256)": "be44e71a";
        readonly "updateGovernance(address)": "b2561263";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0xfbbaecdc43f485ccab2d64e6b4d1a8249978269af5af5d4bb13c25cfce7f864c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e48037114a4d529662a75f243b3d45f673e4c818ea8b13ab0dd7b2807532c03\",\"dweb:/ipfs/QmaQn7Zbuda174zuYdwP75B9csKeuB9Wvh8FA9h8qNwsbX\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
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
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getHyperdriveInfo";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "governance";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
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
                    readonly "getHyperdriveInfo(address)": {
                        readonly params: {
                            readonly _hyperdriveInstance: "The hyperdrive instance address.";
                        };
                        readonly returns: {
                            readonly _0: "The uint256 value set by governance.";
                        };
                    };
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
                    readonly "getHyperdriveInfo(address)": {
                        readonly notice: "Allows anyone to get the info for a hyperdrive instance.";
                    };
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
                readonly "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/factory/HyperdriveRegistry.sol": {
                readonly keccak256: "0xfbbaecdc43f485ccab2d64e6b4d1a8249978269af5af5d4bb13c25cfce7f864c";
                readonly urls: readonly ["bzz-raw://5e48037114a4d529662a75f243b3d45f673e4c818ea8b13ab0dd7b2807532c03", "dweb:/ipfs/QmaQn7Zbuda174zuYdwP75B9csKeuB9Wvh8FA9h8qNwsbX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                readonly keccak256: "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2";
                readonly urls: readonly ["bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99", "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRegistry.sol": {
                readonly keccak256: "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00";
                readonly urls: readonly ["bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168", "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/factory/HyperdriveRegistry.sol";
        readonly id: 7496;
        readonly exportedSymbols: {
            readonly HyperdriveRegistry: readonly [7495];
            readonly IHyperdriveGovernedRegistry: readonly [11117];
            readonly IHyperdriveRegistry: readonly [11218];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1373:43";
        readonly nodes: readonly [{
            readonly id: 7401;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:43";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7403;
            readonly nodeType: "ImportDirective";
            readonly src: "64:92:43";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol";
            readonly file: "../interfaces/IHyperdriveGovernedRegistry.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7496;
            readonly sourceUnit: 11118;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7402;
                    readonly name: "IHyperdriveGovernedRegistry";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11117;
                    readonly src: "73:27:43";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7405;
            readonly nodeType: "ImportDirective";
            readonly src: "157:76:43";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveRegistry.sol";
            readonly file: "../interfaces/IHyperdriveRegistry.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7496;
            readonly sourceUnit: 11219;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7404;
                    readonly name: "IHyperdriveRegistry";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11218;
                    readonly src: "166:19:43";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7495;
            readonly nodeType: "ContractDefinition";
            readonly src: "235:1176:43";
            readonly nodes: readonly [{
                readonly id: 7411;
                readonly nodeType: "VariableDeclaration";
                readonly src: "329:25:43";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "5aa6e675";
                readonly mutability: "mutable";
                readonly name: "governance";
                readonly nameLocation: "344:10:43";
                readonly scope: 7495;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 7410;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "329:7:43";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 7415;
                readonly nodeType: "VariableDeclaration";
                readonly src: "361:68:43";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_hyperdriveInfo";
                readonly nameLocation: "414:15:43";
                readonly scope: 7495;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 7414;
                    readonly keyName: "hyperdrive";
                    readonly keyNameLocation: "377:10:43";
                    readonly keyType: {
                        readonly id: 7412;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "369:7:43";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "361:43:43";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "data";
                    readonly valueNameLocation: "399:4:43";
                    readonly valueType: {
                        readonly id: 7413;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "391:7:43";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 7424;
                readonly nodeType: "FunctionDefinition";
                readonly src: "436:54:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7423;
                    readonly nodeType: "Block";
                    readonly src: "450:40:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7421;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 7418;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7411;
                                readonly src: "460:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 7419;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "473:3:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 7420;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "477:6:43";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "473:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "460:23:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 7422;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "460:23:43";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 7416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "447:2:43";
                };
                readonly returnParameters: {
                    readonly id: 7417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "450:0:43";
                };
                readonly scope: 7495;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 7439;
                readonly nodeType: "ModifierDefinition";
                readonly src: "496:157:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7438;
                    readonly nodeType: "Block";
                    readonly src: "522:131:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 7429;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 7426;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "536:3:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 7427;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "540:6:43";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "536:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 7428;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7411;
                                readonly src: "550:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "536:24:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 7436;
                        readonly nodeType: "IfStatement";
                        readonly src: "532:104:43";
                        readonly trueBody: {
                            readonly id: 7435;
                            readonly nodeType: "Block";
                            readonly src: "562:74:43";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 7430;
                                            readonly name: "IHyperdriveGovernedRegistry";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11117;
                                            readonly src: "583:27:43";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveGovernedRegistry_$11117_$";
                                                readonly typeString: "type(contract IHyperdriveGovernedRegistry)";
                                            };
                                        };
                                        readonly id: 7432;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "611:12:43";
                                        readonly memberName: "Unauthorized";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11102;
                                        readonly src: "583:40:43";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 7433;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "583:42:43";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 7434;
                                readonly nodeType: "RevertStatement";
                                readonly src: "576:49:43";
                            }];
                        };
                    }, {
                        readonly id: 7437;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "645:1:43";
                    }];
                };
                readonly name: "onlyGovernance";
                readonly nameLocation: "505:14:43";
                readonly parameters: {
                    readonly id: 7425;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "519:2:43";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 7457;
                readonly nodeType: "FunctionDefinition";
                readonly src: "707:180:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7456;
                    readonly nodeType: "Block";
                    readonly src: "801:86:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7450;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 7448;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7411;
                                readonly src: "811:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 7449;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7442;
                                readonly src: "824:11:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "811:24:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 7451;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "811:24:43";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 7453;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7442;
                                readonly src: "868:11:43";
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
                                readonly id: 7452;
                                readonly name: "GovernanceUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 11092;
                                readonly src: "850:17:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$returns$__$";
                                    readonly typeString: "function (address)";
                                };
                            };
                            readonly id: 7454;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "850:30:43";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 7455;
                        readonly nodeType: "EmitStatement";
                        readonly src: "845:35:43";
                    }];
                };
                readonly baseFunctions: readonly [11108];
                readonly documentation: {
                    readonly id: 7440;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "659:43:43";
                    readonly text: "@inheritdoc IHyperdriveGovernedRegistry";
                };
                readonly functionSelector: "b2561263";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 7446;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 7445;
                        readonly name: "onlyGovernance";
                        readonly nameLocations: readonly ["786:14:43"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7439;
                        readonly src: "786:14:43";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "786:14:43";
                }];
                readonly name: "updateGovernance";
                readonly nameLocation: "716:16:43";
                readonly overrides: {
                    readonly id: 7444;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "777:8:43";
                };
                readonly parameters: {
                    readonly id: 7443;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7442;
                        readonly mutability: "mutable";
                        readonly name: "_governance";
                        readonly nameLocation: "750:11:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7457;
                        readonly src: "742:19:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7441;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "742:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "732:35:43";
                };
                readonly returnParameters: {
                    readonly id: 7447;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "801:0:43";
                };
                readonly scope: 7495;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7480;
                readonly nodeType: "FunctionDefinition";
                readonly src: "941:251:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7479;
                    readonly nodeType: "Block";
                    readonly src: "1067:125:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7472;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 7468;
                                    readonly name: "_hyperdriveInfo";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 7415;
                                    readonly src: "1077:15:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 7470;
                                readonly indexExpression: {
                                    readonly id: 7469;
                                    readonly name: "_hyperdriveInstance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 7460;
                                    readonly src: "1093:19:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "1077:36:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 7471;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7462;
                                readonly src: "1116:5:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1077:44:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 7473;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1077:44:43";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 7475;
                                readonly name: "_hyperdriveInstance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7460;
                                readonly src: "1158:19:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 7476;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7462;
                                readonly src: "1179:5:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 7474;
                                readonly name: "HyperdriveInfoUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 11099;
                                readonly src: "1136:21:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 7477;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1136:49:43";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 7478;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1131:54:43";
                    }];
                };
                readonly baseFunctions: readonly [11116];
                readonly documentation: {
                    readonly id: 7458;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "893:43:43";
                    readonly text: "@inheritdoc IHyperdriveGovernedRegistry";
                };
                readonly functionSelector: "be44e71a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 7466;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 7465;
                        readonly name: "onlyGovernance";
                        readonly nameLocations: readonly ["1052:14:43"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7439;
                        readonly src: "1052:14:43";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1052:14:43";
                }];
                readonly name: "setHyperdriveInfo";
                readonly nameLocation: "950:17:43";
                readonly overrides: {
                    readonly id: 7464;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "1043:8:43";
                };
                readonly parameters: {
                    readonly id: 7463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7460;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "985:19:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7480;
                        readonly src: "977:27:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7459;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "977:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7462;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "1022:5:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7480;
                        readonly src: "1014:13:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7461;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1014:7:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "967:66:43";
                };
                readonly returnParameters: {
                    readonly id: 7467;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1067:0:43";
                };
                readonly scope: 7495;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7494;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1238:171:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7493;
                    readonly nodeType: "Block";
                    readonly src: "1349:60:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly id: 7489;
                                readonly name: "_hyperdriveInfo";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7415;
                                readonly src: "1366:15:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                    readonly typeString: "mapping(address => uint256)";
                                };
                            };
                            readonly id: 7491;
                            readonly indexExpression: {
                                readonly id: 7490;
                                readonly name: "_hyperdriveInstance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7483;
                                readonly src: "1382:19:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "1366:36:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 7488;
                        readonly id: 7492;
                        readonly nodeType: "Return";
                        readonly src: "1359:43:43";
                    }];
                };
                readonly baseFunctions: readonly [11217];
                readonly documentation: {
                    readonly id: 7481;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1198:35:43";
                    readonly text: "@inheritdoc IHyperdriveRegistry";
                };
                readonly functionSelector: "32ddcb88";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getHyperdriveInfo";
                readonly nameLocation: "1247:17:43";
                readonly overrides: {
                    readonly id: 7485;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "1322:8:43";
                };
                readonly parameters: {
                    readonly id: 7484;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7483;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "1282:19:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7494;
                        readonly src: "1274:27:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7482;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1274:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1264:43:43";
                };
                readonly returnParameters: {
                    readonly id: 7488;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7487;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7494;
                        readonly src: "1340:7:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7486;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1340:7:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1339:9:43";
                };
                readonly scope: 7495;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 7406;
                    readonly name: "IHyperdriveRegistry";
                    readonly nameLocations: readonly ["270:19:43"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11218;
                    readonly src: "270:19:43";
                };
                readonly id: 7407;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "270:19:43";
            }, {
                readonly baseName: {
                    readonly id: 7408;
                    readonly name: "IHyperdriveGovernedRegistry";
                    readonly nameLocations: readonly ["295:27:43"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11117;
                    readonly src: "295:27:43";
                };
                readonly id: 7409;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "295:27:43";
            }];
            readonly canonicalName: "HyperdriveRegistry";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [7495, 11117, 11218];
            readonly name: "HyperdriveRegistry";
            readonly nameLocation: "244:18:43";
            readonly scope: 7496;
            readonly usedErrors: readonly [11102];
            readonly usedEvents: readonly [11092, 11099];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 43;
};
//# sourceMappingURL=HyperdriveRegistry.d.ts.map