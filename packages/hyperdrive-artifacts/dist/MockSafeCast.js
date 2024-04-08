export const MockSafeCast = {
    "abi": [
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "toInt128",
            "outputs": [
                {
                    "internalType": "int128",
                    "name": "y",
                    "type": "int128"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "x",
                    "type": "int256"
                }
            ],
            "name": "toInt128",
            "outputs": [
                {
                    "internalType": "int128",
                    "name": "y",
                    "type": "int128"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "toInt256",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "y",
                    "type": "int256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "toUint112",
            "outputs": [
                {
                    "internalType": "uint112",
                    "name": "y",
                    "type": "uint112"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "x",
                    "type": "uint256"
                }
            ],
            "name": "toUint128",
            "outputs": [
                {
                    "internalType": "uint128",
                    "name": "y",
                    "type": "uint128"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b5061028e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630f2422d11461005c57806341d2aa6414610087578063809fdd33146100b2578063dd2a0316146100dd578063dfbe873b146100f0575b600080fd5b61006f61006a36600461023f565b610111565b604051600f9190910b81526020015b60405180910390f35b61009a61009536600461023f565b610122565b6040516001600160701b03909116815260200161007e565b6100c56100c036600461023f565b61012d565b6040516001600160801b03909116815260200161007e565b61006f6100eb36600461023f565b610138565b6101036100fe36600461023f565b610143565b60405190815260200161007e565b600061011c8261014e565b92915050565b600061011c8261017c565b600061011c826101a6565b600061011c826101d0565b600061011c82610215565b600060016001607f1b038211156101785760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101785760405163086b151760e11b815260040160405180910390fd5b60006001600160801b0382111561017857604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff198212806101f7575060016001607f1b0382135b156101785760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101785760405163396ea70160e11b815260040160405180910390fd5b60006020828403121561025157600080fd5b503591905056fea2646970667358221220825916f9730b3ef7d5cf7c9dc3545bee096b1d28ff90a1deab4a122df49db8f264736f6c63430008140033",
        "sourceMap": "124:574:141:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630f2422d11461005c57806341d2aa6414610087578063809fdd33146100b2578063dd2a0316146100dd578063dfbe873b146100f0575b600080fd5b61006f61006a36600461023f565b610111565b604051600f9190910b81526020015b60405180910390f35b61009a61009536600461023f565b610122565b6040516001600160701b03909116815260200161007e565b6100c56100c036600461023f565b61012d565b6040516001600160801b03909116815260200161007e565b61006f6100eb36600461023f565b610138565b6101036100fe36600461023f565b610143565b60405190815260200161007e565b600061011c8261014e565b92915050565b600061011c8261017c565b600061011c826101a6565b600061011c826101d0565b600061011c82610215565b600060016001607f1b038211156101785760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101785760405163086b151760e11b815260040160405180910390fd5b60006001600160801b0382111561017857604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff198212806101f7575060016001607f1b0382135b156101785760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101785760405163396ea70160e11b815260040160405180910390fd5b60006020828403121561025157600080fd5b503591905056fea2646970667358221220825916f9730b3ef7d5cf7c9dc3545bee096b1d28ff90a1deab4a122df49db8f264736f6c63430008140033",
        "sourceMap": "124:574:141:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;376:103;;;;;;:::i;:::-;;:::i;:::-;;;372:2:234;361:22;;;;343:41;;331:2;316:18;376:103:141;;;;;;;;152:106;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;559:43:234;;;541:62;;529:2;514:18;152:106:141;395:214:234;264:106:141;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;778:47:234;;;760:66;;748:2;733:18;264:106:141;614:218:234;485:102:141;;;;;;:::i;:::-;;:::i;593:103::-;;;;;;:::i;:::-;;:::i;:::-;;;1165:25:234;;;1153:2;1138:18;593:103:141;1021:175:234;376:103:141;428:8;452:20;470:1;452:17;:20::i;:::-;448:24;376:103;-1:-1:-1;;376:103:141:o;152:106::-;205:9;230:21;249:1;230:18;:21::i;264:106::-;317:9;342:21;361:1;342:18;:21::i;485:102::-;536:8;560:20;578:1;560:17;:20::i;593:103::-;645:8;669:20;687:1;669:17;:20::i;1252:208:125:-;1304:8;-1:-1:-1;;;;;1328:29:125;;1324:99;;;1380:32;;-1:-1:-1;;;1380:32:125;;;;;;;;;;;1324:99;-1:-1:-1;1450:1:125;1252:208::o;527:196::-;580:9;-1:-1:-1;;;;;605:21:125;;601:92;;;649:33;;-1:-1:-1;;;649:33:125;;;;;;;;;;;890:196;943:9;-1:-1:-1;;;;;968:21:125;;964:92;;;1012:33;;-1:-1:-1;;;1012:33:125;;;;;;;;;;;1624:214;1675:8;-1:-1:-1;;1699:20:125;;;:44;;-1:-1:-1;;;;;;1723:20:125;;1699:44;1695:114;;;1766:32;;-1:-1:-1;;;1766:32:125;;;;;;;;;;;2004:200;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;14:180:234;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "toInt128(int256)": "dd2a0316",
        "toInt128(uint256)": "0f2422d1",
        "toInt256(uint256)": "dfbe873b",
        "toUint112(uint256)": "41d2aa64",
        "toUint128(uint256)": "809fdd33"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toInt128\",\"outputs\":[{\"internalType\":\"int128\",\"name\":\"y\",\"type\":\"int128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"x\",\"type\":\"int256\"}],\"name\":\"toInt128\",\"outputs\":[{\"internalType\":\"int128\",\"name\":\"y\",\"type\":\"int128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toInt256\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"y\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toUint112\",\"outputs\":[{\"internalType\":\"uint112\",\"name\":\"y\",\"type\":\"uint112\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"x\",\"type\":\"uint256\"}],\"name\":\"toUint128\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"y\",\"type\":\"uint128\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockSafeCast.sol\":\"MockSafeCast\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/test/MockSafeCast.sol\":{\"keccak256\":\"0x2ffa02e93830a21d5a65bf0da0c3c7ad47ab982d8d13422fcd50251ccf8c21de\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://adaf71733add5396b3affd19238a90fce42963c5cf59872fc947b9d789fc6799\",\"dweb:/ipfs/QmSxk4p9EQgP9nERNM9m98vVjLDGfhj3aJ4UPyk2mxgDuQ\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt128"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToInt256"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint112"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeCastToUint128"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "x",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "toInt128",
                    "outputs": [
                        {
                            "internalType": "int128",
                            "name": "y",
                            "type": "int128"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "int256",
                            "name": "x",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "toInt128",
                    "outputs": [
                        {
                            "internalType": "int128",
                            "name": "y",
                            "type": "int128"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "x",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "toInt256",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "y",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "x",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "toUint112",
                    "outputs": [
                        {
                            "internalType": "uint112",
                            "name": "y",
                            "type": "uint112"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "x",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "toUint128",
                    "outputs": [
                        {
                            "internalType": "uint128",
                            "name": "y",
                            "type": "uint128"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/test/MockSafeCast.sol": "MockSafeCast"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockSafeCast.sol": {
                "keccak256": "0x2ffa02e93830a21d5a65bf0da0c3c7ad47ab982d8d13422fcd50251ccf8c21de",
                "urls": [
                    "bzz-raw://adaf71733add5396b3affd19238a90fce42963c5cf59872fc947b9d789fc6799",
                    "dweb:/ipfs/QmSxk4p9EQgP9nERNM9m98vVjLDGfhj3aJ4UPyk2mxgDuQ"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockSafeCast.sol",
        "id": 26976,
        "exportedSymbols": {
            "MockSafeCast": [
                26975
            ],
            "SafeCast": [
                21815
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:660:141",
        "nodes": [
            {
                "id": 26897,
                "nodeType": "PragmaDirective",
                "src": "39:24:141",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".18"
                ]
            },
            {
                "id": 26899,
                "nodeType": "ImportDirective",
                "src": "65:57:141",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../src/libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 26976,
                "sourceUnit": 21816,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26898,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21815,
                            "src": "74:8:141",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 26975,
                "nodeType": "ContractDefinition",
                "src": "124:574:141",
                "nodes": [
                    {
                        "id": 26914,
                        "nodeType": "FunctionDefinition",
                        "src": "152:106:141",
                        "nodes": [],
                        "body": {
                            "id": 26913,
                            "nodeType": "Block",
                            "src": "216:42:141",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26911,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26906,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26904,
                                            "src": "226:1:141",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26909,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26901,
                                                    "src": "249:1:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 26907,
                                                    "name": "SafeCast",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21815,
                                                    "src": "230:8:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_SafeCast_$21815_$",
                                                        "typeString": "type(library SafeCast)"
                                                    }
                                                },
                                                "id": 26908,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "239:9:141",
                                                "memberName": "toUint112",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21677,
                                                "src": "230:18:141",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$",
                                                    "typeString": "function (uint256) pure returns (uint112)"
                                                }
                                            },
                                            "id": 26910,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "230:21:141",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "226:25:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "id": 26912,
                                    "nodeType": "ExpressionStatement",
                                    "src": "226:25:141"
                                }
                            ]
                        },
                        "functionSelector": "41d2aa64",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint112",
                        "nameLocation": "161:9:141",
                        "parameters": {
                            "id": 26902,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26901,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "179:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26914,
                                    "src": "171:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26900,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "171:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "170:11:141"
                        },
                        "returnParameters": {
                            "id": 26905,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26904,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "213:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26914,
                                    "src": "205:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint112",
                                        "typeString": "uint112"
                                    },
                                    "typeName": {
                                        "id": 26903,
                                        "name": "uint112",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "205:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "204:11:141"
                        },
                        "scope": 26975,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26929,
                        "nodeType": "FunctionDefinition",
                        "src": "264:106:141",
                        "nodes": [],
                        "body": {
                            "id": 26928,
                            "nodeType": "Block",
                            "src": "328:42:141",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26926,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26921,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26919,
                                            "src": "338:1:141",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26924,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26916,
                                                    "src": "361:1:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 26922,
                                                    "name": "SafeCast",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21815,
                                                    "src": "342:8:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_SafeCast_$21815_$",
                                                        "typeString": "type(library SafeCast)"
                                                    }
                                                },
                                                "id": 26923,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "351:9:141",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "342:18:141",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 26925,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "342:21:141",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "338:25:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 26927,
                                    "nodeType": "ExpressionStatement",
                                    "src": "338:25:141"
                                }
                            ]
                        },
                        "functionSelector": "809fdd33",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toUint128",
                        "nameLocation": "273:9:141",
                        "parameters": {
                            "id": 26917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26916,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "291:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26929,
                                    "src": "283:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26915,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "283:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "282:11:141"
                        },
                        "returnParameters": {
                            "id": 26920,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26919,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "325:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26929,
                                    "src": "317:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 26918,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "317:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "316:11:141"
                        },
                        "scope": 26975,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26944,
                        "nodeType": "FunctionDefinition",
                        "src": "376:103:141",
                        "nodes": [],
                        "body": {
                            "id": 26943,
                            "nodeType": "Block",
                            "src": "438:41:141",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26941,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26936,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26934,
                                            "src": "448:1:141",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26939,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26931,
                                                    "src": "470:1:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 26937,
                                                    "name": "SafeCast",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21815,
                                                    "src": "452:8:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_SafeCast_$21815_$",
                                                        "typeString": "type(library SafeCast)"
                                                    }
                                                },
                                                "id": 26938,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "461:8:141",
                                                "memberName": "toInt128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21743,
                                                "src": "452:17:141",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int128_$",
                                                    "typeString": "function (uint256) pure returns (int128)"
                                                }
                                            },
                                            "id": 26940,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "452:20:141",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "448:24:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 26942,
                                    "nodeType": "ExpressionStatement",
                                    "src": "448:24:141"
                                }
                            ]
                        },
                        "functionSelector": "0f2422d1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "385:8:141",
                        "parameters": {
                            "id": 26932,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26931,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "402:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26944,
                                    "src": "394:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26930,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "394:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "393:11:141"
                        },
                        "returnParameters": {
                            "id": 26935,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26934,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "435:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26944,
                                    "src": "428:8:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 26933,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "428:6:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "427:10:141"
                        },
                        "scope": 26975,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26959,
                        "nodeType": "FunctionDefinition",
                        "src": "485:102:141",
                        "nodes": [],
                        "body": {
                            "id": 26958,
                            "nodeType": "Block",
                            "src": "546:41:141",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26956,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26951,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26949,
                                            "src": "556:1:141",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26954,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26946,
                                                    "src": "578:1:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 26952,
                                                    "name": "SafeCast",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21815,
                                                    "src": "560:8:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_SafeCast_$21815_$",
                                                        "typeString": "type(library SafeCast)"
                                                    }
                                                },
                                                "id": 26953,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "569:8:141",
                                                "memberName": "toInt128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21781,
                                                "src": "560:17:141",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$",
                                                    "typeString": "function (int256) pure returns (int128)"
                                                }
                                            },
                                            "id": 26955,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "560:20:141",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "556:24:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 26957,
                                    "nodeType": "ExpressionStatement",
                                    "src": "556:24:141"
                                }
                            ]
                        },
                        "functionSelector": "dd2a0316",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt128",
                        "nameLocation": "494:8:141",
                        "parameters": {
                            "id": 26947,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26946,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "510:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26959,
                                    "src": "503:8:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 26945,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "503:6:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "502:10:141"
                        },
                        "returnParameters": {
                            "id": 26950,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26949,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "543:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26959,
                                    "src": "536:8:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int128",
                                        "typeString": "int128"
                                    },
                                    "typeName": {
                                        "id": 26948,
                                        "name": "int128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "536:6:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "535:10:141"
                        },
                        "scope": 26975,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 26974,
                        "nodeType": "FunctionDefinition",
                        "src": "593:103:141",
                        "nodes": [],
                        "body": {
                            "id": 26973,
                            "nodeType": "Block",
                            "src": "655:41:141",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 26971,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26966,
                                            "name": "y",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26964,
                                            "src": "665:1:141",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26969,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26961,
                                                    "src": "687:1:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 26967,
                                                    "name": "SafeCast",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21815,
                                                    "src": "669:8:141",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_SafeCast_$21815_$",
                                                        "typeString": "type(library SafeCast)"
                                                    }
                                                },
                                                "id": 26968,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "678:8:141",
                                                "memberName": "toInt256",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21814,
                                                "src": "669:17:141",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$",
                                                    "typeString": "function (uint256) pure returns (int256)"
                                                }
                                            },
                                            "id": 26970,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "669:20:141",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "665:24:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 26972,
                                    "nodeType": "ExpressionStatement",
                                    "src": "665:24:141"
                                }
                            ]
                        },
                        "functionSelector": "dfbe873b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "toInt256",
                        "nameLocation": "602:8:141",
                        "parameters": {
                            "id": 26962,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26961,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "619:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26974,
                                    "src": "611:9:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26960,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "611:7:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "610:11:141"
                        },
                        "returnParameters": {
                            "id": 26965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26964,
                                    "mutability": "mutable",
                                    "name": "y",
                                    "nameLocation": "652:1:141",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26974,
                                    "src": "645:8:141",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 26963,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "645:6:141",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "644:10:141"
                        },
                        "scope": 26975,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "MockSafeCast",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    26975
                ],
                "name": "MockSafeCast",
                "nameLocation": "133:12:141",
                "scope": 26976,
                "usedErrors": [
                    10305,
                    10308,
                    10311,
                    10314
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 141
};
