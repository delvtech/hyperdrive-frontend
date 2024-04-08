export declare const FixedPointMath: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b1e4f18c3294acd698b6f7ab2d86fbd53024962eee32d32f7f4ed14001955c9664736f6c63430008140033";
        readonly sourceMap: "507:15643:122:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;507:15643:122;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b1e4f18c3294acd698b6f7ab2d86fbd53024962eee32d32f7f4ed14001955c9664736f6c63430008140033";
        readonly sourceMap: "507:15643:122:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"FixedPointMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A fixed-point math library.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/FixedPointMath.sol\":\"FixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]}},\"version\":1}";
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
                readonly "contracts/src/libraries/FixedPointMath.sol": "FixedPointMath";
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
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
        readonly id: 18823;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [18822];
            readonly IHyperdrive: readonly [10351];
            readonly ONE: readonly [18039];
            readonly SafeCast: readonly [21815];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "40:16111:122";
        readonly nodes: readonly [{
            readonly id: 18032;
            readonly nodeType: "PragmaDirective";
            readonly src: "40:23:122";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 18034;
            readonly nodeType: "ImportDirective";
            readonly src: "65:60:122";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18823;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18033;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "74:11:122";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18036;
            readonly nodeType: "ImportDirective";
            readonly src: "126:42:122";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "./SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18823;
            readonly sourceUnit: 21816;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18035;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21815;
                    readonly src: "135:8:122";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18039;
            readonly nodeType: "VariableDeclaration";
            readonly src: "170:27:122";
            readonly nodes: readonly [];
            readonly constant: true;
            readonly mutability: "constant";
            readonly name: "ONE";
            readonly nameLocation: "187:3:122";
            readonly scope: 18823;
            readonly stateVariable: false;
            readonly storageLocation: "default";
            readonly typeDescriptions: {
                readonly typeIdentifier: "t_uint256";
                readonly typeString: "uint256";
            };
            readonly typeName: {
                readonly id: 18037;
                readonly name: "uint256";
                readonly nodeType: "ElementaryTypeName";
                readonly src: "170:7:122";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
            };
            readonly value: {
                readonly hexValue: "31653138";
                readonly id: 18038;
                readonly isConstant: false;
                readonly isLValue: false;
                readonly isPure: true;
                readonly kind: "number";
                readonly lValueRequested: false;
                readonly nodeType: "Literal";
                readonly src: "193:4:122";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                    readonly typeString: "int_const 1000000000000000000";
                };
                readonly value: "1e18";
            };
            readonly visibility: "internal";
        }, {
            readonly id: 18822;
            readonly nodeType: "ContractDefinition";
            readonly src: "507:15643:122";
            readonly nodes: readonly [{
                readonly id: 18043;
                readonly nodeType: "UsingForDirective";
                readonly src: "536:33:122";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18041;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["542:14:122"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "542:14:122";
                };
                readonly typeName: {
                    readonly id: 18042;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "561:7:122";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 18046;
                readonly nodeType: "UsingForDirective";
                readonly src: "574:27:122";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18044;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["580:8:122"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21815;
                    readonly src: "580:8:122";
                };
                readonly typeName: {
                    readonly id: 18045;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "593:7:122";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 18053;
                readonly nodeType: "VariableDeclaration";
                readonly src: "607:52:122";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_UINT256";
                readonly nameLocation: "633:11:122";
                readonly scope: 18822;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18047;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "607:7:122";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly commonType: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly id: 18052;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly commonType: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                        readonly id: 18050;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly leftExpression: {
                            readonly hexValue: "32";
                            readonly id: 18048;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "647:1:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_2_by_1";
                                readonly typeString: "int_const 2";
                            };
                            readonly value: "2";
                        };
                        readonly nodeType: "BinaryOperation";
                        readonly operator: "**";
                        readonly rightExpression: {
                            readonly hexValue: "323536";
                            readonly id: 18049;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "652:3:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_256_by_1";
                                readonly typeString: "int_const 256";
                            };
                            readonly value: "256";
                        };
                        readonly src: "647:8:122";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "-";
                    readonly rightExpression: {
                        readonly hexValue: "31";
                        readonly id: 18051;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "658:1:122";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_1_by_1";
                            readonly typeString: "int_const 1";
                        };
                        readonly value: "1";
                    };
                    readonly src: "647:12:122";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18067;
                readonly nodeType: "FunctionDefinition";
                readonly src: "898:556:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18066;
                    readonly nodeType: "Block";
                    readonly src: "1025:429:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1087:361:122";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "1300:44:122";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1325:1:122";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1328:1:122";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1318:6:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1318:12:122";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "1318:12:122";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1229:11:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1253:1:122";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1259:1:122";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1266:11:122";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1279:1:122";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1262:3:122";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "1262:19:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1256:2:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "1256:26:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1249:3:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "1249:34:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1242:6:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1242:42:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1225:3:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1225:60:122";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1201:6:122";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1201:98:122";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "1198:146:122";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "1406:32:122";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1419:1:122";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1422:1:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1415:3:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1415:9:122";
                                    }, {
                                        readonly name: "denominator";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1426:11:122";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1411:3:122";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1411:27:122";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "1406:1:122";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 18053;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1266:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18060;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1229:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18060;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1426:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18056;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1259:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18056;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1419:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18058;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1253:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18058;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1279:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18058;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1422:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18063;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1406:1:122";
                            readonly valueSize: 1;
                        }];
                        readonly id: 18065;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1078:370:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18054;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "666:227:122";
                    readonly text: "@param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded down.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "907:10:122";
                readonly parameters: {
                    readonly id: 18061;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18056;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "935:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18067;
                        readonly src: "927:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18055;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "927:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18058;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "954:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18067;
                        readonly src: "946:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18057;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "946:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18060;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "973:11:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18067;
                        readonly src: "965:19:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18059;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "965:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "917:73:122";
                };
                readonly returnParameters: {
                    readonly id: 18064;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18063;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "1022:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18067;
                        readonly src: "1014:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18062;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1014:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1013:11:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18085;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1610:118:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18084;
                    readonly nodeType: "Block";
                    readonly src: "1681:47:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18078;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18070;
                                    readonly src: "1710:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18079;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18072;
                                    readonly src: "1713:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18080;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "1716:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 18077;
                                    readonly name: "mulDivDown";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "1699:10:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18081;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1699:21:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 18082;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "1698:23:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18076;
                        readonly id: 18083;
                        readonly nodeType: "Return";
                        readonly src: "1691:30:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18068;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1460:145:122";
                    readonly text: "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a * b rounded down.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDown";
                readonly nameLocation: "1619:7:122";
                readonly parameters: {
                    readonly id: 18073;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18070;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "1635:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18085;
                        readonly src: "1627:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18069;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1627:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18072;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "1646:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18085;
                        readonly src: "1638:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18071;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1638:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1626:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18076;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18075;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18085;
                        readonly src: "1672:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18074;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1672:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1671:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18103;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1884:164:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18102;
                    readonly nodeType: "Block";
                    readonly src: "1955:93:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18096;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18088;
                                    readonly src: "1984:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18097;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "1987:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18098;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18090;
                                    readonly src: "1992:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 18095;
                                    readonly name: "mulDivDown";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "1973:10:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18099;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1973:21:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 18100;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "1972:23:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18094;
                        readonly id: 18101;
                        readonly nodeType: "Return";
                        readonly src: "1965:30:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18086;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1734:145:122";
                    readonly text: "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a / b rounded down.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divDown";
                readonly nameLocation: "1893:7:122";
                readonly parameters: {
                    readonly id: 18091;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18088;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "1909:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18103;
                        readonly src: "1901:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18087;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1901:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18090;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "1920:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18103;
                        readonly src: "1912:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18089;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1912:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1900:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18094;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18093;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18103;
                        readonly src: "1946:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18092;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1946:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1945:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18117;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2284:748:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18116;
                    readonly nodeType: "Block";
                    readonly src: "2409:623:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2471:555:122";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "2684:44:122";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2709:1:122";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2712:1:122";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2702:6:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2702:12:122";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "2702:12:122";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2613:11:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2637:1:122";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2643:1:122";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2650:11:122";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2663:1:122";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2646:3:122";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "2646:19:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2640:2:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2640:26:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2633:3:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2633:34:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2626:6:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2626:42:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2609:3:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2609:60:122";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2585:6:122";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2585:98:122";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "2582:146:122";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2897:119:122";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2934:1:122";
                                                }, {
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2937:1:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2930:3:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2930:9:122";
                                            }, {
                                                readonly name: "denominator";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2941:11:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2926:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2926:27:122";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2955:1:122";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2923:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2923:34:122";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2983:1:122";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2986:1:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mul";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2979:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2979:9:122";
                                        }, {
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2990:11:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2975:3:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2975:27:122";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2902:3:122";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2902:114:122";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2897:1:122";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 18053;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2650:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18110;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2613:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18110;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2941:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18110;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2990:11:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2643:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2934:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2983:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2637:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2663:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2937:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2986:1:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18113;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2897:1:122";
                            readonly valueSize: 1;
                        }];
                        readonly id: 18115;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2462:564:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18104;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2054:225:122";
                    readonly text: "@param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded up.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "2293:8:122";
                readonly parameters: {
                    readonly id: 18111;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18106;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2319:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18117;
                        readonly src: "2311:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18105;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2311:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18108;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2338:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18117;
                        readonly src: "2330:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18107;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2330:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18110;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "2357:11:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18117;
                        readonly src: "2349:19:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18109;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2349:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2301:73:122";
                };
                readonly returnParameters: {
                    readonly id: 18114;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18113;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2406:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18117;
                        readonly src: "2398:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18112;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2398:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2397:11:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18135;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3190:114:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18134;
                    readonly nodeType: "Block";
                    readonly src: "3259:45:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18128;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18120;
                                    readonly src: "3286:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18129;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18122;
                                    readonly src: "3289:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18130;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "3292:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 18127;
                                    readonly name: "mulDivUp";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18117;
                                    readonly src: "3277:8:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18131;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3277:19:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 18132;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3276:21:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18126;
                        readonly id: 18133;
                        readonly nodeType: "Return";
                        readonly src: "3269:28:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18118;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3038:147:122";
                    readonly text: "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a * b rounded up.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulUp";
                readonly nameLocation: "3199:5:122";
                readonly parameters: {
                    readonly id: 18123;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18120;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "3213:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18135;
                        readonly src: "3205:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18119;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3205:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18122;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "3224:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18135;
                        readonly src: "3216:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18121;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3216:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3204:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18126;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18125;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18135;
                        readonly src: "3250:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18124;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3250:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3249:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18153;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3462:114:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18152;
                    readonly nodeType: "Block";
                    readonly src: "3531:45:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18146;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18138;
                                    readonly src: "3558:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18147;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "3561:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18148;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18140;
                                    readonly src: "3566:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 18145;
                                    readonly name: "mulDivUp";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18117;
                                    readonly src: "3549:8:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18149;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3549:19:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 18150;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "3548:21:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18144;
                        readonly id: 18151;
                        readonly nodeType: "Return";
                        readonly src: "3541:28:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18136;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3310:147:122";
                    readonly text: "@param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a / b rounded up.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divUp";
                readonly nameLocation: "3471:5:122";
                readonly parameters: {
                    readonly id: 18141;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18138;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "3485:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18153;
                        readonly src: "3477:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18137;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3477:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18140;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "3496:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18153;
                        readonly src: "3488:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18139;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3488:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3476:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18144;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18143;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18153;
                        readonly src: "3522:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18142;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3522:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3521:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18210;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3811:844:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18209;
                    readonly nodeType: "Block";
                    readonly src: "3878:777:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 18165;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 18163;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18158;
                                readonly src: "3935:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 18164;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3940:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3935:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 18169;
                        readonly nodeType: "IfStatement";
                        readonly src: "3931:47:122";
                        readonly trueBody: {
                            readonly id: 18168;
                            readonly nodeType: "Block";
                            readonly src: "3943:35:122";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 18166;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "3964:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 18162;
                                readonly id: 18167;
                                readonly nodeType: "Return";
                                readonly src: "3957:10:122";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 18172;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 18170;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18156;
                                readonly src: "4031:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 18171;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4036:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4031:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 18176;
                        readonly nodeType: "IfStatement";
                        readonly src: "4027:45:122";
                        readonly trueBody: {
                            readonly id: 18175;
                            readonly nodeType: "Block";
                            readonly src: "4039:33:122";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly hexValue: "30";
                                    readonly id: 18173;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4060:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly functionReturnParameters: 18162;
                                readonly id: 18174;
                                readonly nodeType: "Return";
                                readonly src: "4053:8:122";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [18178];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18178;
                            readonly mutability: "mutable";
                            readonly name: "y_int256";
                            readonly nameLocation: "4217:8:122";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18209;
                            readonly src: "4210:15:122";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 18177;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4210:6:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18182;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly expression: {
                                    readonly id: 18179;
                                    readonly name: "y";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18158;
                                    readonly src: "4228:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18180;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4230:8:122";
                                readonly memberName: "toInt256";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21814;
                                readonly src: "4228:10:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256) pure returns (int256)";
                                };
                            };
                            readonly id: 18181;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4228:12:122";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4210:30:122";
                    }, {
                        readonly assignments: readonly [18184];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18184;
                            readonly mutability: "mutable";
                            readonly name: "lnx";
                            readonly nameLocation: "4409:3:122";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18209;
                            readonly src: "4402:10:122";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 18183;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4402:6:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18190;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 18186;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18156;
                                        readonly src: "4418:1:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 18187;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4420:8:122";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21814;
                                    readonly src: "4418:10:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 18188;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4418:12:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 18185;
                                readonly name: "ln";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18629;
                                readonly src: "4415:2:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$";
                                    readonly typeString: "function (int256) pure returns (int256)";
                                };
                            };
                            readonly id: 18189;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4415:16:122";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4402:29:122";
                    }, {
                        readonly assignments: readonly [18192];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18192;
                            readonly mutability: "mutable";
                            readonly name: "ylnx";
                            readonly nameLocation: "4448:4:122";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18209;
                            readonly src: "4441:11:122";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 18191;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4441:6:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18193;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4441:11:122";
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "4487:50:122";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "4501:26:122";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "y_int256";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "4513:8:122";
                                    }, {
                                        readonly name: "lnx";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "4523:3:122";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mul";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "4509:3:122";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "4509:18:122";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "ylnx";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4501:4:122";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 18184;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4523:3:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18178;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4513:8:122";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 18192;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4501:4:122";
                            readonly valueSize: 1;
                        }];
                        readonly flags: readonly ["memory-safe"];
                        readonly id: 18194;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "4462:75:122";
                    }, {
                        readonly expression: {
                            readonly id: 18200;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18195;
                                readonly name: "ylnx";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18192;
                                readonly src: "4546:4:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "/=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 18198;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "4561:3:122";
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
                                    readonly id: 18197;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4554:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_int256_$";
                                        readonly typeString: "type(int256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 18196;
                                        readonly name: "int256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4554:6:122";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 18199;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4554:11:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "4546:19:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 18201;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4546:19:122";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18205;
                                    readonly name: "ylnx";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18192;
                                    readonly src: "4642:4:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly id: 18204;
                                    readonly name: "exp";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18407;
                                    readonly src: "4638:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$";
                                        readonly typeString: "function (int256) pure returns (int256)";
                                    };
                                };
                                readonly id: 18206;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4638:9:122";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 18203;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "4630:7:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 18202;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "4630:7:122";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 18207;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4630:18:122";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18162;
                        readonly id: 18208;
                        readonly nodeType: "Return";
                        readonly src: "4623:25:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18154;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3582:224:122";
                    readonly text: "@dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @return The result of x^y.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pow";
                readonly nameLocation: "3820:3:122";
                readonly parameters: {
                    readonly id: 18159;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18156;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "3832:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18210;
                        readonly src: "3824:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18155;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3824:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18158;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "3843:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18210;
                        readonly src: "3835:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18157;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3835:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3823:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18162;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18161;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18210;
                        readonly src: "3869:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18160;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3869:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3868:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18407;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4907:3302:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18406;
                    readonly nodeType: "Block";
                    readonly src: "4963:3246:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 18405;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "4973:3230:122";
                        readonly statements: readonly [{
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18221;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18218;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "5130:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly id: 18220;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "-";
                                    readonly prefix: true;
                                    readonly src: "5135:21:122";
                                    readonly subExpression: {
                                        readonly hexValue: "3432313339363738383534343532373637353531";
                                        readonly id: 18219;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5136:20:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_42139678854452767551_by_1";
                                            readonly typeString: "int_const 42139678854452767551";
                                        };
                                        readonly value: "42139678854452767551";
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_minus_42139678854452767551_by_1";
                                        readonly typeString: "int_const -42139678854452767551";
                                    };
                                };
                                readonly src: "5130:26:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 18224;
                            readonly nodeType: "IfStatement";
                            readonly src: "5126:40:122";
                            readonly trueBody: {
                                readonly expression: {
                                    readonly hexValue: "30";
                                    readonly id: 18222;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5165:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly functionReturnParameters: 18217;
                                readonly id: 18223;
                                readonly nodeType: "Return";
                                readonly src: "5158:8:122";
                            };
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18227;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18225;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "5360:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">=";
                                readonly rightExpression: {
                                    readonly hexValue: "313335333035393939333638383933323331353839";
                                    readonly id: 18226;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5365:21:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_135305999368893231589_by_1";
                                        readonly typeString: "int_const 135305999368893231589";
                                    };
                                    readonly value: "135305999368893231589";
                                };
                                readonly src: "5360:26:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 18233;
                            readonly nodeType: "IfStatement";
                            readonly src: "5356:87:122";
                            readonly trueBody: {
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 18228;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "5411:11:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 18230;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5423:18:122";
                                        readonly memberName: "ExpInvalidExponent";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10219;
                                        readonly src: "5411:30:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 18231;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5411:32:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 18232;
                                readonly nodeType: "RevertStatement";
                                readonly src: "5404:39:122";
                            };
                        }, {
                            readonly expression: {
                                readonly id: 18243;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18234;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "5700:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18242;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18237;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 18235;
                                                readonly name: "x";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18213;
                                                readonly src: "5705:1:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "<<";
                                            readonly rightExpression: {
                                                readonly hexValue: "3738";
                                                readonly id: 18236;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5710:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_78_by_1";
                                                    readonly typeString: "int_const 78";
                                                };
                                                readonly value: "78";
                                            };
                                            readonly src: "5705:7:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18238;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "5704:9:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "/";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_rational_3814697265625_by_1";
                                            readonly typeString: "int_const 3814697265625";
                                        };
                                        readonly id: 18241;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "35";
                                            readonly id: 18239;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5716:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_5_by_1";
                                                readonly typeString: "int_const 5";
                                            };
                                            readonly value: "5";
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "**";
                                        readonly rightExpression: {
                                            readonly hexValue: "3138";
                                            readonly id: 18240;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5721:2:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_18_by_1";
                                                readonly typeString: "int_const 18";
                                            };
                                            readonly value: "18";
                                        };
                                        readonly src: "5716:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3814697265625_by_1";
                                            readonly typeString: "int_const 3814697265625";
                                        };
                                    };
                                    readonly src: "5704:19:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "5700:23:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18244;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "5700:23:122";
                        }, {
                            readonly assignments: readonly [18246];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18246;
                                readonly mutability: "mutable";
                                readonly name: "k";
                                readonly nameLocation: "6059:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18405;
                                readonly src: "6052:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18245;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6052:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18260;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18259;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 18256;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18252;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18249;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18247;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "6065:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "<<";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "3936";
                                                        readonly id: 18248;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6070:2:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_96_by_1";
                                                            readonly typeString: "int_const 96";
                                                        };
                                                        readonly value: "96";
                                                    };
                                                    readonly src: "6065:7:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18250;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "6064:9:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "/";
                                            readonly rightExpression: {
                                                readonly hexValue: "3534393136373737343637373037343733333531313431343731313238";
                                                readonly id: 18251;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6076:29:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_54916777467707473351141471128_by_1";
                                                    readonly typeString: "int_const 54916777467707473351141471128";
                                                };
                                                readonly value: "54916777467707473351141471128";
                                            };
                                            readonly src: "6064:41:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_rational_39614081257132168796771975168_by_1";
                                                readonly typeString: "int_const 39614081257132168796771975168";
                                            };
                                            readonly id: 18255;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly hexValue: "32";
                                                readonly id: 18253;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6108:1:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_2_by_1";
                                                    readonly typeString: "int_const 2";
                                                };
                                                readonly value: "2";
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "**";
                                            readonly rightExpression: {
                                                readonly hexValue: "3935";
                                                readonly id: 18254;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6113:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_95_by_1";
                                                    readonly typeString: "int_const 95";
                                                };
                                                readonly value: "95";
                                            };
                                            readonly src: "6108:7:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_39614081257132168796771975168_by_1";
                                                readonly typeString: "int_const 39614081257132168796771975168";
                                            };
                                        };
                                        readonly src: "6064:51:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly id: 18257;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "6063:53:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">>";
                                readonly rightExpression: {
                                    readonly hexValue: "3936";
                                    readonly id: 18258;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6136:2:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_96_by_1";
                                        readonly typeString: "int_const 96";
                                    };
                                    readonly value: "96";
                                };
                                readonly src: "6063:75:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6052:86:122";
                        }, {
                            readonly expression: {
                                readonly id: 18267;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18261;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "6152:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18266;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 18262;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18213;
                                        readonly src: "6156:1:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 18265;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 18263;
                                            readonly name: "k";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18246;
                                            readonly src: "6160:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "*";
                                        readonly rightExpression: {
                                            readonly hexValue: "3534393136373737343637373037343733333531313431343731313238";
                                            readonly id: 18264;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6164:29:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_54916777467707473351141471128_by_1";
                                                readonly typeString: "int_const 54916777467707473351141471128";
                                            };
                                            readonly value: "54916777467707473351141471128";
                                        };
                                        readonly src: "6160:33:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "6156:37:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6152:41:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18268;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6152:41:122";
                        }, {
                            readonly assignments: readonly [18270];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18270;
                                readonly mutability: "mutable";
                                readonly name: "y";
                                readonly nameLocation: "6401:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18405;
                                readonly src: "6394:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18269;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6394:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18274;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18273;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18271;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "6405:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly hexValue: "31333436333836363136353435373936343738393230393530373733333238";
                                    readonly id: 18272;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6409:31:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1346386616545796478920950773328_by_1";
                                        readonly typeString: "int_const 1346386616545796478920950773328";
                                    };
                                    readonly value: "1346386616545796478920950773328";
                                };
                                readonly src: "6405:35:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6394:46:122";
                        }, {
                            readonly expression: {
                                readonly id: 18285;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18275;
                                    readonly name: "y";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18270;
                                    readonly src: "6454:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18284;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18281;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18278;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18276;
                                                        readonly name: "y";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18270;
                                                        readonly src: "6460:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18277;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "6464:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "6460:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18279;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "6459:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18280;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6470:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "6459:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18282;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "6458:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3537313535343231323237353532333531303832323234333039373538343432";
                                        readonly id: 18283;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6476:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_57155421227552351082224309758442_by_1";
                                            readonly typeString: "int_const 57155421227552351082224309758442";
                                        };
                                        readonly value: "57155421227552351082224309758442";
                                    };
                                    readonly src: "6458:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6454:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18286;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6454:54:122";
                        }, {
                            readonly assignments: readonly [18288];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18288;
                                readonly mutability: "mutable";
                                readonly name: "p";
                                readonly nameLocation: "6529:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18405;
                                readonly src: "6522:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18287;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6522:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18294;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18293;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18291;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 18289;
                                        readonly name: "y";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18270;
                                        readonly src: "6533:1:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly id: 18290;
                                        readonly name: "x";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18213;
                                        readonly src: "6537:1:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "6533:5:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "3934323031353439313934353530343932323534333536303432353034383132";
                                    readonly id: 18292;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6541:32:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_94201549194550492254356042504812_by_1";
                                        readonly typeString: "int_const 94201549194550492254356042504812";
                                    };
                                    readonly value: "94201549194550492254356042504812";
                                };
                                readonly src: "6533:40:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6522:51:122";
                        }, {
                            readonly expression: {
                                readonly id: 18305;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18295;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18288;
                                    readonly src: "6587:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18304;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18301;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18298;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18296;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18288;
                                                        readonly src: "6593:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18297;
                                                        readonly name: "y";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18270;
                                                        readonly src: "6597:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "6593:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18299;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "6592:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18300;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6603:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "6592:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18302;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "6591:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3238373139303231363434303239373236313533393536393434363830343132323430";
                                        readonly id: 18303;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6609:35:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_28719021644029726153956944680412240_by_1";
                                            readonly typeString: "int_const 2871...(27 digits omitted)...2240";
                                        };
                                        readonly value: "28719021644029726153956944680412240";
                                    };
                                    readonly src: "6591:53:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6587:57:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18306;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6587:57:122";
                        }, {
                            readonly expression: {
                                readonly id: 18316;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18307;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18288;
                                    readonly src: "6658:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18315;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 18310;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 18308;
                                            readonly name: "p";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18288;
                                            readonly src: "6662:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "*";
                                        readonly rightExpression: {
                                            readonly id: 18309;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18213;
                                            readonly src: "6666:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "6662:5:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1";
                                                readonly typeString: "int_const 3474...(55 digits omitted)...0736";
                                            };
                                            readonly id: 18313;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly hexValue: "34333835323732353231343534383437393034363539303736393835363933323736";
                                                readonly id: 18311;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6671:34:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_4385272521454847904659076985693276_by_1";
                                                    readonly typeString: "int_const 4385...(26 digits omitted)...3276";
                                                };
                                                readonly value: "4385272521454847904659076985693276";
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "<<";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18312;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6709:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "6671:40:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1";
                                                readonly typeString: "int_const 3474...(55 digits omitted)...0736";
                                            };
                                        }];
                                        readonly id: 18314;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "6670:42:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1";
                                            readonly typeString: "int_const 3474...(55 digits omitted)...0736";
                                        };
                                    };
                                    readonly src: "6662:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6658:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18317;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6658:54:122";
                        }, {
                            readonly assignments: readonly [18319];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18319;
                                readonly mutability: "mutable";
                                readonly name: "q";
                                readonly nameLocation: "6831:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18405;
                                readonly src: "6824:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18318;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6824:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18323;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18322;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18320;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18213;
                                    readonly src: "6835:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "32383535393839333934393037323233323633393336343834303539393030";
                                    readonly id: 18321;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "6839:31:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_2855989394907223263936484059900_by_1";
                                        readonly typeString: "int_const 2855989394907223263936484059900";
                                    };
                                    readonly value: "2855989394907223263936484059900";
                                };
                                readonly src: "6835:35:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6824:46:122";
                        }, {
                            readonly expression: {
                                readonly id: 18334;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18324;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18319;
                                    readonly src: "6884:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18333;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18330;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18327;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18325;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18319;
                                                        readonly src: "6890:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18326;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "6894:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "6890:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18328;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "6889:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18329;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6900:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "6889:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18331;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "6888:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3530303230363033363532353335373833303139393631383331383831393435";
                                        readonly id: 18332;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6906:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_50020603652535783019961831881945_by_1";
                                            readonly typeString: "int_const 50020603652535783019961831881945";
                                        };
                                        readonly value: "50020603652535783019961831881945";
                                    };
                                    readonly src: "6888:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6884:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18335;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6884:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18346;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18336;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18319;
                                    readonly src: "6952:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18345;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18342;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18339;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18337;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18319;
                                                        readonly src: "6958:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18338;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "6962:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "6958:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18340;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "6957:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18341;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "6968:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "6957:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18343;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "6956:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "353333383435303333353833343236373033323833363333343333373235333830";
                                        readonly id: 18344;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "6974:33:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_533845033583426703283633433725380_by_1";
                                            readonly typeString: "int_const 5338...(25 digits omitted)...5380";
                                        };
                                        readonly value: "533845033583426703283633433725380";
                                    };
                                    readonly src: "6956:51:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "6952:55:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18347;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6952:55:122";
                        }, {
                            readonly expression: {
                                readonly id: 18358;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18348;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18319;
                                    readonly src: "7021:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18357;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18354;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18351;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18349;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18319;
                                                        readonly src: "7027:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18350;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "7031:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "7027:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18352;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "7026:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18353;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "7037:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "7026:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18355;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7025:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "33363034383537323536393330363935343237303733363531393138303931343239";
                                        readonly id: 18356;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7043:34:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_3604857256930695427073651918091429_by_1";
                                            readonly typeString: "int_const 3604...(26 digits omitted)...1429";
                                        };
                                        readonly value: "3604857256930695427073651918091429";
                                    };
                                    readonly src: "7025:52:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "7021:56:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18359;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "7021:56:122";
                        }, {
                            readonly expression: {
                                readonly id: 18370;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18360;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18319;
                                    readonly src: "7091:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18369;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18366;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18363;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18361;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18319;
                                                        readonly src: "7097:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18362;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "7101:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "7097:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18364;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "7096:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18365;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "7107:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "7096:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18367;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7095:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "3134343233363038353637333530343633313830383837333732393632383037353733";
                                        readonly id: 18368;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7113:35:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_14423608567350463180887372962807573_by_1";
                                            readonly typeString: "int_const 1442...(27 digits omitted)...7573";
                                        };
                                        readonly value: "14423608567350463180887372962807573";
                                    };
                                    readonly src: "7095:53:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "7091:57:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18371;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "7091:57:122";
                        }, {
                            readonly expression: {
                                readonly id: 18382;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18372;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18319;
                                    readonly src: "7162:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18381;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18378;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18375;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18373;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18319;
                                                        readonly src: "7168:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18374;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18213;
                                                        readonly src: "7172:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "7168:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18376;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "7167:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18377;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "7178:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "7167:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18379;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7166:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3236343439313838343938333535353838333339393334383033373233393736303233";
                                        readonly id: 18380;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7184:35:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_26449188498355588339934803723976023_by_1";
                                            readonly typeString: "int_const 2644...(27 digits omitted)...6023";
                                        };
                                        readonly value: "26449188498355588339934803723976023";
                                    };
                                    readonly src: "7166:53:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "7162:57:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18383;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "7162:57:122";
                        }, {
                            readonly AST: {
                                readonly nodeType: "YulBlock";
                                readonly src: "7290:318:122";
                                readonly statements: readonly [{
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "7579:15:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "p";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7589:1:122";
                                        }, {
                                            readonly name: "q";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7592:1:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sdiv";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7584:4:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "7584:10:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "7579:1:122";
                                    }];
                                }];
                            };
                            readonly documentation: "@solidity memory-safe-assembly";
                            readonly evmVersion: "paris";
                            readonly externalReferences: readonly [{
                                readonly declaration: 18288;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "7589:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18319;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "7592:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18216;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "7579:1:122";
                                readonly valueSize: 1;
                            }];
                            readonly id: 18384;
                            readonly nodeType: "InlineAssembly";
                            readonly src: "7281:327:122";
                        }, {
                            readonly expression: {
                                readonly id: 18403;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18385;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18216;
                                    readonly src: "8059:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly components: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 18399;
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
                                                        readonly id: 18391;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 18388;
                                                                readonly name: "r";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18216;
                                                                readonly src: "8073:1:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_int256";
                                                                    readonly typeString: "int256";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_int256";
                                                                    readonly typeString: "int256";
                                                                }];
                                                                readonly id: 18387;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                                readonly src: "8065:7:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                                    readonly typeString: "type(uint256)";
                                                                };
                                                                readonly typeName: {
                                                                    readonly id: 18386;
                                                                    readonly name: "uint256";
                                                                    readonly nodeType: "ElementaryTypeName";
                                                                    readonly src: "8065:7:122";
                                                                    readonly typeDescriptions: {};
                                                                };
                                                            };
                                                            readonly id: 18389;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "8065:10:122";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "*";
                                                        readonly rightExpression: {
                                                            readonly hexValue: "33383232383333303734393633323336343533303432373338323538393032313538303033313535343136363135363637";
                                                            readonly id: 18390;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "number";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "8094:49:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_rational_3822833074963236453042738258902158003155416615667_by_1";
                                                                readonly typeString: "int_const 3822...(41 digits omitted)...5667";
                                                            };
                                                            readonly value: "3822833074963236453042738258902158003155416615667";
                                                        };
                                                        readonly src: "8065:78:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    }];
                                                    readonly id: 18392;
                                                    readonly isConstant: false;
                                                    readonly isInlineArray: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "TupleExpression";
                                                    readonly src: "8064:80:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: ">>";
                                                readonly rightExpression: {
                                                    readonly arguments: readonly [{
                                                        readonly commonType: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                        readonly id: 18397;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftExpression: {
                                                            readonly hexValue: "313935";
                                                            readonly id: 18395;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "number";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "8172:3:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_rational_195_by_1";
                                                                readonly typeString: "int_const 195";
                                                            };
                                                            readonly value: "195";
                                                        };
                                                        readonly nodeType: "BinaryOperation";
                                                        readonly operator: "-";
                                                        readonly rightExpression: {
                                                            readonly id: 18396;
                                                            readonly name: "k";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18246;
                                                            readonly src: "8178:1:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            };
                                                        };
                                                        readonly src: "8172:7:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        }];
                                                        readonly id: 18394;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "8164:7:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                                            readonly typeString: "type(uint256)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 18393;
                                                            readonly name: "uint256";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "8164:7:122";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 18398;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "8164:16:122";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "8064:116:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly id: 18400;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "8063:118:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 18401;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8182:8:122";
                                        readonly memberName: "toInt256";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21814;
                                        readonly src: "8063:127:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256) pure returns (int256)";
                                        };
                                    };
                                    readonly id: 18402;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "8063:129:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "8059:133:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18404;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "8059:133:122";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 18211;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4661:241:122";
                    readonly text: "@dev Computes e^x in 1e18 fixed point.\n @dev Credit to Remco (https://github.com/recmo/experiment-solexp/blob/main/src/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @return r The result of e^x.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "exp";
                readonly nameLocation: "4916:3:122";
                readonly parameters: {
                    readonly id: 18214;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18213;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "4927:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18407;
                        readonly src: "4920:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18212;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4920:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4919:10:122";
                };
                readonly returnParameters: {
                    readonly id: 18217;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18216;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "4960:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18407;
                        readonly src: "4953:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18215;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4953:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4952:10:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18629;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8508:3846:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18628;
                    readonly nodeType: "Block";
                    readonly src: "8563:3791:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 18627;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "8573:3775:122";
                        readonly statements: readonly [{
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18417;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18415;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18410;
                                    readonly src: "8601:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 18416;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8606:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8601:6:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 18424;
                            readonly nodeType: "IfStatement";
                            readonly src: "8597:80:122";
                            readonly trueBody: {
                                readonly id: 18423;
                                readonly nodeType: "Block";
                                readonly src: "8609:68:122";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly expression: {
                                                readonly id: 18418;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 10351;
                                                readonly src: "8634:11:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 18420;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8646:14:122";
                                            readonly memberName: "LnInvalidInput";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10258;
                                            readonly src: "8634:26:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                readonly typeString: "function () pure";
                                            };
                                        };
                                        readonly id: 18421;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8634:28:122";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 18422;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "8627:35:122";
                                }];
                            };
                        }, {
                            readonly AST: {
                                readonly nodeType: "YulBlock";
                                readonly src: "9256:489:122";
                                readonly statements: readonly [{
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9274:54:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "9283:1:122";
                                            readonly type: "";
                                            readonly value: "7";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9289:34:122";
                                                readonly type: "";
                                                readonly value: "0xffffffffffffffffffffffffffffffff";
                                            }, {
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9325:1:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "lt";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9286:2:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9286:41:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "shl";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9279:3:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9279:49:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9274:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9345:53:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9353:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9360:1:122";
                                                readonly type: "";
                                                readonly value: "6";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9366:18:122";
                                                    readonly type: "";
                                                    readonly value: "0xffffffffffffffff";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9390:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9393:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9386:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9386:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9363:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9363:33:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9356:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9356:41:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9350:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9350:48:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9345:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9415:45:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9423:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9430:1:122";
                                                readonly type: "";
                                                readonly value: "5";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9436:10:122";
                                                    readonly type: "";
                                                    readonly value: "0xffffffff";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9452:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9455:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9448:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9448:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9433:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9433:25:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9426:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9426:33:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9420:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9420:40:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9415:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9477:41:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9485:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9492:1:122";
                                                readonly type: "";
                                                readonly value: "4";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9498:6:122";
                                                    readonly type: "";
                                                    readonly value: "0xffff";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9510:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9513:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9506:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9506:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9495:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9495:21:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9488:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9488:29:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9482:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9482:36:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9477:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9535:39:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9543:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9550:1:122";
                                                readonly type: "";
                                                readonly value: "3";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9556:4:122";
                                                    readonly type: "";
                                                    readonly value: "0xff";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9566:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9569:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9562:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9562:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9553:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9553:19:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9546:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9546:27:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9540:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9540:34:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9535:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9591:38:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9599:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9606:1:122";
                                                readonly type: "";
                                                readonly value: "2";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9612:3:122";
                                                    readonly type: "";
                                                    readonly value: "0xf";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9621:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9624:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9617:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9617:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9609:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9609:18:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9602:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9602:26:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9596:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9596:33:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9591:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9646:38:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9654:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9661:1:122";
                                                readonly type: "";
                                                readonly value: "1";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "9667:3:122";
                                                    readonly type: "";
                                                    readonly value: "0x3";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "r";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9676:1:122";
                                                    }, {
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9679:1:122";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "shr";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "9672:3:122";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "9672:9:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "lt";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9664:2:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9664:18:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9657:3:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9657:26:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9651:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9651:33:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9646:1:122";
                                    }];
                                }, {
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "9701:30:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "r";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9709:1:122";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "9715:3:122";
                                                readonly type: "";
                                                readonly value: "0x1";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "r";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9724:1:122";
                                                }, {
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9727:1:122";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shr";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "9720:3:122";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "9720:9:122";
                                            }];
                                            readonly functionName: {
                                                readonly name: "lt";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9712:2:122";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9712:18:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "or";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9706:2:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9706:25:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9701:1:122";
                                    }];
                                }];
                            };
                            readonly documentation: "@solidity memory-safe-assembly";
                            readonly evmVersion: "paris";
                            readonly externalReferences: readonly [{
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9274:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9345:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9353:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9390:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9415:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9423:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9452:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9477:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9485:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9510:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9535:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9543:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9566:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9591:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9599:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9621:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9646:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9654:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9676:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9701:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9709:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9724:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9325:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9393:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9455:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9513:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9569:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9624:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9679:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18410;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "9727:1:122";
                                readonly valueSize: 1;
                            }];
                            readonly id: 18425;
                            readonly nodeType: "InlineAssembly";
                            readonly src: "9247:498:122";
                        }, {
                            readonly assignments: readonly [18427];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18427;
                                readonly mutability: "mutable";
                                readonly name: "k";
                                readonly nameLocation: "9864:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18627;
                                readonly src: "9857:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18426;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "9857:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18431;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18430;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18428;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18413;
                                    readonly src: "9868:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly hexValue: "3936";
                                    readonly id: 18429;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9872:2:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_96_by_1";
                                        readonly typeString: "int_const 96";
                                    };
                                    readonly value: "96";
                                };
                                readonly src: "9868:6:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "9857:17:122";
                        }, {
                            readonly expression: {
                                readonly id: 18439;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18432;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18410;
                                    readonly src: "9888:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "<<=";
                                readonly rightHandSide: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 18437;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly hexValue: "313539";
                                            readonly id: 18435;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "9902:3:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_159_by_1";
                                                readonly typeString: "int_const 159";
                                            };
                                            readonly value: "159";
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 18436;
                                            readonly name: "k";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18427;
                                            readonly src: "9908:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "9902:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        }];
                                        readonly id: 18434;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "9894:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 18433;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9894:7:122";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 18438;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9894:16:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "9888:22:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18440;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9888:22:122";
                        }, {
                            readonly expression: {
                                readonly id: 18451;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18441;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18410;
                                    readonly src: "9924:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly components: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 18447;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 18444;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "9937:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        }];
                                                        readonly id: 18443;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "9929:7:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                                            readonly typeString: "type(uint256)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 18442;
                                                            readonly name: "uint256";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "9929:7:122";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 18445;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "9929:10:122";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: ">>";
                                                readonly rightExpression: {
                                                    readonly hexValue: "313539";
                                                    readonly id: 18446;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "number";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "9943:3:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_rational_159_by_1";
                                                        readonly typeString: "int_const 159";
                                                    };
                                                    readonly value: "159";
                                                };
                                                readonly src: "9929:17:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly id: 18448;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "9928:19:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 18449;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9948:8:122";
                                        readonly memberName: "toInt256";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 21814;
                                        readonly src: "9928:28:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256) pure returns (int256)";
                                        };
                                    };
                                    readonly id: 18450;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9928:30:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "9924:34:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18452;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "9924:34:122";
                        }, {
                            readonly assignments: readonly [18454];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18454;
                                readonly mutability: "mutable";
                                readonly name: "p";
                                readonly nameLocation: "10122:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18627;
                                readonly src: "10115:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18453;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "10115:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18458;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18457;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18455;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18410;
                                    readonly src: "10126:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly hexValue: "33323733323835343539363338353233383438363332323534303636323936";
                                    readonly id: 18456;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10130:31:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_3273285459638523848632254066296_by_1";
                                        readonly typeString: "int_const 3273285459638523848632254066296";
                                    };
                                    readonly value: "3273285459638523848632254066296";
                                };
                                readonly src: "10126:35:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "10115:46:122";
                        }, {
                            readonly expression: {
                                readonly id: 18469;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18459;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10175:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18468;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18465;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18462;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18460;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18454;
                                                        readonly src: "10181:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18461;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10185:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10181:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18463;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10180:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18464;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10191:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10180:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18466;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10179:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3234383238313537303831383333313633383932363538303839343435353234";
                                        readonly id: 18467;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10197:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_24828157081833163892658089445524_by_1";
                                            readonly typeString: "int_const 24828157081833163892658089445524";
                                        };
                                        readonly value: "24828157081833163892658089445524";
                                    };
                                    readonly src: "10179:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10175:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18470;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10175:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18481;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18471;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10243:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18480;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18477;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18474;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18472;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18454;
                                                        readonly src: "10249:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18473;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10253:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10249:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18475;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10248:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18476;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10259:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10248:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18478;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10247:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3433343536343835373235373339303337393538373430333735373433333933";
                                        readonly id: 18479;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10265:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_43456485725739037958740375743393_by_1";
                                            readonly typeString: "int_const 43456485725739037958740375743393";
                                        };
                                        readonly value: "43456485725739037958740375743393";
                                    };
                                    readonly src: "10247:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10243:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18482;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10243:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18493;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18483;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10311:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18492;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18489;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18486;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18484;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18454;
                                                        readonly src: "10317:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18485;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10321:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10317:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18487;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10316:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18488;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10327:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10316:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18490;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10315:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "3131313131353039313039343430393637303532303233383535353236393637";
                                        readonly id: 18491;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10333:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_11111509109440967052023855526967_by_1";
                                            readonly typeString: "int_const 11111509109440967052023855526967";
                                        };
                                        readonly value: "11111509109440967052023855526967";
                                    };
                                    readonly src: "10315:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10311:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18494;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10311:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18505;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18495;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10379:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18504;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18501;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18498;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18496;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18454;
                                                        readonly src: "10385:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18497;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10389:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10385:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18499;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10384:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18500;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10395:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10384:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18502;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10383:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "3435303233373039363637323534303633373633333336353334353135383537";
                                        readonly id: 18503;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10401:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_45023709667254063763336534515857_by_1";
                                            readonly typeString: "int_const 45023709667254063763336534515857";
                                        };
                                        readonly value: "45023709667254063763336534515857";
                                    };
                                    readonly src: "10383:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10379:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18506;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10379:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18517;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18507;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10447:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18516;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18513;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18510;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18508;
                                                        readonly name: "p";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18454;
                                                        readonly src: "10453:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18509;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10457:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10453:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18511;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10452:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18512;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10463:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10452:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18514;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10451:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly hexValue: "3134373036373733343137333738363038373836373034363336313834353236";
                                        readonly id: 18515;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10469:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_14706773417378608786704636184526_by_1";
                                            readonly typeString: "int_const 14706773417378608786704636184526";
                                        };
                                        readonly value: "14706773417378608786704636184526";
                                    };
                                    readonly src: "10451:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10447:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18518;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10447:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18528;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18519;
                                    readonly name: "p";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18454;
                                    readonly src: "10515:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18527;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                        readonly id: 18522;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 18520;
                                            readonly name: "p";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18454;
                                            readonly src: "10519:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "*";
                                        readonly rightExpression: {
                                            readonly id: 18521;
                                            readonly name: "x";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18410;
                                            readonly src: "10523:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "10519:5:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1";
                                                readonly typeString: "int_const 6299...(51 digits omitted)...9328";
                                            };
                                            readonly id: 18525;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly hexValue: "373935313634323335363531333530343236323538323439373837343938";
                                                readonly id: 18523;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10528:30:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_795164235651350426258249787498_by_1";
                                                    readonly typeString: "int_const 795164235651350426258249787498";
                                                };
                                                readonly value: "795164235651350426258249787498";
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "<<";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18524;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10562:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10528:36:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1";
                                                readonly typeString: "int_const 6299...(51 digits omitted)...9328";
                                            };
                                        }];
                                        readonly id: 18526;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10527:38:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1";
                                            readonly typeString: "int_const 6299...(51 digits omitted)...9328";
                                        };
                                    };
                                    readonly src: "10519:46:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10515:50:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18529;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10515:50:122";
                        }, {
                            readonly assignments: readonly [18531];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 18531;
                                readonly mutability: "mutable";
                                readonly name: "q";
                                readonly nameLocation: "10725:1:122";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 18627;
                                readonly src: "10718:8:122";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly typeName: {
                                    readonly id: 18530;
                                    readonly name: "int256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "10718:6:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 18535;
                            readonly initialValue: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18534;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18532;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18410;
                                    readonly src: "10729:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly hexValue: "35353733303335323333343430363733343636333030343531383133393336";
                                    readonly id: 18533;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10733:31:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_5573035233440673466300451813936_by_1";
                                        readonly typeString: "int_const 5573035233440673466300451813936";
                                    };
                                    readonly value: "5573035233440673466300451813936";
                                };
                                readonly src: "10729:35:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "10718:46:122";
                        }, {
                            readonly expression: {
                                readonly id: 18546;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18536;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "10778:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18545;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18542;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18539;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18537;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "10784:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18538;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10788:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10784:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18540;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10783:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18541;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10794:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10783:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18543;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10782:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3731363934383734373939333137383833373634303930353631343534393538";
                                        readonly id: 18544;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10800:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_71694874799317883764090561454958_by_1";
                                            readonly typeString: "int_const 71694874799317883764090561454958";
                                        };
                                        readonly value: "71694874799317883764090561454958";
                                    };
                                    readonly src: "10782:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10778:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18547;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10778:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18558;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18548;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "10846:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18557;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18554;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18551;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18549;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "10852:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18550;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10856:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10852:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18552;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10851:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18553;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10862:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10851:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18555;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10850:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "323833343437303336313732393234353735373237313936343531333036393536";
                                        readonly id: 18556;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10868:33:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_283447036172924575727196451306956_by_1";
                                            readonly typeString: "int_const 2834...(25 digits omitted)...6956";
                                        };
                                        readonly value: "283447036172924575727196451306956";
                                    };
                                    readonly src: "10850:51:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10846:55:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18559;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10846:55:122";
                        }, {
                            readonly expression: {
                                readonly id: 18570;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18560;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "10915:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18569;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18566;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18563;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18561;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "10921:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18562;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10925:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10921:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18564;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10920:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18565;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "10931:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10920:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18567;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10919:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "343031363836363930333934303237363633363531363234323038373639353533";
                                        readonly id: 18568;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "10937:33:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_401686690394027663651624208769553_by_1";
                                            readonly typeString: "int_const 4016...(25 digits omitted)...9553";
                                        };
                                        readonly value: "401686690394027663651624208769553";
                                    };
                                    readonly src: "10919:51:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10915:55:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18571;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10915:55:122";
                        }, {
                            readonly expression: {
                                readonly id: 18582;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18572;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "10984:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18581;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18578;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18575;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18573;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "10990:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18574;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "10994:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "10990:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18576;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "10989:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18577;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "11000:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "10989:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18579;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "10988:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "323034303438343537353930333932303132333632343835303631383136363232";
                                        readonly id: 18580;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "11006:33:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_204048457590392012362485061816622_by_1";
                                            readonly typeString: "int_const 2040...(25 digits omitted)...6622";
                                        };
                                        readonly value: "204048457590392012362485061816622";
                                    };
                                    readonly src: "10988:51:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "10984:55:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18583;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "10984:55:122";
                        }, {
                            readonly expression: {
                                readonly id: 18594;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18584;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "11053:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18593;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18590;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18587;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18585;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "11059:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18586;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "11063:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "11059:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18588;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "11058:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18589;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "11069:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "11058:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18591;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "11057:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "3331383533383939363938353031353731343032363533333539343237313338";
                                        readonly id: 18592;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "11075:32:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_31853899698501571402653359427138_by_1";
                                            readonly typeString: "int_const 31853899698501571402653359427138";
                                        };
                                        readonly value: "31853899698501571402653359427138";
                                    };
                                    readonly src: "11057:50:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "11053:54:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18595;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "11053:54:122";
                        }, {
                            readonly expression: {
                                readonly id: 18606;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18596;
                                    readonly name: "q";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18531;
                                    readonly src: "11121:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18605;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly components: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                            readonly id: 18602;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                    readonly id: 18599;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly id: 18597;
                                                        readonly name: "q";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18531;
                                                        readonly src: "11127:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "*";
                                                    readonly rightExpression: {
                                                        readonly id: 18598;
                                                        readonly name: "x";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18410;
                                                        readonly src: "11131:1:122";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly src: "11127:5:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                }];
                                                readonly id: 18600;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "11126:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: ">>";
                                            readonly rightExpression: {
                                                readonly hexValue: "3936";
                                                readonly id: 18601;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "11137:2:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_96_by_1";
                                                    readonly typeString: "int_const 96";
                                                };
                                                readonly value: "96";
                                            };
                                            readonly src: "11126:13:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly id: 18603;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "11125:15:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "+";
                                    readonly rightExpression: {
                                        readonly hexValue: "393039343239393731323434333837333030323737333736353538333735";
                                        readonly id: 18604;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "11143:30:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_909429971244387300277376558375_by_1";
                                            readonly typeString: "int_const 909429971244387300277376558375";
                                        };
                                        readonly value: "909429971244387300277376558375";
                                    };
                                    readonly src: "11125:48:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "11121:52:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18607;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "11121:52:122";
                        }, {
                            readonly AST: {
                                readonly nodeType: "YulBlock";
                                readonly src: "11243:295:122";
                                readonly statements: readonly [{
                                    readonly nodeType: "YulAssignment";
                                    readonly src: "11509:15:122";
                                    readonly value: {
                                        readonly arguments: readonly [{
                                            readonly name: "p";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "11519:1:122";
                                        }, {
                                            readonly name: "q";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "11522:1:122";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sdiv";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "11514:4:122";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "11514:10:122";
                                    };
                                    readonly variableNames: readonly [{
                                        readonly name: "r";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "11509:1:122";
                                    }];
                                }];
                            };
                            readonly documentation: "@solidity memory-safe-assembly";
                            readonly evmVersion: "paris";
                            readonly externalReferences: readonly [{
                                readonly declaration: 18454;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "11519:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18531;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "11522:1:122";
                                readonly valueSize: 1;
                            }, {
                                readonly declaration: 18413;
                                readonly isOffset: false;
                                readonly isSlot: false;
                                readonly src: "11509:1:122";
                                readonly valueSize: 1;
                            }];
                            readonly id: 18608;
                            readonly nodeType: "InlineAssembly";
                            readonly src: "11234:304:122";
                        }, {
                            readonly expression: {
                                readonly id: 18611;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18609;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18413;
                                    readonly src: "11899:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "*=";
                                readonly rightHandSide: {
                                    readonly hexValue: "31363737323032313130393936373138353838333432383230393637303637343433393633353136313636";
                                    readonly id: 18610;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "11904:43:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1677202110996718588342820967067443963516166_by_1";
                                        readonly typeString: "int_const 1677...(35 digits omitted)...6166";
                                    };
                                    readonly value: "1677202110996718588342820967067443963516166";
                                };
                                readonly src: "11899:48:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18612;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "11899:48:122";
                        }, {
                            readonly expression: {
                                readonly id: 18617;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18613;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18413;
                                    readonly src: "12006:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "+=";
                                readonly rightHandSide: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 18616;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly hexValue: "3136353937353737353532363835363134323231343837323835393538313933393437343639313933383230353539323139383738313737393038303933343939323038333731";
                                        readonly id: 18614;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "12027:71:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_16597577552685614221487285958193947469193820559219878177908093499208371_by_1";
                                            readonly typeString: "int_const 1659...(63 digits omitted)...8371";
                                        };
                                        readonly value: "16597577552685614221487285958193947469193820559219878177908093499208371";
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "*";
                                    readonly rightExpression: {
                                        readonly id: 18615;
                                        readonly name: "k";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18427;
                                        readonly src: "12117:1:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "12027:91:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "12006:112:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18618;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "12006:112:122";
                        }, {
                            readonly expression: {
                                readonly id: 18621;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18619;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18413;
                                    readonly src: "12186:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: "+=";
                                readonly rightHandSide: {
                                    readonly hexValue: "363030393230313739383239373331383631373336373032373739333231363231343539353935343732323538303439303734313031353637333737383833303230303138333038";
                                    readonly id: 18620;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12191:72:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_600920179829731861736702779321621459595472258049074101567377883020018308_by_1";
                                        readonly typeString: "int_const 6009...(64 digits omitted)...8308";
                                    };
                                    readonly value: "600920179829731861736702779321621459595472258049074101567377883020018308";
                                };
                                readonly src: "12186:77:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18622;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "12186:77:122";
                        }, {
                            readonly expression: {
                                readonly id: 18625;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftHandSide: {
                                    readonly id: 18623;
                                    readonly name: "r";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18413;
                                    readonly src: "12328:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "Assignment";
                                readonly operator: ">>=";
                                readonly rightHandSide: {
                                    readonly hexValue: "313734";
                                    readonly id: 18624;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12334:3:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_174_by_1";
                                        readonly typeString: "int_const 174";
                                    };
                                    readonly value: "174";
                                };
                                readonly src: "12328:9:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18626;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "12328:9:122";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 18408;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8215:288:122";
                    readonly text: "@dev Computes ln(x) in 1e18 fixed point.\n @dev Credit to Remco (https://github.com/recmo/experiment-solexp/blob/main/src/FixedPointMathLib.sol)\n @dev Reverts if x is negative or zero.\n @param x Fixed point number in 1e18 format.\n @return r Result of ln(x).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ln";
                readonly nameLocation: "8517:2:122";
                readonly parameters: {
                    readonly id: 18411;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18410;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "8527:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18629;
                        readonly src: "8520:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18409;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8520:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8519:10:122";
                };
                readonly returnParameters: {
                    readonly id: 18414;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18413;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "8560:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18629;
                        readonly src: "8553:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18412;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8553:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8552:10:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18732;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12712:2102:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18731;
                    readonly nodeType: "Block";
                    readonly src: "12923:1891:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 18647;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 18645;
                                readonly name: "_deltaWeight";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18638;
                                readonly src: "13006:12:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 18646;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "13022:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "13006:17:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 18651;
                        readonly nodeType: "IfStatement";
                        readonly src: "13002:63:122";
                        readonly trueBody: {
                            readonly id: 18650;
                            readonly nodeType: "Block";
                            readonly src: "13025:40:122";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 18648;
                                    readonly name: "_average";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18632;
                                    readonly src: "13046:8:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 18644;
                                readonly id: 18649;
                                readonly nodeType: "Return";
                                readonly src: "13039:15:122";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 18652;
                            readonly name: "_isAdding";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 18640;
                            readonly src: "13323:9:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 18729;
                            readonly nodeType: "Block";
                            readonly src: "14470:338:122";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 18706;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 18704;
                                        readonly name: "_totalWeight";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18634;
                                        readonly src: "14488:12:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 18705;
                                        readonly name: "_deltaWeight";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18638;
                                        readonly src: "14504:12:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "14488:28:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 18710;
                                readonly nodeType: "IfStatement";
                                readonly src: "14484:75:122";
                                readonly trueBody: {
                                    readonly id: 18709;
                                    readonly nodeType: "Block";
                                    readonly src: "14518:41:122";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly hexValue: "30";
                                            readonly id: 18707;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "14543:1:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly functionReturnParameters: 18644;
                                        readonly id: 18708;
                                        readonly nodeType: "Return";
                                        readonly src: "14536:8:122";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 18727;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 18711;
                                        readonly name: "average";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18643;
                                        readonly src: "14635:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 18725;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 18723;
                                                readonly name: "_totalWeight";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18634;
                                                readonly src: "14752:12:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 18724;
                                                readonly name: "_deltaWeight";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18638;
                                                readonly src: "14767:12:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "14752:27:122";
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
                                            readonly expression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 18720;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 18714;
                                                            readonly name: "_average";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18632;
                                                            readonly src: "14667:8:122";
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
                                                            readonly expression: {
                                                                readonly id: 18712;
                                                                readonly name: "_totalWeight";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18634;
                                                                readonly src: "14646:12:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 18713;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "14659:7:122";
                                                            readonly memberName: "mulDown";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 18085;
                                                            readonly src: "14646:20:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                            };
                                                        };
                                                        readonly id: 18715;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "14646:30:122";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 18718;
                                                            readonly name: "_delta";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18636;
                                                            readonly src: "14714:6:122";
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
                                                            readonly expression: {
                                                                readonly id: 18716;
                                                                readonly name: "_deltaWeight";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18638;
                                                                readonly src: "14695:12:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 18717;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "14708:5:122";
                                                            readonly memberName: "mulUp";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 18135;
                                                            readonly src: "14695:18:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                            };
                                                        };
                                                        readonly id: 18719;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "14695:26:122";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "14646:75:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly id: 18721;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "14645:77:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 18722;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "14723:7:122";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18103;
                                            readonly src: "14645:85:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 18726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "14645:152:122";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "14635:162:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18728;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "14635:162:122";
                            }];
                        };
                        readonly id: 18730;
                        readonly nodeType: "IfStatement";
                        readonly src: "13319:1489:122";
                        readonly trueBody: {
                            readonly id: 18703;
                            readonly nodeType: "Block";
                            readonly src: "13334:871:122";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 18669;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 18653;
                                        readonly name: "average";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18643;
                                        readonly src: "13410:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 18667;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 18665;
                                                readonly name: "_totalWeight";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18634;
                                                readonly src: "13529:12:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "+";
                                            readonly rightExpression: {
                                                readonly id: 18666;
                                                readonly name: "_deltaWeight";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18638;
                                                readonly src: "13544:12:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "13529:27:122";
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
                                            readonly expression: {
                                                readonly components: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 18662;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 18656;
                                                            readonly name: "_average";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18632;
                                                            readonly src: "13442:8:122";
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
                                                            readonly expression: {
                                                                readonly id: 18654;
                                                                readonly name: "_totalWeight";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18634;
                                                                readonly src: "13421:12:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 18655;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13434:7:122";
                                                            readonly memberName: "mulDown";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 18085;
                                                            readonly src: "13421:20:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                            };
                                                        };
                                                        readonly id: 18657;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13421:30:122";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "+";
                                                    readonly rightExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 18660;
                                                            readonly name: "_delta";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18636;
                                                            readonly src: "13491:6:122";
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
                                                            readonly expression: {
                                                                readonly id: 18658;
                                                                readonly name: "_deltaWeight";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 18638;
                                                                readonly src: "13470:12:122";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 18659;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "13483:7:122";
                                                            readonly memberName: "mulDown";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 18085;
                                                            readonly src: "13470:20:122";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                            };
                                                        };
                                                        readonly id: 18661;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "13470:28:122";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly src: "13421:77:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }];
                                                readonly id: 18663;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "13420:79:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 18664;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "13500:7:122";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18103;
                                            readonly src: "13420:87:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 18668;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "13420:154:122";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "13410:164:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18670;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "13410:164:122";
                            }, {
                                readonly assignments: readonly [18672];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 18672;
                                    readonly mutability: "mutable";
                                    readonly name: "minAverage";
                                    readonly nameLocation: "13929:10:122";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 18703;
                                    readonly src: "13921:18:122";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 18671;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "13921:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 18677;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 18675;
                                        readonly name: "_average";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18632;
                                        readonly src: "13953:8:122";
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
                                        readonly expression: {
                                            readonly id: 18673;
                                            readonly name: "_delta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18636;
                                            readonly src: "13942:6:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 18674;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13949:3:122";
                                        readonly memberName: "min";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18750;
                                        readonly src: "13942:10:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 18676;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13942:20:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "13921:41:122";
                            }, {
                                readonly assignments: readonly [18679];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 18679;
                                    readonly mutability: "mutable";
                                    readonly name: "maxAverage";
                                    readonly nameLocation: "13984:10:122";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 18703;
                                    readonly src: "13976:18:122";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 18678;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "13976:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 18684;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 18682;
                                        readonly name: "_average";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18632;
                                        readonly src: "14008:8:122";
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
                                        readonly expression: {
                                            readonly id: 18680;
                                            readonly name: "_delta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18636;
                                            readonly src: "13997:6:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 18681;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "14004:3:122";
                                        readonly memberName: "max";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18768;
                                        readonly src: "13997:10:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 18683;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13997:20:122";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "13976:41:122";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 18687;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 18685;
                                        readonly name: "average";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18643;
                                        readonly src: "14035:7:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 18686;
                                        readonly name: "minAverage";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18672;
                                        readonly src: "14045:10:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "14035:20:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly condition: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 18695;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 18693;
                                            readonly name: "average";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18643;
                                            readonly src: "14120:7:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">";
                                        readonly rightExpression: {
                                            readonly id: 18694;
                                            readonly name: "maxAverage";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18679;
                                            readonly src: "14130:10:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "14120:20:122";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly id: 18701;
                                    readonly nodeType: "IfStatement";
                                    readonly src: "14116:79:122";
                                    readonly trueBody: {
                                        readonly id: 18700;
                                        readonly nodeType: "Block";
                                        readonly src: "14142:53:122";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 18698;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly id: 18696;
                                                    readonly name: "average";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18643;
                                                    readonly src: "14160:7:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 18697;
                                                    readonly name: "maxAverage";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18679;
                                                    readonly src: "14170:10:122";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "14160:20:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 18699;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "14160:20:122";
                                        }];
                                    };
                                };
                                readonly id: 18702;
                                readonly nodeType: "IfStatement";
                                readonly src: "14031:164:122";
                                readonly trueBody: {
                                    readonly id: 18692;
                                    readonly nodeType: "Block";
                                    readonly src: "14057:53:122";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 18690;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 18688;
                                                readonly name: "average";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18643;
                                                readonly src: "14075:7:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 18689;
                                                readonly name: "minAverage";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18672;
                                                readonly src: "14085:10:122";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "14075:20:122";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 18691;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "14075:20:122";
                                    }];
                                };
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 18630;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12360:347:122";
                    readonly text: "@dev Updates a weighted average by adding or removing a weighted delta.\n @param _totalWeight The total weight before the update.\n @param _deltaWeight The weight of the new value.\n @param _average The weighted average before the update.\n @param _delta The new value.\n @return average The new weighted average.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateWeightedAverage";
                readonly nameLocation: "12721:21:122";
                readonly parameters: {
                    readonly id: 18641;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18632;
                        readonly mutability: "mutable";
                        readonly name: "_average";
                        readonly nameLocation: "12760:8:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12752:16:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18631;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12752:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18634;
                        readonly mutability: "mutable";
                        readonly name: "_totalWeight";
                        readonly nameLocation: "12786:12:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12778:20:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18633;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12778:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18636;
                        readonly mutability: "mutable";
                        readonly name: "_delta";
                        readonly nameLocation: "12816:6:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12808:14:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18635;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12808:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18638;
                        readonly mutability: "mutable";
                        readonly name: "_deltaWeight";
                        readonly nameLocation: "12840:12:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12832:20:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18637;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12832:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18640;
                        readonly mutability: "mutable";
                        readonly name: "_isAdding";
                        readonly nameLocation: "12867:9:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12862:14:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 18639;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12862:4:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12742:140:122";
                };
                readonly returnParameters: {
                    readonly id: 18644;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18643;
                        readonly mutability: "mutable";
                        readonly name: "average";
                        readonly nameLocation: "12914:7:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18732;
                        readonly src: "12906:15:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18642;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12906:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12905:17:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18750;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14987:104:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18749;
                    readonly nodeType: "Block";
                    readonly src: "15054:37:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 18744;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18742;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18735;
                                    readonly src: "15071:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 18743;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18737;
                                    readonly src: "15075:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15071:5:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly id: 18746;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18735;
                                readonly src: "15083:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 18747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "15071:13:122";
                            readonly trueExpression: {
                                readonly id: 18745;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18737;
                                readonly src: "15079:1:122";
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
                        readonly functionReturnParameters: 18741;
                        readonly id: 18748;
                        readonly nodeType: "Return";
                        readonly src: "15064:20:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18733;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14820:162:122";
                    readonly text: "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "min";
                readonly nameLocation: "14996:3:122";
                readonly parameters: {
                    readonly id: 18738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18735;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "15008:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18750;
                        readonly src: "15000:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18734;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15000:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18737;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "15019:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18750;
                        readonly src: "15011:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18736;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15011:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14999:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18741;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18740;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18750;
                        readonly src: "15045:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18739;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15045:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15044:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18768;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15264:104:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18767;
                    readonly nodeType: "Block";
                    readonly src: "15331:37:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 18762;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18760;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18753;
                                    readonly src: "15348:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 18761;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18755;
                                    readonly src: "15352:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "15348:5:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly id: 18764;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18755;
                                readonly src: "15360:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 18765;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "15348:13:122";
                            readonly trueExpression: {
                                readonly id: 18763;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18753;
                                readonly src: "15356:1:122";
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
                        readonly functionReturnParameters: 18759;
                        readonly id: 18766;
                        readonly nodeType: "Return";
                        readonly src: "15341:20:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18751;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15097:162:122";
                    readonly text: "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "max";
                readonly nameLocation: "15273:3:122";
                readonly parameters: {
                    readonly id: 18756;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18753;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "15285:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18768;
                        readonly src: "15277:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18752;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15277:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18755;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "15296:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18768;
                        readonly src: "15288:9:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18754;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15288:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15276:22:122";
                };
                readonly returnParameters: {
                    readonly id: 18759;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18758;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18768;
                        readonly src: "15322:7:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18757;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15322:7:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15321:9:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18786;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15541:101:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18785;
                    readonly nodeType: "Block";
                    readonly src: "15605:37:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18780;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18778;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18771;
                                    readonly src: "15622:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 18779;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18773;
                                    readonly src: "15626:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "15622:5:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly id: 18782;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18771;
                                readonly src: "15634:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18783;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "15622:13:122";
                            readonly trueExpression: {
                                readonly id: 18781;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18773;
                                readonly src: "15630:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 18777;
                        readonly id: 18784;
                        readonly nodeType: "Return";
                        readonly src: "15615:20:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18769;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15374:162:122";
                    readonly text: "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "min";
                readonly nameLocation: "15550:3:122";
                readonly parameters: {
                    readonly id: 18774;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18771;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "15561:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18786;
                        readonly src: "15554:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18770;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15554:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18773;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "15571:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18786;
                        readonly src: "15564:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18772;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15564:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15553:20:122";
                };
                readonly returnParameters: {
                    readonly id: 18777;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18776;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18786;
                        readonly src: "15597:6:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18775;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15597:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15596:8:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18804;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15815:101:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18803;
                    readonly nodeType: "Block";
                    readonly src: "15879:37:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18798;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18796;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18789;
                                    readonly src: "15896:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 18797;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18791;
                                    readonly src: "15900:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly src: "15896:5:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly id: 18800;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18791;
                                readonly src: "15908:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18801;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "15896:13:122";
                            readonly trueExpression: {
                                readonly id: 18799;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18789;
                                readonly src: "15904:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 18795;
                        readonly id: 18802;
                        readonly nodeType: "Return";
                        readonly src: "15889:20:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18787;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15648:162:122";
                    readonly text: "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "max";
                readonly nameLocation: "15824:3:122";
                readonly parameters: {
                    readonly id: 18792;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18789;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "15835:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18804;
                        readonly src: "15828:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18788;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15828:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18791;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "15845:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18804;
                        readonly src: "15838:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18790;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15838:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15827:20:122";
                };
                readonly returnParameters: {
                    readonly id: 18795;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18794;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18804;
                        readonly src: "15871:6:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18793;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15871:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15870:8:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18821;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16056:92:122";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18820;
                    readonly nodeType: "Block";
                    readonly src: "16110:38:122";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 18814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 18812;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18807;
                                    readonly src: "16127:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 18813;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "16131:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "16127:5:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly id: 18817;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18807;
                                readonly src: "16140:1:122";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 18818;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "16127:14:122";
                            readonly trueExpression: {
                                readonly id: 18816;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "-";
                                readonly prefix: true;
                                readonly src: "16135:2:122";
                                readonly subExpression: {
                                    readonly id: 18815;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18807;
                                    readonly src: "16136:1:122";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 18811;
                        readonly id: 18819;
                        readonly nodeType: "Return";
                        readonly src: "16120:21:122";
                    }];
                };
                readonly documentation: {
                    readonly id: 18805;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15922:129:122";
                    readonly text: "@dev Calculates the absolute value of an int256.\n @param a The value.\n @return The absolute value of the input.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "abs";
                readonly nameLocation: "16065:3:122";
                readonly parameters: {
                    readonly id: 18808;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18807;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "16076:1:122";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18821;
                        readonly src: "16069:8:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18806;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16069:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16068:10:122";
                };
                readonly returnParameters: {
                    readonly id: 18811;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18810;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18821;
                        readonly src: "16102:6:122";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18809;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16102:6:122";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16101:8:122";
                };
                readonly scope: 18822;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "FixedPointMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 18040;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "200:307:122";
                readonly text: "@author DELV\n @title FixedPointMath\n @notice A fixed-point math library.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [18822];
            readonly name: "FixedPointMath";
            readonly nameLocation: "515:14:122";
            readonly scope: 18823;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 122;
};
//# sourceMappingURL=FixedPointMath.d.ts.map