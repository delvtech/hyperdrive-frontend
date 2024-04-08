export declare const AssetId: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220090233ce005429812f2782d2a61c11e2d8d1b4db38f26edf9f09463a1eaa2cf164736f6c63430008140033";
        readonly sourceMap: "491:4783:119:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;491:4783:119;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220090233ce005429812f2782d2a61c11e2d8d1b4db38f26edf9f09463a1eaa2cf164736f6c63430008140033";
        readonly sourceMap: "491:4783:119:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A library that handles the encoding and decoding of asset IDs for         Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/AssetId.sol\":\"AssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]}},\"version\":1}";
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
                readonly "contracts/src/libraries/AssetId.sol": "AssetId";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
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
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/libraries/AssetId.sol";
        readonly id: 18010;
        readonly exportedSymbols: {
            readonly AssetId: readonly [18009];
            readonly IHyperdrive: readonly [10351];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:5236:119";
        readonly nodes: readonly [{
            readonly id: 17736;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:119";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 17738;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:119";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18010;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17737;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "73:11:119";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18009;
            readonly nodeType: "ContractDefinition";
            readonly src: "491:4783:119";
            readonly nodes: readonly [{
                readonly id: 17742;
                readonly nodeType: "VariableDeclaration";
                readonly src: "513:42:119";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "_LP_ASSET_ID";
                readonly nameLocation: "539:12:119";
                readonly scope: 18009;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17740;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "513:7:119";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "30";
                    readonly id: 17741;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "554:1:119";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_0_by_1";
                        readonly typeString: "int_const 0";
                    };
                    readonly value: "0";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17751;
                readonly nodeType: "VariableDeclaration";
                readonly src: "561:108:119";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "_WITHDRAWAL_SHARE_ASSET_ID";
                readonly nameLocation: "587:26:119";
                readonly scope: 18009;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17743;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "561:7:119";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly commonType: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly id: 17750;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly arguments: readonly [{
                            readonly expression: {
                                readonly id: 17746;
                                readonly name: "AssetIdPrefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17756;
                                readonly src: "632:13:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                    readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                };
                            };
                            readonly id: 17747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly memberLocation: "646:15:119";
                            readonly memberName: "WithdrawalShare";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 17755;
                            readonly src: "632:29:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            }];
                            readonly id: 17745;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "624:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                readonly typeString: "type(uint256)";
                            };
                            readonly typeName: {
                                readonly id: 17744;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "624:7:119";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 17748;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "624:38:119";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "<<";
                    readonly rightExpression: {
                        readonly hexValue: "323438";
                        readonly id: 17749;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "666:3:119";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_248_by_1";
                            readonly typeString: "int_const 248";
                        };
                        readonly value: "248";
                    };
                    readonly src: "624:45:119";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17756;
                readonly nodeType: "EnumDefinition";
                readonly src: "676:91:119";
                readonly nodes: readonly [];
                readonly canonicalName: "AssetId.AssetIdPrefix";
                readonly members: readonly [{
                    readonly id: 17752;
                    readonly name: "LP";
                    readonly nameLocation: "705:2:119";
                    readonly nodeType: "EnumValue";
                    readonly src: "705:2:119";
                }, {
                    readonly id: 17753;
                    readonly name: "Long";
                    readonly nameLocation: "717:4:119";
                    readonly nodeType: "EnumValue";
                    readonly src: "717:4:119";
                }, {
                    readonly id: 17754;
                    readonly name: "Short";
                    readonly nameLocation: "731:5:119";
                    readonly nodeType: "EnumValue";
                    readonly src: "731:5:119";
                }, {
                    readonly id: 17755;
                    readonly name: "WithdrawalShare";
                    readonly nameLocation: "746:15:119";
                    readonly nodeType: "EnumValue";
                    readonly src: "746:15:119";
                }];
                readonly name: "AssetIdPrefix";
                readonly nameLocation: "681:13:119";
            }, {
                readonly id: 17779;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1198:469:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 17778;
                    readonly nodeType: "Block";
                    readonly src: "1321:346:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 17769;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 17767;
                                readonly name: "_timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17762;
                                readonly src: "1401:10:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30786666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666";
                                readonly id: 17768;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1426:64:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_452312848583266388373324160190187140051835877600158453279131187530910662655_by_1";
                                    readonly typeString: "int_const 4523...(67 digits omitted)...2655";
                                };
                                readonly value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
                            };
                            readonly src: "1401:89:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 17776;
                        readonly nodeType: "IfStatement";
                        readonly src: "1384:179:119";
                        readonly trueBody: {
                            readonly id: 17775;
                            readonly nodeType: "Block";
                            readonly src: "1501:62:119";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 17770;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "1522:11:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 17772;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1534:16:119";
                                        readonly memberName: "InvalidTimestamp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10255;
                                        readonly src: "1522:28:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 17773;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1522:30:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 17774;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1515:37:119";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1597:64:119";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "1611:40:119";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "1624:4:119";
                                            readonly type: "";
                                            readonly value: "0xf8";
                                        }, {
                                            readonly name: "_prefix";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1630:7:119";
                                        }];
                                        readonly functionName: {
                                            readonly name: "shl";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1620:3:119";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1620:18:119";
                                    }, {
                                        readonly name: "_timestamp";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1640:10:119";
                                    }];
                                    readonly functionName: {
                                        readonly name: "or";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1617:2:119";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1617:34:119";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "id";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "1611:2:119";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 17760;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1630:7:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17762;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1640:10:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17765;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1611:2:119";
                            readonly valueSize: 1;
                        }];
                        readonly flags: readonly ["memory-safe"];
                        readonly id: 17777;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1572:89:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 17757;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "773:420:119";
                    readonly text: "@dev Encodes a prefix and a timestamp into an asset ID. Asset IDs are\n      used so that LP, long, and short tokens can all be represented in a\n      single MultiToken instance. The zero asset ID indicates the LP\n      token.\n @param _prefix A one byte prefix that specifies the asset type.\n @param _timestamp A timestamp associated with the asset.\n @return id The asset ID.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "encodeAssetId";
                readonly nameLocation: "1207:13:119";
                readonly parameters: {
                    readonly id: 17763;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17760;
                        readonly mutability: "mutable";
                        readonly name: "_prefix";
                        readonly nameLocation: "1244:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17779;
                        readonly src: "1230:21:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 17759;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 17758;
                                readonly name: "AssetIdPrefix";
                                readonly nameLocations: readonly ["1230:13:119"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 17756;
                                readonly src: "1230:13:119";
                            };
                            readonly referencedDeclaration: 17756;
                            readonly src: "1230:13:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 17762;
                        readonly mutability: "mutable";
                        readonly name: "_timestamp";
                        readonly nameLocation: "1269:10:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17779;
                        readonly src: "1261:18:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17761;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1261:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1220:65:119";
                };
                readonly returnParameters: {
                    readonly id: 17766;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17765;
                        readonly mutability: "mutable";
                        readonly name: "id";
                        readonly nameLocation: "1317:2:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17779;
                        readonly src: "1309:10:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17764;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1309:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1308:12:119";
                };
                readonly scope: 18009;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 17792;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1967:438:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 17791;
                    readonly nodeType: "Block";
                    readonly src: "2083:322:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2171:228:119";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "2185:25:119";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2200:4:119";
                                        readonly type: "";
                                        readonly value: "0xf8";
                                    }, {
                                        readonly name: "_id";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2206:3:119";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2196:3:119";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2196:14:119";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "_prefix";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2185:7:119";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2239:134:119";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2274:64:119";
                                        readonly type: "";
                                        readonly value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
                                    }, {
                                        readonly name: "_id";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2356:3:119";
                                    }];
                                    readonly functionName: {
                                        readonly name: "and";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2253:3:119";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2253:120:119";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "_timestamp";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2239:10:119";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 17782;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2206:3:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17782;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2356:3:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17786;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2185:7:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17788;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2239:10:119";
                            readonly valueSize: 1;
                        }];
                        readonly flags: readonly ["memory-safe"];
                        readonly id: 17790;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2146:253:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 17780;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1673:289:119";
                    readonly text: "@dev Decodes an encoded asset ID into it's constituent parts of an\n      identifier, data and a timestamp.\n @param _id The asset ID.\n @return _prefix A one byte prefix that specifies the asset type.\n @return _timestamp A timestamp associated with the asset.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decodeAssetId";
                readonly nameLocation: "1976:13:119";
                readonly parameters: {
                    readonly id: 17783;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17782;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "2007:3:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17792;
                        readonly src: "1999:11:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17781;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1999:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1989:27:119";
                };
                readonly returnParameters: {
                    readonly id: 17789;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17786;
                        readonly mutability: "mutable";
                        readonly name: "_prefix";
                        readonly nameLocation: "2054:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17792;
                        readonly src: "2040:21:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                            readonly typeString: "enum AssetId.AssetIdPrefix";
                        };
                        readonly typeName: {
                            readonly id: 17785;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 17784;
                                readonly name: "AssetIdPrefix";
                                readonly nameLocations: readonly ["2040:13:119"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 17756;
                                readonly src: "2040:13:119";
                            };
                            readonly referencedDeclaration: 17756;
                            readonly src: "2040:13:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 17788;
                        readonly mutability: "mutable";
                        readonly name: "_timestamp";
                        readonly nameLocation: "2071:10:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17792;
                        readonly src: "2063:18:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17787;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2063:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2039:43:119";
                };
                readonly scope: 18009;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 17870;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2533:693:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 17869;
                    readonly nodeType: "Block";
                    readonly src: "2627:599:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [17802, 17804];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17802;
                            readonly mutability: "mutable";
                            readonly name: "prefix";
                            readonly nameLocation: "2652:6:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17869;
                            readonly src: "2638:20:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly typeName: {
                                readonly id: 17801;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 17800;
                                    readonly name: "AssetIdPrefix";
                                    readonly nameLocations: readonly ["2638:13:119"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 17756;
                                    readonly src: "2638:13:119";
                                };
                                readonly referencedDeclaration: 17756;
                                readonly src: "2638:13:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 17804;
                            readonly mutability: "mutable";
                            readonly name: "timestamp";
                            readonly nameLocation: "2668:9:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17869;
                            readonly src: "2660:17:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 17803;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2660:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17808;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 17806;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17795;
                                readonly src: "2695:3:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 17805;
                                readonly name: "decodeAssetId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17792;
                                readonly src: "2681:13:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$";
                                    readonly typeString: "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)";
                                };
                            };
                            readonly id: 17807;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2681:18:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2637:62:119";
                    }, {
                        readonly assignments: readonly [17810];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17810;
                            readonly mutability: "mutable";
                            readonly name: "_timestamp";
                            readonly nameLocation: "2723:10:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17869;
                            readonly src: "2709:24:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 17809;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2709:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17814;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 17812;
                                readonly name: "timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17804;
                                readonly src: "2745:9:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 17811;
                                readonly name: "toString";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18008;
                                readonly src: "2736:8:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 17813;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2736:19:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2709:46:119";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly id: 17818;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 17815;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17802;
                                readonly src: "2769:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 17816;
                                    readonly name: "AssetIdPrefix";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17756;
                                    readonly src: "2779:13:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                    };
                                };
                                readonly id: 17817;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2793:2:119";
                                readonly memberName: "LP";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17752;
                                readonly src: "2779:16:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly src: "2769:26:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                                readonly id: 17827;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 17824;
                                    readonly name: "prefix";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17802;
                                    readonly src: "2855:6:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 17825;
                                        readonly name: "AssetIdPrefix";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17756;
                                        readonly src: "2865:13:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                            readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                        };
                                    };
                                    readonly id: 17826;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2879:4:119";
                                    readonly memberName: "Long";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17753;
                                    readonly src: "2865:18:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                };
                                readonly src: "2855:28:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseBody: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                    readonly id: 17843;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 17840;
                                        readonly name: "prefix";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17802;
                                        readonly src: "2985:6:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 17841;
                                            readonly name: "AssetIdPrefix";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17756;
                                            readonly src: "2995:13:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                                readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                            };
                                        };
                                        readonly id: 17842;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3009:5:119";
                                        readonly memberName: "Short";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17754;
                                        readonly src: "2995:19:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                    };
                                    readonly src: "2985:29:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                        readonly id: 17859;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 17856;
                                            readonly name: "prefix";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17802;
                                            readonly src: "3117:6:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                                readonly typeString: "enum AssetId.AssetIdPrefix";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly expression: {
                                                readonly id: 17857;
                                                readonly name: "AssetIdPrefix";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17756;
                                                readonly src: "3127:13:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                                    readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                };
                                            };
                                            readonly id: 17858;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3141:15:119";
                                            readonly memberName: "WithdrawalShare";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 17755;
                                            readonly src: "3127:29:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                                readonly typeString: "enum AssetId.AssetIdPrefix";
                                            };
                                        };
                                        readonly src: "3117:39:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 17865;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "3113:107:119";
                                    readonly trueBody: {
                                        readonly id: 17864;
                                        readonly nodeType: "Block";
                                        readonly src: "3158:62:119";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 17862;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 17860;
                                                    readonly name: "_name";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17798;
                                                    readonly src: "3172:5:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly hexValue: "48797065726472697665205769746864726177616c205368617265";
                                                    readonly id: 17861;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3180:29:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_95475bfa6829cdc3e8381137dc116eb57ce9a53311406ca351e676e5b4f3d603";
                                                        readonly typeString: "literal_string \"Hyperdrive Withdrawal Share\"";
                                                    };
                                                    readonly value: "Hyperdrive Withdrawal Share";
                                                };
                                                readonly src: "3172:37:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly id: 17863;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "3172:37:119";
                                        }];
                                    };
                                };
                                readonly id: 17866;
                                readonly nodeType: "IfStatement";
                                readonly src: "2981:239:119";
                                readonly trueBody: {
                                    readonly id: 17855;
                                    readonly nodeType: "Block";
                                    readonly src: "3016:91:119";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 17853;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 17844;
                                                readonly name: "_name";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17798;
                                                readonly src: "3030:5:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly hexValue: "487970657264726976652053686f72743a20";
                                                        readonly id: 17849;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3062:20:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_stringliteral_a62ab063b0156836a80e542989da1b00937c9a233cf33e11daf2a544c59febaf";
                                                            readonly typeString: "literal_string \"Hyperdrive Short: \"";
                                                        };
                                                        readonly value: "Hyperdrive Short: ";
                                                    }, {
                                                        readonly id: 17850;
                                                        readonly name: "_timestamp";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17810;
                                                        readonly src: "3084:10:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_stringliteral_a62ab063b0156836a80e542989da1b00937c9a233cf33e11daf2a544c59febaf";
                                                            readonly typeString: "literal_string \"Hyperdrive Short: \"";
                                                        }, {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        }];
                                                        readonly expression: {
                                                            readonly id: 17847;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "3045:3:119";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 17848;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "3049:12:119";
                                                        readonly memberName: "encodePacked";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "3045:16:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 17851;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "3045:50:119";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    }];
                                                    readonly id: 17846;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3038:6:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                        readonly typeString: "type(string storage pointer)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 17845;
                                                        readonly name: "string";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3038:6:119";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 17852;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3038:58:119";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly src: "3030:66:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly id: 17854;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3030:66:119";
                                    }];
                                };
                            };
                            readonly id: 17867;
                            readonly nodeType: "IfStatement";
                            readonly src: "2851:369:119";
                            readonly trueBody: {
                                readonly id: 17839;
                                readonly nodeType: "Block";
                                readonly src: "2885:90:119";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 17837;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 17828;
                                            readonly name: "_name";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17798;
                                            readonly src: "2899:5:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "48797065726472697665204c6f6e673a20";
                                                    readonly id: 17833;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "2931:19:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_54a0a19da55b3dd3e4e0b1b4d82bc87886a282b10f614aabd33c12d6992323d5";
                                                        readonly typeString: "literal_string \"Hyperdrive Long: \"";
                                                    };
                                                    readonly value: "Hyperdrive Long: ";
                                                }, {
                                                    readonly id: 17834;
                                                    readonly name: "_timestamp";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17810;
                                                    readonly src: "2952:10:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_stringliteral_54a0a19da55b3dd3e4e0b1b4d82bc87886a282b10f614aabd33c12d6992323d5";
                                                        readonly typeString: "literal_string \"Hyperdrive Long: \"";
                                                    }, {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 17831;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "2914:3:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 17832;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "2918:12:119";
                                                    readonly memberName: "encodePacked";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "2914:16:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 17835;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2914:49:119";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }];
                                                readonly id: 17830;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2907:6:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                    readonly typeString: "type(string storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 17829;
                                                    readonly name: "string";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2907:6:119";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 17836;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2907:57:119";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly src: "2899:65:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    };
                                    readonly id: 17838;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "2899:65:119";
                                }];
                            };
                        };
                        readonly id: 17868;
                        readonly nodeType: "IfStatement";
                        readonly src: "2765:455:119";
                        readonly trueBody: {
                            readonly id: 17823;
                            readonly nodeType: "Block";
                            readonly src: "2797:48:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 17821;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 17819;
                                        readonly name: "_name";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17798;
                                        readonly src: "2811:5:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "48797065726472697665204c50";
                                        readonly id: 17820;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2819:15:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_3885f8df4802d64d6e2dae6292e68384ebd4a1b9b719bfacd396d248494b9807";
                                            readonly typeString: "literal_string \"Hyperdrive LP\"";
                                        };
                                        readonly value: "Hyperdrive LP";
                                    };
                                    readonly src: "2811:23:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly id: 17822;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2811:23:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 17793;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2411:117:119";
                    readonly text: "@dev Converts an asset ID to a token name.\n @param _id The asset ID.\n @return _name The token name.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToName";
                readonly nameLocation: "2542:13:119";
                readonly parameters: {
                    readonly id: 17796;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17795;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "2573:3:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17870;
                        readonly src: "2565:11:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17794;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2565:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2555:27:119";
                };
                readonly returnParameters: {
                    readonly id: 17799;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17798;
                        readonly mutability: "mutable";
                        readonly name: "_name";
                        readonly nameLocation: "2620:5:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17870;
                        readonly src: "2606:19:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 17797;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2606:6:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2605:21:119";
                };
                readonly scope: 18009;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 17948;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3360:689:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 17947;
                    readonly nodeType: "Block";
                    readonly src: "3458:591:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [17880, 17882];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17880;
                            readonly mutability: "mutable";
                            readonly name: "prefix";
                            readonly nameLocation: "3483:6:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17947;
                            readonly src: "3469:20:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly typeName: {
                                readonly id: 17879;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 17878;
                                    readonly name: "AssetIdPrefix";
                                    readonly nameLocations: readonly ["3469:13:119"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 17756;
                                    readonly src: "3469:13:119";
                                };
                                readonly referencedDeclaration: 17756;
                                readonly src: "3469:13:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 17882;
                            readonly mutability: "mutable";
                            readonly name: "timestamp";
                            readonly nameLocation: "3499:9:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17947;
                            readonly src: "3491:17:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 17881;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3491:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17886;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 17884;
                                readonly name: "_id";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17873;
                                readonly src: "3526:3:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 17883;
                                readonly name: "decodeAssetId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17792;
                                readonly src: "3512:13:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$";
                                    readonly typeString: "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)";
                                };
                            };
                            readonly id: 17885;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3512:18:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$";
                                readonly typeString: "tuple(enum AssetId.AssetIdPrefix,uint256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3468:62:119";
                    }, {
                        readonly assignments: readonly [17888];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17888;
                            readonly mutability: "mutable";
                            readonly name: "_timestamp";
                            readonly nameLocation: "3554:10:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 17947;
                            readonly src: "3540:24:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 17887;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3540:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17892;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 17890;
                                readonly name: "timestamp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17882;
                                readonly src: "3576:9:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 17889;
                                readonly name: "toString";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18008;
                                readonly src: "3567:8:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (string memory)";
                                };
                            };
                            readonly id: 17891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3567:19:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3540:46:119";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                readonly typeString: "enum AssetId.AssetIdPrefix";
                            };
                            readonly id: 17896;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 17893;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17880;
                                readonly src: "3600:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 17894;
                                    readonly name: "AssetIdPrefix";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17756;
                                    readonly src: "3610:13:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                        readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                    };
                                };
                                readonly id: 17895;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3624:2:119";
                                readonly memberName: "LP";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 17752;
                                readonly src: "3610:16:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                            };
                            readonly src: "3600:26:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                    readonly typeString: "enum AssetId.AssetIdPrefix";
                                };
                                readonly id: 17905;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 17902;
                                    readonly name: "prefix";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17880;
                                    readonly src: "3688:6:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly expression: {
                                        readonly id: 17903;
                                        readonly name: "AssetIdPrefix";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17756;
                                        readonly src: "3698:13:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                            readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                        };
                                    };
                                    readonly id: 17904;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3712:4:119";
                                    readonly memberName: "Long";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 17753;
                                    readonly src: "3698:18:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                };
                                readonly src: "3688:28:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseBody: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                        readonly typeString: "enum AssetId.AssetIdPrefix";
                                    };
                                    readonly id: 17921;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 17918;
                                        readonly name: "prefix";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17880;
                                        readonly src: "3819:6:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly expression: {
                                            readonly id: 17919;
                                            readonly name: "AssetIdPrefix";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17756;
                                            readonly src: "3829:13:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                                readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                            };
                                        };
                                        readonly id: 17920;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3843:5:119";
                                        readonly memberName: "Short";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 17754;
                                        readonly src: "3829:19:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                    };
                                    readonly src: "3819:29:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                            readonly typeString: "enum AssetId.AssetIdPrefix";
                                        };
                                        readonly id: 17937;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 17934;
                                            readonly name: "prefix";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17880;
                                            readonly src: "3952:6:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                                readonly typeString: "enum AssetId.AssetIdPrefix";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly expression: {
                                                readonly id: 17935;
                                                readonly name: "AssetIdPrefix";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17756;
                                                readonly src: "3962:13:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_enum$_AssetIdPrefix_$17756_$";
                                                    readonly typeString: "type(enum AssetId.AssetIdPrefix)";
                                                };
                                            };
                                            readonly id: 17936;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3976:15:119";
                                            readonly memberName: "WithdrawalShare";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 17755;
                                            readonly src: "3962:29:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_enum$_AssetIdPrefix_$17756";
                                                readonly typeString: "enum AssetId.AssetIdPrefix";
                                            };
                                        };
                                        readonly src: "3952:39:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 17943;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "3948:95:119";
                                    readonly trueBody: {
                                        readonly id: 17942;
                                        readonly nodeType: "Block";
                                        readonly src: "3993:50:119";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 17940;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 17938;
                                                    readonly name: "_symbol";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17876;
                                                    readonly src: "4007:7:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly hexValue: "485950455244524956452d5753";
                                                    readonly id: 17939;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "4017:15:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_0b9965e384d2f49860ddf2e7807779e6362388f54007432117cd030769e4e2ce";
                                                        readonly typeString: "literal_string \"HYPERDRIVE-WS\"";
                                                    };
                                                    readonly value: "HYPERDRIVE-WS";
                                                };
                                                readonly src: "4007:25:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly id: 17941;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "4007:25:119";
                                        }];
                                    };
                                };
                                readonly id: 17944;
                                readonly nodeType: "IfStatement";
                                readonly src: "3815:228:119";
                                readonly trueBody: {
                                    readonly id: 17933;
                                    readonly nodeType: "Block";
                                    readonly src: "3850:92:119";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 17931;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 17922;
                                                readonly name: "_symbol";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17876;
                                                readonly src: "3864:7:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly hexValue: "485950455244524956452d53484f52543a";
                                                        readonly id: 17927;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "3898:19:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_stringliteral_8dd8315612e702e87384bd23733a90e244432d64bc03d61019bfd28cac06bad2";
                                                            readonly typeString: "literal_string \"HYPERDRIVE-SHORT:\"";
                                                        };
                                                        readonly value: "HYPERDRIVE-SHORT:";
                                                    }, {
                                                        readonly id: 17928;
                                                        readonly name: "_timestamp";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17888;
                                                        readonly src: "3919:10:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_stringliteral_8dd8315612e702e87384bd23733a90e244432d64bc03d61019bfd28cac06bad2";
                                                            readonly typeString: "literal_string \"HYPERDRIVE-SHORT:\"";
                                                        }, {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        }];
                                                        readonly expression: {
                                                            readonly id: 17925;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "3881:3:119";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 17926;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "3885:12:119";
                                                        readonly memberName: "encodePacked";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "3881:16:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 17929;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "3881:49:119";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    }];
                                                    readonly id: 17924;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "3874:6:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                        readonly typeString: "type(string storage pointer)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 17923;
                                                        readonly name: "string";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "3874:6:119";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 17930;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3874:57:119";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly src: "3864:67:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly id: 17932;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "3864:67:119";
                                    }];
                                };
                            };
                            readonly id: 17945;
                            readonly nodeType: "IfStatement";
                            readonly src: "3684:359:119";
                            readonly trueBody: {
                                readonly id: 17917;
                                readonly nodeType: "Block";
                                readonly src: "3718:91:119";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 17915;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 17906;
                                            readonly name: "_symbol";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17876;
                                            readonly src: "3732:7:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "485950455244524956452d4c4f4e473a";
                                                    readonly id: 17911;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "3766:18:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_dc332af72689895e8c47c8b584bf7ece20c4d2ba617a0cf29e452770ff96687e";
                                                        readonly typeString: "literal_string \"HYPERDRIVE-LONG:\"";
                                                    };
                                                    readonly value: "HYPERDRIVE-LONG:";
                                                }, {
                                                    readonly id: 17912;
                                                    readonly name: "_timestamp";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17888;
                                                    readonly src: "3786:10:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_stringliteral_dc332af72689895e8c47c8b584bf7ece20c4d2ba617a0cf29e452770ff96687e";
                                                        readonly typeString: "literal_string \"HYPERDRIVE-LONG:\"";
                                                    }, {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 17909;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "3749:3:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 17910;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "3753:12:119";
                                                    readonly memberName: "encodePacked";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "3749:16:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function () pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 17913;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "3749:48:119";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }];
                                                readonly id: 17908;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "3742:6:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                    readonly typeString: "type(string storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 17907;
                                                    readonly name: "string";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "3742:6:119";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 17914;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "3742:56:119";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        };
                                        readonly src: "3732:66:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    };
                                    readonly id: 17916;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "3732:66:119";
                                }];
                            };
                        };
                        readonly id: 17946;
                        readonly nodeType: "IfStatement";
                        readonly src: "3596:447:119";
                        readonly trueBody: {
                            readonly id: 17901;
                            readonly nodeType: "Block";
                            readonly src: "3628:50:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 17899;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 17897;
                                        readonly name: "_symbol";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17876;
                                        readonly src: "3642:7:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly hexValue: "485950455244524956452d4c50";
                                        readonly id: 17898;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3652:15:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_1c1d0d649cf7532db6c9900346b1ef0f955598655275e6f370d8b633fc349afb";
                                            readonly typeString: "literal_string \"HYPERDRIVE-LP\"";
                                        };
                                        readonly value: "HYPERDRIVE-LP";
                                    };
                                    readonly src: "3642:25:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly id: 17900;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3642:25:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 17871;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3232:123:119";
                    readonly text: "@dev Converts an asset ID to a token symbol.\n @param _id The asset ID.\n @return _symbol The token symbol.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assetIdToSymbol";
                readonly nameLocation: "3369:15:119";
                readonly parameters: {
                    readonly id: 17874;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17873;
                        readonly mutability: "mutable";
                        readonly name: "_id";
                        readonly nameLocation: "3402:3:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17948;
                        readonly src: "3394:11:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17872;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3394:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3384:27:119";
                };
                readonly returnParameters: {
                    readonly id: 17877;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17876;
                        readonly mutability: "mutable";
                        readonly name: "_symbol";
                        readonly nameLocation: "3449:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17948;
                        readonly src: "3435:21:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 17875;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3435:6:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3434:23:119";
                };
                readonly scope: 18009;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18008;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4207:1065:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18007;
                    readonly nodeType: "Block";
                    readonly src: "4298:974:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [17957];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17957;
                            readonly mutability: "mutable";
                            readonly name: "maxStringLength";
                            readonly nameLocation: "4544:15:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18007;
                            readonly src: "4536:23:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 17956;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4536:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17959;
                        readonly initialValue: {
                            readonly hexValue: "3738";
                            readonly id: 17958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4562:2:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_78_by_1";
                                readonly typeString: "int_const 78";
                            };
                            readonly value: "78";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4536:28:119";
                    }, {
                        readonly assignments: readonly [17961];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17961;
                            readonly mutability: "mutable";
                            readonly name: "rawResult";
                            readonly nameLocation: "4587:9:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18007;
                            readonly src: "4574:22:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 17960;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4574:5:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17966;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 17964;
                                readonly name: "maxStringLength";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17957;
                                readonly src: "4609:15:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 17963;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "4599:9:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 17962;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "4603:5:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 17965;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4599:26:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4574:51:119";
                    }, {
                        readonly assignments: readonly [17968];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 17968;
                            readonly mutability: "mutable";
                            readonly name: "digits";
                            readonly nameLocation: "4798:6:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18007;
                            readonly src: "4790:14:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 17967;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4790:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 17970;
                        readonly initialValue: {
                            readonly hexValue: "30";
                            readonly id: 17969;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4807:1:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4790:18:119";
                    }, {
                        readonly body: {
                            readonly id: 18002;
                            readonly nodeType: "Block";
                            readonly src: "4848:150:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 17997;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 17978;
                                            readonly name: "rawResult";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17961;
                                            readonly src: "4862:9:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 17984;
                                        readonly indexExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 17983;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 17981;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly id: 17979;
                                                    readonly name: "maxStringLength";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17957;
                                                    readonly src: "4872:15:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 17980;
                                                    readonly name: "digits";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17968;
                                                    readonly src: "4890:6:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "4872:24:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly hexValue: "31";
                                                readonly id: 17982;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "4899:1:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_1_by_1";
                                                    readonly typeString: "int_const 1";
                                                };
                                                readonly value: "1";
                                            };
                                            readonly src: "4872:28:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "4862:39:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 17994;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly components: readonly [{
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                        readonly id: 17991;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly id: 17989;
                                                            readonly name: "_num";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 17951;
                                                            readonly src: "4935:4:119";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "%";
                                                        readonly rightExpression: {
                                                            readonly hexValue: "3130";
                                                            readonly id: 17990;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "number";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "4942:2:119";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_rational_10_by_1";
                                                                readonly typeString: "int_const 10";
                                                            };
                                                            readonly value: "10";
                                                        };
                                                        readonly src: "4935:9:119";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    }];
                                                    readonly id: 17992;
                                                    readonly isConstant: false;
                                                    readonly isInlineArray: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "TupleExpression";
                                                    readonly src: "4934:11:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "+";
                                                readonly rightExpression: {
                                                    readonly hexValue: "3438";
                                                    readonly id: 17993;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "4948:2:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_48_by_1";
                                                        readonly typeString: "int_const 48";
                                                    };
                                                    readonly value: "48";
                                                };
                                                readonly src: "4934:16:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly id: 17988;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4928:5:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint8_$";
                                                    readonly typeString: "type(uint8)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 17987;
                                                    readonly name: "uint8";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4928:5:119";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 17995;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4928:23:119";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint8";
                                                readonly typeString: "uint8";
                                            }];
                                            readonly id: 17986;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4904:6:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                readonly typeString: "type(bytes1)";
                                            };
                                            readonly typeName: {
                                                readonly id: 17985;
                                                readonly name: "bytes1";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4904:6:119";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 17996;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4904:61:119";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly src: "4862:103:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly id: 17998;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4862:103:119";
                            }, {
                                readonly expression: {
                                    readonly id: 18000;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "++";
                                    readonly prefix: false;
                                    readonly src: "4979:8:119";
                                    readonly subExpression: {
                                        readonly id: 17999;
                                        readonly name: "digits";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17968;
                                        readonly src: "4979:6:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18001;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4979:8:119";
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 17973;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 17971;
                                readonly name: "_num";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17951;
                                readonly src: "4825:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 17972;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4833:1:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4825:9:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 18003;
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 17976;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 17974;
                                    readonly name: "_num";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17951;
                                    readonly src: "4836:4:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "/=";
                                readonly rightHandSide: {
                                    readonly hexValue: "3130";
                                    readonly id: 17975;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4844:2:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_10_by_1";
                                        readonly typeString: "int_const 10";
                                    };
                                    readonly value: "10";
                                };
                                readonly src: "4836:10:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 17977;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "4836:10:119";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "4818:180:119";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5130:113:119";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "5144:54:119";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "rawResult";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5158:9:119";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "maxStringLength";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5173:15:119";
                                        }, {
                                            readonly name: "digits";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5190:6:119";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "5169:3:119";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "5169:28:119";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5154:3:119";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5154:44:119";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "result";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5144:6:119";
                                }];
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly name: "result";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5218:6:119";
                                    }, {
                                        readonly name: "digits";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5226:6:119";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "5211:6:119";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "5211:22:119";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "5211:22:119";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 17968;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5190:6:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17968;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5226:6:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17957;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5173:15:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17961;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5158:9:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17954;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5144:6:119";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 17954;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5218:6:119";
                            readonly valueSize: 1;
                        }];
                        readonly id: 18004;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5121:122:119";
                    }, {
                        readonly expression: {
                            readonly id: 18005;
                            readonly name: "result";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 17954;
                            readonly src: "5259:6:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 17955;
                        readonly id: 18006;
                        readonly nodeType: "Return";
                        readonly src: "5252:13:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 17949;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4055:147:119";
                    readonly text: "@dev Converts an unsigned integer to a string.\n @param _num The integer to be converted.\n @return result The stringified integer.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toString";
                readonly nameLocation: "4216:8:119";
                readonly parameters: {
                    readonly id: 17952;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17951;
                        readonly mutability: "mutable";
                        readonly name: "_num";
                        readonly nameLocation: "4242:4:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18008;
                        readonly src: "4234:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 17950;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4234:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4224:28:119";
                };
                readonly returnParameters: {
                    readonly id: 17955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17954;
                        readonly mutability: "mutable";
                        readonly name: "result";
                        readonly nameLocation: "4290:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18008;
                        readonly src: "4276:20:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 17953;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4276:6:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4275:22:119";
                };
                readonly scope: 18009;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "AssetId";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 17739;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "126:365:119";
                readonly text: "@author DELV\n @title Hyperdrive\n @notice A library that handles the encoding and decoding of asset IDs for\n         Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [18009];
            readonly name: "AssetId";
            readonly nameLocation: "499:7:119";
            readonly scope: 18010;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 119;
};
//# sourceMappingURL=AssetId.d.ts.map