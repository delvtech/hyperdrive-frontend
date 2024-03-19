export declare const HyperdriveRegistry: {
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getHyperdriveInfo";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveInstance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "governance";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setHyperdriveInfo";
        readonly inputs: readonly [{
            readonly name: "_hyperdriveInstance";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_data";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateGovernance";
        readonly inputs: readonly [{
            readonly name: "_governance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "GovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "governance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HyperdriveInfoUpdated";
        readonly inputs: readonly [{
            readonly name: "hyperdrive";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea2646970667358221220987ec2846c66a3d272e84185f258a3cbe6630b6cc03e2bea8ed4739eade187a264736f6c63430008140033";
        readonly sourceMap: "296:1176:43:-:0;;;497:54;;;;;;;;;-1:-1:-1;521:10:43;:23;;-1:-1:-1;;;;;;521:23:43;534:10;521:23;;;296:1176;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea2646970667358221220987ec2846c66a3d272e84185f258a3cbe6630b6cc03e2bea8ed4739eade187a264736f6c63430008140033";
        readonly sourceMap: "296:1176:43:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1427:36:43;1401:7;1427:36;;;:15;:36;;;;;;;1299:171;;;;529:25:235;;;517:2;502:18;1299:171:43;;;;;;;;390:25;;;;;-1:-1:-1;;;;;390:25:43;;;;;;-1:-1:-1;;;;;729:32:235;;;711:51;;699:2;684:18;390:25:43;565:203:235;768:180:43;;;;;;:::i;:::-;;:::i;:::-;;1002:251;;;;;;:::i;:::-;;:::i;768:180::-;611:10;;-1:-1:-1;;;;;611:10:43;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:43;;;;;;;;;;;593:104;872:10:::1;:24:::0;;-1:-1:-1;;;;;;872:24:43::1;-1:-1:-1::0;;;;;872:24:43;::::1;::::0;;::::1;::::0;;911:30:::1;::::0;872:24;;911:30:::1;::::0;::::1;768:180:::0;:::o;1002:251::-;611:10;;-1:-1:-1;;;;;611:10:43;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:43;;;;;;;;;;;593:104;-1:-1:-1;;;;;1138:36:43;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1197:49;::::1;::::0;::::1;::::0;1177:5;529:25:235;;517:2;502:18;;383:177;1197:49:43::1;;;;;;;;1002:251:::0;;:::o;14:173:235:-;82:20;;-1:-1:-1;;;;;131:31:235;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:235:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:235:o";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "getHyperdriveInfo(address)": "32ddcb88";
        readonly "governance()": "5aa6e675";
        readonly "setHyperdriveInfo(address,uint256)": "be44e71a";
        readonly "updateGovernance(address)": "b2561263";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da\",\"dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "governance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "hyperdrive";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "data";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "HyperdriveInfoUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_hyperdriveInstance";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getHyperdriveInfo";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "governance";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_hyperdriveInstance";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_data";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setHyperdriveInfo";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_governance";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "updateGovernance";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "getHyperdriveInfo(address)": {
                        readonly params: {
                            readonly _hyperdriveInstance: "The hyperdrive instance address.";
                        };
                        readonly returns: {
                            readonly _0: "The uint256 value set by governance.";
                        };
                    };
                    readonly "setHyperdriveInfo(address,uint256)": {
                        readonly params: {
                            readonly _data: "The uint256 value to be set to convey information about the        instance.";
                            readonly _hyperdriveInstance: "The Hyperdrive instance address.";
                        };
                    };
                    readonly "updateGovernance(address)": {
                        readonly params: {
                            readonly _governance: "The new governance address.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "getHyperdriveInfo(address)": {
                        readonly notice: "Allows anyone to get the info for a hyperdrive instance.";
                    };
                    readonly "setHyperdriveInfo(address,uint256)": {
                        readonly notice: "Allows governance to set arbitrary info for a Hyperdrive         instance.";
                    };
                    readonly "updateGovernance(address)": {
                        readonly notice: "Allows governance to transfer the governance role.";
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
                readonly "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/factory/HyperdriveRegistry.sol": {
                readonly keccak256: "0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef";
                readonly urls: readonly ["bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da", "dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL"];
                readonly license: "Apache-2.0";
            };
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
            readonly "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                readonly keccak256: "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2";
                readonly urls: readonly ["bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99", "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRegistry.sol": {
                readonly keccak256: "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00";
                readonly urls: readonly ["bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168", "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"];
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
        readonly absolutePath: "contracts/src/factory/HyperdriveRegistry.sol";
        readonly id: 7730;
        readonly exportedSymbols: {
            readonly HyperdriveRegistry: readonly [7729];
            readonly IHyperdrive: readonly [11076];
            readonly IHyperdriveGovernedRegistry: readonly [11829];
            readonly IHyperdriveRegistry: readonly [11924];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1434:43";
        readonly nodes: readonly [{
            readonly id: 7633;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:43";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7635;
            readonly nodeType: "ImportDirective";
            readonly src: "64:60:43";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7730;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7634;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "73:11:43";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7637;
            readonly nodeType: "ImportDirective";
            readonly src: "125:92:43";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol";
            readonly file: "../interfaces/IHyperdriveGovernedRegistry.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7730;
            readonly sourceUnit: 11830;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7636;
                    readonly name: "IHyperdriveGovernedRegistry";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11829;
                    readonly src: "134:27:43";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7639;
            readonly nodeType: "ImportDirective";
            readonly src: "218:76:43";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveRegistry.sol";
            readonly file: "../interfaces/IHyperdriveRegistry.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7730;
            readonly sourceUnit: 11925;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7638;
                    readonly name: "IHyperdriveRegistry";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11924;
                    readonly src: "227:19:43";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7729;
            readonly nodeType: "ContractDefinition";
            readonly src: "296:1176:43";
            readonly nodes: readonly [{
                readonly id: 7645;
                readonly nodeType: "VariableDeclaration";
                readonly src: "390:25:43";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "5aa6e675";
                readonly mutability: "mutable";
                readonly name: "governance";
                readonly nameLocation: "405:10:43";
                readonly scope: 7729;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 7644;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "390:7:43";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 7649;
                readonly nodeType: "VariableDeclaration";
                readonly src: "422:68:43";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_hyperdriveInfo";
                readonly nameLocation: "475:15:43";
                readonly scope: 7729;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 7648;
                    readonly keyName: "hyperdrive";
                    readonly keyNameLocation: "438:10:43";
                    readonly keyType: {
                        readonly id: 7646;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "430:7:43";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "422:43:43";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "data";
                    readonly valueNameLocation: "460:4:43";
                    readonly valueType: {
                        readonly id: 7647;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "452:7:43";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 7658;
                readonly nodeType: "FunctionDefinition";
                readonly src: "497:54:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7657;
                    readonly nodeType: "Block";
                    readonly src: "511:40:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7655;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 7652;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7645;
                                readonly src: "521:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 7653;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "534:3:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 7654;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "538:6:43";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "534:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "521:23:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 7656;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "521:23:43";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 7650;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "508:2:43";
                };
                readonly returnParameters: {
                    readonly id: 7651;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "511:0:43";
                };
                readonly scope: 7729;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 7673;
                readonly nodeType: "ModifierDefinition";
                readonly src: "557:157:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7672;
                    readonly nodeType: "Block";
                    readonly src: "583:131:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 7663;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 7660;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "597:3:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 7661;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "601:6:43";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "597:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly id: 7662;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7645;
                                readonly src: "611:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "597:24:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 7670;
                        readonly nodeType: "IfStatement";
                        readonly src: "593:104:43";
                        readonly trueBody: {
                            readonly id: 7669;
                            readonly nodeType: "Block";
                            readonly src: "623:74:43";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 7664;
                                            readonly name: "IHyperdriveGovernedRegistry";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11829;
                                            readonly src: "644:27:43";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdriveGovernedRegistry_$11829_$";
                                                readonly typeString: "type(contract IHyperdriveGovernedRegistry)";
                                            };
                                        };
                                        readonly id: 7666;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "672:12:43";
                                        readonly memberName: "Unauthorized";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11814;
                                        readonly src: "644:40:43";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 7667;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "644:42:43";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 7668;
                                readonly nodeType: "RevertStatement";
                                readonly src: "637:49:43";
                            }];
                        };
                    }, {
                        readonly id: 7671;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "706:1:43";
                    }];
                };
                readonly name: "onlyGovernance";
                readonly nameLocation: "566:14:43";
                readonly parameters: {
                    readonly id: 7659;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "580:2:43";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 7691;
                readonly nodeType: "FunctionDefinition";
                readonly src: "768:180:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7690;
                    readonly nodeType: "Block";
                    readonly src: "862:86:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7684;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 7682;
                                readonly name: "governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7645;
                                readonly src: "872:10:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 7683;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7676;
                                readonly src: "885:11:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "872:24:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 7685;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "872:24:43";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 7687;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7676;
                                readonly src: "929:11:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 7686;
                                readonly name: "GovernanceUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 11804;
                                readonly src: "911:17:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$returns$__$";
                                    readonly typeString: "function (address)";
                                };
                            };
                            readonly id: 7688;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "911:30:43";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 7689;
                        readonly nodeType: "EmitStatement";
                        readonly src: "906:35:43";
                    }];
                };
                readonly baseFunctions: readonly [11820];
                readonly documentation: {
                    readonly id: 7674;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "720:43:43";
                    readonly text: "@inheritdoc IHyperdriveGovernedRegistry";
                };
                readonly functionSelector: "b2561263";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 7680;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 7679;
                        readonly name: "onlyGovernance";
                        readonly nameLocations: readonly ["847:14:43"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7673;
                        readonly src: "847:14:43";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "847:14:43";
                }];
                readonly name: "updateGovernance";
                readonly nameLocation: "777:16:43";
                readonly overrides: {
                    readonly id: 7678;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "838:8:43";
                };
                readonly parameters: {
                    readonly id: 7677;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7676;
                        readonly mutability: "mutable";
                        readonly name: "_governance";
                        readonly nameLocation: "811:11:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7691;
                        readonly src: "803:19:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7675;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "803:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "793:35:43";
                };
                readonly returnParameters: {
                    readonly id: 7681;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "862:0:43";
                };
                readonly scope: 7729;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7714;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1002:251:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7713;
                    readonly nodeType: "Block";
                    readonly src: "1128:125:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 7706;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 7702;
                                    readonly name: "_hyperdriveInfo";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 7649;
                                    readonly src: "1138:15:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                        readonly typeString: "mapping(address => uint256)";
                                    };
                                };
                                readonly id: 7704;
                                readonly indexExpression: {
                                    readonly id: 7703;
                                    readonly name: "_hyperdriveInstance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 7694;
                                    readonly src: "1154:19:43";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "1138:36:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 7705;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7696;
                                readonly src: "1177:5:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1138:44:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 7707;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1138:44:43";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly id: 7709;
                                readonly name: "_hyperdriveInstance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7694;
                                readonly src: "1219:19:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 7710;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7696;
                                readonly src: "1240:5:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 7708;
                                readonly name: "HyperdriveInfoUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 11811;
                                readonly src: "1197:21:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (address,uint256)";
                                };
                            };
                            readonly id: 7711;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1197:49:43";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 7712;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1192:54:43";
                    }];
                };
                readonly baseFunctions: readonly [11828];
                readonly documentation: {
                    readonly id: 7692;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "954:43:43";
                    readonly text: "@inheritdoc IHyperdriveGovernedRegistry";
                };
                readonly functionSelector: "be44e71a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 7700;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 7699;
                        readonly name: "onlyGovernance";
                        readonly nameLocations: readonly ["1113:14:43"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7673;
                        readonly src: "1113:14:43";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1113:14:43";
                }];
                readonly name: "setHyperdriveInfo";
                readonly nameLocation: "1011:17:43";
                readonly overrides: {
                    readonly id: 7698;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "1104:8:43";
                };
                readonly parameters: {
                    readonly id: 7697;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7694;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "1046:19:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7714;
                        readonly src: "1038:27:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7693;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1038:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 7696;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "1083:5:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7714;
                        readonly src: "1075:13:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7695;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1075:7:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1028:66:43";
                };
                readonly returnParameters: {
                    readonly id: 7701;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1128:0:43";
                };
                readonly scope: 7729;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7728;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1299:171:43";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7727;
                    readonly nodeType: "Block";
                    readonly src: "1410:60:43";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly baseExpression: {
                                readonly id: 7723;
                                readonly name: "_hyperdriveInfo";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7649;
                                readonly src: "1427:15:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                    readonly typeString: "mapping(address => uint256)";
                                };
                            };
                            readonly id: 7725;
                            readonly indexExpression: {
                                readonly id: 7724;
                                readonly name: "_hyperdriveInstance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 7717;
                                readonly src: "1443:19:43";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "1427:36:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 7722;
                        readonly id: 7726;
                        readonly nodeType: "Return";
                        readonly src: "1420:43:43";
                    }];
                };
                readonly baseFunctions: readonly [11923];
                readonly documentation: {
                    readonly id: 7715;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1259:35:43";
                    readonly text: "@inheritdoc IHyperdriveRegistry";
                };
                readonly functionSelector: "32ddcb88";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getHyperdriveInfo";
                readonly nameLocation: "1308:17:43";
                readonly overrides: {
                    readonly id: 7719;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "1383:8:43";
                };
                readonly parameters: {
                    readonly id: 7718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7717;
                        readonly mutability: "mutable";
                        readonly name: "_hyperdriveInstance";
                        readonly nameLocation: "1343:19:43";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7728;
                        readonly src: "1335:27:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7716;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1335:7:43";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1325:43:43";
                };
                readonly returnParameters: {
                    readonly id: 7722;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7721;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7728;
                        readonly src: "1401:7:43";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 7720;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1401:7:43";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1400:9:43";
                };
                readonly scope: 7729;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 7640;
                    readonly name: "IHyperdriveRegistry";
                    readonly nameLocations: readonly ["331:19:43"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11924;
                    readonly src: "331:19:43";
                };
                readonly id: 7641;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "331:19:43";
            }, {
                readonly baseName: {
                    readonly id: 7642;
                    readonly name: "IHyperdriveGovernedRegistry";
                    readonly nameLocations: readonly ["356:27:43"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11829;
                    readonly src: "356:27:43";
                };
                readonly id: 7643;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "356:27:43";
            }];
            readonly canonicalName: "HyperdriveRegistry";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [7729, 11829, 11924];
            readonly name: "HyperdriveRegistry";
            readonly nameLocation: "305:18:43";
            readonly scope: 7730;
            readonly usedErrors: readonly [11814];
            readonly usedEvents: readonly [11804, 11811];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 43;
};
//# sourceMappingURL=HyperdriveRegistry.d.ts.map