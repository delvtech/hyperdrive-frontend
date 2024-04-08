export declare const HyperdriveMath: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a6f4d2e74a4a912a33b6a0f0fd125f3330d4da468469099f342bcfd4c10d712764736f6c63430008140033";
        readonly sourceMap: "638:32158:123:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;638:32158:123;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a6f4d2e74a4a912a33b6a0f0fd125f3330d4da468469099f342bcfd4c10d712764736f6c63430008140033";
        readonly sourceMap: "638:32158:123:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]}},\"version\":1}";
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
                readonly "contracts/src/libraries/HyperdriveMath.sol": "HyperdriveMath";
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
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb";
                readonly urls: readonly ["bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c", "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424";
                readonly urls: readonly ["bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a", "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e";
                readonly urls: readonly ["bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797", "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
        readonly id: 19568;
        readonly exportedSymbols: {
            readonly Errors: readonly [18030];
            readonly FixedPointMath: readonly [18822];
            readonly HyperdriveMath: readonly [19567];
            readonly IHyperdrive: readonly [10351];
            readonly ONE: readonly [18039];
            readonly SafeCast: readonly [21815];
            readonly YieldSpaceMath: readonly [22783];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "40:32757:123";
        readonly nodes: readonly [{
            readonly id: 18824;
            readonly nodeType: "PragmaDirective";
            readonly src: "40:23:123";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 18826;
            readonly nodeType: "ImportDirective";
            readonly src: "65:60:123";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19568;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18825;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "74:11:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18828;
            readonly nodeType: "ImportDirective";
            readonly src: "126:38:123";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Errors.sol";
            readonly file: "./Errors.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19568;
            readonly sourceUnit: 18031;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18827;
                    readonly name: "Errors";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18030;
                    readonly src: "135:6:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18831;
            readonly nodeType: "ImportDirective";
            readonly src: "165:59:123";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "./FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19568;
            readonly sourceUnit: 18823;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18829;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18822;
                    readonly src: "174:14:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 18830;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18039;
                    readonly src: "190:3:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18833;
            readonly nodeType: "ImportDirective";
            readonly src: "225:42:123";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "./SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19568;
            readonly sourceUnit: 21816;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18832;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21815;
                    readonly src: "234:8:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18835;
            readonly nodeType: "ImportDirective";
            readonly src: "268:54:123";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/YieldSpaceMath.sol";
            readonly file: "./YieldSpaceMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 19568;
            readonly sourceUnit: 22784;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18834;
                    readonly name: "YieldSpaceMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 22783;
                    readonly src: "277:14:123";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19567;
            readonly nodeType: "ContractDefinition";
            readonly src: "638:32158:123";
            readonly nodes: readonly [{
                readonly id: 18839;
                readonly nodeType: "UsingForDirective";
                readonly src: "667:33:123";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18837;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["673:14:123"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "673:14:123";
                };
                readonly typeName: {
                    readonly id: 18838;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "692:7:123";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 18842;
                readonly nodeType: "UsingForDirective";
                readonly src: "705:32:123";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18840;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["711:14:123"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "711:14:123";
                };
                readonly typeName: {
                    readonly id: 18841;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "730:6:123";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 18845;
                readonly nodeType: "UsingForDirective";
                readonly src: "742:27:123";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18843;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["748:8:123"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 21815;
                    readonly src: "748:8:123";
                };
                readonly typeName: {
                    readonly id: 18844;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "761:7:123";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 18914;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1405:1330:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18913;
                    readonly nodeType: "Block";
                    readonly src: "1530:1205:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [18856];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18856;
                            readonly mutability: "mutable";
                            readonly name: "timeStretch";
                            readonly nameLocation: "1670:11:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18913;
                            readonly src: "1662:19:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 18855;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1662:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18872;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 18869;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 18867;
                                        readonly name: "_apr";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18848;
                                        readonly src: "1753:4:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "*";
                                    readonly rightExpression: {
                                        readonly hexValue: "313030";
                                        readonly id: 18868;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1760:3:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_100_by_1";
                                            readonly typeString: "int_const 100";
                                        };
                                        readonly value: "100";
                                    };
                                    readonly src: "1753:10:123";
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
                                        readonly arguments: readonly [{
                                            readonly hexValue: "302e3034363635653138";
                                            readonly id: 18864;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "1733:10:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_46650000000000000_by_1";
                                                readonly typeString: "int_const 46650000000000000";
                                            };
                                            readonly value: "0.04665e18";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_rational_46650000000000000_by_1";
                                                readonly typeString: "int_const 46650000000000000";
                                            }];
                                            readonly id: 18863;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1725:7:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 18862;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1725:7:123";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 18865;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1725:19:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 18866;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1745:7:123";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18085;
                                    readonly src: "1725:27:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18870;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1725:39:123";
                                readonly tryCall: false;
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
                                    readonly arguments: readonly [{
                                        readonly hexValue: "352e3234353932653138";
                                        readonly id: 18859;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1692:10:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_5245920000000000000_by_1";
                                            readonly typeString: "int_const 5245920000000000000";
                                        };
                                        readonly value: "5.24592e18";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_rational_5245920000000000000_by_1";
                                            readonly typeString: "int_const 5245920000000000000";
                                        }];
                                        readonly id: 18858;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "1684:7:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 18857;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "1684:7:123";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 18860;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1684:19:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18861;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1704:7:123";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18103;
                                readonly src: "1684:27:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 18871;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1684:90:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1662:112:123";
                    }, {
                        readonly expression: {
                            readonly id: 18878;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18873;
                                readonly name: "timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18856;
                                readonly src: "1784:11:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 18876;
                                    readonly name: "timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18856;
                                    readonly src: "1810:11:123";
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
                                        readonly id: 18874;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18039;
                                        readonly src: "1798:3:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 18875;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1802:7:123";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18103;
                                    readonly src: "1798:11:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18877;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1798:24:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1784:38:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18879;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1784:38:123";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 18910;
                                readonly name: "timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18856;
                                readonly src: "2716:11:123";
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
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [];
                                                    readonly expression: {
                                                        readonly arguments: readonly [];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [];
                                                            readonly expression: {
                                                                readonly components: readonly [{
                                                                    readonly commonType: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                    readonly id: 18900;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly leftExpression: {
                                                                        readonly id: 18898;
                                                                        readonly name: "ONE";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 18039;
                                                                        readonly src: "2664:3:123";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly nodeType: "BinaryOperation";
                                                                    readonly operator: "+";
                                                                    readonly rightExpression: {
                                                                        readonly id: 18899;
                                                                        readonly name: "_apr";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 18848;
                                                                        readonly src: "2670:4:123";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly src: "2664:10:123";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                }];
                                                                readonly id: 18901;
                                                                readonly isConstant: false;
                                                                readonly isInlineArray: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "TupleExpression";
                                                                readonly src: "2663:12:123";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 18902;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "2676:8:123";
                                                            readonly memberName: "toInt256";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 21814;
                                                            readonly src: "2663:21:123";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256) pure returns (int256)";
                                                            };
                                                        };
                                                        readonly id: 18903;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "2663:23:123";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly id: 18904;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "2687:2:123";
                                                    readonly memberName: "ln";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18629;
                                                    readonly src: "2663:26:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                        readonly typeString: "function (int256) pure returns (int256)";
                                                    };
                                                };
                                                readonly id: 18905;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2663:28:123";
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
                                                readonly id: 18897;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2655:7:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 18896;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2655:7:123";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 18906;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2655:37:123";
                                            readonly tryCall: false;
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
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [];
                                                        readonly expression: {
                                                            readonly arguments: readonly [];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [];
                                                                readonly expression: {
                                                                    readonly components: readonly [{
                                                                        readonly commonType: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                        readonly id: 18888;
                                                                        readonly isConstant: false;
                                                                        readonly isLValue: false;
                                                                        readonly isPure: false;
                                                                        readonly lValueRequested: false;
                                                                        readonly leftExpression: {
                                                                            readonly id: 18882;
                                                                            readonly name: "ONE";
                                                                            readonly nodeType: "Identifier";
                                                                            readonly overloadedDeclarations: readonly [];
                                                                            readonly referencedDeclaration: 18039;
                                                                            readonly src: "2511:3:123";
                                                                            readonly typeDescriptions: {
                                                                                readonly typeIdentifier: "t_uint256";
                                                                                readonly typeString: "uint256";
                                                                            };
                                                                        };
                                                                        readonly nodeType: "BinaryOperation";
                                                                        readonly operator: "+";
                                                                        readonly rightExpression: {
                                                                            readonly arguments: readonly [{
                                                                                readonly id: 18885;
                                                                                readonly name: "_positionDuration";
                                                                                readonly nodeType: "Identifier";
                                                                                readonly overloadedDeclarations: readonly [];
                                                                                readonly referencedDeclaration: 18850;
                                                                                readonly src: "2533:17:123";
                                                                                readonly typeDescriptions: {
                                                                                    readonly typeIdentifier: "t_uint256";
                                                                                    readonly typeString: "uint256";
                                                                                };
                                                                            }, {
                                                                                readonly hexValue: "333635";
                                                                                readonly id: 18886;
                                                                                readonly isConstant: false;
                                                                                readonly isLValue: false;
                                                                                readonly isPure: true;
                                                                                readonly kind: "number";
                                                                                readonly lValueRequested: false;
                                                                                readonly nodeType: "Literal";
                                                                                readonly src: "2552:8:123";
                                                                                readonly subdenomination: "days";
                                                                                readonly typeDescriptions: {
                                                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                                                    readonly typeString: "int_const 31536000";
                                                                                };
                                                                                readonly value: "365";
                                                                            }];
                                                                            readonly expression: {
                                                                                readonly argumentTypes: readonly [{
                                                                                    readonly typeIdentifier: "t_uint256";
                                                                                    readonly typeString: "uint256";
                                                                                }, {
                                                                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                                                                    readonly typeString: "int_const 31536000";
                                                                                }];
                                                                                readonly expression: {
                                                                                    readonly id: 18883;
                                                                                    readonly name: "_apr";
                                                                                    readonly nodeType: "Identifier";
                                                                                    readonly overloadedDeclarations: readonly [];
                                                                                    readonly referencedDeclaration: 18848;
                                                                                    readonly src: "2517:4:123";
                                                                                    readonly typeDescriptions: {
                                                                                        readonly typeIdentifier: "t_uint256";
                                                                                        readonly typeString: "uint256";
                                                                                    };
                                                                                };
                                                                                readonly id: 18884;
                                                                                readonly isConstant: false;
                                                                                readonly isLValue: false;
                                                                                readonly isPure: false;
                                                                                readonly lValueRequested: false;
                                                                                readonly memberLocation: "2522:10:123";
                                                                                readonly memberName: "mulDivDown";
                                                                                readonly nodeType: "MemberAccess";
                                                                                readonly referencedDeclaration: 18067;
                                                                                readonly src: "2517:15:123";
                                                                                readonly typeDescriptions: {
                                                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                                                                };
                                                                            };
                                                                            readonly id: 18887;
                                                                            readonly isConstant: false;
                                                                            readonly isLValue: false;
                                                                            readonly isPure: false;
                                                                            readonly kind: "functionCall";
                                                                            readonly lValueRequested: false;
                                                                            readonly nameLocations: readonly [];
                                                                            readonly names: readonly [];
                                                                            readonly nodeType: "FunctionCall";
                                                                            readonly src: "2517:44:123";
                                                                            readonly tryCall: false;
                                                                            readonly typeDescriptions: {
                                                                                readonly typeIdentifier: "t_uint256";
                                                                                readonly typeString: "uint256";
                                                                            };
                                                                        };
                                                                        readonly src: "2511:50:123";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    }];
                                                                    readonly id: 18889;
                                                                    readonly isConstant: false;
                                                                    readonly isInlineArray: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly nodeType: "TupleExpression";
                                                                    readonly src: "2510:52:123";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                };
                                                                readonly id: 18890;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "2588:8:123";
                                                                readonly memberName: "toInt256";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 21814;
                                                                readonly src: "2510:86:123";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                                };
                                                            };
                                                            readonly id: 18891;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "2510:88:123";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            };
                                                        };
                                                        readonly id: 18892;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "2624:2:123";
                                                        readonly memberName: "ln";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 18629;
                                                        readonly src: "2510:116:123";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                            readonly typeString: "function (int256) pure returns (int256)";
                                                        };
                                                    };
                                                    readonly id: 18893;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "2510:118:123";
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
                                                    readonly id: 18881;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "2481:7:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 18880;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "2481:7:123";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 18894;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2481:165:123";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 18895;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2647:7:123";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18103;
                                            readonly src: "2481:173:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 18907;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2481:212:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 18908;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "2463:244:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18909;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2708:7:123";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18085;
                                readonly src: "2463:252:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 18911;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2463:265:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18854;
                        readonly id: 18912;
                        readonly nodeType: "Return";
                        readonly src: "2444:284:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 18846;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "775:625:123";
                    readonly text: "@dev Calculates the time stretch parameter for the YieldSpace curve.\n      This parameter modifies the curvature in order to support a larger\n      or smaller range of APRs. The lower the time stretch, the flatter\n      the curve will be and the narrower the range of feasible APRs. The\n      higher the time stretch, the higher the curvature will be and the\n      wider the range of feasible APRs.\n @param _apr The target APR to use when calculating the time stretch.\n @param _positionDuration The position duration in seconds.\n @return The time stretch parameter.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeStretch";
                readonly nameLocation: "1414:20:123";
                readonly parameters: {
                    readonly id: 18851;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18848;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "1452:4:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18914;
                        readonly src: "1444:12:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18847;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1444:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18850;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "1474:17:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18914;
                        readonly src: "1466:25:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18849;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1466:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1434:63:123";
                };
                readonly returnParameters: {
                    readonly id: 18854;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18853;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18914;
                        readonly src: "1521:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18852;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1521:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1520:9:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18940;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3330:531:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18939;
                    readonly nodeType: "Block";
                    readonly src: "3549:312:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 18937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18928;
                                readonly name: "spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18926;
                                readonly src: "3724:9:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 18935;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18923;
                                    readonly src: "3841:12:123";
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
                                        readonly arguments: readonly [{
                                            readonly id: 18931;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18917;
                                            readonly src: "3784:23:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 18932;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18919;
                                            readonly src: "3809:13:123";
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
                                            }];
                                            readonly expression: {
                                                readonly id: 18929;
                                                readonly name: "_initialVaultSharePrice";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18921;
                                                readonly src: "3736:23:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 18930;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3773:10:123";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18067;
                                            readonly src: "3736:47:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 18933;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3736:87:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 18934;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3837:3:123";
                                    readonly memberName: "pow";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18210;
                                    readonly src: "3736:104:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18936;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3736:118:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3724:130:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18938;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3724:130:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 18915;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2741:584:123";
                    readonly text: "@dev Calculates the spot price of bonds in terms of base. This\n      calculation underestimates the pool's spot price.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The initial vault share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotPrice";
                readonly nameLocation: "3339:18:123";
                readonly parameters: {
                    readonly id: 18924;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18917;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "3375:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18940;
                        readonly src: "3367:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18916;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3367:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18919;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "3416:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18940;
                        readonly src: "3408:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18918;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3408:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18921;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "3447:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18940;
                        readonly src: "3439:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18920;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3439:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18923;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "3488:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18940;
                        readonly src: "3480:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18922;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3480:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3357:149:123";
                };
                readonly returnParameters: {
                    readonly id: 18927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18926;
                        readonly mutability: "mutable";
                        readonly name: "spotPrice";
                        readonly nameLocation: "3538:9:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18940;
                        readonly src: "3530:17:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18925;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3530:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3529:19:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 18978;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4497:945:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18977;
                    readonly nodeType: "Block";
                    readonly src: "4743:699:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [18957];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18957;
                            readonly mutability: "mutable";
                            readonly name: "spotPrice";
                            readonly nameLocation: "5067:9:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 18977;
                            readonly src: "5059:17:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 18956;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5059:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18964;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 18959;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18943;
                                readonly src: "5111:23:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 18960;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18945;
                                readonly src: "5148:13:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 18961;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18947;
                                readonly src: "5175:23:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 18962;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18951;
                                readonly src: "5212:12:123";
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
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 18958;
                                readonly name: "calculateSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18940;
                                readonly src: "5079:18:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 18963;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5079:155:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5059:175:123";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 18972;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18949;
                                    readonly src: "5393:17:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly hexValue: "333635";
                                    readonly id: 18973;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5412:8:123";
                                    readonly subdenomination: "days";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_31536000_by_1";
                                        readonly typeString: "int_const 31536000";
                                    };
                                    readonly value: "365";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_rational_31536000_by_1";
                                        readonly typeString: "int_const 31536000";
                                    }];
                                    readonly expression: {
                                        readonly id: 18970;
                                        readonly name: "spotPrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18957;
                                        readonly src: "5374:9:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 18971;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5384:8:123";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18117;
                                    readonly src: "5374:18:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 18974;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5374:47:123";
                                readonly tryCall: false;
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
                                        readonly id: 18967;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 18965;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18039;
                                            readonly src: "5264:3:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 18966;
                                            readonly name: "spotPrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18957;
                                            readonly src: "5270:9:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "5264:15:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 18968;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5263:17:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 18969;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5281:7:123";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18103;
                                readonly src: "5263:25:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 18975;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5263:172:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 18955;
                        readonly id: 18976;
                        readonly nodeType: "Return";
                        readonly src: "5244:191:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 18941;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3867:625:123";
                    readonly text: "@dev Calculates the spot APR of the pool. This calculation\n      underestimates the pool's spot APR.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotAPR";
                readonly nameLocation: "4506:16:123";
                readonly parameters: {
                    readonly id: 18952;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18943;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "4540:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4532:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18942;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4532:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18945;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "4581:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4573:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4573:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18947;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "4612:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4604:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4604:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18949;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "4653:17:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4645:25:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18948;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4645:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18951;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "4688:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4680:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18950;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4680:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4522:184:123";
                };
                readonly returnParameters: {
                    readonly id: 18955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18954;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "4738:3:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18978;
                        readonly src: "4730:11:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18953;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4730:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4729:13:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19010;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6050:433:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19009;
                    readonly nodeType: "Block";
                    readonly src: "6217:266:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [18989];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 18989;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6232:7:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19009;
                            readonly src: "6227:12:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 18988;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6227:4:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 18990;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6227:12:123";
                    }, {
                        readonly expression: {
                            readonly id: 18998;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 18991;
                                    readonly name: "effectiveShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18986;
                                    readonly src: "6250:22:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18992;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18989;
                                    readonly src: "6274:7:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 18993;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "6249:33:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 18995;
                                    readonly name: "_shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18981;
                                    readonly src: "6334:14:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 18996;
                                    readonly name: "_shareAdjustment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18983;
                                    readonly src: "6362:16:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly id: 18994;
                                    readonly name: "calculateEffectiveShareReservesSafe";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19047;
                                    readonly src: "6285:35:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_bool_$";
                                        readonly typeString: "function (uint256,int256) pure returns (uint256,bool)";
                                    };
                                };
                                readonly id: 18997;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6285:103:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly src: "6249:139:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 18999;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6249:139:123";
                    }, {
                        readonly condition: {
                            readonly id: 19001;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6402:8:123";
                            readonly subExpression: {
                                readonly id: 19000;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18989;
                                readonly src: "6403:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19008;
                        readonly nodeType: "IfStatement";
                        readonly src: "6398:79:123";
                        readonly trueBody: {
                            readonly id: 19007;
                            readonly nodeType: "Block";
                            readonly src: "6412:65:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 19002;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18030;
                                            readonly src: "6426:6:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18030_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 19004;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6433:31:123";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18029;
                                        readonly src: "6426:38:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 19005;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6426:40:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 19006;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "6426:40:123";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 18979;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5448:597:123";
                    readonly text: "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return effectiveShareReserves The effective share reserves.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateEffectiveShareReserves";
                readonly nameLocation: "6059:31:123";
                readonly parameters: {
                    readonly id: 18984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18981;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "6108:14:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19010;
                        readonly src: "6100:22:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18980;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6100:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 18983;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "6139:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19010;
                        readonly src: "6132:23:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 18982;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6132:6:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6090:71:123";
                };
                readonly returnParameters: {
                    readonly id: 18987;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18986;
                        readonly mutability: "mutable";
                        readonly name: "effectiveShareReserves";
                        readonly nameLocation: "6193:22:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19010;
                        readonly src: "6185:30:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 18985;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6185:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6184:32:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19047;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7132:398:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19046;
                    readonly nodeType: "Block";
                    readonly src: "7286:244:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19023];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19023;
                            readonly mutability: "mutable";
                            readonly name: "effectiveShareReserves";
                            readonly nameLocation: "7303:22:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19046;
                            readonly src: "7296:29:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 19022;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7296:6:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19029;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 19028;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 19024;
                                        readonly name: "_shareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19013;
                                        readonly src: "7328:14:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19025;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7343:8:123";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21814;
                                    readonly src: "7328:23:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 19026;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7328:25:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly id: 19027;
                                readonly name: "_shareAdjustment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19015;
                                readonly src: "7368:16:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "7328:56:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7296:88:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 19032;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19030;
                                readonly name: "effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19023;
                                readonly src: "7398:22:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19031;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7423:1:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "7398:26:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19038;
                        readonly nodeType: "IfStatement";
                        readonly src: "7394:74:123";
                        readonly trueBody: {
                            readonly id: 19037;
                            readonly nodeType: "Block";
                            readonly src: "7426:42:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 19033;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7448:1:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 19034;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7451:5:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 19035;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7447:10:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 19021;
                                readonly id: 19036;
                                readonly nodeType: "Return";
                                readonly src: "7440:17:123";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 19041;
                                    readonly name: "effectiveShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19023;
                                    readonly src: "7493:22:123";
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
                                    readonly id: 19040;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "7485:7:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 19039;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "7485:7:123";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 19042;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7485:31:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly hexValue: "74727565";
                                readonly id: 19043;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7518:4:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            }];
                            readonly id: 19044;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "7484:39:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 19021;
                        readonly id: 19045;
                        readonly nodeType: "Return";
                        readonly src: "7477:46:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19011;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6489:638:123";
                    readonly text: "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves.\n @return A flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateEffectiveShareReservesSafe";
                readonly nameLocation: "7141:35:123";
                readonly parameters: {
                    readonly id: 19016;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19013;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "7194:14:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19047;
                        readonly src: "7186:22:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19012;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7186:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19015;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "7225:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19047;
                        readonly src: "7218:23:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 19014;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7218:6:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7176:71:123";
                };
                readonly returnParameters: {
                    readonly id: 19021;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19018;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19047;
                        readonly src: "7271:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19017;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7271:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19020;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19047;
                        readonly src: "7280:4:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 19019;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7280:4:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7270:15:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19114;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8615:1272:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19113;
                    readonly nodeType: "Block";
                    readonly src: "8873:1014:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19064];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19064;
                            readonly mutability: "mutable";
                            readonly name: "t";
                            readonly nameLocation: "9085:1:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19113;
                            readonly src: "9077:9:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19063;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9077:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19069;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "333635";
                                readonly id: 19067;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9115:8:123";
                                readonly subdenomination: "days";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                };
                                readonly value: "365";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_rational_31536000_by_1";
                                    readonly typeString: "int_const 31536000";
                                }];
                                readonly expression: {
                                    readonly id: 19065;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19056;
                                    readonly src: "9089:17:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19066;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9107:7:123";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18103;
                                readonly src: "9089:25:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19068;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9089:35:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9077:47:123";
                    }, {
                        readonly assignments: readonly [19071];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19071;
                            readonly mutability: "mutable";
                            readonly name: "inner";
                            readonly nameLocation: "9272:5:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19113;
                            readonly src: "9264:13:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19070;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9264:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19078;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19077;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19072;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18039;
                                readonly src: "9280:3:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 19075;
                                    readonly name: "t";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19064;
                                    readonly src: "9299:1:123";
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
                                        readonly id: 19073;
                                        readonly name: "_apr";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19054;
                                        readonly src: "9286:4:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19074;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9291:7:123";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18085;
                                    readonly src: "9286:12:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19076;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9286:15:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9280:21:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9264:37:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19081;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19079;
                                readonly name: "inner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19071;
                                readonly src: "9315:5:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">=";
                            readonly rightExpression: {
                                readonly id: 19080;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18039;
                                readonly src: "9324:3:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9315:12:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 19103;
                            readonly nodeType: "Block";
                            readonly src: "9475:136:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19101;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19093;
                                        readonly name: "inner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19071;
                                        readonly src: "9558:5:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 19098;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19058;
                                                readonly src: "9586:12:123";
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
                                                    readonly id: 19096;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18039;
                                                    readonly src: "9576:3:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19097;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9580:5:123";
                                                readonly memberName: "divUp";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18153;
                                                readonly src: "9576:9:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19099;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9576:23:123";
                                            readonly tryCall: false;
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
                                                readonly id: 19094;
                                                readonly name: "inner";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19071;
                                                readonly src: "9566:5:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19095;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9572:3:123";
                                            readonly memberName: "pow";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18210;
                                            readonly src: "9566:9:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19100;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9566:34:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9558:42:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19102;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9558:42:123";
                            }];
                        };
                        readonly id: 19104;
                        readonly nodeType: "IfStatement";
                        readonly src: "9311:300:123";
                        readonly trueBody: {
                            readonly id: 19092;
                            readonly nodeType: "Block";
                            readonly src: "9329:140:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19090;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19082;
                                        readonly name: "inner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19071;
                                        readonly src: "9414:5:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 19087;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19058;
                                                readonly src: "9444:12:123";
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
                                                    readonly id: 19085;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18039;
                                                    readonly src: "9432:3:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19086;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9436:7:123";
                                                readonly memberName: "divDown";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18103;
                                                readonly src: "9432:11:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19088;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9432:25:123";
                                            readonly tryCall: false;
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
                                                readonly id: 19083;
                                                readonly name: "inner";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19071;
                                                readonly src: "9422:5:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19084;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9428:3:123";
                                            readonly memberName: "pow";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18210;
                                            readonly src: "9422:9:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19089;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9422:36:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9414:44:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19091;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9414:44:123";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19110;
                                readonly name: "inner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19071;
                                readonly src: "9861:5:123";
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
                                    readonly arguments: readonly [{
                                        readonly id: 19107;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19050;
                                        readonly src: "9811:23:123";
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
                                            readonly id: 19105;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19052;
                                            readonly src: "9779:23:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19106;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9803:7:123";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18085;
                                        readonly src: "9779:31:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19108;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9779:56:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19109;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9836:7:123";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18085;
                                readonly src: "9779:64:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19111;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9779:101:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19062;
                        readonly id: 19112;
                        readonly nodeType: "Return";
                        readonly src: "9760:120:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19048;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7536:1074:123";
                    readonly text: "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares. This calculation underestimates the pool's\n      initial bond reserves.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateInitialBondReserves";
                readonly nameLocation: "8624:28:123";
                readonly parameters: {
                    readonly id: 19059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19050;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "8670:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8662:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19049;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8662:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19052;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "8711:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8703:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19051;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8703:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19054;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "8752:4:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8744:12:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19053;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8744:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19056;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "8774:17:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8766:25:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19055;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8766:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19058;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "8809:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8801:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19057;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8801:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8652:175:123";
                };
                readonly returnParameters: {
                    readonly id: 19062;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19061;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "8859:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19114;
                        readonly src: "8851:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19060;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8851:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8850:22:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19166;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11376:1660:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19165;
                    readonly nodeType: "Block";
                    readonly src: "11658:1378:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19133];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19133;
                            readonly mutability: "mutable";
                            readonly name: "totalValue";
                            readonly nameLocation: "12085:10:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19165;
                            readonly src: "12077:18:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19132;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12077:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19142;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19140;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19125;
                                readonly src: "12196:16:123";
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
                                    readonly arguments: readonly [{
                                        readonly id: 19136;
                                        readonly name: "_closeVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19123;
                                        readonly src: "12132:21:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 19137;
                                        readonly name: "_openVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19121;
                                        readonly src: "12155:20:123";
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
                                        }];
                                        readonly expression: {
                                            readonly id: 19134;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19117;
                                            readonly src: "12098:11:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19135;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12123:8:123";
                                        readonly memberName: "mulDivUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18117;
                                        readonly src: "12098:33:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19138;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "12098:78:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19139;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12190:5:123";
                                readonly memberName: "divUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18153;
                                readonly src: "12098:97:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19141;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12098:115:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12077:136:123";
                    }, {
                        readonly expression: {
                            readonly id: 19149;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19143;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19133;
                                readonly src: "12447:10:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19146;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19127;
                                    readonly src: "12482:8:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19147;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19125;
                                    readonly src: "12492:16:123";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 19144;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19117;
                                        readonly src: "12461:11:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19145;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12473:8:123";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18117;
                                    readonly src: "12461:20:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19148;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12461:48:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12447:62:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19150;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12447:62:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19153;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19151;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19133;
                                readonly src: "12812:10:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 19152;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19119;
                                readonly src: "12825:12:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12812:25:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19162;
                        readonly nodeType: "IfStatement";
                        readonly src: "12808:191:123";
                        readonly trueBody: {
                            readonly id: 19161;
                            readonly nodeType: "Block";
                            readonly src: "12839:160:123";
                            readonly statements: readonly [{
                                readonly id: 19160;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "12905:84:123";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 19158;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 19154;
                                            readonly name: "shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19130;
                                            readonly src: "12933:13:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 19157;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19155;
                                                readonly name: "totalValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19133;
                                                readonly src: "12949:10:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19156;
                                                readonly name: "_shareAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19119;
                                                readonly src: "12962:12:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "12949:25:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "12933:41:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19159;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "12933:41:123";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 19163;
                            readonly name: "shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19130;
                            readonly src: "13016:13:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19131;
                        readonly id: 19164;
                        readonly nodeType: "Return";
                        readonly src: "13009:20:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19115;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9893:1478:123";
                    readonly text: "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation overestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsUp";
                readonly nameLocation: "11385:24:123";
                readonly parameters: {
                    readonly id: 19128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19117;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11427:11:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11419:19:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19116;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11419:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19119;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "11456:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11448:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11448:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19121;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "11486:20:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11478:28:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19120;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11478:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19123;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "11524:21:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11516:29:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19122;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11516:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19125;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "11563:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11555:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19124;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11555:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19127;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "11597:8:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11589:16:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19126;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11589:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11409:202:123";
                };
                readonly returnParameters: {
                    readonly id: 19131;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19130;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "11643:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19166;
                        readonly src: "11635:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19129;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11635:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11634:23:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19218;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14526:1674:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19217;
                    readonly nodeType: "Block";
                    readonly src: "14810:1390:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19185];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19185;
                            readonly mutability: "mutable";
                            readonly name: "totalValue";
                            readonly nameLocation: "15240:10:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19217;
                            readonly src: "15232:18:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19184;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15232:7:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19194;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19192;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19177;
                                readonly src: "15355:16:123";
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
                                    readonly arguments: readonly [{
                                        readonly id: 19188;
                                        readonly name: "_closeVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19175;
                                        readonly src: "15289:21:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 19189;
                                        readonly name: "_openVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19173;
                                        readonly src: "15312:20:123";
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
                                        }];
                                        readonly expression: {
                                            readonly id: 19186;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19169;
                                            readonly src: "15253:11:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19187;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15278:10:123";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18067;
                                        readonly src: "15253:35:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19190;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15253:80:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19191;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15347:7:123";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18103;
                                readonly src: "15253:101:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19193;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15253:119:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15232:140:123";
                    }, {
                        readonly expression: {
                            readonly id: 19201;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19195;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19185;
                                readonly src: "15609:10:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19198;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19179;
                                    readonly src: "15646:8:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19199;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19177;
                                    readonly src: "15656:16:123";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 19196;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19169;
                                        readonly src: "15623:11:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19197;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15635:10:123";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "15623:22:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19200;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15623:50:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15609:64:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19202;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15609:64:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19205;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19203;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19185;
                                readonly src: "15976:10:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 19204;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19171;
                                readonly src: "15989:12:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15976:25:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19214;
                        readonly nodeType: "IfStatement";
                        readonly src: "15972:191:123";
                        readonly trueBody: {
                            readonly id: 19213;
                            readonly nodeType: "Block";
                            readonly src: "16003:160:123";
                            readonly statements: readonly [{
                                readonly id: 19212;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "16069:84:123";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 19210;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 19206;
                                            readonly name: "shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19182;
                                            readonly src: "16097:13:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "Assignment";
                                        readonly operator: "=";
                                        readonly rightHandSide: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 19209;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19207;
                                                readonly name: "totalValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19185;
                                                readonly src: "16113:10:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19208;
                                                readonly name: "_shareAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19171;
                                                readonly src: "16126:12:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "16113:25:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "16097:41:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19211;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "16097:41:123";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 19215;
                            readonly name: "shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19182;
                            readonly src: "16180:13:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19183;
                        readonly id: 19216;
                        readonly nodeType: "Return";
                        readonly src: "16173:20:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19167;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13042:1479:123";
                    readonly text: "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation underestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsDown";
                readonly nameLocation: "14535:26:123";
                readonly parameters: {
                    readonly id: 19180;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19169;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "14579:11:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14571:19:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19168;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14571:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19171;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "14608:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14600:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19170;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14600:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19173;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "14638:20:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14630:28:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19172;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14630:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19175;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "14676:21:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14668:29:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19174;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14668:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19177;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "14715:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14707:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19176;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14707:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19179;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "14749:8:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14741:16:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19178;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14741:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14561:202:123";
                };
                readonly returnParameters: {
                    readonly id: 19183;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19182;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "14795:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19218;
                        readonly src: "14787:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19181;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14787:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14786:23:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19254;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16922:541:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19253;
                    readonly nodeType: "Block";
                    readonly src: "17088:375:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 19250;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 19235;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "17296:3:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 19248;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 19246;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18039;
                                            readonly src: "17406:3:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19247;
                                            readonly name: "_flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19225;
                                            readonly src: "17412:8:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "17406:14:123";
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
                                            readonly arguments: readonly [{
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                                readonly id: 19243;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 19240;
                                                        readonly name: "_startingSpotPrice";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 19221;
                                                        readonly src: "17348:18:123";
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
                                                            readonly id: 19238;
                                                            readonly name: "ONE";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18039;
                                                            readonly src: "17338:3:123";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly id: 19239;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "17342:5:123";
                                                        readonly memberName: "divUp";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 18153;
                                                        readonly src: "17338:9:123";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                        };
                                                    };
                                                    readonly id: 19241;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "17338:29:123";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 19242;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18039;
                                                    readonly src: "17370:3:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "17338:35:123";
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
                                                    readonly id: 19236;
                                                    readonly name: "_curveFee";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19223;
                                                    readonly src: "17322:9:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19237;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "17332:5:123";
                                                readonly memberName: "mulUp";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18135;
                                                readonly src: "17322:15:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19244;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "17322:52:123";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19245;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17375:5:123";
                                        readonly memberName: "mulUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18135;
                                        readonly src: "17322:58:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19249;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17322:120:123";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "17296:146:123";
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
                                        readonly id: 19232;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 19230;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18039;
                                            readonly src: "17187:3:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19231;
                                            readonly name: "_flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19225;
                                            readonly src: "17193:8:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "17187:14:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 19233;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "17186:16:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19234;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17203:7:123";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18103;
                                readonly src: "17186:24:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19251;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17186:270:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19229;
                        readonly id: 19252;
                        readonly nodeType: "Return";
                        readonly src: "17167:289:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19219;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16206:711:123";
                    readonly text: "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = (1 - phi_f) / (1 + phi_c * (1 / p_0 - 1) * (1 - phi_f))\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @param _flatFee The flat fee.\n @return The maximum spot price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLongMaxSpotPrice";
                readonly nameLocation: "16931:29:123";
                readonly parameters: {
                    readonly id: 19226;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19221;
                        readonly mutability: "mutable";
                        readonly name: "_startingSpotPrice";
                        readonly nameLocation: "16978:18:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19254;
                        readonly src: "16970:26:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19220;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16970:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19223;
                        readonly mutability: "mutable";
                        readonly name: "_curveFee";
                        readonly nameLocation: "17014:9:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19254;
                        readonly src: "17006:17:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19222;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17006:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19225;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "17041:8:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19254;
                        readonly src: "17033:16:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19224;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17033:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16960:95:123";
                };
                readonly returnParameters: {
                    readonly id: 19229;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19228;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19254;
                        readonly src: "17079:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19227;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17079:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17078:9:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19274;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18115:284:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19273;
                    readonly nodeType: "Block";
                    readonly src: "18257:142:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19271;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19264;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18039;
                                readonly src: "18345:3:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 19269;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19267;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18039;
                                        readonly src: "18367:3:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 19268;
                                        readonly name: "_startingSpotPrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19257;
                                        readonly src: "18373:18:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18367:24:123";
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
                                        readonly id: 19265;
                                        readonly name: "_curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19259;
                                        readonly src: "18351:9:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19266;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18361:5:123";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18135;
                                    readonly src: "18351:15:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19270;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "18351:41:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "18345:47:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19263;
                        readonly id: 19272;
                        readonly nodeType: "Return";
                        readonly src: "18338:54:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19255;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17469:641:123";
                    readonly text: "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShortMaxSpotPrice";
                readonly nameLocation: "18124:31:123";
                readonly parameters: {
                    readonly id: 19260;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19257;
                        readonly mutability: "mutable";
                        readonly name: "_startingSpotPrice";
                        readonly nameLocation: "18173:18:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19274;
                        readonly src: "18165:26:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19256;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18165:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19259;
                        readonly mutability: "mutable";
                        readonly name: "_curveFee";
                        readonly nameLocation: "18209:9:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19274;
                        readonly src: "18201:17:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19258;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18201:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18155:69:123";
                };
                readonly returnParameters: {
                    readonly id: 19263;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19262;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19274;
                        readonly src: "18248:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19261;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18248:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18247:9:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19305;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19106:892:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19304;
                    readonly nodeType: "Block";
                    readonly src: "19378:620:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19294;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19277;
                                readonly src: "19573:23:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19295;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19279;
                                readonly src: "19614:13:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19296;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19281;
                                readonly src: "19645:12:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 19299;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 19297;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "19884:3:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 19298;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19283;
                                    readonly src: "19890:12:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "19884:18:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19300;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19285;
                                readonly src: "19920:16:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19301;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19287;
                                readonly src: "19954:23:123";
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
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 19292;
                                    readonly name: "YieldSpaceMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22783;
                                    readonly src: "19506:14:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$22783_$";
                                        readonly typeString: "type(library YieldSpaceMath)";
                                    };
                                };
                                readonly id: 19293;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "19521:34:123";
                                readonly memberName: "calculateBondsOutGivenSharesInDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 21940;
                                readonly src: "19506:49:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19302;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19506:485:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19291;
                        readonly id: 19303;
                        readonly nodeType: "Return";
                        readonly src: "19487:504:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19275;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "18405:696:123";
                    readonly text: "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "19115:17:123";
                readonly parameters: {
                    readonly id: 19288;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19277;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "19150:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19142:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19276;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19142:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19279;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "19191:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19183:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19278;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19183:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19281;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "19222:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19214:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19280;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19214:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19283;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "19252:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19244:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19282;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19244:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19285;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "19282:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19274:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19284;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19274:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19287;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "19316:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19308:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19286;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19308:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19132:213:123";
                };
                readonly returnParameters: {
                    readonly id: 19291;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19290;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19305;
                        readonly src: "19369:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19289;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19369:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19368:9:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19370;
                readonly nodeType: "FunctionDefinition";
                readonly src: "20979:2126:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19369;
                    readonly nodeType: "Block";
                    readonly src: "21428:1677:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19337;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19329;
                                readonly name: "shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19327;
                                readonly src: "22003:13:123";
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
                                    readonly id: 19334;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19332;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18039;
                                        readonly src: "22053:3:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 19333;
                                        readonly name: "_normalizedTimeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19314;
                                        readonly src: "22059:24:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22053:30:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19335;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19318;
                                    readonly src: "22097:16:123";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 19330;
                                        readonly name: "_amountIn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19312;
                                        readonly src: "22019:9:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19331;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "22029:10:123";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "22019:20:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19336;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "22019:104:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "22003:120:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19338;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "22003:120:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19341;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19339;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19314;
                                readonly src: "22137:24:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19340;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "22164:1:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "22137:28:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19368;
                        readonly nodeType: "IfStatement";
                        readonly src: "22133:966:123";
                        readonly trueBody: {
                            readonly id: 19367;
                            readonly nodeType: "Block";
                            readonly src: "22167:932:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19347;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19342;
                                        readonly name: "bondCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19325;
                                        readonly src: "22356:14:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19345;
                                            readonly name: "_normalizedTimeRemaining";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19314;
                                            readonly src: "22391:24:123";
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
                                                readonly id: 19343;
                                                readonly name: "_amountIn";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19312;
                                                readonly src: "22373:9:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19344;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "22383:7:123";
                                            readonly memberName: "mulDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18085;
                                            readonly src: "22373:17:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19346;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "22373:43:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22356:60:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19348;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "22356:60:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19361;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19349;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19323;
                                        readonly src: "22537:15:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19352;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19308;
                                            readonly src: "22622:23:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19353;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19310;
                                            readonly src: "22663:13:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19354;
                                            readonly name: "bondCurveDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19325;
                                            readonly src: "22694:14:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 19357;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19355;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18039;
                                                readonly src: "22935:3:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19356;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19316;
                                                readonly src: "22941:12:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "22935:18:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19358;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19318;
                                            readonly src: "22971:16:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19359;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19320;
                                            readonly src: "23005:23:123";
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
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 19350;
                                                readonly name: "YieldSpaceMath";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 22783;
                                                readonly src: "22555:14:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$22783_$";
                                                    readonly typeString: "type(library YieldSpaceMath)";
                                                };
                                            };
                                            readonly id: 19351;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "22570:34:123";
                                            readonly memberName: "calculateSharesOutGivenBondsInDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 22283;
                                            readonly src: "22555:49:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19360;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "22555:487:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22537:505:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19362;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "22537:505:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19365;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19363;
                                        readonly name: "shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19327;
                                        readonly src: "23056:13:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 19364;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19323;
                                        readonly src: "23073:15:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "23056:32:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19366;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23056:32:123";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 19306;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "20004:970:123";
                    readonly text: "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The vault share price when the pool was\n        deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseLong";
                readonly nameLocation: "20988:18:123";
                readonly parameters: {
                    readonly id: 19321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19308;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "21024:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21016:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19307;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21016:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19310;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "21065:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21057:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19309;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21057:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19312;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "21096:9:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21088:17:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19311;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21088:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19314;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "21123:24:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21115:32:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19313;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21115:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19316;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "21165:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21157:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19315;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21157:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19318;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "21195:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21187:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19317;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21187:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19320;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "21229:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21221:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19319;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21221:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21006:252:123";
                };
                readonly returnParameters: {
                    readonly id: 19328;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19323;
                        readonly mutability: "mutable";
                        readonly name: "shareCurveDelta";
                        readonly nameLocation: "21327:15:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21319:23:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19322;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21319:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19325;
                        readonly mutability: "mutable";
                        readonly name: "bondCurveDelta";
                        readonly nameLocation: "21364:14:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21356:22:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19324;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21356:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19327;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "21400:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19370;
                        readonly src: "21392:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19326;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21392:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21305:118:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19401;
                readonly nodeType: "FunctionDefinition";
                readonly src: "23799:866:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19400;
                    readonly nodeType: "Block";
                    readonly src: "24069:596:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19390;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19373;
                                readonly src: "24243:23:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19391;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19375;
                                readonly src: "24284:13:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19392;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19377;
                                readonly src: "24315:9:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 19395;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 19393;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18039;
                                    readonly src: "24551:3:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 19394;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19379;
                                    readonly src: "24557:12:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "24551:18:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19396;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19381;
                                readonly src: "24587:16:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19397;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19383;
                                readonly src: "24621:23:123";
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
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 19388;
                                    readonly name: "YieldSpaceMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 22783;
                                    readonly src: "24176:14:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$22783_$";
                                        readonly typeString: "type(library YieldSpaceMath)";
                                    };
                                };
                                readonly id: 19389;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "24191:34:123";
                                readonly memberName: "calculateSharesOutGivenBondsInDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 22283;
                                readonly src: "24176:49:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19398;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "24176:482:123";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19387;
                        readonly id: 19399;
                        readonly nodeType: "Return";
                        readonly src: "24157:501:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19371;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "23111:683:123";
                    readonly text: "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return The shares paid by the reserves in the trade.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenShort";
                readonly nameLocation: "23808:18:123";
                readonly parameters: {
                    readonly id: 19384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19373;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "23844:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23836:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19372;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23836:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19375;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "23885:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23877:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19374;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23877:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19377;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "23916:9:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23908:17:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19376;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23908:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19379;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "23943:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23935:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19378;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23935:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19381;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "23973:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23965:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19380;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23965:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19383;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "24007:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "23999:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19382;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23999:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "23826:210:123";
                };
                readonly returnParameters: {
                    readonly id: 19387;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19386;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19401;
                        readonly src: "24060:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19385;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24060:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24059:9:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19466;
                readonly nodeType: "FunctionDefinition";
                readonly src: "25623:2130:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19465;
                    readonly nodeType: "Block";
                    readonly src: "26073:1680:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19433;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19425;
                                readonly name: "sharePayment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19423;
                                readonly src: "26735:12:123";
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
                                    readonly id: 19430;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19428;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18039;
                                        readonly src: "26783:3:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 19429;
                                        readonly name: "_normalizedTimeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19410;
                                        readonly src: "26789:24:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "26783:30:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19431;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19414;
                                    readonly src: "26827:16:123";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 19426;
                                        readonly name: "_amountOut";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19408;
                                        readonly src: "26750:10:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19427;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26761:8:123";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18117;
                                    readonly src: "26750:19:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19432;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26750:103:123";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "26735:118:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19434;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "26735:118:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19437;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19435;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19410;
                                readonly src: "26867:24:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19436;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "26894:1:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "26867:28:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19464;
                        readonly nodeType: "IfStatement";
                        readonly src: "26863:884:123";
                        readonly trueBody: {
                            readonly id: 19463;
                            readonly nodeType: "Block";
                            readonly src: "26897:850:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19443;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19438;
                                        readonly name: "bondCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19421;
                                        readonly src: "27012:14:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19441;
                                            readonly name: "_normalizedTimeRemaining";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19410;
                                            readonly src: "27046:24:123";
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
                                                readonly id: 19439;
                                                readonly name: "_amountOut";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19408;
                                                readonly src: "27029:10:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19440;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "27040:5:123";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18135;
                                            readonly src: "27029:16:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19442;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "27029:42:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27012:59:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19444;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27012:59:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19457;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19445;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19419;
                                        readonly src: "27188:15:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19448;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19404;
                                            readonly src: "27271:23:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19449;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19406;
                                            readonly src: "27312:13:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19450;
                                            readonly name: "bondCurveDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19421;
                                            readonly src: "27343:14:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 19453;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19451;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18039;
                                                readonly src: "27584:3:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19452;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19412;
                                                readonly src: "27590:12:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "27584:18:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19454;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19414;
                                            readonly src: "27620:16:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19455;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19416;
                                            readonly src: "27654:23:123";
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
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 19446;
                                                readonly name: "YieldSpaceMath";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 22783;
                                                readonly src: "27206:14:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$22783_$";
                                                    readonly typeString: "type(library YieldSpaceMath)";
                                                };
                                            };
                                            readonly id: 19447;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "27221:32:123";
                                            readonly memberName: "calculateSharesInGivenBondsOutUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 21984;
                                            readonly src: "27206:47:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19456;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "27206:485:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27188:503:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19458;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27188:503:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19461;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19459;
                                        readonly name: "sharePayment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19423;
                                        readonly src: "27705:12:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 19460;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19419;
                                        readonly src: "27721:15:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27705:31:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19462;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27705:31:123";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 19402;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "24671:947:123";
                    readonly text: "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShort";
                readonly nameLocation: "25632:19:123";
                readonly parameters: {
                    readonly id: 19417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19404;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "25669:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25661:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19403;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25661:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19406;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "25710:13:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25702:21:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19405;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25702:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19408;
                        readonly mutability: "mutable";
                        readonly name: "_amountOut";
                        readonly nameLocation: "25741:10:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25733:18:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19407;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25733:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19410;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "25769:24:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25761:32:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19409;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25761:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19412;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "25811:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25803:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19411;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25803:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19414;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "25841:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25833:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19413;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25833:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19416;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "25875:23:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25867:31:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19415;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25867:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "25651:253:123";
                };
                readonly returnParameters: {
                    readonly id: 19424;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19419;
                        readonly mutability: "mutable";
                        readonly name: "shareCurveDelta";
                        readonly nameLocation: "25973:15:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "25965:23:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19418;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25965:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19421;
                        readonly mutability: "mutable";
                        readonly name: "bondCurveDelta";
                        readonly nameLocation: "26010:14:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "26002:22:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19420;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26002:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19423;
                        readonly mutability: "mutable";
                        readonly name: "sharePayment";
                        readonly nameLocation: "26046:12:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19466;
                        readonly src: "26038:20:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19422;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26038:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "25951:117:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19566;
                readonly nodeType: "FunctionDefinition";
                readonly src: "29841:2953:123";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19565;
                    readonly nodeType: "Block";
                    readonly src: "30195:2599:123";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19495];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19495;
                            readonly mutability: "mutable";
                            readonly name: "shareAdjustmentDelta";
                            readonly nameLocation: "31127:20:123";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19565;
                            readonly src: "31120:27:123";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 19494;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "31120:6:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19496;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "31120:27:123";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19499;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19497;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19479;
                                readonly src: "31161:21:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 19498;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19477;
                                readonly src: "31185:20:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "31161:44:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 19556;
                            readonly nodeType: "Block";
                            readonly src: "32462:140:123";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19554;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19546;
                                        readonly name: "shareAdjustmentDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19495;
                                        readonly src: "32476:20:123";
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
                                        readonly id: 19553;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 19547;
                                                    readonly name: "_shareReservesDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19471;
                                                    readonly src: "32515:19:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19548;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32535:8:123";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 21814;
                                                readonly src: "32515:28:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 19549;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32515:30:123";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 19550;
                                                    readonly name: "_shareCurveDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19473;
                                                    readonly src: "32564:16:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19551;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32581:8:123";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 21814;
                                                readonly src: "32564:25:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 19552;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32564:27:123";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "32515:76:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "32476:115:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 19555;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32476:115:123";
                            }];
                        };
                        readonly id: 19557;
                        readonly nodeType: "IfStatement";
                        readonly src: "31157:1445:123";
                        readonly trueBody: {
                            readonly id: 19545;
                            readonly nodeType: "Block";
                            readonly src: "31207:1249:123";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly id: 19500;
                                    readonly name: "_isLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19481;
                                    readonly src: "31490:7:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 19510;
                                readonly nodeType: "IfStatement";
                                readonly src: "31486:191:123";
                                readonly trueBody: {
                                    readonly id: 19509;
                                    readonly nodeType: "Block";
                                    readonly src: "31499:178:123";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 19507;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 19501;
                                                readonly name: "_shareProceeds";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19469;
                                                readonly src: "31517:14:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 19504;
                                                    readonly name: "_closeVaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19479;
                                                    readonly src: "31581:21:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }, {
                                                    readonly id: 19505;
                                                    readonly name: "_openVaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19477;
                                                    readonly src: "31624:20:123";
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
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 19502;
                                                        readonly name: "_shareProceeds";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 19469;
                                                        readonly src: "31534:14:123";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 19503;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "31549:10:123";
                                                    readonly memberName: "mulDivDown";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18067;
                                                    readonly src: "31534:25:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 19506;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "31534:128:123";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "31517:145:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19508;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "31517:145:123";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 19517;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19511;
                                        readonly name: "_shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19471;
                                        readonly src: "31810:19:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19514;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19479;
                                            readonly src: "31880:21:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19515;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19477;
                                            readonly src: "31919:20:123";
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
                                            }];
                                            readonly expression: {
                                                readonly id: 19512;
                                                readonly name: "_shareReservesDelta";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19471;
                                                readonly src: "31832:19:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19513;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "31852:10:123";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18067;
                                            readonly src: "31832:30:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19516;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "31832:121:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "31810:143:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19518;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "31810:143:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19527;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19519;
                                        readonly name: "shareAdjustmentDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19495;
                                        readonly src: "32022:20:123";
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
                                        readonly id: 19526;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 19520;
                                                    readonly name: "_shareReservesDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19471;
                                                    readonly src: "32061:19:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19521;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32081:8:123";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 21814;
                                                readonly src: "32061:28:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 19522;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32061:30:123";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 19523;
                                                    readonly name: "_shareCurveDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19473;
                                                    readonly src: "32110:16:123";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19524;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32127:8:123";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 21814;
                                                readonly src: "32110:25:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 19525;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32110:27:123";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "32061:76:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "32022:115:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 19528;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32022:115:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19535;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19529;
                                        readonly name: "_shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19473;
                                        readonly src: "32151:16:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19532;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19479;
                                            readonly src: "32215:21:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19533;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19477;
                                            readonly src: "32254:20:123";
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
                                            }];
                                            readonly expression: {
                                                readonly id: 19530;
                                                readonly name: "_shareCurveDelta";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19473;
                                                readonly src: "32170:16:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19531;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "32187:10:123";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18067;
                                            readonly src: "32170:27:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19534;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "32170:118:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "32151:137:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19536;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32151:137:123";
                            }, {
                                readonly expression: {
                                    readonly id: 19543;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19537;
                                        readonly name: "_totalGovernanceFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19475;
                                        readonly src: "32302:19:123";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19540;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19479;
                                            readonly src: "32372:21:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19541;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19477;
                                            readonly src: "32411:20:123";
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
                                            }];
                                            readonly expression: {
                                                readonly id: 19538;
                                                readonly name: "_totalGovernanceFee";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19475;
                                                readonly src: "32324:19:123";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19539;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "32344:10:123";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18067;
                                            readonly src: "32324:30:123";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19542;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "32324:121:123";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "32302:143:123";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19544;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32302:143:123";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 19558;
                                readonly name: "_shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19469;
                                readonly src: "32633:14:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19559;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19471;
                                readonly src: "32661:19:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19560;
                                readonly name: "_shareCurveDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19473;
                                readonly src: "32694:16:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19561;
                                readonly name: "shareAdjustmentDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19495;
                                readonly src: "32724:20:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 19562;
                                readonly name: "_totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19475;
                                readonly src: "32758:19:123";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 19563;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "32619:168:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 19493;
                        readonly id: 19564;
                        readonly nodeType: "Return";
                        readonly src: "32612:175:123";
                    }];
                };
                readonly documentation: {
                    readonly id: 19467;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "27759:2077:123";
                    readonly text: "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n      We underestimate the share proceeds to avoid sandwiches, and we\n      round the share reserves delta and share adjustment in the same\n      direction for consistency.\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openVaultSharePrice The vault share price at the beginning of\n        the term.\n @param _closeVaultSharePrice The vault share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNegativeInterestOnClose";
                readonly nameLocation: "29850:32:123";
                readonly parameters: {
                    readonly id: 19482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19469;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "29900:14:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "29892:22:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19468;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29892:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19471;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "29932:19:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "29924:27:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19470;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29924:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19473;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "29969:16:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "29961:24:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19472;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29961:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19475;
                        readonly mutability: "mutable";
                        readonly name: "_totalGovernanceFee";
                        readonly nameLocation: "30003:19:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "29995:27:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19474;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "29995:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19477;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "30040:20:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30032:28:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19476;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30032:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19479;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "30078:21:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30070:29:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19478;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30070:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19481;
                        readonly mutability: "mutable";
                        readonly name: "_isLong";
                        readonly nameLocation: "30114:7:123";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30109:12:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 19480;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30109:4:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "29882:245:123";
                };
                readonly returnParameters: {
                    readonly id: 19493;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19484;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30151:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19483;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30151:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19486;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30160:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19485;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30160:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19488;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30169:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19487;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30169:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19490;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30178:6:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 19489;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30178:6:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19492;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19566;
                        readonly src: "30186:7:123";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19491;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30186:7:123";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "30150:44:123";
                };
                readonly scope: 19567;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "HyperdriveMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 18836;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "324:314:123";
                readonly text: "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [19567];
            readonly name: "HyperdriveMath";
            readonly nameLocation: "646:14:123";
            readonly scope: 19568;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 123;
};
//# sourceMappingURL=HyperdriveMath.d.ts.map