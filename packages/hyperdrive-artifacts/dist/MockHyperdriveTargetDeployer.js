export const MockHyperdriveTargetDeployer = {
    "abi": [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "deploy",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b50610312806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063195d4bfc14610030575b600080fd5b61004761003e3660046101b2565b60009392505050565b6040516001600160a01b03909116815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561009d5761009d610063565b60405290565b80356001600160a01b03811681146100ba57600080fd5b919050565b6000608082840312156100d157600080fd5b6040516080810181811067ffffffffffffffff821117156100f4576100f4610063565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261013657600080fd5b813567ffffffffffffffff8082111561015157610151610063565b604051601f8301601f19908116603f0116810190828211818310171561017957610179610063565b8160405283815286602085880101111561019257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008385036102608112156101c957600080fd5b610220808212156101d957600080fd5b6101e1610079565b91506101ec866100a3565b82526101fa602087016100a3565b602083015261020b604087016100a3565b6040830152606086013560608301526080860135608083015260a086013560a083015260c086013560c083015260e086013560e08301526101008087013581840152506101208087013581840152506101406102688188016100a3565b9083015261016061027a8782016100a3565b9083015261018061028c8782016100a3565b908301526101a061029f888883016100bf565b9083015290935084013567ffffffffffffffff8111156102be57600080fd5b6102ca86828701610125565b9250506102408401359050925092509256fea26469706673582212209702061f8478156208a73b811decff7a8c548db112e716d6342a24f89d699d4464736f6c63430008140033",
        "sourceMap": "2940:241:136:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063195d4bfc14610030575b600080fd5b61004761003e3660046101b2565b60009392505050565b6040516001600160a01b03909116815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561009d5761009d610063565b60405290565b80356001600160a01b03811681146100ba57600080fd5b919050565b6000608082840312156100d157600080fd5b6040516080810181811067ffffffffffffffff821117156100f4576100f4610063565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b600082601f83011261013657600080fd5b813567ffffffffffffffff8082111561015157610151610063565b604051601f8301601f19908116603f0116810190828211818310171561017957610179610063565b8160405283815286602085880101111561019257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008385036102608112156101c957600080fd5b610220808212156101d957600080fd5b6101e1610079565b91506101ec866100a3565b82526101fa602087016100a3565b602083015261020b604087016100a3565b6040830152606086013560608301526080860135608083015260a086013560a083015260c086013560c083015260e086013560e08301526101008087013581840152506101208087013581840152506101406102688188016100a3565b9083015261016061027a8782016100a3565b9083015261018061028c8782016100a3565b908301526101a061029f888883016100bf565b9083015290935084013567ffffffffffffffff8111156102be57600080fd5b6102ca86828701610125565b9250506102408401359050925092509256fea26469706673582212209702061f8478156208a73b811decff7a8c548db112e716d6342a24f89d699d4464736f6c63430008140033",
        "sourceMap": "2940:241:136:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3013:166;;;;;;:::i;:::-;3136:7;3013:166;;;;;;;;;-1:-1:-1;;;;;3814:32:234;;;3796:51;;3784:2;3769:18;3013:166:136;;;;;;;14:127:234;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;292:18;277:34;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:181::-;477:20;;-1:-1:-1;;;;;526:31:234;;516:42;;506:70;;572:1;569;562:12;506:70;401:181;;;:::o;587:601::-;638:5;686:4;674:9;669:3;665:19;661:30;658:50;;;704:1;701;694:12;658:50;737:2;731:9;779:4;771:6;767:17;850:6;838:10;835:22;814:18;802:10;799:34;796:62;793:88;;;861:18;;:::i;:::-;901:10;897:2;890:22;;930:6;921:15;;973:9;960:23;952:6;945:39;1045:2;1034:9;1030:18;1017:32;1012:2;1004:6;1000:15;993:57;1111:2;1100:9;1096:18;1083:32;1078:2;1070:6;1066:15;1059:57;1177:2;1166:9;1162:18;1149:32;1144:2;1136:6;1132:15;1125:57;;587:601;;;;:::o;1193:718::-;1235:5;1288:3;1281:4;1273:6;1269:17;1265:27;1255:55;;1306:1;1303;1296:12;1255:55;1342:6;1329:20;1368:18;1405:2;1401;1398:10;1395:36;;;1411:18;;:::i;:::-;1486:2;1480:9;1454:2;1540:13;;-1:-1:-1;;1536:22:234;;;1560:2;1532:31;1528:40;1516:53;;;1584:18;;;1604:22;;;1581:46;1578:72;;;1630:18;;:::i;:::-;1670:10;1666:2;1659:22;1705:2;1697:6;1690:18;1751:3;1744:4;1739:2;1731:6;1727:15;1723:26;1720:35;1717:55;;;1768:1;1765;1758:12;1717:55;1832:2;1825:4;1817:6;1813:17;1806:4;1798:6;1794:17;1781:54;1879:1;1872:4;1867:2;1859:6;1855:15;1851:26;1844:37;1899:6;1890:15;;;;;;1193:718;;;;:::o;1916:1729::-;2031:6;2039;2047;2091:9;2082:7;2078:23;2121:3;2117:2;2113:12;2110:32;;;2138:1;2135;2128:12;2110:32;2161:6;2187:2;2183;2179:11;2176:31;;;2203:1;2200;2193:12;2176:31;2229:17;;:::i;:::-;2216:30;;2269:37;2296:9;2269:37;:::i;:::-;2262:5;2255:52;2339:46;2381:2;2370:9;2366:18;2339:46;:::i;:::-;2334:2;2327:5;2323:14;2316:70;2418:46;2460:2;2449:9;2445:18;2418:46;:::i;:::-;2413:2;2406:5;2402:14;2395:70;2525:2;2514:9;2510:18;2497:32;2492:2;2485:5;2481:14;2474:56;2591:3;2580:9;2576:19;2563:33;2557:3;2550:5;2546:15;2539:58;2658:3;2647:9;2643:19;2630:33;2624:3;2617:5;2613:15;2606:58;2725:3;2714:9;2710:19;2697:33;2691:3;2684:5;2680:15;2673:58;2792:3;2781:9;2777:19;2764:33;2758:3;2751:5;2747:15;2740:58;2817:3;2880:2;2869:9;2865:18;2852:32;2847:2;2840:5;2836:14;2829:56;;2904:3;2967:2;2956:9;2952:18;2939:32;2934:2;2927:5;2923:14;2916:56;;2991:3;3026:46;3068:2;3057:9;3053:18;3026:46;:::i;:::-;3010:14;;;3003:70;3092:3;3127:46;3154:18;;;3127:46;:::i;:::-;3111:14;;;3104:70;3193:3;3228:46;3255:18;;;3228:46;:::i;:::-;3212:14;;;3205:70;3294:3;3329:51;3372:7;3352:18;;;3329:51;:::i;:::-;3313:14;;;3306:75;3317:5;;-1:-1:-1;3441:18:234;;3428:32;3483:18;3472:30;;3469:50;;;3515:1;3512;3505:12;3469:50;3538:49;3579:7;3570:6;3559:9;3555:22;3538:49;:::i;:::-;3528:59;;;3634:3;3623:9;3619:19;3606:33;3596:43;;1916:1729;;;;;:::o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "deploy((address,address,address,bytes32,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,(uint256,uint256,uint256,uint256)),bytes,bytes32)": "195d4bfc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"},{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"deploy\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdriveDeployer.sol\":\"MockHyperdriveTargetDeployer\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec\",\"dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6\",\"dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c\",\"dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0\",\"dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol\":{\"keccak256\":\"0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58\",\"dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IHyperdriveTargetDeployer.sol\":{\"keccak256\":\"0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed\",\"dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0\",\"dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES\"]},\"contracts/test/MockHyperdriveDeployer.sol\":{\"keccak256\":\"0xa31fdb8f91a8001765f21d884b33c43f5f55031bfe0368274f35b5cf807e640d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae009856a3413f33deb2ccc591fb5c35862da23c68c8baf9bce340db4b706d12\",\"dweb:/ipfs/QmSFT91mBam3EzyWpqkwPAbSKVZVLnzLeRBSscWcBPbaEo\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "contract IERC20",
                                    "name": "vaultSharesToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "sweepCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "deploy",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
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
                "contracts/test/MockHyperdriveDeployer.sol": "MockHyperdriveTargetDeployer"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4",
                "urls": [
                    "bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10",
                    "dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92",
                "urls": [
                    "bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206",
                    "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf",
                "urls": [
                    "bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec",
                    "dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39",
                "urls": [
                    "bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6",
                    "dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78",
                "urls": [
                    "bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c",
                    "dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget4.sol": {
                "keccak256": "0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f",
                "urls": [
                    "bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0",
                    "dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM"
                ],
                "license": "Apache-2.0"
            },
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
            "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol": {
                "keccak256": "0xe7bf783c896c0c519f4872a4f21d9279d9913a7dc124dd9c1b7d2ffd7c5e61cc",
                "urls": [
                    "bzz-raw://5d0f7bc4f5cccaea086cee416479d0a7aaf919220a92b9fb74cca7fdcfb58d58",
                    "dweb:/ipfs/QmPhKYBLix7tiEPq32mVNmFJkkzeTSt2qGQA7LWh8DM3Ru"
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
            "contracts/src/interfaces/IHyperdriveTargetDeployer.sol": {
                "keccak256": "0x7845ba86a634960ea10cc90004de897d994c5519ed382c7b6c7571447e30e205",
                "urls": [
                    "bzz-raw://00f26f094a5fe200d17030b43bcce07c1374ef1e1bd24acd9617c93ec746b0ed",
                    "dweb:/ipfs/QmR7PkD3vAJX8d7psiduNuQhExvBFBsUjp9ZTiWNCPJiss"
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
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8",
                "urls": [
                    "bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd",
                    "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3",
                "urls": [
                    "bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186",
                    "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7",
                "urls": [
                    "bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334",
                    "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488",
                "urls": [
                    "bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4",
                    "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc",
                "urls": [
                    "bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4",
                    "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c",
                "urls": [
                    "bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c",
                    "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e",
                "urls": [
                    "bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19",
                    "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Constants.sol": {
                "keccak256": "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d",
                "urls": [
                    "bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418",
                    "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb",
                "urls": [
                    "bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c",
                    "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424",
                "urls": [
                    "bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a",
                    "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189",
                "urls": [
                    "bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786",
                    "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"
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
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e",
                "urls": [
                    "bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797",
                    "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/ERC20Mintable.sol": {
                "keccak256": "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5",
                "urls": [
                    "bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48",
                    "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockHyperdrive.sol": {
                "keccak256": "0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500",
                "urls": [
                    "bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0",
                    "dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockHyperdriveDeployer.sol": {
                "keccak256": "0xa31fdb8f91a8001765f21d884b33c43f5f55031bfe0368274f35b5cf807e640d",
                "urls": [
                    "bzz-raw://ae009856a3413f33deb2ccc591fb5c35862da23c68c8baf9bce340db4b706d12",
                    "dweb:/ipfs/QmSFT91mBam3EzyWpqkwPAbSKVZVLnzLeRBSscWcBPbaEo"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            },
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
                "urls": [
                    "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
                    "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "test/utils/HyperdriveUtils.sol": {
                "keccak256": "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04",
                "urls": [
                    "bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6",
                    "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockHyperdriveDeployer.sol",
        "id": 25581,
        "exportedSymbols": {
            "IERC20": [
                9666
            ],
            "IHyperdrive": [
                10351
            ],
            "IHyperdriveDeployerCoordinator": [
                10684
            ],
            "IHyperdriveTargetDeployer": [
                11236
            ],
            "MockHyperdrive": [
                25235
            ],
            "MockHyperdriveDeployer": [
                25559
            ],
            "MockHyperdriveTargetDeployer": [
                25580
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3143:136",
        "nodes": [
            {
                "id": 25326,
                "nodeType": "PragmaDirective",
                "src": "39:23:136",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 25328,
                "nodeType": "ImportDirective",
                "src": "64:61:136",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "contracts/src/interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25581,
                "sourceUnit": 9667,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25327,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9666,
                            "src": "73:6:136",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25330,
                "nodeType": "ImportDirective",
                "src": "126:71:136",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25581,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25329,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "135:11:136",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25332,
                "nodeType": "ImportDirective",
                "src": "198:109:136",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol",
                "file": "contracts/src/interfaces/IHyperdriveDeployerCoordinator.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25581,
                "sourceUnit": 10685,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25331,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10684,
                            "src": "207:30:136",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25334,
                "nodeType": "ImportDirective",
                "src": "308:99:136",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveTargetDeployer.sol",
                "file": "contracts/src/interfaces/IHyperdriveTargetDeployer.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25581,
                "sourceUnit": 11237,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25333,
                            "name": "IHyperdriveTargetDeployer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11236,
                            "src": "317:25:136",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25336,
                "nodeType": "ImportDirective",
                "src": "408:54:136",
                "nodes": [],
                "absolutePath": "contracts/test/MockHyperdrive.sol",
                "file": "./MockHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25581,
                "sourceUnit": 25325,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 25335,
                            "name": "MockHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25235,
                            "src": "417:14:136",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 25559,
                "nodeType": "ContractDefinition",
                "src": "464:2351:136",
                "nodes": [
                    {
                        "id": 25344,
                        "nodeType": "VariableDeclaration",
                        "src": "536:69:136",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_deployments",
                        "nameLocation": "593:12:136",
                        "scope": 25559,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_address_$_$",
                            "typeString": "mapping(address => mapping(bytes32 => address))"
                        },
                        "typeName": {
                            "id": 25343,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 25339,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "544:7:136",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "536:47:136",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_address_$_$",
                                "typeString": "mapping(address => mapping(bytes32 => address))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 25342,
                                "keyName": "",
                                "keyNameLocation": "-1:-1:-1",
                                "keyType": {
                                    "id": 25340,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "563:7:136",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "555:27:136",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                                    "typeString": "mapping(bytes32 => address)"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 25341,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "574:7:136",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 25470,
                        "nodeType": "FunctionDefinition",
                        "src": "612:1254:136",
                        "nodes": [],
                        "body": {
                            "id": 25469,
                            "nodeType": "Block",
                            "src": "790:1076:136",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        25362
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 25362,
                                            "mutability": "mutable",
                                            "name": "_config",
                                            "nameLocation": "830:7:136",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 25469,
                                            "src": "800:37:136",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolConfig"
                                            },
                                            "typeName": {
                                                "id": 25361,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 25360,
                                                    "name": "IHyperdrive.PoolConfig",
                                                    "nameLocations": [
                                                        "800:11:136",
                                                        "812:10:136"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10154,
                                                    "src": "800:22:136"
                                                },
                                                "referencedDeclaration": 10154,
                                                "src": "800:22:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25363,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "800:37:136"
                                },
                                {
                                    "expression": {
                                        "id": 25369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25364,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "890:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25366,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "898:9:136",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10112,
                                            "src": "890:17:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25367,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "910:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25368,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "924:9:136",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10069,
                                            "src": "910:23:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "890:43:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 25370,
                                    "nodeType": "ExpressionStatement",
                                    "src": "890:43:136"
                                },
                                {
                                    "expression": {
                                        "id": 25376,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25371,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "943:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25373,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "951:13:136",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10119,
                                            "src": "943:21:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25374,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "967:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25375,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "981:13:136",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10076,
                                            "src": "967:27:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "943:51:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 25377,
                                    "nodeType": "ExpressionStatement",
                                    "src": "943:51:136"
                                },
                                {
                                    "expression": {
                                        "id": 25383,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25378,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1004:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25380,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1012:14:136",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10122,
                                            "src": "1004:22:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25381,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1029:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25382,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1043:14:136",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10079,
                                            "src": "1029:28:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "1004:53:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 25384,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1004:53:136"
                                },
                                {
                                    "expression": {
                                        "id": 25390,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25385,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1067:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25387,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1075:20:136",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10128,
                                            "src": "1067:28:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25388,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1098:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25389,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1112:20:136",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10082,
                                            "src": "1098:34:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1067:65:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25391,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1067:65:136"
                                },
                                {
                                    "expression": {
                                        "id": 25397,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25392,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1142:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25394,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1150:24:136",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10131,
                                            "src": "1142:32:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25395,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1177:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25396,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1204:24:136",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10085,
                                            "src": "1177:51:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1142:86:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25398,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1142:86:136"
                                },
                                {
                                    "expression": {
                                        "id": 25404,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25399,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1238:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25401,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1246:16:136",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10134,
                                            "src": "1238:24:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25402,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1265:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25403,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1279:16:136",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10088,
                                            "src": "1265:30:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1238:57:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25405,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1238:57:136"
                                },
                                {
                                    "expression": {
                                        "id": 25411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25406,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1305:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25408,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1313:18:136",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10137,
                                            "src": "1305:26:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25409,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1334:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25410,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1348:18:136",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10091,
                                            "src": "1334:32:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1305:61:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25412,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1305:61:136"
                                },
                                {
                                    "expression": {
                                        "id": 25418,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25413,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1376:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25415,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1384:11:136",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10140,
                                            "src": "1376:19:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25416,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1398:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25417,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1412:11:136",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10094,
                                            "src": "1398:25:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1376:47:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25419,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1376:47:136"
                                },
                                {
                                    "expression": {
                                        "id": 25425,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25420,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1433:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25422,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1441:10:136",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10143,
                                            "src": "1433:18:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25423,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1454:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25424,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1468:10:136",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10097,
                                            "src": "1454:24:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1433:45:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 25426,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1433:45:136"
                                },
                                {
                                    "expression": {
                                        "id": 25432,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25427,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1488:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25429,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1496:12:136",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10146,
                                            "src": "1488:20:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25430,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1511:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25431,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1525:12:136",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10100,
                                            "src": "1511:26:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1488:49:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 25433,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1488:49:136"
                                },
                                {
                                    "expression": {
                                        "id": 25439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25434,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1547:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25436,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1555:4:136",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10153,
                                            "src": "1547:12:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 25437,
                                                "name": "_deployConfig",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25349,
                                                "src": "1562:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolDeployConfig memory"
                                                }
                                            },
                                            "id": 25438,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1576:4:136",
                                            "memberName": "fees",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10107,
                                            "src": "1562:18:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                                "typeString": "struct IHyperdrive.Fees memory"
                                            }
                                        },
                                        "src": "1547:33:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Fees_$10065_memory_ptr",
                                            "typeString": "struct IHyperdrive.Fees memory"
                                        }
                                    },
                                    "id": 25440,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1547:33:136"
                                },
                                {
                                    "expression": {
                                        "id": 25445,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25441,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25362,
                                                "src": "1590:7:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 25443,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "1598:22:136",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10125,
                                            "src": "1590:30:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "31653138",
                                            "id": 25444,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1623:4:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                                "typeString": "int_const 1000000000000000000"
                                            },
                                            "value": "1e18"
                                        },
                                        "src": "1590:37:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 25446,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1590:37:136"
                                },
                                {
                                    "assignments": [
                                        25448
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 25448,
                                            "mutability": "mutable",
                                            "name": "hyperdrive",
                                            "nameLocation": "1720:10:136",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 25469,
                                            "src": "1712:18:136",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 25447,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1712:7:136",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25457,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 25454,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25362,
                                                        "src": "1760:7:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 25453,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "1741:18:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdrive_$25235_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdrive)"
                                                    },
                                                    "typeName": {
                                                        "id": 25452,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 25451,
                                                            "name": "MockHyperdrive",
                                                            "nameLocations": [
                                                                "1745:14:136"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25235,
                                                            "src": "1745:14:136"
                                                        },
                                                        "referencedDeclaration": 25235,
                                                        "src": "1745:14:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                            "typeString": "contract MockHyperdrive"
                                                        }
                                                    }
                                                },
                                                "id": 25455,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1741:27:136",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                    "typeString": "contract MockHyperdrive"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                    "typeString": "contract MockHyperdrive"
                                                }
                                            ],
                                            "id": 25450,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1733:7:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 25449,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1733:7:136",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 25456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1733:36:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1712:57:136"
                                },
                                {
                                    "expression": {
                                        "id": 25465,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 25458,
                                                    "name": "_deployments",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25344,
                                                    "src": "1779:12:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_address_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => address))"
                                                    }
                                                },
                                                "id": 25462,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 25459,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1792:3:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 25460,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1796:6:136",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1792:10:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1779:24:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                                                    "typeString": "mapping(bytes32 => address)"
                                                }
                                            },
                                            "id": 25463,
                                            "indexExpression": {
                                                "id": 25461,
                                                "name": "_deploymentId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25346,
                                                "src": "1804:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1779:39:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25464,
                                            "name": "hyperdrive",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25448,
                                            "src": "1821:10:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1779:52:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 25466,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1779:52:136"
                                },
                                {
                                    "expression": {
                                        "id": 25467,
                                        "name": "hyperdrive",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25448,
                                        "src": "1849:10:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 25357,
                                    "id": 25468,
                                    "nodeType": "Return",
                                    "src": "1842:17:136"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10649
                        ],
                        "functionSelector": "1ae6f515",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "621:6:136",
                        "parameters": {
                            "id": 25354,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25346,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "645:13:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25470,
                                    "src": "637:21:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25345,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "637:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25349,
                                    "mutability": "mutable",
                                    "name": "_deployConfig",
                                    "nameLocation": "704:13:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25470,
                                    "src": "668:49:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 25348,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25347,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "668:11:136",
                                                "680:16:136"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "668:28:136"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "668:28:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25351,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25470,
                                    "src": "727:12:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 25350,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "727:5:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25353,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25470,
                                    "src": "749:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25352,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "749:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "627:135:136"
                        },
                        "returnParameters": {
                            "id": 25357,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25356,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25470,
                                    "src": "781:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 25355,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "781:7:136",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "780:9:136"
                        },
                        "scope": 25559,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25492,
                        "nodeType": "FunctionDefinition",
                        "src": "2003:219:136",
                        "nodes": [],
                        "body": {
                            "id": 25491,
                            "nodeType": "Block",
                            "src": "2188:34:136",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "30",
                                                "id": 25488,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2213:1:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                }
                                            ],
                                            "id": 25487,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "2205:7:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 25486,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2205:7:136",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 25489,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2205:10:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 25485,
                                    "id": 25490,
                                    "nodeType": "Return",
                                    "src": "2198:17:136"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10666
                        ],
                        "functionSelector": "0b3c4f86",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deployTarget",
                        "nameLocation": "2012:12:136",
                        "parameters": {
                            "id": 25482,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25472,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2034:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25471,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2034:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25475,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2051:35:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolDeployConfig"
                                    },
                                    "typeName": {
                                        "id": 25474,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25473,
                                            "name": "IHyperdrive.PoolDeployConfig",
                                            "nameLocations": [
                                                "2051:11:136",
                                                "2063:16:136"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10108,
                                            "src": "2051:28:136"
                                        },
                                        "referencedDeclaration": 10108,
                                        "src": "2051:28:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolDeployConfig_$10108_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolDeployConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25477,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2096:12:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 25476,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2096:5:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25479,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2118:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25478,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2118:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25481,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2135:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25480,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2024:124:136"
                        },
                        "returnParameters": {
                            "id": 25485,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25484,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2180:6:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25492,
                                    "src": "2172:14:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 25483,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2172:7:136",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2171:16:136"
                        },
                        "scope": 25559,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25558,
                        "nodeType": "FunctionDefinition",
                        "src": "2228:585:136",
                        "nodes": [],
                        "body": {
                            "id": 25557,
                            "nodeType": "Block",
                            "src": "2439:374:136",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        25510
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 25510,
                                            "mutability": "mutable",
                                            "name": "hyperdrive",
                                            "nameLocation": "2461:10:136",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 25557,
                                            "src": "2449:22:136",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                "typeString": "contract IHyperdrive"
                                            },
                                            "typeName": {
                                                "id": 25509,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 25508,
                                                    "name": "IHyperdrive",
                                                    "nameLocations": [
                                                        "2449:11:136"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10351,
                                                    "src": "2449:11:136"
                                                },
                                                "referencedDeclaration": 10351,
                                                "src": "2449:11:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                    "typeString": "contract IHyperdrive"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25519,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "baseExpression": {
                                                    "baseExpression": {
                                                        "id": 25512,
                                                        "name": "_deployments",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25344,
                                                        "src": "2499:12:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_address_$_$",
                                                            "typeString": "mapping(address => mapping(bytes32 => address))"
                                                        }
                                                    },
                                                    "id": 25515,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 25513,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "2512:3:136",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 25514,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2516:6:136",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2512:10:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2499:24:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_address_$",
                                                        "typeString": "mapping(bytes32 => address)"
                                                    }
                                                },
                                                "id": 25517,
                                                "indexExpression": {
                                                    "id": 25516,
                                                    "name": "_deploymentId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25494,
                                                    "src": "2524:13:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2499:39:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 25511,
                                            "name": "IHyperdrive",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10351,
                                            "src": "2474:11:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                "typeString": "type(contract IHyperdrive)"
                                            }
                                        },
                                        "id": 25518,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2474:74:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                            "typeString": "contract IHyperdrive"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2449:99:136"
                                },
                                {
                                    "assignments": [
                                        25522
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 25522,
                                            "mutability": "mutable",
                                            "name": "baseToken",
                                            "nameLocation": "2565:9:136",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 25557,
                                            "src": "2558:16:136",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                "typeString": "contract IERC20"
                                            },
                                            "typeName": {
                                                "id": 25521,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 25520,
                                                    "name": "IERC20",
                                                    "nameLocations": [
                                                        "2558:6:136"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 9666,
                                                    "src": "2558:6:136"
                                                },
                                                "referencedDeclaration": 9666,
                                                "src": "2558:6:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25528,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "expression": {
                                                        "id": 25524,
                                                        "name": "hyperdrive",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25510,
                                                        "src": "2584:10:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                            "typeString": "contract IHyperdrive"
                                                        }
                                                    },
                                                    "id": 25525,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2595:9:136",
                                                    "memberName": "baseToken",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 11131,
                                                    "src": "2584:20:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                                                        "typeString": "function () view external returns (address)"
                                                    }
                                                },
                                                "id": 25526,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2584:22:136",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 25523,
                                            "name": "IERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9666,
                                            "src": "2577:6:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_IERC20_$9666_$",
                                                "typeString": "type(contract IERC20)"
                                            }
                                        },
                                        "id": 25527,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2577:30:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2558:49:136"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25532,
                                                "name": "_lp",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25496,
                                                "src": "2640:3:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 25535,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2653:4:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveDeployer_$25559",
                                                            "typeString": "contract MockHyperdriveDeployer"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveDeployer_$25559",
                                                            "typeString": "contract MockHyperdriveDeployer"
                                                        }
                                                    ],
                                                    "id": 25534,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2645:7:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 25533,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2645:7:136",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 25536,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2645:13:136",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 25537,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25498,
                                                "src": "2660:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 25529,
                                                "name": "baseToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25522,
                                                "src": "2617:9:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 25531,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2627:12:136",
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 9623,
                                            "src": "2617:22:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 25538,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2617:57:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 25539,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2617:57:136"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 25545,
                                                        "name": "hyperdrive",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 25510,
                                                        "src": "2710:10:136",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                            "typeString": "contract IHyperdrive"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                            "typeString": "contract IHyperdrive"
                                                        }
                                                    ],
                                                    "id": 25544,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2702:7:136",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 25543,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2702:7:136",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 25546,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2702:19:136",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 25547,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25498,
                                                "src": "2723:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 25540,
                                                "name": "baseToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25522,
                                                "src": "2684:9:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 25542,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2694:7:136",
                                            "memberName": "approve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 9601,
                                            "src": "2684:17:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 25548,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2684:53:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 25549,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2684:53:136"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25552,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25498,
                                                "src": "2776:13:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25553,
                                                "name": "_apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25500,
                                                "src": "2791:4:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25554,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25503,
                                                "src": "2797:8:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Options memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Options memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 25550,
                                                "name": "hyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25510,
                                                "src": "2754:10:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IHyperdrive_$10351",
                                                    "typeString": "contract IHyperdrive"
                                                }
                                            },
                                            "id": 25551,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2765:10:136",
                                            "memberName": "initialize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10438,
                                            "src": "2754:21:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_memory_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options memory) payable external returns (uint256)"
                                            }
                                        },
                                        "id": 25555,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2754:52:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25507,
                                    "id": 25556,
                                    "nodeType": "Return",
                                    "src": "2747:59:136"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10683
                        ],
                        "functionSelector": "16abfc70",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "2237:10:136",
                        "parameters": {
                            "id": 25504,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25494,
                                    "mutability": "mutable",
                                    "name": "_deploymentId",
                                    "nameLocation": "2265:13:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2257:21:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25493,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2257:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25496,
                                    "mutability": "mutable",
                                    "name": "_lp",
                                    "nameLocation": "2296:3:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2288:11:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 25495,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2288:7:136",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25498,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "2317:13:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2309:21:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25497,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2309:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25500,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "2348:4:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2340:12:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25499,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2340:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25503,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2389:8:136",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2362:35:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_memory_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 25502,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25501,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2362:11:136",
                                                "2374:7:136"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "2362:19:136"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "2362:19:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2247:156:136"
                        },
                        "returnParameters": {
                            "id": 25507,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25506,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25558,
                                    "src": "2430:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25505,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2430:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2429:9:136"
                        },
                        "scope": 25559,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25337,
                            "name": "IHyperdriveDeployerCoordinator",
                            "nameLocations": [
                                "499:30:136"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10684,
                            "src": "499:30:136"
                        },
                        "id": 25338,
                        "nodeType": "InheritanceSpecifier",
                        "src": "499:30:136"
                    }
                ],
                "canonicalName": "MockHyperdriveDeployer",
                "contractDependencies": [
                    25235
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25559,
                    10684
                ],
                "name": "MockHyperdriveDeployer",
                "nameLocation": "473:22:136",
                "scope": 25581,
                "usedErrors": [
                    10577,
                    10580,
                    10583,
                    10586,
                    10589,
                    10592,
                    10595,
                    10598,
                    10601,
                    10604,
                    10607,
                    10610,
                    10613,
                    10616,
                    10619,
                    10622,
                    10625,
                    10628,
                    10631,
                    10634
                ],
                "usedEvents": []
            },
            {
                "id": 25580,
                "nodeType": "ContractDefinition",
                "src": "2940:241:136",
                "nodes": [
                    {
                        "id": 25579,
                        "nodeType": "FunctionDefinition",
                        "src": "3013:166:136",
                        "nodes": [],
                        "body": {
                            "id": 25578,
                            "nodeType": "Block",
                            "src": "3145:34:136",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "30",
                                                "id": 25575,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3170:1:136",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                }
                                            ],
                                            "id": 25574,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3162:7:136",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 25573,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3162:7:136",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 25576,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3162:10:136",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 25572,
                                    "id": 25577,
                                    "nodeType": "Return",
                                    "src": "3155:17:136"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11235
                        ],
                        "functionSelector": "195d4bfc",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deploy",
                        "nameLocation": "3022:6:136",
                        "parameters": {
                            "id": 25569,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25564,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25579,
                                    "src": "3038:29:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25563,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25562,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "3038:11:136",
                                                "3050:10:136"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "3038:22:136"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "3038:22:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25566,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25579,
                                    "src": "3077:12:136",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 25565,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3077:5:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25568,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25579,
                                    "src": "3099:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25567,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3099:7:136",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3028:84:136"
                        },
                        "returnParameters": {
                            "id": 25572,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25571,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25579,
                                    "src": "3136:7:136",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 25570,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3136:7:136",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3135:9:136"
                        },
                        "scope": 25580,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25560,
                            "name": "IHyperdriveTargetDeployer",
                            "nameLocations": [
                                "2981:25:136"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11236,
                            "src": "2981:25:136"
                        },
                        "id": 25561,
                        "nodeType": "InheritanceSpecifier",
                        "src": "2981:25:136"
                    }
                ],
                "canonicalName": "MockHyperdriveTargetDeployer",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25580,
                    11236
                ],
                "name": "MockHyperdriveTargetDeployer",
                "nameLocation": "2949:28:136",
                "scope": 25581,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 136
};
