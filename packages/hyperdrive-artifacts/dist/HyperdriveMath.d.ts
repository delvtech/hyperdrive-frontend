export declare const HyperdriveMath: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e4e01be80aaa6138e8aaeb2cfbbe86d6e3c02a856c9939197209e629a5c66c5e64736f6c63430008140033";
        readonly sourceMap: "638:32299:125:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;638:32299:125;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e4e01be80aaa6138e8aaeb2cfbbe86d6e3c02a856c9939197209e629a5c66c5e64736f6c63430008140033";
        readonly sourceMap: "638:32299:125:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
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
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
        readonly id: 20191;
        readonly exportedSymbols: {
            readonly Errors: readonly [18667];
            readonly FixedPointMath: readonly [19442];
            readonly HyperdriveMath: readonly [20190];
            readonly IHyperdrive: readonly [11076];
            readonly ONE: readonly [18676];
            readonly SafeCast: readonly [22313];
            readonly YieldSpaceMath: readonly [23292];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "40:32898:125";
        readonly nodes: readonly [{
            readonly id: 19444;
            readonly nodeType: "PragmaDirective";
            readonly src: "40:23:125";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 19446;
            readonly nodeType: "ImportDirective";
            readonly src: "65:60:125";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20191;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19445;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "74:11:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19448;
            readonly nodeType: "ImportDirective";
            readonly src: "126:38:125";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Errors.sol";
            readonly file: "./Errors.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20191;
            readonly sourceUnit: 18668;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19447;
                    readonly name: "Errors";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18667;
                    readonly src: "135:6:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19451;
            readonly nodeType: "ImportDirective";
            readonly src: "165:59:125";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "./FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20191;
            readonly sourceUnit: 19443;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19449;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19442;
                    readonly src: "174:14:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 19450;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18676;
                    readonly src: "190:3:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19453;
            readonly nodeType: "ImportDirective";
            readonly src: "225:42:125";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "./SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20191;
            readonly sourceUnit: 22314;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19452;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 22313;
                    readonly src: "234:8:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19455;
            readonly nodeType: "ImportDirective";
            readonly src: "268:54:125";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/YieldSpaceMath.sol";
            readonly file: "./YieldSpaceMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20191;
            readonly sourceUnit: 23293;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19454;
                    readonly name: "YieldSpaceMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 23292;
                    readonly src: "277:14:125";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 20190;
            readonly nodeType: "ContractDefinition";
            readonly src: "638:32299:125";
            readonly nodes: readonly [{
                readonly id: 19459;
                readonly nodeType: "UsingForDirective";
                readonly src: "667:33:125";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 19457;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["673:14:125"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19442;
                    readonly src: "673:14:125";
                };
                readonly typeName: {
                    readonly id: 19458;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "692:7:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 19462;
                readonly nodeType: "UsingForDirective";
                readonly src: "705:32:125";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 19460;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["711:14:125"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19442;
                    readonly src: "711:14:125";
                };
                readonly typeName: {
                    readonly id: 19461;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "730:6:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
            }, {
                readonly id: 19465;
                readonly nodeType: "UsingForDirective";
                readonly src: "742:27:125";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 19463;
                    readonly name: "SafeCast";
                    readonly nameLocations: readonly ["748:8:125"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 22313;
                    readonly src: "748:8:125";
                };
                readonly typeName: {
                    readonly id: 19464;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "761:7:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 19534;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1405:1330:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19533;
                    readonly nodeType: "Block";
                    readonly src: "1530:1205:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19476];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19476;
                            readonly mutability: "mutable";
                            readonly name: "timeStretch";
                            readonly nameLocation: "1670:11:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19533;
                            readonly src: "1662:19:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19475;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1662:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19492;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 19489;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19487;
                                        readonly name: "_apr";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19468;
                                        readonly src: "1753:4:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "*";
                                    readonly rightExpression: {
                                        readonly hexValue: "313030";
                                        readonly id: 19488;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1760:3:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_100_by_1";
                                            readonly typeString: "int_const 100";
                                        };
                                        readonly value: "100";
                                    };
                                    readonly src: "1753:10:125";
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
                                            readonly id: 19484;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "1733:10:125";
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
                                            readonly id: 19483;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1725:7:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 19482;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1725:7:125";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 19485;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1725:19:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19486;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1745:7:125";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18722;
                                    readonly src: "1725:27:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19490;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1725:39:125";
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
                                        readonly id: 19479;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "1692:10:125";
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
                                        readonly id: 19478;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "1684:7:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_uint256_$";
                                            readonly typeString: "type(uint256)";
                                        };
                                        readonly typeName: {
                                            readonly id: 19477;
                                            readonly name: "uint256";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "1684:7:125";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 19480;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1684:19:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19481;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1704:7:125";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18740;
                                readonly src: "1684:27:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19491;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1684:90:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1662:112:125";
                    }, {
                        readonly expression: {
                            readonly id: 19498;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19493;
                                readonly name: "timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19476;
                                readonly src: "1784:11:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19496;
                                    readonly name: "timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19476;
                                    readonly src: "1810:11:125";
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
                                        readonly id: 19494;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18676;
                                        readonly src: "1798:3:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19495;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1802:7:125";
                                    readonly memberName: "divDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18740;
                                    readonly src: "1798:11:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19497;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1798:24:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1784:38:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19499;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1784:38:125";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19530;
                                readonly name: "timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19476;
                                readonly src: "2716:11:125";
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
                                                                    readonly id: 19520;
                                                                    readonly isConstant: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly leftExpression: {
                                                                        readonly id: 19518;
                                                                        readonly name: "ONE";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 18676;
                                                                        readonly src: "2664:3:125";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly nodeType: "BinaryOperation";
                                                                    readonly operator: "+";
                                                                    readonly rightExpression: {
                                                                        readonly id: 19519;
                                                                        readonly name: "_apr";
                                                                        readonly nodeType: "Identifier";
                                                                        readonly overloadedDeclarations: readonly [];
                                                                        readonly referencedDeclaration: 19468;
                                                                        readonly src: "2670:4:125";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    };
                                                                    readonly src: "2664:10:125";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                }];
                                                                readonly id: 19521;
                                                                readonly isConstant: false;
                                                                readonly isInlineArray: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "TupleExpression";
                                                                readonly src: "2663:12:125";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_uint256";
                                                                    readonly typeString: "uint256";
                                                                };
                                                            };
                                                            readonly id: 19522;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "2676:8:125";
                                                            readonly memberName: "toInt256";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 22312;
                                                            readonly src: "2663:21:125";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                                readonly typeString: "function (uint256) pure returns (int256)";
                                                            };
                                                        };
                                                        readonly id: 19523;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "2663:23:125";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_int256";
                                                            readonly typeString: "int256";
                                                        };
                                                    };
                                                    readonly id: 19524;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "2687:2:125";
                                                    readonly memberName: "ln";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 19266;
                                                    readonly src: "2663:26:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                        readonly typeString: "function (int256) pure returns (int256)";
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
                                                readonly src: "2663:28:125";
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
                                                readonly id: 19517;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2655:7:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 19516;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2655:7:125";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 19526;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2655:37:125";
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
                                                                        readonly id: 19508;
                                                                        readonly isConstant: false;
                                                                        readonly isLValue: false;
                                                                        readonly isPure: false;
                                                                        readonly lValueRequested: false;
                                                                        readonly leftExpression: {
                                                                            readonly id: 19502;
                                                                            readonly name: "ONE";
                                                                            readonly nodeType: "Identifier";
                                                                            readonly overloadedDeclarations: readonly [];
                                                                            readonly referencedDeclaration: 18676;
                                                                            readonly src: "2511:3:125";
                                                                            readonly typeDescriptions: {
                                                                                readonly typeIdentifier: "t_uint256";
                                                                                readonly typeString: "uint256";
                                                                            };
                                                                        };
                                                                        readonly nodeType: "BinaryOperation";
                                                                        readonly operator: "+";
                                                                        readonly rightExpression: {
                                                                            readonly arguments: readonly [{
                                                                                readonly id: 19505;
                                                                                readonly name: "_positionDuration";
                                                                                readonly nodeType: "Identifier";
                                                                                readonly overloadedDeclarations: readonly [];
                                                                                readonly referencedDeclaration: 19470;
                                                                                readonly src: "2533:17:125";
                                                                                readonly typeDescriptions: {
                                                                                    readonly typeIdentifier: "t_uint256";
                                                                                    readonly typeString: "uint256";
                                                                                };
                                                                            }, {
                                                                                readonly hexValue: "333635";
                                                                                readonly id: 19506;
                                                                                readonly isConstant: false;
                                                                                readonly isLValue: false;
                                                                                readonly isPure: true;
                                                                                readonly kind: "number";
                                                                                readonly lValueRequested: false;
                                                                                readonly nodeType: "Literal";
                                                                                readonly src: "2552:8:125";
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
                                                                                    readonly id: 19503;
                                                                                    readonly name: "_apr";
                                                                                    readonly nodeType: "Identifier";
                                                                                    readonly overloadedDeclarations: readonly [];
                                                                                    readonly referencedDeclaration: 19468;
                                                                                    readonly src: "2517:4:125";
                                                                                    readonly typeDescriptions: {
                                                                                        readonly typeIdentifier: "t_uint256";
                                                                                        readonly typeString: "uint256";
                                                                                    };
                                                                                };
                                                                                readonly id: 19504;
                                                                                readonly isConstant: false;
                                                                                readonly isLValue: false;
                                                                                readonly isPure: false;
                                                                                readonly lValueRequested: false;
                                                                                readonly memberLocation: "2522:10:125";
                                                                                readonly memberName: "mulDivDown";
                                                                                readonly nodeType: "MemberAccess";
                                                                                readonly referencedDeclaration: 18704;
                                                                                readonly src: "2517:15:125";
                                                                                readonly typeDescriptions: {
                                                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                                                                };
                                                                            };
                                                                            readonly id: 19507;
                                                                            readonly isConstant: false;
                                                                            readonly isLValue: false;
                                                                            readonly isPure: false;
                                                                            readonly kind: "functionCall";
                                                                            readonly lValueRequested: false;
                                                                            readonly nameLocations: readonly [];
                                                                            readonly names: readonly [];
                                                                            readonly nodeType: "FunctionCall";
                                                                            readonly src: "2517:44:125";
                                                                            readonly tryCall: false;
                                                                            readonly typeDescriptions: {
                                                                                readonly typeIdentifier: "t_uint256";
                                                                                readonly typeString: "uint256";
                                                                            };
                                                                        };
                                                                        readonly src: "2511:50:125";
                                                                        readonly typeDescriptions: {
                                                                            readonly typeIdentifier: "t_uint256";
                                                                            readonly typeString: "uint256";
                                                                        };
                                                                    }];
                                                                    readonly id: 19509;
                                                                    readonly isConstant: false;
                                                                    readonly isInlineArray: false;
                                                                    readonly isLValue: false;
                                                                    readonly isPure: false;
                                                                    readonly lValueRequested: false;
                                                                    readonly nodeType: "TupleExpression";
                                                                    readonly src: "2510:52:125";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_uint256";
                                                                        readonly typeString: "uint256";
                                                                    };
                                                                };
                                                                readonly id: 19510;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "2588:8:125";
                                                                readonly memberName: "toInt256";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 22312;
                                                                readonly src: "2510:86:125";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                                };
                                                            };
                                                            readonly id: 19511;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "2510:88:125";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_int256";
                                                                readonly typeString: "int256";
                                                            };
                                                        };
                                                        readonly id: 19512;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "2624:2:125";
                                                        readonly memberName: "ln";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 19266;
                                                        readonly src: "2510:116:125";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$";
                                                            readonly typeString: "function (int256) pure returns (int256)";
                                                        };
                                                    };
                                                    readonly id: 19513;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "2510:118:125";
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
                                                    readonly id: 19501;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "2481:7:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                                        readonly typeString: "type(uint256)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 19500;
                                                        readonly name: "uint256";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "2481:7:125";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 19514;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "2481:165:125";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19515;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2647:7:125";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18740;
                                            readonly src: "2481:173:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19527;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2481:212:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 19528;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "2463:244:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19529;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2708:7:125";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18722;
                                readonly src: "2463:252:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19531;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2463:265:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19474;
                        readonly id: 19532;
                        readonly nodeType: "Return";
                        readonly src: "2444:284:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19466;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "775:625:125";
                    readonly text: "@dev Calculates the time stretch parameter for the YieldSpace curve.\n      This parameter modifies the curvature in order to support a larger\n      or smaller range of APRs. The lower the time stretch, the flatter\n      the curve will be and the narrower the range of feasible APRs. The\n      higher the time stretch, the higher the curvature will be and the\n      wider the range of feasible APRs.\n @param _apr The target APR to use when calculating the time stretch.\n @param _positionDuration The position duration in seconds.\n @return The time stretch parameter.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeStretch";
                readonly nameLocation: "1414:20:125";
                readonly parameters: {
                    readonly id: 19471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19468;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "1452:4:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19534;
                        readonly src: "1444:12:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19467;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1444:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19470;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "1474:17:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19534;
                        readonly src: "1466:25:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19469;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1466:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1434:63:125";
                };
                readonly returnParameters: {
                    readonly id: 19474;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19473;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19534;
                        readonly src: "1521:7:125";
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
                            readonly src: "1521:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1520:9:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19560;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3330:531:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19559;
                    readonly nodeType: "Block";
                    readonly src: "3549:312:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19557;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19548;
                                readonly name: "spotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19546;
                                readonly src: "3724:9:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19555;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19543;
                                    readonly src: "3841:12:125";
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
                                            readonly id: 19551;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19537;
                                            readonly src: "3784:23:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19552;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19539;
                                            readonly src: "3809:13:125";
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
                                                readonly id: 19549;
                                                readonly name: "_initialVaultSharePrice";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19541;
                                                readonly src: "3736:23:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19550;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3773:10:125";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18704;
                                            readonly src: "3736:47:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19553;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3736:87:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19554;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3837:3:125";
                                    readonly memberName: "pow";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18847;
                                    readonly src: "3736:104:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19556;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3736:118:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3724:130:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19558;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3724:130:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19535;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2741:584:125";
                    readonly text: "@dev Calculates the spot price of bonds in terms of base. This\n      calculation underestimates the pool's spot price.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The initial vault share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotPrice";
                readonly nameLocation: "3339:18:125";
                readonly parameters: {
                    readonly id: 19544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19537;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "3375:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19560;
                        readonly src: "3367:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19536;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3367:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19539;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "3416:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19560;
                        readonly src: "3408:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19538;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3408:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19541;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "3447:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19560;
                        readonly src: "3439:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19540;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3439:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19543;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "3488:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19560;
                        readonly src: "3480:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19542;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3480:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3357:149:125";
                };
                readonly returnParameters: {
                    readonly id: 19547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19546;
                        readonly mutability: "mutable";
                        readonly name: "spotPrice";
                        readonly nameLocation: "3538:9:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19560;
                        readonly src: "3530:17:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19545;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3530:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3529:19:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19598;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4497:945:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19597;
                    readonly nodeType: "Block";
                    readonly src: "4743:699:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19577];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19577;
                            readonly mutability: "mutable";
                            readonly name: "spotPrice";
                            readonly nameLocation: "5067:9:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19597;
                            readonly src: "5059:17:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19576;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5059:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19584;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19579;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19563;
                                readonly src: "5111:23:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19580;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19565;
                                readonly src: "5148:13:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19581;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19567;
                                readonly src: "5175:23:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19582;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19571;
                                readonly src: "5212:12:125";
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
                                readonly id: 19578;
                                readonly name: "calculateSpotPrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19560;
                                readonly src: "5079:18:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19583;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5079:155:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5059:175:125";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 19592;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19569;
                                    readonly src: "5393:17:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly hexValue: "333635";
                                    readonly id: 19593;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5412:8:125";
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
                                        readonly id: 19590;
                                        readonly name: "spotPrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19577;
                                        readonly src: "5374:9:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19591;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5384:8:125";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18754;
                                    readonly src: "5374:18:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19594;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5374:47:125";
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
                                        readonly id: 19587;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 19585;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18676;
                                            readonly src: "5264:3:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19586;
                                            readonly name: "spotPrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19577;
                                            readonly src: "5270:9:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "5264:15:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 19588;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5263:17:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19589;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5281:7:125";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18740;
                                readonly src: "5263:25:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19595;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5263:172:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19575;
                        readonly id: 19596;
                        readonly nodeType: "Return";
                        readonly src: "5244:191:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19561;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3867:625:125";
                    readonly text: "@dev Calculates the spot APR of the pool. This calculation\n      underestimates the pool's spot APR.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateSpotAPR";
                readonly nameLocation: "4506:16:125";
                readonly parameters: {
                    readonly id: 19572;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19563;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "4540:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4532:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19562;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4532:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19565;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "4581:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4573:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19564;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4573:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19567;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "4612:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4604:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19566;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4604:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19569;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "4653:17:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4645:25:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19568;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4645:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19571;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "4688:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4680:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4680:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4522:184:125";
                };
                readonly returnParameters: {
                    readonly id: 19575;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19574;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "4738:3:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19598;
                        readonly src: "4730:11:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19573;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4730:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4729:13:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19633;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6050:574:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19632;
                    readonly nodeType: "Block";
                    readonly src: "6217:407:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19609];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19609;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6232:7:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19632;
                            readonly src: "6227:12:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 19608;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6227:4:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19610;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6227:12:125";
                    }, {
                        readonly expression: {
                            readonly id: 19618;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 19611;
                                    readonly name: "effectiveShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19606;
                                    readonly src: "6250:22:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19612;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19609;
                                    readonly src: "6274:7:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 19613;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "6249:33:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19615;
                                    readonly name: "_shareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19601;
                                    readonly src: "6334:14:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19616;
                                    readonly name: "_shareAdjustment";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19603;
                                    readonly src: "6362:16:125";
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
                                    readonly id: 19614;
                                    readonly name: "calculateEffectiveShareReservesSafe";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19670;
                                    readonly src: "6285:35:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_bool_$";
                                        readonly typeString: "function (uint256,int256) pure returns (uint256,bool)";
                                    };
                                };
                                readonly id: 19617;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6285:103:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                    readonly typeString: "tuple(uint256,bool)";
                                };
                            };
                            readonly src: "6249:139:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 19619;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6249:139:125";
                    }, {
                        readonly condition: {
                            readonly id: 19621;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6402:8:125";
                            readonly subExpression: {
                                readonly id: 19620;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19609;
                                readonly src: "6403:7:125";
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
                        readonly id: 19631;
                        readonly nodeType: "IfStatement";
                        readonly src: "6398:220:125";
                        readonly trueBody: {
                            readonly id: 19630;
                            readonly nodeType: "Block";
                            readonly src: "6412:206:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly expression: {
                                                readonly id: 19625;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 11076;
                                                readonly src: "6482:11:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 19626;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "6515:27:125";
                                            readonly memberName: "InsufficientLiquidityReason";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10929;
                                            readonly src: "6482:60:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_enum$_InsufficientLiquidityReason_$10929_$";
                                                readonly typeString: "type(enum IHyperdrive.InsufficientLiquidityReason)";
                                            };
                                        };
                                        readonly id: 19627;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6564:29:125";
                                        readonly memberName: "InvalidEffectiveShareReserves";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10926;
                                        readonly src: "6482:111:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_enum$_InsufficientLiquidityReason_$10929";
                                            readonly typeString: "enum IHyperdrive.InsufficientLiquidityReason";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_enum$_InsufficientLiquidityReason_$10929";
                                            readonly typeString: "enum IHyperdrive.InsufficientLiquidityReason";
                                        }];
                                        readonly expression: {
                                            readonly id: 19622;
                                            readonly name: "Errors";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18667;
                                            readonly src: "6426:6:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_Errors_$18667_$";
                                                readonly typeString: "type(library Errors)";
                                            };
                                        };
                                        readonly id: 19624;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6433:31:125";
                                        readonly memberName: "throwInsufficientLiquidityError";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18666;
                                        readonly src: "6426:38:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10929_$returns$__$";
                                            readonly typeString: "function (enum IHyperdrive.InsufficientLiquidityReason) pure";
                                        };
                                    };
                                    readonly id: 19628;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6426:181:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 19629;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "6426:181:125";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 19599;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5448:597:125";
                    readonly text: "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return effectiveShareReserves The effective share reserves.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateEffectiveShareReserves";
                readonly nameLocation: "6059:31:125";
                readonly parameters: {
                    readonly id: 19604;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19601;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "6108:14:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19633;
                        readonly src: "6100:22:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19600;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6100:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19603;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "6139:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19633;
                        readonly src: "6132:23:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 19602;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6132:6:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6090:71:125";
                };
                readonly returnParameters: {
                    readonly id: 19607;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19606;
                        readonly mutability: "mutable";
                        readonly name: "effectiveShareReserves";
                        readonly nameLocation: "6193:22:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19633;
                        readonly src: "6185:30:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19605;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6185:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6184:32:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19670;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7273:398:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19669;
                    readonly nodeType: "Block";
                    readonly src: "7427:244:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19646];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19646;
                            readonly mutability: "mutable";
                            readonly name: "effectiveShareReserves";
                            readonly nameLocation: "7444:22:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19669;
                            readonly src: "7437:29:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 19645;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7437:6:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19652;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 19651;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly expression: {
                                        readonly id: 19647;
                                        readonly name: "_shareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19636;
                                        readonly src: "7469:14:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19648;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7484:8:125";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 22312;
                                    readonly src: "7469:23:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 19649;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7469:25:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly id: 19650;
                                readonly name: "_shareAdjustment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19638;
                                readonly src: "7509:16:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "7469:56:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "7437:88:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 19655;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19653;
                                readonly name: "effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19646;
                                readonly src: "7539:22:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19654;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7564:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "7539:26:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19661;
                        readonly nodeType: "IfStatement";
                        readonly src: "7535:74:125";
                        readonly trueBody: {
                            readonly id: 19660;
                            readonly nodeType: "Block";
                            readonly src: "7567:42:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly hexValue: "30";
                                        readonly id: 19656;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7589:1:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    }, {
                                        readonly hexValue: "66616c7365";
                                        readonly id: 19657;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "bool";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "7592:5:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly value: "false";
                                    }];
                                    readonly id: 19658;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7588:10:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_rational_0_by_1_$_t_bool_$";
                                        readonly typeString: "tuple(int_const 0,bool)";
                                    };
                                };
                                readonly functionReturnParameters: 19644;
                                readonly id: 19659;
                                readonly nodeType: "Return";
                                readonly src: "7581:17:125";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 19664;
                                    readonly name: "effectiveShareReserves";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19646;
                                    readonly src: "7634:22:125";
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
                                    readonly id: 19663;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "7626:7:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 19662;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "7626:7:125";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 19665;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7626:31:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly hexValue: "74727565";
                                readonly id: 19666;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7659:4:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            }];
                            readonly id: 19667;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "7625:39:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_bool_$";
                                readonly typeString: "tuple(uint256,bool)";
                            };
                        };
                        readonly functionReturnParameters: 19644;
                        readonly id: 19668;
                        readonly nodeType: "Return";
                        readonly src: "7618:46:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19634;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6630:638:125";
                    readonly text: "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves.\n @return A flag indicating if the calculation succeeded.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateEffectiveShareReservesSafe";
                readonly nameLocation: "7282:35:125";
                readonly parameters: {
                    readonly id: 19639;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19636;
                        readonly mutability: "mutable";
                        readonly name: "_shareReserves";
                        readonly nameLocation: "7335:14:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19670;
                        readonly src: "7327:22:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19635;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7327:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19638;
                        readonly mutability: "mutable";
                        readonly name: "_shareAdjustment";
                        readonly nameLocation: "7366:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19670;
                        readonly src: "7359:23:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 19637;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7359:6:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7317:71:125";
                };
                readonly returnParameters: {
                    readonly id: 19644;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19641;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19670;
                        readonly src: "7412:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19640;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7412:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19643;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19670;
                        readonly src: "7421:4:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 19642;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7421:4:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7411:15:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19737;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8756:1272:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19736;
                    readonly nodeType: "Block";
                    readonly src: "9014:1014:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19687];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19687;
                            readonly mutability: "mutable";
                            readonly name: "t";
                            readonly nameLocation: "9226:1:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19736;
                            readonly src: "9218:9:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19686;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9218:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19692;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "333635";
                                readonly id: 19690;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9256:8:125";
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
                                    readonly id: 19688;
                                    readonly name: "_positionDuration";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19679;
                                    readonly src: "9230:17:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19689;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9248:7:125";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18740;
                                readonly src: "9230:25:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19691;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9230:35:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9218:47:125";
                    }, {
                        readonly assignments: readonly [19694];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19694;
                            readonly mutability: "mutable";
                            readonly name: "inner";
                            readonly nameLocation: "9413:5:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19736;
                            readonly src: "9405:13:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19693;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9405:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19701;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19700;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19695;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18676;
                                readonly src: "9421:3:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 19698;
                                    readonly name: "t";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19687;
                                    readonly src: "9440:1:125";
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
                                        readonly id: 19696;
                                        readonly name: "_apr";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19677;
                                        readonly src: "9427:4:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19697;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9432:7:125";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18722;
                                    readonly src: "9427:12:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19699;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9427:15:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9421:21:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "9405:37:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19704;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19702;
                                readonly name: "inner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19694;
                                readonly src: "9456:5:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">=";
                            readonly rightExpression: {
                                readonly id: 19703;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18676;
                                readonly src: "9465:3:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9456:12:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 19726;
                            readonly nodeType: "Block";
                            readonly src: "9616:136:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19724;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19716;
                                        readonly name: "inner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19694;
                                        readonly src: "9699:5:125";
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
                                                readonly id: 19721;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19681;
                                                readonly src: "9727:12:125";
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
                                                    readonly id: 19719;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18676;
                                                    readonly src: "9717:3:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19720;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9721:5:125";
                                                readonly memberName: "divUp";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18790;
                                                readonly src: "9717:9:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19722;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9717:23:125";
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
                                                readonly id: 19717;
                                                readonly name: "inner";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19694;
                                                readonly src: "9707:5:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19718;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9713:3:125";
                                            readonly memberName: "pow";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18847;
                                            readonly src: "9707:9:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19723;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9707:34:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9699:42:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19725;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9699:42:125";
                            }];
                        };
                        readonly id: 19727;
                        readonly nodeType: "IfStatement";
                        readonly src: "9452:300:125";
                        readonly trueBody: {
                            readonly id: 19715;
                            readonly nodeType: "Block";
                            readonly src: "9470:140:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19713;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19705;
                                        readonly name: "inner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19694;
                                        readonly src: "9555:5:125";
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
                                                readonly id: 19710;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19681;
                                                readonly src: "9585:12:125";
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
                                                    readonly id: 19708;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18676;
                                                    readonly src: "9573:3:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19709;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "9577:7:125";
                                                readonly memberName: "divDown";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18740;
                                                readonly src: "9573:11:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19711;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "9573:25:125";
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
                                                readonly id: 19706;
                                                readonly name: "inner";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19694;
                                                readonly src: "9563:5:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19707;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "9569:3:125";
                                            readonly memberName: "pow";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18847;
                                            readonly src: "9563:9:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19712;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "9563:36:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "9555:44:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19714;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "9555:44:125";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19733;
                                readonly name: "inner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19694;
                                readonly src: "10002:5:125";
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
                                        readonly id: 19730;
                                        readonly name: "_effectiveShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19673;
                                        readonly src: "9952:23:125";
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
                                            readonly id: 19728;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19675;
                                            readonly src: "9920:23:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19729;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "9944:7:125";
                                        readonly memberName: "mulDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18722;
                                        readonly src: "9920:31:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19731;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9920:56:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19732;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9977:7:125";
                                readonly memberName: "mulDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18722;
                                readonly src: "9920:64:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19734;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9920:101:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19685;
                        readonly id: 19735;
                        readonly nodeType: "Return";
                        readonly src: "9901:120:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19671;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7677:1074:125";
                    readonly text: "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares. This calculation underestimates the pool's\n      initial bond reserves.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateInitialBondReserves";
                readonly nameLocation: "8765:28:125";
                readonly parameters: {
                    readonly id: 19682;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19673;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "8811:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8803:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19672;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8803:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19675;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "8852:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8844:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19674;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8844:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19677;
                        readonly mutability: "mutable";
                        readonly name: "_apr";
                        readonly nameLocation: "8893:4:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8885:12:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19676;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8885:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19679;
                        readonly mutability: "mutable";
                        readonly name: "_positionDuration";
                        readonly nameLocation: "8915:17:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8907:25:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19678;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8907:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19681;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "8950:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8942:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19680;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8942:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8793:175:125";
                };
                readonly returnParameters: {
                    readonly id: 19685;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19684;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "9000:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19737;
                        readonly src: "8992:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19683;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8992:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8991:22:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19789;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11517:1660:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19788;
                    readonly nodeType: "Block";
                    readonly src: "11799:1378:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19756];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19756;
                            readonly mutability: "mutable";
                            readonly name: "totalValue";
                            readonly nameLocation: "12226:10:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19788;
                            readonly src: "12218:18:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19755;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12218:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19765;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19763;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19748;
                                readonly src: "12337:16:125";
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
                                        readonly id: 19759;
                                        readonly name: "_closeVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19746;
                                        readonly src: "12273:21:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 19760;
                                        readonly name: "_openVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19744;
                                        readonly src: "12296:20:125";
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
                                            readonly id: 19757;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19740;
                                            readonly src: "12239:11:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19758;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12264:8:125";
                                        readonly memberName: "mulDivUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18754;
                                        readonly src: "12239:33:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19761;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "12239:78:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19762;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12331:5:125";
                                readonly memberName: "divUp";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18790;
                                readonly src: "12239:97:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19764;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12239:115:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12218:136:125";
                    }, {
                        readonly expression: {
                            readonly id: 19772;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19766;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19756;
                                readonly src: "12588:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19769;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19750;
                                    readonly src: "12623:8:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19770;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19748;
                                    readonly src: "12633:16:125";
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
                                        readonly id: 19767;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19740;
                                        readonly src: "12602:11:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19768;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12614:8:125";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18754;
                                    readonly src: "12602:20:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19771;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12602:48:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12588:62:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19773;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12588:62:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19776;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19774;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19756;
                                readonly src: "12953:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 19775;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19742;
                                readonly src: "12966:12:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "12953:25:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19785;
                        readonly nodeType: "IfStatement";
                        readonly src: "12949:191:125";
                        readonly trueBody: {
                            readonly id: 19784;
                            readonly nodeType: "Block";
                            readonly src: "12980:160:125";
                            readonly statements: readonly [{
                                readonly id: 19783;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "13046:84:125";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 19781;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 19777;
                                            readonly name: "shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19753;
                                            readonly src: "13074:13:125";
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
                                            readonly id: 19780;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19778;
                                                readonly name: "totalValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19756;
                                                readonly src: "13090:10:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19779;
                                                readonly name: "_shareAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19742;
                                                readonly src: "13103:12:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "13090:25:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "13074:41:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19782;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "13074:41:125";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 19786;
                            readonly name: "shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19753;
                            readonly src: "13157:13:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19754;
                        readonly id: 19787;
                        readonly nodeType: "Return";
                        readonly src: "13150:20:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19738;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10034:1478:125";
                    readonly text: "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation overestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsUp";
                readonly nameLocation: "11526:24:125";
                readonly parameters: {
                    readonly id: 19751;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19740;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11568:11:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11560:19:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19739;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11560:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19742;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "11597:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11589:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19741;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11589:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19744;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "11627:20:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11619:28:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19743;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11619:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19746;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "11665:21:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11657:29:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19745;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11657:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19748;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "11704:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11696:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19747;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11696:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19750;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "11738:8:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11730:16:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19749;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11730:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11550:202:125";
                };
                readonly returnParameters: {
                    readonly id: 19754;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19753;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "11784:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19789;
                        readonly src: "11776:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19752;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11776:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11775:23:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19841;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14667:1674:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19840;
                    readonly nodeType: "Block";
                    readonly src: "14951:1390:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [19808];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 19808;
                            readonly mutability: "mutable";
                            readonly name: "totalValue";
                            readonly nameLocation: "15381:10:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 19840;
                            readonly src: "15373:18:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 19807;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "15373:7:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 19817;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 19815;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19800;
                                readonly src: "15496:16:125";
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
                                        readonly id: 19811;
                                        readonly name: "_closeVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19798;
                                        readonly src: "15430:21:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 19812;
                                        readonly name: "_openVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19796;
                                        readonly src: "15453:20:125";
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
                                            readonly id: 19809;
                                            readonly name: "_bondAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19792;
                                            readonly src: "15394:11:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19810;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "15419:10:125";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18704;
                                        readonly src: "15394:35:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19813;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "15394:80:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "15488:7:125";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18740;
                                readonly src: "15394:101:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19816;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15394:119:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "15373:140:125";
                    }, {
                        readonly expression: {
                            readonly id: 19824;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19818;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19808;
                                readonly src: "15750:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "+=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 19821;
                                    readonly name: "_flatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19802;
                                    readonly src: "15787:8:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19822;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19800;
                                    readonly src: "15797:16:125";
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
                                        readonly id: 19819;
                                        readonly name: "_bondAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19792;
                                        readonly src: "15764:11:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19820;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15776:10:125";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18704;
                                    readonly src: "15764:22:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19823;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15764:50:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "15750:64:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19825;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15750:64:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19828;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19826;
                                readonly name: "totalValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19808;
                                readonly src: "16117:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 19827;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19794;
                                readonly src: "16130:12:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "16117:25:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19837;
                        readonly nodeType: "IfStatement";
                        readonly src: "16113:191:125";
                        readonly trueBody: {
                            readonly id: 19836;
                            readonly nodeType: "Block";
                            readonly src: "16144:160:125";
                            readonly statements: readonly [{
                                readonly id: 19835;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "16210:84:125";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 19833;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftHandSide: {
                                            readonly id: 19829;
                                            readonly name: "shareProceeds";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19805;
                                            readonly src: "16238:13:125";
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
                                            readonly id: 19832;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19830;
                                                readonly name: "totalValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19808;
                                                readonly src: "16254:10:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19831;
                                                readonly name: "_shareAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19794;
                                                readonly src: "16267:12:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "16254:25:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "16238:41:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19834;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "16238:41:125";
                                }];
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 19838;
                            readonly name: "shareProceeds";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 19805;
                            readonly src: "16321:13:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19806;
                        readonly id: 19839;
                        readonly nodeType: "Return";
                        readonly src: "16314:20:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19790;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13183:1479:125";
                    readonly text: "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation underestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateShortProceedsDown";
                readonly nameLocation: "14676:26:125";
                readonly parameters: {
                    readonly id: 19803;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19792;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "14720:11:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14712:19:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19791;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14712:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19794;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "14749:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14741:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19793;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14741:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19796;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "14779:20:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14771:28:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19795;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14771:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19798;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "14817:21:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14809:29:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19797;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14809:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19800;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "14856:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14848:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19799;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14848:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19802;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "14890:8:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14882:16:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19801;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14882:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14702:202:125";
                };
                readonly returnParameters: {
                    readonly id: 19806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19805;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "14936:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19841;
                        readonly src: "14928:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19804;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14928:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14927:23:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19877;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17063:541:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19876;
                    readonly nodeType: "Block";
                    readonly src: "17229:375:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 19873;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 19858;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18676;
                                    readonly src: "17437:3:125";
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
                                        readonly id: 19871;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 19869;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18676;
                                            readonly src: "17547:3:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19870;
                                            readonly name: "_flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19848;
                                            readonly src: "17553:8:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "17547:14:125";
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
                                                readonly id: 19866;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 19863;
                                                        readonly name: "_startingSpotPrice";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 19844;
                                                        readonly src: "17489:18:125";
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
                                                            readonly id: 19861;
                                                            readonly name: "ONE";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 18676;
                                                            readonly src: "17479:3:125";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_uint256";
                                                                readonly typeString: "uint256";
                                                            };
                                                        };
                                                        readonly id: 19862;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "17483:5:125";
                                                        readonly memberName: "divUp";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly referencedDeclaration: 18790;
                                                        readonly src: "17479:9:125";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                        };
                                                    };
                                                    readonly id: 19864;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "17479:29:125";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "-";
                                                readonly rightExpression: {
                                                    readonly id: 19865;
                                                    readonly name: "ONE";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18676;
                                                    readonly src: "17511:3:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly src: "17479:35:125";
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
                                                    readonly id: 19859;
                                                    readonly name: "_curveFee";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 19846;
                                                    readonly src: "17463:9:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 19860;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "17473:5:125";
                                                readonly memberName: "mulUp";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 18772;
                                                readonly src: "17463:15:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                                };
                                            };
                                            readonly id: 19867;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "17463:52:125";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 19868;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17516:5:125";
                                        readonly memberName: "mulUp";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18772;
                                        readonly src: "17463:58:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 19872;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17463:120:125";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "17437:146:125";
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
                                        readonly id: 19855;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 19853;
                                            readonly name: "ONE";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18676;
                                            readonly src: "17328:3:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 19854;
                                            readonly name: "_flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19848;
                                            readonly src: "17334:8:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "17328:14:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 19856;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "17327:16:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19857;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "17344:7:125";
                                readonly memberName: "divDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18740;
                                readonly src: "17327:24:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19874;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17327:270:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19852;
                        readonly id: 19875;
                        readonly nodeType: "Return";
                        readonly src: "17308:289:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19842;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16347:711:125";
                    readonly text: "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = (1 - phi_f) / (1 + phi_c * (1 / p_0 - 1) * (1 - phi_f))\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @param _flatFee The flat fee.\n @return The maximum spot price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLongMaxSpotPrice";
                readonly nameLocation: "17072:29:125";
                readonly parameters: {
                    readonly id: 19849;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19844;
                        readonly mutability: "mutable";
                        readonly name: "_startingSpotPrice";
                        readonly nameLocation: "17119:18:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19877;
                        readonly src: "17111:26:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19843;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17111:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19846;
                        readonly mutability: "mutable";
                        readonly name: "_curveFee";
                        readonly nameLocation: "17155:9:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19877;
                        readonly src: "17147:17:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19845;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17147:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19848;
                        readonly mutability: "mutable";
                        readonly name: "_flatFee";
                        readonly nameLocation: "17182:8:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19877;
                        readonly src: "17174:16:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19847;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17174:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17101:95:125";
                };
                readonly returnParameters: {
                    readonly id: 19852;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19851;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19877;
                        readonly src: "17220:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19850;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17220:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17219:9:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19897;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18256:284:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19896;
                    readonly nodeType: "Block";
                    readonly src: "18398:142:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19894;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19887;
                                readonly name: "ONE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18676;
                                readonly src: "18486:3:125";
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
                                    readonly id: 19892;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19890;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18676;
                                        readonly src: "18508:3:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 19891;
                                        readonly name: "_startingSpotPrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19880;
                                        readonly src: "18514:18:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "18508:24:125";
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
                                        readonly id: 19888;
                                        readonly name: "_curveFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19882;
                                        readonly src: "18492:9:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19889;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "18502:5:125";
                                    readonly memberName: "mulUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18772;
                                    readonly src: "18492:15:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19893;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "18492:41:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "18486:47:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19886;
                        readonly id: 19895;
                        readonly nodeType: "Return";
                        readonly src: "18479:54:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19878;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17610:641:125";
                    readonly text: "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShortMaxSpotPrice";
                readonly nameLocation: "18265:31:125";
                readonly parameters: {
                    readonly id: 19883;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19880;
                        readonly mutability: "mutable";
                        readonly name: "_startingSpotPrice";
                        readonly nameLocation: "18314:18:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19897;
                        readonly src: "18306:26:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19879;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18306:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19882;
                        readonly mutability: "mutable";
                        readonly name: "_curveFee";
                        readonly nameLocation: "18350:9:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19897;
                        readonly src: "18342:17:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19881;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18342:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18296:69:125";
                };
                readonly returnParameters: {
                    readonly id: 19886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19885;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19897;
                        readonly src: "18389:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19884;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18389:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18388:9:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19928;
                readonly nodeType: "FunctionDefinition";
                readonly src: "19247:892:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19927;
                    readonly nodeType: "Block";
                    readonly src: "19519:620:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 19917;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19900;
                                readonly src: "19714:23:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19918;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19902;
                                readonly src: "19755:13:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19919;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19904;
                                readonly src: "19786:12:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 19922;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 19920;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18676;
                                    readonly src: "20025:3:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 19921;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19906;
                                    readonly src: "20031:12:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "20025:18:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19923;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19908;
                                readonly src: "20061:16:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 19924;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19910;
                                readonly src: "20095:23:125";
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
                                    readonly id: 19915;
                                    readonly name: "YieldSpaceMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23292;
                                    readonly src: "19647:14:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$23292_$";
                                        readonly typeString: "type(library YieldSpaceMath)";
                                    };
                                };
                                readonly id: 19916;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "19662:34:125";
                                readonly memberName: "calculateBondsOutGivenSharesInDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 22444;
                                readonly src: "19647:49:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 19925;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "19647:485:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 19914;
                        readonly id: 19926;
                        readonly nodeType: "Return";
                        readonly src: "19628:504:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19898;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "18546:696:125";
                    readonly text: "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "19256:17:125";
                readonly parameters: {
                    readonly id: 19911;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19900;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "19291:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19283:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19899;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19283:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19902;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "19332:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19324:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19901;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19324:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19904;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "19363:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19355:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19903;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19355:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19906;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "19393:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19385:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19905;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19385:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19908;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "19423:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19415:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19907;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19415:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19910;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "19457:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19449:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19909;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19449:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19273:213:125";
                };
                readonly returnParameters: {
                    readonly id: 19914;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19913;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19928;
                        readonly src: "19510:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19912;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "19510:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "19509:9:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 19993;
                readonly nodeType: "FunctionDefinition";
                readonly src: "21120:2126:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 19992;
                    readonly nodeType: "Block";
                    readonly src: "21569:1677:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 19960;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 19952;
                                readonly name: "shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19950;
                                readonly src: "22144:13:125";
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
                                    readonly id: 19957;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 19955;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18676;
                                        readonly src: "22194:3:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 19956;
                                        readonly name: "_normalizedTimeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19937;
                                        readonly src: "22200:24:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22194:30:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 19958;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 19941;
                                    readonly src: "22238:16:125";
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
                                        readonly id: 19953;
                                        readonly name: "_amountIn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19935;
                                        readonly src: "22160:9:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 19954;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "22170:10:125";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18704;
                                    readonly src: "22160:20:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 19959;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "22160:104:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "22144:120:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 19961;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "22144:120:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 19964;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 19962;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19937;
                                readonly src: "22278:24:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 19963;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "22305:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "22278:28:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 19991;
                        readonly nodeType: "IfStatement";
                        readonly src: "22274:966:125";
                        readonly trueBody: {
                            readonly id: 19990;
                            readonly nodeType: "Block";
                            readonly src: "22308:932:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 19970;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19965;
                                        readonly name: "bondCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19948;
                                        readonly src: "22497:14:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19968;
                                            readonly name: "_normalizedTimeRemaining";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19937;
                                            readonly src: "22532:24:125";
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
                                                readonly id: 19966;
                                                readonly name: "_amountIn";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19935;
                                                readonly src: "22514:9:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 19967;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "22524:7:125";
                                            readonly memberName: "mulDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18722;
                                            readonly src: "22514:17:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19969;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "22514:43:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22497:60:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19971;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "22497:60:125";
                            }, {
                                readonly expression: {
                                    readonly id: 19984;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19972;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19946;
                                        readonly src: "22678:15:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 19975;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19931;
                                            readonly src: "22763:23:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19976;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19933;
                                            readonly src: "22804:13:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19977;
                                            readonly name: "bondCurveDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19948;
                                            readonly src: "22835:14:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 19980;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 19978;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18676;
                                                readonly src: "23076:3:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 19979;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 19939;
                                                readonly src: "23082:12:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "23076:18:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19981;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19941;
                                            readonly src: "23112:16:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 19982;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 19943;
                                            readonly src: "23146:23:125";
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
                                                readonly id: 19973;
                                                readonly name: "YieldSpaceMath";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 23292;
                                                readonly src: "22696:14:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$23292_$";
                                                    readonly typeString: "type(library YieldSpaceMath)";
                                                };
                                            };
                                            readonly id: 19974;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "22711:34:125";
                                            readonly memberName: "calculateSharesOutGivenBondsInDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 22802;
                                            readonly src: "22696:49:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 19983;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "22696:487:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "22678:505:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19985;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "22678:505:125";
                            }, {
                                readonly expression: {
                                    readonly id: 19988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 19986;
                                        readonly name: "shareProceeds";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19950;
                                        readonly src: "23197:13:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 19987;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 19946;
                                        readonly src: "23214:15:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "23197:32:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 19989;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "23197:32:125";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 19929;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "20145:970:125";
                    readonly text: "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The vault share price when the pool was\n        deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseLong";
                readonly nameLocation: "21129:18:125";
                readonly parameters: {
                    readonly id: 19944;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19931;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "21165:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21157:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19930;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21157:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19933;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "21206:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21198:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19932;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21198:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19935;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "21237:9:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21229:17:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19934;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21229:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19937;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "21264:24:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21256:32:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19936;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21256:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19939;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "21306:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21298:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19938;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21298:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19941;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "21336:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21328:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19940;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21328:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19943;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "21370:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21362:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19942;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21362:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21147:252:125";
                };
                readonly returnParameters: {
                    readonly id: 19951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19946;
                        readonly mutability: "mutable";
                        readonly name: "shareCurveDelta";
                        readonly nameLocation: "21468:15:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21460:23:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19945;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21460:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19948;
                        readonly mutability: "mutable";
                        readonly name: "bondCurveDelta";
                        readonly nameLocation: "21505:14:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21497:22:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19947;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21497:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19950;
                        readonly mutability: "mutable";
                        readonly name: "shareProceeds";
                        readonly nameLocation: "21541:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 19993;
                        readonly src: "21533:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19949;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "21533:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "21446:118:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 20024;
                readonly nodeType: "FunctionDefinition";
                readonly src: "23940:866:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20023;
                    readonly nodeType: "Block";
                    readonly src: "24210:596:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 20013;
                                readonly name: "_effectiveShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19996;
                                readonly src: "24384:23:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20014;
                                readonly name: "_bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 19998;
                                readonly src: "24425:13:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20015;
                                readonly name: "_amountIn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20000;
                                readonly src: "24456:9:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 20018;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 20016;
                                    readonly name: "ONE";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18676;
                                    readonly src: "24692:3:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 20017;
                                    readonly name: "_timeStretch";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 20002;
                                    readonly src: "24698:12:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "24692:18:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20019;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20004;
                                readonly src: "24728:16:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20020;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20006;
                                readonly src: "24762:23:125";
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
                                    readonly id: 20011;
                                    readonly name: "YieldSpaceMath";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 23292;
                                    readonly src: "24317:14:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$23292_$";
                                        readonly typeString: "type(library YieldSpaceMath)";
                                    };
                                };
                                readonly id: 20012;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "24332:34:125";
                                readonly memberName: "calculateSharesOutGivenBondsInDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 22802;
                                readonly src: "24317:49:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 20021;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "24317:482:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 20010;
                        readonly id: 20022;
                        readonly nodeType: "Return";
                        readonly src: "24298:501:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 19994;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "23252:683:125";
                    readonly text: "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return The shares paid by the reserves in the trade.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenShort";
                readonly nameLocation: "23949:18:125";
                readonly parameters: {
                    readonly id: 20007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19996;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "23985:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "23977:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19995;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "23977:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19998;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "24026:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24018:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19997;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24018:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20000;
                        readonly mutability: "mutable";
                        readonly name: "_amountIn";
                        readonly nameLocation: "24057:9:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24049:17:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 19999;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24049:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20002;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "24084:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24076:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20001;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24076:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20004;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "24114:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24106:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20003;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24106:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20006;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "24148:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24140:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20005;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24140:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "23967:210:125";
                };
                readonly returnParameters: {
                    readonly id: 20010;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20009;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20024;
                        readonly src: "24201:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20008;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "24201:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "24200:9:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 20089;
                readonly nodeType: "FunctionDefinition";
                readonly src: "25764:2130:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20088;
                    readonly nodeType: "Block";
                    readonly src: "26214:1680:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 20056;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 20048;
                                readonly name: "sharePayment";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20046;
                                readonly src: "26876:12:125";
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
                                    readonly id: 20053;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 20051;
                                        readonly name: "ONE";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18676;
                                        readonly src: "26924:3:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 20052;
                                        readonly name: "_normalizedTimeRemaining";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20033;
                                        readonly src: "26930:24:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "26924:30:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 20054;
                                    readonly name: "_vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 20037;
                                    readonly src: "26968:16:125";
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
                                        readonly id: 20049;
                                        readonly name: "_amountOut";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20031;
                                        readonly src: "26891:10:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 20050;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "26902:8:125";
                                    readonly memberName: "mulDivUp";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18754;
                                    readonly src: "26891:19:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 20055;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "26891:103:125";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "26876:118:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 20057;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "26876:118:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 20060;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 20058;
                                readonly name: "_normalizedTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20033;
                                readonly src: "27008:24:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 20059;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "27035:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "27008:28:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 20087;
                        readonly nodeType: "IfStatement";
                        readonly src: "27004:884:125";
                        readonly trueBody: {
                            readonly id: 20086;
                            readonly nodeType: "Block";
                            readonly src: "27038:850:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 20066;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20061;
                                        readonly name: "bondCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20044;
                                        readonly src: "27153:14:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 20064;
                                            readonly name: "_normalizedTimeRemaining";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20033;
                                            readonly src: "27187:24:125";
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
                                                readonly id: 20062;
                                                readonly name: "_amountOut";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20031;
                                                readonly src: "27170:10:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 20063;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "27181:5:125";
                                            readonly memberName: "mulUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18772;
                                            readonly src: "27170:16:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 20065;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "27170:42:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27153:59:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20067;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27153:59:125";
                            }, {
                                readonly expression: {
                                    readonly id: 20080;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20068;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20042;
                                        readonly src: "27329:15:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 20071;
                                            readonly name: "_effectiveShareReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20027;
                                            readonly src: "27412:23:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20072;
                                            readonly name: "_bondReserves";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20029;
                                            readonly src: "27453:13:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20073;
                                            readonly name: "bondCurveDelta";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20044;
                                            readonly src: "27484:14:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 20076;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly id: 20074;
                                                readonly name: "ONE";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18676;
                                                readonly src: "27725:3:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "-";
                                            readonly rightExpression: {
                                                readonly id: 20075;
                                                readonly name: "_timeStretch";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20035;
                                                readonly src: "27731:12:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "27725:18:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20077;
                                            readonly name: "_vaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20037;
                                            readonly src: "27761:16:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20078;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20039;
                                            readonly src: "27795:23:125";
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
                                                readonly id: 20069;
                                                readonly name: "YieldSpaceMath";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 23292;
                                                readonly src: "27347:14:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_YieldSpaceMath_$23292_$";
                                                    readonly typeString: "type(library YieldSpaceMath)";
                                                };
                                            };
                                            readonly id: 20070;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "27362:32:125";
                                            readonly memberName: "calculateSharesInGivenBondsOutUp";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 22491;
                                            readonly src: "27347:47:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 20079;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "27347:485:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27329:503:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20081;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27329:503:125";
                            }, {
                                readonly expression: {
                                    readonly id: 20084;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20082;
                                        readonly name: "sharePayment";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20046;
                                        readonly src: "27846:12:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 20083;
                                        readonly name: "shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20042;
                                        readonly src: "27862:15:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "27846:31:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20085;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "27846:31:125";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 20025;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "24812:947:125";
                    readonly text: "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateCloseShort";
                readonly nameLocation: "25773:19:125";
                readonly parameters: {
                    readonly id: 20040;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20027;
                        readonly mutability: "mutable";
                        readonly name: "_effectiveShareReserves";
                        readonly nameLocation: "25810:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25802:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20026;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25802:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20029;
                        readonly mutability: "mutable";
                        readonly name: "_bondReserves";
                        readonly nameLocation: "25851:13:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25843:21:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20028;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25843:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20031;
                        readonly mutability: "mutable";
                        readonly name: "_amountOut";
                        readonly nameLocation: "25882:10:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25874:18:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20030;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25874:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20033;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "25910:24:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25902:32:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20032;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25902:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20035;
                        readonly mutability: "mutable";
                        readonly name: "_timeStretch";
                        readonly nameLocation: "25952:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25944:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20034;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25944:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20037;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "25982:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "25974:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20036;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "25974:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20039;
                        readonly mutability: "mutable";
                        readonly name: "_initialVaultSharePrice";
                        readonly nameLocation: "26016:23:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "26008:31:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20038;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26008:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "25792:253:125";
                };
                readonly returnParameters: {
                    readonly id: 20047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20042;
                        readonly mutability: "mutable";
                        readonly name: "shareCurveDelta";
                        readonly nameLocation: "26114:15:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "26106:23:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20041;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26106:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20044;
                        readonly mutability: "mutable";
                        readonly name: "bondCurveDelta";
                        readonly nameLocation: "26151:14:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "26143:22:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20043;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26143:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20046;
                        readonly mutability: "mutable";
                        readonly name: "sharePayment";
                        readonly nameLocation: "26187:12:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20089;
                        readonly src: "26179:20:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20045;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "26179:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "26092:117:125";
                };
                readonly scope: 20190;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 20189;
                readonly nodeType: "FunctionDefinition";
                readonly src: "29982:2953:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20188;
                    readonly nodeType: "Block";
                    readonly src: "30336:2599:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [20118];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 20118;
                            readonly mutability: "mutable";
                            readonly name: "shareAdjustmentDelta";
                            readonly nameLocation: "31268:20:125";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 20188;
                            readonly src: "31261:27:125";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 20117;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "31261:6:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 20119;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "31261:27:125";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 20122;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 20120;
                                readonly name: "_closeVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20102;
                                readonly src: "31302:21:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 20121;
                                readonly name: "_openVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20100;
                                readonly src: "31326:20:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "31302:44:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 20179;
                            readonly nodeType: "Block";
                            readonly src: "32603:140:125";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 20177;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20169;
                                        readonly name: "shareAdjustmentDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20118;
                                        readonly src: "32617:20:125";
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
                                        readonly id: 20176;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 20170;
                                                    readonly name: "_shareReservesDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20094;
                                                    readonly src: "32656:19:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 20171;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32676:8:125";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 22312;
                                                readonly src: "32656:28:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 20172;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32656:30:125";
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
                                                    readonly id: 20173;
                                                    readonly name: "_shareCurveDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20096;
                                                    readonly src: "32705:16:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 20174;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32722:8:125";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 22312;
                                                readonly src: "32705:25:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 20175;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32705:27:125";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "32656:76:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "32617:115:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 20178;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32617:115:125";
                            }];
                        };
                        readonly id: 20180;
                        readonly nodeType: "IfStatement";
                        readonly src: "31298:1445:125";
                        readonly trueBody: {
                            readonly id: 20168;
                            readonly nodeType: "Block";
                            readonly src: "31348:1249:125";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly id: 20123;
                                    readonly name: "_isLong";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 20104;
                                    readonly src: "31631:7:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 20133;
                                readonly nodeType: "IfStatement";
                                readonly src: "31627:191:125";
                                readonly trueBody: {
                                    readonly id: 20132;
                                    readonly nodeType: "Block";
                                    readonly src: "31640:178:125";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 20130;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly id: 20124;
                                                readonly name: "_shareProceeds";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20092;
                                                readonly src: "31658:14:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly id: 20127;
                                                    readonly name: "_closeVaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20102;
                                                    readonly src: "31722:21:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                }, {
                                                    readonly id: 20128;
                                                    readonly name: "_openVaultSharePrice";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20100;
                                                    readonly src: "31765:20:125";
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
                                                        readonly id: 20125;
                                                        readonly name: "_shareProceeds";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 20092;
                                                        readonly src: "31675:14:125";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly id: 20126;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "31690:10:125";
                                                    readonly memberName: "mulDivDown";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 18704;
                                                    readonly src: "31675:25:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                                    };
                                                };
                                                readonly id: 20129;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "31675:128:125";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly src: "31658:145:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 20131;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "31658:145:125";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 20140;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20134;
                                        readonly name: "_shareReservesDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20094;
                                        readonly src: "31951:19:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 20137;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20102;
                                            readonly src: "32021:21:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20138;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20100;
                                            readonly src: "32060:20:125";
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
                                                readonly id: 20135;
                                                readonly name: "_shareReservesDelta";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20094;
                                                readonly src: "31973:19:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 20136;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "31993:10:125";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18704;
                                            readonly src: "31973:30:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 20139;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "31973:121:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "31951:143:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20141;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "31951:143:125";
                            }, {
                                readonly expression: {
                                    readonly id: 20150;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20142;
                                        readonly name: "shareAdjustmentDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20118;
                                        readonly src: "32163:20:125";
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
                                        readonly id: 20149;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 20143;
                                                    readonly name: "_shareReservesDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20094;
                                                    readonly src: "32202:19:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 20144;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32222:8:125";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 22312;
                                                readonly src: "32202:28:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 20145;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32202:30:125";
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
                                                    readonly id: 20146;
                                                    readonly name: "_shareCurveDelta";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 20096;
                                                    readonly src: "32251:16:125";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly id: 20147;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "32268:8:125";
                                                readonly memberName: "toInt256";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 22312;
                                                readonly src: "32251:25:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$";
                                                    readonly typeString: "function (uint256) pure returns (int256)";
                                                };
                                            };
                                            readonly id: 20148;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "32251:27:125";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        };
                                        readonly src: "32202:76:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "32163:115:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 20151;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32163:115:125";
                            }, {
                                readonly expression: {
                                    readonly id: 20158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20152;
                                        readonly name: "_shareCurveDelta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20096;
                                        readonly src: "32292:16:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 20155;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20102;
                                            readonly src: "32356:21:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20156;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20100;
                                            readonly src: "32395:20:125";
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
                                                readonly id: 20153;
                                                readonly name: "_shareCurveDelta";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20096;
                                                readonly src: "32311:16:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 20154;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "32328:10:125";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18704;
                                            readonly src: "32311:27:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 20157;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "32311:118:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "32292:137:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20159;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32292:137:125";
                            }, {
                                readonly expression: {
                                    readonly id: 20166;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 20160;
                                        readonly name: "_totalGovernanceFee";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 20098;
                                        readonly src: "32443:19:125";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 20163;
                                            readonly name: "_closeVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20102;
                                            readonly src: "32513:21:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 20164;
                                            readonly name: "_openVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 20100;
                                            readonly src: "32552:20:125";
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
                                                readonly id: 20161;
                                                readonly name: "_totalGovernanceFee";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 20098;
                                                readonly src: "32465:19:125";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 20162;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "32485:10:125";
                                            readonly memberName: "mulDivDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18704;
                                            readonly src: "32465:30:125";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 20165;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "32465:121:125";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "32443:143:125";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 20167;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "32443:143:125";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 20181;
                                readonly name: "_shareProceeds";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20092;
                                readonly src: "32774:14:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20182;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20094;
                                readonly src: "32802:19:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20183;
                                readonly name: "_shareCurveDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20096;
                                readonly src: "32835:16:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20184;
                                readonly name: "shareAdjustmentDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20118;
                                readonly src: "32865:20:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 20185;
                                readonly name: "_totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20098;
                                readonly src: "32899:19:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 20186;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "32760:168:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,int256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 20116;
                        readonly id: 20187;
                        readonly nodeType: "Return";
                        readonly src: "32753:175:125";
                    }];
                };
                readonly documentation: {
                    readonly id: 20090;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "27900:2077:125";
                    readonly text: "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n      We underestimate the share proceeds to avoid sandwiches, and we\n      round the share reserves delta and share adjustment in the same\n      direction for consistency.\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openVaultSharePrice The vault share price at the beginning of\n        the term.\n @param _closeVaultSharePrice The vault share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateNegativeInterestOnClose";
                readonly nameLocation: "29991:32:125";
                readonly parameters: {
                    readonly id: 20105;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20092;
                        readonly mutability: "mutable";
                        readonly name: "_shareProceeds";
                        readonly nameLocation: "30041:14:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30033:22:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20091;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30033:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20094;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "30073:19:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30065:27:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20093;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30065:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20096;
                        readonly mutability: "mutable";
                        readonly name: "_shareCurveDelta";
                        readonly nameLocation: "30110:16:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30102:24:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20095;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30102:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20098;
                        readonly mutability: "mutable";
                        readonly name: "_totalGovernanceFee";
                        readonly nameLocation: "30144:19:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30136:27:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20097;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30136:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20100;
                        readonly mutability: "mutable";
                        readonly name: "_openVaultSharePrice";
                        readonly nameLocation: "30181:20:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30173:28:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20099;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30173:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20102;
                        readonly mutability: "mutable";
                        readonly name: "_closeVaultSharePrice";
                        readonly nameLocation: "30219:21:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30211:29:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20101;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30211:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20104;
                        readonly mutability: "mutable";
                        readonly name: "_isLong";
                        readonly nameLocation: "30255:7:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30250:12:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 20103;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30250:4:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "30023:245:125";
                };
                readonly returnParameters: {
                    readonly id: 20116;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20107;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30292:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20106;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30292:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20109;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30301:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20108;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30301:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20111;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30310:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20110;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30310:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20113;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30319:6:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 20112;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30319:6:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20115;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20189;
                        readonly src: "30327:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20114;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "30327:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "30291:44:125";
                };
                readonly scope: 20190;
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
                readonly id: 19456;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "324:314:125";
                readonly text: "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [20190];
            readonly name: "HyperdriveMath";
            readonly nameLocation: "646:14:125";
            readonly scope: 20191;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 125;
};
//# sourceMappingURL=HyperdriveMath.d.ts.map