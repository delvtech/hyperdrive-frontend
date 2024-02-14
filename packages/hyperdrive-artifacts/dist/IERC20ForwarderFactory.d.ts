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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC20LINK_HASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"contract IERC20Forwarder\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getForwarder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"ERC20LINK_HASH()\":{\"returns\":{\"_0\":\"The hash of the bytecode of the ERC20 forwarder contract.\"}},\"create(address,uint256)\":{\"params\":{\"_token\":\"The MultiToken targeted by this factory.\",\"_tokenId\":\"The sub-token ID targeted by this factory.\"},\"returns\":{\"_0\":\"Returns the address of the deployed forwarder.\"}},\"getDeployDetails()\":{\"returns\":{\"_0\":\"The target MultiToken.\",\"_1\":\"The target token ID.\"}},\"getForwarder(address,uint256)\":{\"params\":{\"_token\":\"The target MultiToken of the forwarder.\",\"_tokenId\":\"The target token ID of the forwarder.\"},\"returns\":{\"_0\":\"The expected address of the forwarder.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidForwarderAddress()\":[{\"notice\":\"Thrown when a forwarder is deployed to an unexpected address.\"}]},\"kind\":\"user\",\"methods\":{\"ERC20LINK_HASH()\":{\"notice\":\"Gets the hash of the bytecode of the ERC20 forwarder contract.\"},\"create(address,uint256)\":{\"notice\":\"Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation.\"},\"getDeployDetails()\":{\"notice\":\"Gets the MultiToken and token ID that should be targeted by the         calling forwarder.\"},\"getForwarder(address,uint256)\":{\"notice\":\"Helper to calculate expected forwarder contract addresses.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":\"IERC20ForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0x0af72255c641b0cd5c1975215e3f6713539da7963edd3d67d8151657e524dbe9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://187998e942efa97a7932bef37fde379346938e19f513e8e73c7ae9dbdd83499a\",\"dweb:/ipfs/QmSwSphYw15JVo2vizDWknyAzsc6ttrjiDMmRDbN7UXHrZ\"]},\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":{\"keccak256\":\"0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad\",\"dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]}},\"version\":1}";
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
                readonly keccak256: "0x0af72255c641b0cd5c1975215e3f6713539da7963edd3d67d8151657e524dbe9";
                readonly urls: readonly ["bzz-raw://187998e942efa97a7932bef37fde379346938e19f513e8e73c7ae9dbdd83499a", "dweb:/ipfs/QmSwSphYw15JVo2vizDWknyAzsc6ttrjiDMmRDbN7UXHrZ"];
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
                readonly keccak256: "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28";
                readonly urls: readonly ["bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2", "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862";
                readonly urls: readonly ["bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355", "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec";
                readonly urls: readonly ["bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c", "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IERC20ForwarderFactory.sol";
        readonly id: 6911;
        readonly exportedSymbols: {
            readonly IERC20Forwarder: readonly [6862];
            readonly IERC20ForwarderFactory: readonly [6910];
            readonly IMultiToken: readonly [8357];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1691:39";
        readonly nodes: readonly [{
            readonly id: 6864;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:39";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 6866;
            readonly nodeType: "ImportDirective";
            readonly src: "64:56:39";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20Forwarder.sol";
            readonly file: "./IERC20Forwarder.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 6911;
            readonly sourceUnit: 6863;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6865;
                    readonly name: "IERC20Forwarder";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6862;
                    readonly src: "73:15:39";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 6868;
            readonly nodeType: "ImportDirective";
            readonly src: "121:48:39";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "./IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 6911;
            readonly sourceUnit: 8358;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 6867;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8357;
                    readonly src: "130:11:39";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 6910;
            readonly nodeType: "ContractDefinition";
            readonly src: "171:1558:39";
            readonly nodes: readonly [{
                readonly id: 6871;
                readonly nodeType: "ErrorDefinition";
                readonly src: "308:32:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6869;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "230:73:39";
                    readonly text: "@notice Thrown when a forwarder is deployed to an unexpected address.";
                };
                readonly errorSelector: "381dd540";
                readonly name: "InvalidForwarderAddress";
                readonly nameLocation: "314:23:39";
                readonly parameters: {
                    readonly id: 6870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "337:2:39";
                };
            }, {
                readonly id: 6883;
                readonly nodeType: "FunctionDefinition";
                readonly src: "702:111:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6872;
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
                    readonly id: 6878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6875;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "739:6:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6883;
                        readonly src: "727:18:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 6874;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 6873;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["727:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8357;
                                readonly src: "727:11:39";
                            };
                            readonly referencedDeclaration: 8357;
                            readonly src: "727:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 6877;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "763:8:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6883;
                        readonly src: "755:16:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 6876;
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
                    readonly id: 6882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6881;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6883;
                        readonly src: "796:15:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20Forwarder_$6862";
                            readonly typeString: "contract IERC20Forwarder";
                        };
                        readonly typeName: {
                            readonly id: 6880;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 6879;
                                readonly name: "IERC20Forwarder";
                                readonly nameLocations: readonly ["796:15:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 6862;
                                readonly src: "796:15:39";
                            };
                            readonly referencedDeclaration: 6862;
                            readonly src: "796:15:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20Forwarder_$6862";
                                readonly typeString: "contract IERC20Forwarder";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "795:17:39";
                };
                readonly scope: 6910;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 6892;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1010:73:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6884;
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
                    readonly id: 6885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1035:2:39";
                };
                readonly returnParameters: {
                    readonly id: 6891;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6888;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6892;
                        readonly src: "1061:11:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 6887;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 6886;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["1061:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8357;
                                readonly src: "1061:11:39";
                            };
                            readonly referencedDeclaration: 8357;
                            readonly src: "1061:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 6890;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6892;
                        readonly src: "1074:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 6889;
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
                readonly scope: 6910;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 6903;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1343:114:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6893;
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
                    readonly id: 6899;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6896;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1386:6:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6903;
                        readonly src: "1374:18:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                            readonly typeString: "contract IMultiToken";
                        };
                        readonly typeName: {
                            readonly id: 6895;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 6894;
                                readonly name: "IMultiToken";
                                readonly nameLocations: readonly ["1374:11:39"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 8357;
                                readonly src: "1374:11:39";
                            };
                            readonly referencedDeclaration: 8357;
                            readonly src: "1374:11:39";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IMultiToken_$8357";
                                readonly typeString: "contract IMultiToken";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 6898;
                        readonly mutability: "mutable";
                        readonly name: "_tokenId";
                        readonly nameLocation: "1410:8:39";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6903;
                        readonly src: "1402:16:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 6897;
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
                    readonly id: 6902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6901;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6903;
                        readonly src: "1448:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 6900;
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
                readonly scope: 6910;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 6909;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1669:58:39";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 6904;
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
                    readonly id: 6905;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1692:2:39";
                };
                readonly returnParameters: {
                    readonly id: 6908;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 6907;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 6909;
                        readonly src: "1718:7:39";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 6906;
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
                readonly scope: 6910;
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
            readonly linearizedBaseContracts: readonly [6910];
            readonly name: "IERC20ForwarderFactory";
            readonly nameLocation: "181:22:39";
            readonly scope: 6911;
            readonly usedErrors: readonly [6871];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 39;
};
//# sourceMappingURL=IERC20ForwarderFactory.d.ts.map