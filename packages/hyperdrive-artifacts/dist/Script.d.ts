export declare const Script: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_SCRIPT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly "IS_SCRIPT()": "f8ccbf47";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"IS_SCRIPT\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Script.sol\":\"Script\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/Script.sol\":{\"keccak256\":\"0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c\",\"dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "IS_SCRIPT";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }];
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
                readonly "lib/forge-std/src/Script.sol": "Script";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/Base.sol": {
                readonly keccak256: "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c";
                readonly urls: readonly ["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224", "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Script.sol": {
                readonly keccak256: "0x2315be74cc2826f9da401bea3da46a10ad6a6efdf73176d79160b453286d0ed2";
                readonly urls: readonly ["bzz-raw://af0d4dc826911d6cb4d6272ed5cbdb6950e1476141cca328e178b808d848789c", "dweb:/ipfs/QmV2ytjUEkV84VtdMs1nZqQTBoVE987cHboQMpiha5yo3e"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdChains.sol": {
                readonly keccak256: "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d";
                readonly urls: readonly ["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4", "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdCheats.sol": {
                readonly keccak256: "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5";
                readonly urls: readonly ["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a", "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdJson.sol": {
                readonly keccak256: "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b";
                readonly urls: readonly ["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c", "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdMath.sol": {
                readonly keccak256: "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2";
                readonly urls: readonly ["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92", "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdStorage.sol": {
                readonly keccak256: "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d";
                readonly urls: readonly ["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26", "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdStyle.sol": {
                readonly keccak256: "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d";
                readonly urls: readonly ["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8", "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdUtils.sol": {
                readonly keccak256: "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1";
                readonly urls: readonly ["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140", "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/console.sol": {
                readonly keccak256: "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba";
                readonly urls: readonly ["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70", "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/console2.sol": {
                readonly keccak256: "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea";
                readonly urls: readonly ["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973", "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/interfaces/IMulticall3.sol": {
                readonly keccak256: "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a";
                readonly urls: readonly ["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0", "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/safeconsole.sol": {
                readonly keccak256: "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381";
                readonly urls: readonly ["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae", "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/Script.sol";
        readonly id: 25150;
        readonly exportedSymbols: {
            readonly Script: readonly [25149];
            readonly ScriptBase: readonly [25110];
            readonly StdChains: readonly [27287];
            readonly StdCheatsSafe: readonly [29341];
            readonly StdStorage: readonly [31145];
            readonly StdStyle: readonly [33809];
            readonly StdUtils: readonly [34657];
            readonly VmSafe: readonly [35773];
            readonly console: readonly [44309];
            readonly console2: readonly [52434];
            readonly safeconsole: readonly [65672];
            readonly stdJson: readonly [30971];
            readonly stdMath: readonly [31113];
            readonly stdStorageSafe: readonly [32037];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:800:96";
        readonly nodes: readonly [{
            readonly id: 25112;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:96";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 25114;
            readonly nodeType: "ImportDirective";
            readonly src: "127:38:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console.sol";
            readonly file: "./console.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 44310;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25113;
                    readonly name: "console";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 44309;
                    readonly src: "135:7:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25116;
            readonly nodeType: "ImportDirective";
            readonly src: "166:40:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console2.sol";
            readonly file: "./console2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 52435;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25115;
                    readonly name: "console2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 52434;
                    readonly src: "174:8:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25118;
            readonly nodeType: "ImportDirective";
            readonly src: "207:46:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/safeconsole.sol";
            readonly file: "./safeconsole.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 65673;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25117;
                    readonly name: "safeconsole";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 65672;
                    readonly src: "215:11:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25120;
            readonly nodeType: "ImportDirective";
            readonly src: "254:42:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdChains.sol";
            readonly file: "./StdChains.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 27288;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25119;
                    readonly name: "StdChains";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 27287;
                    readonly src: "262:9:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25122;
            readonly nodeType: "ImportDirective";
            readonly src: "297:46:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdCheats.sol";
            readonly file: "./StdCheats.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 30106;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25121;
                    readonly name: "StdCheatsSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 29341;
                    readonly src: "305:13:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25124;
            readonly nodeType: "ImportDirective";
            readonly src: "344:38:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdJson.sol";
            readonly file: "./StdJson.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 30972;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25123;
                    readonly name: "stdJson";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 30971;
                    readonly src: "352:7:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25126;
            readonly nodeType: "ImportDirective";
            readonly src: "383:38:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdMath.sol";
            readonly file: "./StdMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 31114;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25125;
                    readonly name: "stdMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 31113;
                    readonly src: "391:7:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25129;
            readonly nodeType: "ImportDirective";
            readonly src: "422:60:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStorage.sol";
            readonly file: "./StdStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 32599;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25127;
                    readonly name: "StdStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 31145;
                    readonly src: "430:10:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 25128;
                    readonly name: "stdStorageSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 32037;
                    readonly src: "442:14:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25131;
            readonly nodeType: "ImportDirective";
            readonly src: "483:40:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStyle.sol";
            readonly file: "./StdStyle.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 33810;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25130;
                    readonly name: "StdStyle";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 33809;
                    readonly src: "491:8:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25133;
            readonly nodeType: "ImportDirective";
            readonly src: "524:40:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdUtils.sol";
            readonly file: "./StdUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 34658;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25132;
                    readonly name: "StdUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 34657;
                    readonly src: "532:8:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25135;
            readonly nodeType: "ImportDirective";
            readonly src: "565:32:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 36246;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25134;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35773;
                    readonly src: "573:6:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25137;
            readonly nodeType: "ImportDirective";
            readonly src: "619:38:96";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Base.sol";
            readonly file: "./Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25150;
            readonly sourceUnit: 25111;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 25136;
                    readonly name: "ScriptBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 25110;
                    readonly src: "627:10:96";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 25149;
            readonly nodeType: "ContractDefinition";
            readonly src: "676:155:96";
            readonly nodes: readonly [{
                readonly id: 25148;
                readonly nodeType: "VariableDeclaration";
                readonly src: "800:28:96";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "f8ccbf47";
                readonly mutability: "mutable";
                readonly name: "IS_SCRIPT";
                readonly nameLocation: "812:9:96";
                readonly scope: 25149;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 25146;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "800:4:96";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly value: {
                    readonly hexValue: "74727565";
                    readonly id: 25147;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "bool";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "824:4:96";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly value: "true";
                };
                readonly visibility: "public";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25138;
                    readonly name: "ScriptBase";
                    readonly nameLocations: readonly ["704:10:96"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25110;
                    readonly src: "704:10:96";
                };
                readonly id: 25139;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "704:10:96";
            }, {
                readonly baseName: {
                    readonly id: 25140;
                    readonly name: "StdChains";
                    readonly nameLocations: readonly ["716:9:96"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 27287;
                    readonly src: "716:9:96";
                };
                readonly id: 25141;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "716:9:96";
            }, {
                readonly baseName: {
                    readonly id: 25142;
                    readonly name: "StdCheatsSafe";
                    readonly nameLocations: readonly ["727:13:96"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 29341;
                    readonly src: "727:13:96";
                };
                readonly id: 25143;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "727:13:96";
            }, {
                readonly baseName: {
                    readonly id: 25144;
                    readonly name: "StdUtils";
                    readonly nameLocations: readonly ["742:8:96"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 34657;
                    readonly src: "742:8:96";
                };
                readonly id: 25145;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "742:8:96";
            }];
            readonly canonicalName: "Script";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25149, 34657, 29341, 27287, 25110, 25098];
            readonly name: "Script";
            readonly nameLocation: "694:6:96";
            readonly scope: 25150;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 96;
};
//# sourceMappingURL=Script.d.ts.map