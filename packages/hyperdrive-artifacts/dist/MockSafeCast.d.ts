export declare const MockSafeCast: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint112";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toInt128";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "y";
            readonly type: "int128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "x";
            readonly type: "int256";
        }];
        readonly name: "toInt128";
        readonly outputs: readonly [{
            readonly internalType: "int128";
            readonly name: "y";
            readonly type: "int128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toInt256";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "y";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toUint112";
        readonly outputs: readonly [{
            readonly internalType: "uint112";
            readonly name: "y";
            readonly type: "uint112";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "toUint128";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "y";
            readonly type: "uint128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b5061028e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630f2422d11461005c57806341d2aa6414610087578063809fdd33146100b2578063dd2a0316146100dd578063dfbe873b146100f0575b600080fd5b61006f61006a36600461023f565b610111565b604051600f9190910b81526020015b60405180910390f35b61009a61009536600461023f565b610122565b6040516001600160701b03909116815260200161007e565b6100c56100c036600461023f565b61012d565b6040516001600160801b03909116815260200161007e565b61006f6100eb36600461023f565b610138565b6101036100fe36600461023f565b610143565b60405190815260200161007e565b600061011c8261014e565b92915050565b600061011c8261017c565b600061011c826101a6565b600061011c826101d0565b600061011c82610215565b600060016001607f1b038211156101785760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101785760405163086b151760e11b815260040160405180910390fd5b60006001600160801b0382111561017857604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff198212806101f7575060016001607f1b0382135b156101785760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101785760405163396ea70160e11b815260040160405180910390fd5b60006020828403121561025157600080fd5b503591905056fea2646970667358221220825916f9730b3ef7d5cf7c9dc3545bee096b1d28ff90a1deab4a122df49db8f264736f6c63430008140033";
        readonly sourceMap: "124:574:141:-:0;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630f2422d11461005c57806341d2aa6414610087578063809fdd33146100b2578063dd2a0316146100dd578063dfbe873b146100f0575b600080fd5b61006f61006a36600461023f565b610111565b604051600f9190910b81526020015b60405180910390f35b61009a61009536600461023f565b610122565b6040516001600160701b03909116815260200161007e565b6100c56100c036600461023f565b61012d565b6040516001600160801b03909116815260200161007e565b61006f6100eb36600461023f565b610138565b6101036100fe36600461023f565b610143565b60405190815260200161007e565b600061011c8261014e565b92915050565b600061011c8261017c565b600061011c826101a6565b600061011c826101d0565b600061011c82610215565b600060016001607f1b038211156101785760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101785760405163086b151760e11b815260040160405180910390fd5b60006001600160801b0382111561017857604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff198212806101f7575060016001607f1b0382135b156101785760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101785760405163396ea70160e11b815260040160405180910390fd5b60006020828403121561025157600080fd5b503591905056fea2646970667358221220825916f9730b3ef7d5cf7c9dc3545bee096b1d28ff90a1deab4a122df49db8f264736f6c63430008140033";
        readonly sourceMap: "124:574:141:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;376:103;;;;;;:::i;:::-;;:::i;:::-;;;372:2:234;361:22;;;;343:41;;331:2;316:18;376:103:141;;;;;;;;152:106;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;559:43:234;;;541:62;;529:2;514:18;152:106:141;395:214:234;264:106:141;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;778:47:234;;;760:66;;748:2;733:18;264:106:141;614:218:234;485:102:141;;;;;;:::i;:::-;;:::i;593:103::-;;;;;;:::i;:::-;;:::i;:::-;;;1165:25:234;;;1153:2;1138:18;593:103:141;1021:175:234;376:103:141;428:8;452:20;470:1;452:17;:20::i;:::-;448:24;376:103;-1:-1:-1;;376:103:141:o;152:106::-;205:9;230:21;249:1;230:18;:21::i;264:106::-;317:9;342:21;361:1;342:18;:21::i;485:102::-;536:8;560:20;578:1;560:17;:20::i;593:103::-;645:8;669:20;687:1;669:17;:20::i;1252:208:125:-;1304:8;-1:-1:-1;;;;;1328:29:125;;1324:99;;;1380:32;;-1:-1:-1;;;1380:32:125;;;;;;;;;;;1324:99;-1:-1:-1;1450:1:125;1252:208::o;527:196::-;580:9;-1:-1:-1;;;;;605:21:125;;601:92;;;649:33;;-1:-1:-1;;;649:33:125;;;;;;;;;;;890:196;943:9;-1:-1:-1;;;;;968:21:125;;964:92;;;1012:33;;-1:-1:-1;;;1012:33:125;;;;;;;;;;;1624:214;1675:8;-1:-1:-1;;1699:20:125;;;:44;;-1:-1:-1;;;;;;1723:20:125;;1699:44;1695:114;;;1766:32;;-1:-1:-1;;;1766:32:125;;;;;;;;;;;2004:200;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;14:180:234;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "toInt128(int256)": "dd2a0316";
        readonly "toInt128(uint256)": "0f2422d1";
        readonly "toInt256(uint256)": "dfbe873b";
        readonly "toUint112(uint256)": "41d2aa64";
        readonly "toUint128(uint256)": "809fdd33";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toInt128\",\"outputs\":[{\"internalType\":\"int128\",\"name\":\"y\",\"type\":\"int128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"toInt128\",\"outputs\":[{\"internalType\":\"int128\",\"name\":\"y\",\"type\":\"int128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toInt256\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"y\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toUint112\",\"outputs\":[{\"internalType\":\"uint112\",\"name\":\"y\",\"type\":\"uint112\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toUint128\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"y\",\"type\":\"uint128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockSafeCast.sol\":\"MockSafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/MockSafeCast.sol\":{\"keccak256\":\"0x2ffa02e93830a21d5a65bf0da0c3c7ad47ab982d8d13422fcd50251ccf8c21de\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://adaf71733add5396b3affd19238a90fce42963c5cf59872fc947b9d789fc6799\",\"dweb:/ipfs/QmSxk4p9EQgP9nERNM9m98vVjLDGfhj3aJ4UPyk2mxgDuQ\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt128";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint112";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint128";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "toInt128";
                readonly outputs: readonly [{
                    readonly internalType: "int128";
                    readonly name: "y";
                    readonly type: "int128";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "x";
                    readonly type: "int256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "toInt128";
                readonly outputs: readonly [{
                    readonly internalType: "int128";
                    readonly name: "y";
                    readonly type: "int128";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "toInt256";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "y";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "toUint112";
                readonly outputs: readonly [{
                    readonly internalType: "uint112";
                    readonly name: "y";
                    readonly type: "uint112";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "x";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "toUint128";
                readonly outputs: readonly [{
                    readonly internalType: "uint128";
                    readonly name: "y";
                    readonly type: "uint128";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockSafeCast.sol": "MockSafeCast";
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
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockSafeCast.sol": {
                readonly keccak256: "0x2ffa02e93830a21d5a65bf0da0c3c7ad47ab982d8d13422fcd50251ccf8c21de";
                readonly urls: readonly ["bzz-raw://adaf71733add5396b3affd19238a90fce42963c5cf59872fc947b9d789fc6799", "dweb:/ipfs/QmSxk4p9EQgP9nERNM9m98vVjLDGfhj3aJ4UPyk2mxgDuQ"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockSafeCast.sol";
        readonly id: 26976;
        readonly exportedSymbols: {
            readonly MockSafeCast: readonly [26975];
            readonly SafeCast: readonly [21815];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:660:141";
        readonly nodes: readonly [{
            readonly id: 26897;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:24:141";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".18"];
        }, {
            readonly id: 26899;
            readonly nodeType: "ImportDirective";
            readonly src: "65:57:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/SafeCast.sol";
            readonly file: "../src/libraries/SafeCast.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 26976;
            readonly sourceUnit: 21816;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26898;
                    readonly name: "SafeCast";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 21815;
                    readonly src: "74:8:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 26975;
            readonly nodeType: "ContractDefinition";
            readonly src: "124:574:141";
            readonly nodes: readonly [{
                readonly id: 26914;
                readonly nodeType: "FunctionDefinition";
                readonly src: "152:106:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26913;
                    readonly nodeType: "Block";
                    readonly src: "216:42:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26911;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26906;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26904;
                                readonly src: "226:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26909;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26901;
                                    readonly src: "249:1:141";
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
                                        readonly id: 26907;
                                        readonly name: "SafeCast";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21815;
                                        readonly src: "230:8:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_SafeCast_$21815_$";
                                            readonly typeString: "type(library SafeCast)";
                                        };
                                    };
                                    readonly id: 26908;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "239:9:141";
                                    readonly memberName: "toUint112";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21677;
                                    readonly src: "230:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$";
                                        readonly typeString: "function (uint256) pure returns (uint112)";
                                    };
                                };
                                readonly id: 26910;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "230:21:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            };
                            readonly src: "226:25:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly id: 26912;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "226:25:141";
                    }];
                };
                readonly functionSelector: "41d2aa64";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toUint112";
                readonly nameLocation: "161:9:141";
                readonly parameters: {
                    readonly id: 26902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26901;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "179:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26914;
                        readonly src: "171:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26900;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "171:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "170:11:141";
                };
                readonly returnParameters: {
                    readonly id: 26905;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26904;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "213:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26914;
                        readonly src: "205:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint112";
                            readonly typeString: "uint112";
                        };
                        readonly typeName: {
                            readonly id: 26903;
                            readonly name: "uint112";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "205:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint112";
                                readonly typeString: "uint112";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "204:11:141";
                };
                readonly scope: 26975;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26929;
                readonly nodeType: "FunctionDefinition";
                readonly src: "264:106:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26928;
                    readonly nodeType: "Block";
                    readonly src: "328:42:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26926;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26921;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26919;
                                readonly src: "338:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26924;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26916;
                                    readonly src: "361:1:141";
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
                                        readonly id: 26922;
                                        readonly name: "SafeCast";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21815;
                                        readonly src: "342:8:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_SafeCast_$21815_$";
                                            readonly typeString: "type(library SafeCast)";
                                        };
                                    };
                                    readonly id: 26923;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "351:9:141";
                                    readonly memberName: "toUint128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21707;
                                    readonly src: "342:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$";
                                        readonly typeString: "function (uint256) pure returns (uint128)";
                                    };
                                };
                                readonly id: 26925;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "342:21:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "338:25:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 26927;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "338:25:141";
                    }];
                };
                readonly functionSelector: "809fdd33";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toUint128";
                readonly nameLocation: "273:9:141";
                readonly parameters: {
                    readonly id: 26917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26916;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "291:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26929;
                        readonly src: "283:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26915;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "283:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "282:11:141";
                };
                readonly returnParameters: {
                    readonly id: 26920;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26919;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "325:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26929;
                        readonly src: "317:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 26918;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "317:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "316:11:141";
                };
                readonly scope: 26975;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26944;
                readonly nodeType: "FunctionDefinition";
                readonly src: "376:103:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26943;
                    readonly nodeType: "Block";
                    readonly src: "438:41:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26941;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26936;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26934;
                                readonly src: "448:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26939;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26931;
                                    readonly src: "470:1:141";
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
                                        readonly id: 26937;
                                        readonly name: "SafeCast";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21815;
                                        readonly src: "452:8:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_SafeCast_$21815_$";
                                            readonly typeString: "type(library SafeCast)";
                                        };
                                    };
                                    readonly id: 26938;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "461:8:141";
                                    readonly memberName: "toInt128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21743;
                                    readonly src: "452:17:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int128_$";
                                        readonly typeString: "function (uint256) pure returns (int128)";
                                    };
                                };
                                readonly id: 26940;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "452:20:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly src: "448:24:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly id: 26942;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "448:24:141";
                    }];
                };
                readonly functionSelector: "0f2422d1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt128";
                readonly nameLocation: "385:8:141";
                readonly parameters: {
                    readonly id: 26932;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26931;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "402:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26944;
                        readonly src: "394:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26930;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "394:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "393:11:141";
                };
                readonly returnParameters: {
                    readonly id: 26935;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26934;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "435:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26944;
                        readonly src: "428:8:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int128";
                            readonly typeString: "int128";
                        };
                        readonly typeName: {
                            readonly id: 26933;
                            readonly name: "int128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "428:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "427:10:141";
                };
                readonly scope: 26975;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26959;
                readonly nodeType: "FunctionDefinition";
                readonly src: "485:102:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26958;
                    readonly nodeType: "Block";
                    readonly src: "546:41:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26956;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26951;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26949;
                                readonly src: "556:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26954;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26946;
                                    readonly src: "578:1:141";
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
                                    readonly expression: {
                                        readonly id: 26952;
                                        readonly name: "SafeCast";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21815;
                                        readonly src: "560:8:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_SafeCast_$21815_$";
                                            readonly typeString: "type(library SafeCast)";
                                        };
                                    };
                                    readonly id: 26953;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "569:8:141";
                                    readonly memberName: "toInt128";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21781;
                                    readonly src: "560:17:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_int128_$";
                                        readonly typeString: "function (int256) pure returns (int128)";
                                    };
                                };
                                readonly id: 26955;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "560:20:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            };
                            readonly src: "556:24:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly id: 26957;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "556:24:141";
                    }];
                };
                readonly functionSelector: "dd2a0316";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt128";
                readonly nameLocation: "494:8:141";
                readonly parameters: {
                    readonly id: 26947;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26946;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "510:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26959;
                        readonly src: "503:8:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26945;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "503:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "502:10:141";
                };
                readonly returnParameters: {
                    readonly id: 26950;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26949;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "543:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26959;
                        readonly src: "536:8:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int128";
                            readonly typeString: "int128";
                        };
                        readonly typeName: {
                            readonly id: 26948;
                            readonly name: "int128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "536:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int128";
                                readonly typeString: "int128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "535:10:141";
                };
                readonly scope: 26975;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 26974;
                readonly nodeType: "FunctionDefinition";
                readonly src: "593:103:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26973;
                    readonly nodeType: "Block";
                    readonly src: "655:41:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 26971;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26966;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26964;
                                readonly src: "665:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26969;
                                    readonly name: "x";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26961;
                                    readonly src: "687:1:141";
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
                                        readonly id: 26967;
                                        readonly name: "SafeCast";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 21815;
                                        readonly src: "669:8:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_SafeCast_$21815_$";
                                            readonly typeString: "type(library SafeCast)";
                                        };
                                    };
                                    readonly id: 26968;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "678:8:141";
                                    readonly memberName: "toInt256";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 21814;
                                    readonly src: "669:17:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_int256_$";
                                        readonly typeString: "function (uint256) pure returns (int256)";
                                    };
                                };
                                readonly id: 26970;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "669:20:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "665:24:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly id: 26972;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "665:24:141";
                    }];
                };
                readonly functionSelector: "dfbe873b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "toInt256";
                readonly nameLocation: "602:8:141";
                readonly parameters: {
                    readonly id: 26962;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26961;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "619:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26974;
                        readonly src: "611:9:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26960;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "611:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "610:11:141";
                };
                readonly returnParameters: {
                    readonly id: 26965;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26964;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "652:1:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26974;
                        readonly src: "645:8:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 26963;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "645:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "644:10:141";
                };
                readonly scope: 26975;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "MockSafeCast";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [26975];
            readonly name: "MockSafeCast";
            readonly nameLocation: "133:12:141";
            readonly scope: 26976;
            readonly usedErrors: readonly [10305, 10308, 10311, 10314];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 141;
};
//# sourceMappingURL=MockSafeCast.d.ts.map