export declare const IERC20ForwarderFactory: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidForwarderAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20LINK_HASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "create";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Forwarder";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeployDetails";
        readonly outputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IMultiToken";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getForwarder";
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
        readonly "ERC20LINK_HASH()": "d13053bb";
        readonly "create(address,uint256)": "0ecaea73";
        readonly "getDeployDetails()": "600eb4ba";
        readonly "getForwarder(address,uint256)": "0710fd58";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC20LINK_HASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"contract IERC20Forwarder\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getForwarder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"ERC20LINK_HASH()\":{\"returns\":{\"_0\":\"The hash of the bytecode of the ERC20 forwarder contract.\"}},\"create(address,uint256)\":{\"params\":{\"_token\":\"The MultiToken targeted by this factory.\",\"_tokenId\":\"The sub-token ID targeted by this factory.\"},\"returns\":{\"_0\":\"Returns the address of the deployed forwarder.\"}},\"getDeployDetails()\":{\"returns\":{\"_0\":\"The target MultiToken.\",\"_1\":\"The target token ID.\"}},\"getForwarder(address,uint256)\":{\"params\":{\"_token\":\"The target MultiToken of the forwarder.\",\"_tokenId\":\"The target token ID of the forwarder.\"},\"returns\":{\"_0\":\"The expected address of the forwarder.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidForwarderAddress()\":[{\"notice\":\"Thrown when a forwarder is deployed to an unexpected address.\"}]},\"kind\":\"user\",\"methods\":{\"ERC20LINK_HASH()\":{\"notice\":\"Gets the hash of the bytecode of the ERC20 forwarder contract.\"},\"create(address,uint256)\":{\"notice\":\"Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation.\"},\"getDeployDetails()\":{\"notice\":\"Gets the MultiToken and token ID that should be targeted by the         calling forwarder.\"},\"getForwarder(address,uint256)\":{\"notice\":\"Helper to calculate expected forwarder contract addresses.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":\"IERC20ForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e\",\"dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV\"]},\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":{\"keccak256\":\"0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad\",\"dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidForwarderAddress";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "ERC20LINK_HASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IMultiToken";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "create";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC20Forwarder";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getDeployDetails";
                readonly outputs: readonly [{
                    readonly internalType: "contract IMultiToken";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IMultiToken";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getForwarder";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "ERC20LINK_HASH()": {
                        readonly returns: {
                            readonly _0: "The hash of the bytecode of the ERC20 forwarder contract.";
                        };
                    };
                    readonly "create(address,uint256)": {
                        readonly params: {
                            readonly _token: "The MultiToken targeted by this factory.";
                            readonly _tokenId: "The sub-token ID targeted by this factory.";
                        };
                        readonly returns: {
                            readonly _0: "Returns the address of the deployed forwarder.";
                        };
                    };
                    readonly "getDeployDetails()": {
                        readonly returns: {
                            readonly _0: "The target MultiToken.";
                            readonly _1: "The target token ID.";
                        };
                    };
                    readonly "getForwarder(address,uint256)": {
                        readonly params: {
                            readonly _token: "The target MultiToken of the forwarder.";
                            readonly _tokenId: "The target token ID of the forwarder.";
                        };
                        readonly returns: {
                            readonly _0: "The expected address of the forwarder.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "ERC20LINK_HASH()": {
                        readonly notice: "Gets the hash of the bytecode of the ERC20 forwarder contract.";
                    };
                    readonly "create(address,uint256)": {
                        readonly notice: "Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation.";
                    };
                    readonly "getDeployDetails()": {
                        readonly notice: "Gets the MultiToken and token ID that should be targeted by the         calling forwarder.";
                    };
                    readonly "getForwarder(address,uint256)": {
                        readonly notice: "Helper to calculate expected forwarder contract addresses.";
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
                readonly "contracts/src/interfaces/IERC20ForwarderFactory.sol": "IERC20ForwarderFactory";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20Forwarder.sol": {
                readonly keccak256: "0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592";
                readonly urls: readonly ["bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e", "dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20ForwarderFactory.sol": {
                readonly keccak256: "0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed";
                readonly urls: readonly ["bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad", "dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IERC20ForwarderFactory.sol";
        readonly id: 7038;
        readonly exportedSymbols: {
            readonly IERC20Forwarder: readonly [6989];
            readonly IERC20ForwarderFactory: readonly [7037];
            readonly IMultiToken: readonly [8498];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1691:39";
        readonly nodes: readonly [{
            readonly id: 6991;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:39";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 6993;
            readonly nodeType: "ImportDirective";
            readonly src: "64:56:39";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20Forwarder.sol";
            readonly file: "./IERC20Forwarder.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7038;
            readonly sourceUnit: 6990;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6992;
                    readonly name: "IERC20Forwarder";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6989;
                    readonly src: "73:15:39";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 6995;
            readonly nodeType: "ImportDirective";
            readonly src: "121:48:39";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "./IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7038;
            readonly sourceUnit: 8499;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6994;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8498;
                    readonly src: "130:11:39";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7037;
            readonly nodeType: "ContractDefinition";
            readonly src: "171:1558:39";
            readonly nodes: readonly [{
                readonly id: 6998;
                readonly nodeType: "ErrorDefinition";
                readonly src: "308:32:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6996;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "230:73:39";
                    readonly text: "@notice Thrown when a forwarder is deployed to an unexpected address.";
                };
                readonly errorSelector: "381dd540";
                readonly name: "InvalidForwarderAddress";
                readonly nameLocation: "314:23:39";
                readonly parameters: {
                    readonly id: 6997;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "337:2:39";
                };
            }, {
                readonly id: 7010;
                readonly nodeType: "FunctionDefinition";
                readonly src: "702:111:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6999;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "369:328:39";
                    readonly text: "@notice Uses create2 to deploy a forwarder at a predictable address as\n         part of our ERC20 multitoken implementation.\n @param _token The MultiToken targeted by this factory.\n @param _tokenId The sub-token ID targeted by this factory.\n @return Returns the address of the deployed forwarder.";
                };
                readonly functionSelector: "0ecaea73";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "create";
                readonly nameLocation: "711:6:39";
                readonly parameters: {
                    readonly id: 7005;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7002;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "739:6:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7010;
                        readonly src: "727:18:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 7001;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7000;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["727:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8498;
                                readonly src: "727:11:39";
                            };
                            readonly referencedDeclaration: 8498;
                            readonly src: "727:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7004;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "763:8:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7010;
                        readonly src: "755:16:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7003;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "755:7:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "717:60:39";
                };
                readonly returnParameters: {
                    readonly id: 7009;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7008;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7010;
                        readonly src: "796:15:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20Forwarder_$6989";
                            readonly typeString: "contract IERC20Forwarder";
                        };
                        readonly typeName: {
                            readonly id: 7007;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7006;
                                readonly name: "IERC20Forwarder";
                                readonly nameLocations: readonly ["796:15:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 6989;
                                readonly src: "796:15:39";
                            };
                            readonly referencedDeclaration: 6989;
                            readonly src: "796:15:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20Forwarder_$6989";
                                readonly typeString: "contract IERC20Forwarder";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "795:17:39";
                };
                readonly scope: 7037;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7019;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1010:73:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7011;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "819:186:39";
                    readonly text: "@notice Gets the MultiToken and token ID that should be targeted by the\n         calling forwarder.\n @return The target MultiToken.\n @return The target token ID.";
                };
                readonly functionSelector: "600eb4ba";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getDeployDetails";
                readonly nameLocation: "1019:16:39";
                readonly parameters: {
                    readonly id: 7012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1035:2:39";
                };
                readonly returnParameters: {
                    readonly id: 7018;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7015;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7019;
                        readonly src: "1061:11:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 7014;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7013;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["1061:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8498;
                                readonly src: "1061:11:39";
                            };
                            readonly referencedDeclaration: 8498;
                            readonly src: "1061:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7017;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7019;
                        readonly src: "1074:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7016;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1074:7:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1060:22:39";
                };
                readonly scope: 7037;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7030;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1343:114:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7020;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1089:249:39";
                    readonly text: "@notice Helper to calculate expected forwarder contract addresses.\n @param _token The target MultiToken of the forwarder.\n @param _tokenId The target token ID of the forwarder.\n @return The expected address of the forwarder.";
                };
                readonly functionSelector: "0710fd58";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getForwarder";
                readonly nameLocation: "1352:12:39";
                readonly parameters: {
                    readonly id: 7026;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7023;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1386:6:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7030;
                        readonly src: "1374:18:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 7022;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7021;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["1374:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8498;
                                readonly src: "1374:11:39";
                            };
                            readonly referencedDeclaration: 8498;
                            readonly src: "1374:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8498";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7025;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "1410:8:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7030;
                        readonly src: "1402:16:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7024;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1402:7:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1364:60:39";
                };
                readonly returnParameters: {
                    readonly id: 7029;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7028;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7030;
                        readonly src: "1448:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7027;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1448:7:39";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1447:9:39";
                };
                readonly scope: 7037;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7036;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1669:58:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7031;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1463:148:39";
                    readonly text: "@notice Gets the hash of the bytecode of the ERC20 forwarder contract.\n @return The hash of the bytecode of the ERC20 forwarder contract.";
                };
                readonly functionSelector: "d13053bb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ERC20LINK_HASH";
                readonly nameLocation: "1678:14:39";
                readonly parameters: {
                    readonly id: 7032;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1692:2:39";
                };
                readonly returnParameters: {
                    readonly id: 7035;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7034;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7036;
                        readonly src: "1718:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 7033;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1718:7:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1717:9:39";
                };
                readonly scope: 7037;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC20ForwarderFactory";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [7037];
            readonly name: "IERC20ForwarderFactory";
            readonly nameLocation: "181:22:39";
            readonly scope: 7038;
            readonly usedErrors: readonly [6998];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 39;
};
//# sourceMappingURL=IERC20ForwarderFactory.d.ts.map