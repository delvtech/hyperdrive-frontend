export const HyperdriveRegistry = {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "governance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "hyperdrive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                }
            ],
            "name": "HyperdriveInfoUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                }
            ],
            "name": "getHyperdriveInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "governance",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_data",
                    "type": "uint256"
                }
            ],
            "name": "setHyperdriveInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                }
            ],
            "name": "updateGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea2646970667358221220fe47f2c52a15d8dad1d9061fcc005372f2b575dacad6cabb572e64db7aad55d364736f6c63430008140033",
        "sourceMap": "296:1176:22:-:0;;;497:54;;;;;;;;;-1:-1:-1;521:10:22;:23;;-1:-1:-1;;;;;;521:23:22;534:10;521:23;;;296:1176;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea2646970667358221220fe47f2c52a15d8dad1d9061fcc005372f2b575dacad6cabb572e64db7aad55d364736f6c63430008140033",
        "sourceMap": "296:1176:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1299:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1427:36:22;1401:7;1427:36;;;:15;:36;;;;;;;1299:171;;;;529:25:182;;;517:2;502:18;1299:171:22;;;;;;;;390:25;;;;;-1:-1:-1;;;;;390:25:22;;;;;;-1:-1:-1;;;;;729:32:182;;;711:51;;699:2;684:18;390:25:22;565:203:182;768:180:22;;;;;;:::i;:::-;;:::i;:::-;;1002:251;;;;;;:::i;:::-;;:::i;768:180::-;611:10;;-1:-1:-1;;;;;611:10:22;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:22;;;;;;;;;;;593:104;872:10:::1;:24:::0;;-1:-1:-1;;;;;;872:24:22::1;-1:-1:-1::0;;;;;872:24:22;::::1;::::0;;::::1;::::0;;911:30:::1;::::0;872:24;;911:30:::1;::::0;::::1;768:180:::0;:::o;1002:251::-;611:10;;-1:-1:-1;;;;;611:10:22;597;:24;593:104;;644:42;;-1:-1:-1;;;644:42:22;;;;;;;;;;;593:104;-1:-1:-1;;;;;1138:36:22;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1197:49;::::1;::::0;::::1;::::0;1177:5;529:25:182;;517:2;502:18;;383:177;1197:49:22::1;;;;;;;;1002:251:::0;;:::o;14:173:182:-;82:20;;-1:-1:-1;;;;;131:31:182;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:182:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:182:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "getHyperdriveInfo(address)": "32ddcb88",
        "governance()": "5aa6e675",
        "setHyperdriveInfo(address,uint256)": "be44e71a",
        "updateGovernance(address)": "b2561263"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da\",\"dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "hyperdrive",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "data",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "HyperdriveInfoUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getHyperdriveInfo",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "governance",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_data",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setHyperdriveInfo"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_governance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateGovernance"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "params": {
                            "_hyperdriveInstance": "The hyperdrive instance address."
                        },
                        "returns": {
                            "_0": "The uint256 value set by governance."
                        }
                    },
                    "setHyperdriveInfo(address,uint256)": {
                        "params": {
                            "_data": "The uint256 value to be set to convey information about the        instance.",
                            "_hyperdriveInstance": "The Hyperdrive instance address."
                        }
                    },
                    "updateGovernance(address)": {
                        "params": {
                            "_governance": "The new governance address."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "notice": "Allows anyone to get the info for a hyperdrive instance."
                    },
                    "setHyperdriveInfo(address,uint256)": {
                        "notice": "Allows governance to set arbitrary info for a Hyperdrive         instance."
                    },
                    "updateGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
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
                "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/factory/HyperdriveRegistry.sol": {
                "keccak256": "0x6c378c57cdfc4987ddb1baa6e28ad020fca6d0f8749a2b2b214310032be20fef",
                "urls": [
                    "bzz-raw://905b35218a5214ec8757aa1bbbe36397a01b409fb09fa0a48c8dda88d26469da",
                    "dweb:/ipfs/QmNx6aWTVj42Em7Jmconvwa4irBQUdXypYLjeU1bfzsNmL"
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                "keccak256": "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2",
                "urls": [
                    "bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99",
                    "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRegistry.sol": {
                "keccak256": "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00",
                "urls": [
                    "bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168",
                    "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"
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
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/factory/HyperdriveRegistry.sol",
        "id": 5580,
        "exportedSymbols": {
            "HyperdriveRegistry": [
                5579
            ],
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveGovernedRegistry": [
                8287
            ],
            "IHyperdriveRegistry": [
                8382
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1434:22",
        "nodes": [
            {
                "id": 5483,
                "nodeType": "PragmaDirective",
                "src": "39:23:22",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 5485,
                "nodeType": "ImportDirective",
                "src": "64:60:22",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5580,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5484,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:22",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5487,
                "nodeType": "ImportDirective",
                "src": "125:92:22",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
                "file": "../interfaces/IHyperdriveGovernedRegistry.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5580,
                "sourceUnit": 8288,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5486,
                            "name": "IHyperdriveGovernedRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8287,
                            "src": "134:27:22",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5489,
                "nodeType": "ImportDirective",
                "src": "218:76:22",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
                "file": "../interfaces/IHyperdriveRegistry.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 5580,
                "sourceUnit": 8383,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 5488,
                            "name": "IHyperdriveRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8382,
                            "src": "227:19:22",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 5579,
                "nodeType": "ContractDefinition",
                "src": "296:1176:22",
                "nodes": [
                    {
                        "id": 5495,
                        "nodeType": "VariableDeclaration",
                        "src": "390:25:22",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "5aa6e675",
                        "mutability": "mutable",
                        "name": "governance",
                        "nameLocation": "405:10:22",
                        "scope": 5579,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 5494,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "390:7:22",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 5499,
                        "nodeType": "VariableDeclaration",
                        "src": "422:68:22",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hyperdriveInfo",
                        "nameLocation": "475:15:22",
                        "scope": 5579,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 5498,
                            "keyName": "hyperdrive",
                            "keyNameLocation": "438:10:22",
                            "keyType": {
                                "id": 5496,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "430:7:22",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "422:43:22",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "data",
                            "valueNameLocation": "460:4:22",
                            "valueType": {
                                "id": 5497,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "452:7:22",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 5508,
                        "nodeType": "FunctionDefinition",
                        "src": "497:54:22",
                        "nodes": [],
                        "body": {
                            "id": 5507,
                            "nodeType": "Block",
                            "src": "511:40:22",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 5505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 5502,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5495,
                                            "src": "521:10:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 5503,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "534:3:22",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 5504,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "538:6:22",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "534:10:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "521:23:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 5506,
                                    "nodeType": "ExpressionStatement",
                                    "src": "521:23:22"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 5500,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "508:2:22"
                        },
                        "returnParameters": {
                            "id": 5501,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "511:0:22"
                        },
                        "scope": 5579,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 5523,
                        "nodeType": "ModifierDefinition",
                        "src": "557:157:22",
                        "nodes": [],
                        "body": {
                            "id": 5522,
                            "nodeType": "Block",
                            "src": "583:131:22",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 5513,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 5510,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "597:3:22",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 5511,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "601:6:22",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "597:10:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 5512,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5495,
                                            "src": "611:10:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "597:24:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 5520,
                                    "nodeType": "IfStatement",
                                    "src": "593:104:22",
                                    "trueBody": {
                                        "id": 5519,
                                        "nodeType": "Block",
                                        "src": "623:74:22",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 5514,
                                                            "name": "IHyperdriveGovernedRegistry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 8287,
                                                            "src": "644:27:22",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveGovernedRegistry_$8287_$",
                                                                "typeString": "type(contract IHyperdriveGovernedRegistry)"
                                                            }
                                                        },
                                                        "id": 5516,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "672:12:22",
                                                        "memberName": "Unauthorized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 8272,
                                                        "src": "644:40:22",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 5517,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "644:42:22",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 5518,
                                                "nodeType": "RevertStatement",
                                                "src": "637:49:22"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 5521,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "706:1:22"
                                }
                            ]
                        },
                        "name": "onlyGovernance",
                        "nameLocation": "566:14:22",
                        "parameters": {
                            "id": 5509,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "580:2:22"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 5541,
                        "nodeType": "FunctionDefinition",
                        "src": "768:180:22",
                        "nodes": [],
                        "body": {
                            "id": 5540,
                            "nodeType": "Block",
                            "src": "862:86:22",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 5534,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 5532,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5495,
                                            "src": "872:10:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 5533,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5526,
                                            "src": "885:11:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "872:24:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 5535,
                                    "nodeType": "ExpressionStatement",
                                    "src": "872:24:22"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 5537,
                                                "name": "_governance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5526,
                                                "src": "929:11:22",
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
                                            "id": 5536,
                                            "name": "GovernanceUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8262,
                                            "src": "911:17:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 5538,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "911:30:22",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5539,
                                    "nodeType": "EmitStatement",
                                    "src": "906:35:22"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8278
                        ],
                        "documentation": {
                            "id": 5524,
                            "nodeType": "StructuredDocumentation",
                            "src": "720:43:22",
                            "text": "@inheritdoc IHyperdriveGovernedRegistry"
                        },
                        "functionSelector": "b2561263",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 5530,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 5529,
                                    "name": "onlyGovernance",
                                    "nameLocations": [
                                        "847:14:22"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5523,
                                    "src": "847:14:22"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "847:14:22"
                            }
                        ],
                        "name": "updateGovernance",
                        "nameLocation": "777:16:22",
                        "overrides": {
                            "id": 5528,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "838:8:22"
                        },
                        "parameters": {
                            "id": 5527,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5526,
                                    "mutability": "mutable",
                                    "name": "_governance",
                                    "nameLocation": "811:11:22",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5541,
                                    "src": "803:19:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5525,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "803:7:22",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "793:35:22"
                        },
                        "returnParameters": {
                            "id": 5531,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "862:0:22"
                        },
                        "scope": 5579,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5564,
                        "nodeType": "FunctionDefinition",
                        "src": "1002:251:22",
                        "nodes": [],
                        "body": {
                            "id": 5563,
                            "nodeType": "Block",
                            "src": "1128:125:22",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 5556,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 5552,
                                                "name": "_hyperdriveInfo",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5499,
                                                "src": "1138:15:22",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 5554,
                                            "indexExpression": {
                                                "id": 5553,
                                                "name": "_hyperdriveInstance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5544,
                                                "src": "1154:19:22",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1138:36:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 5555,
                                            "name": "_data",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5546,
                                            "src": "1177:5:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1138:44:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 5557,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1138:44:22"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 5559,
                                                "name": "_hyperdriveInstance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5544,
                                                "src": "1219:19:22",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 5560,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 5546,
                                                "src": "1240:5:22",
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
                                            "id": 5558,
                                            "name": "HyperdriveInfoUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8269,
                                            "src": "1197:21:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 5561,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1197:49:22",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 5562,
                                    "nodeType": "EmitStatement",
                                    "src": "1192:54:22"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8286
                        ],
                        "documentation": {
                            "id": 5542,
                            "nodeType": "StructuredDocumentation",
                            "src": "954:43:22",
                            "text": "@inheritdoc IHyperdriveGovernedRegistry"
                        },
                        "functionSelector": "be44e71a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 5550,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 5549,
                                    "name": "onlyGovernance",
                                    "nameLocations": [
                                        "1113:14:22"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5523,
                                    "src": "1113:14:22"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1113:14:22"
                            }
                        ],
                        "name": "setHyperdriveInfo",
                        "nameLocation": "1011:17:22",
                        "overrides": {
                            "id": 5548,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1104:8:22"
                        },
                        "parameters": {
                            "id": 5547,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5544,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "1046:19:22",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5564,
                                    "src": "1038:27:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5543,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1038:7:22",
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
                                    "id": 5546,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "1083:5:22",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5564,
                                    "src": "1075:13:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5545,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1075:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1028:66:22"
                        },
                        "returnParameters": {
                            "id": 5551,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1128:0:22"
                        },
                        "scope": 5579,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 5578,
                        "nodeType": "FunctionDefinition",
                        "src": "1299:171:22",
                        "nodes": [],
                        "body": {
                            "id": 5577,
                            "nodeType": "Block",
                            "src": "1410:60:22",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 5573,
                                            "name": "_hyperdriveInfo",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5499,
                                            "src": "1427:15:22",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 5575,
                                        "indexExpression": {
                                            "id": 5574,
                                            "name": "_hyperdriveInstance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5567,
                                            "src": "1443:19:22",
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
                                        "src": "1427:36:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 5572,
                                    "id": 5576,
                                    "nodeType": "Return",
                                    "src": "1420:43:22"
                                }
                            ]
                        },
                        "baseFunctions": [
                            8381
                        ],
                        "documentation": {
                            "id": 5565,
                            "nodeType": "StructuredDocumentation",
                            "src": "1259:35:22",
                            "text": "@inheritdoc IHyperdriveRegistry"
                        },
                        "functionSelector": "32ddcb88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getHyperdriveInfo",
                        "nameLocation": "1308:17:22",
                        "overrides": {
                            "id": 5569,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1383:8:22"
                        },
                        "parameters": {
                            "id": 5568,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5567,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "1343:19:22",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5578,
                                    "src": "1335:27:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 5566,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1335:7:22",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1325:43:22"
                        },
                        "returnParameters": {
                            "id": 5572,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5571,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 5578,
                                    "src": "1401:7:22",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 5570,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1401:7:22",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1400:9:22"
                        },
                        "scope": 5579,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 5490,
                            "name": "IHyperdriveRegistry",
                            "nameLocations": [
                                "331:19:22"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8382,
                            "src": "331:19:22"
                        },
                        "id": 5491,
                        "nodeType": "InheritanceSpecifier",
                        "src": "331:19:22"
                    },
                    {
                        "baseName": {
                            "id": 5492,
                            "name": "IHyperdriveGovernedRegistry",
                            "nameLocations": [
                                "356:27:22"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8287,
                            "src": "356:27:22"
                        },
                        "id": 5493,
                        "nodeType": "InheritanceSpecifier",
                        "src": "356:27:22"
                    }
                ],
                "canonicalName": "HyperdriveRegistry",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    5579,
                    8287,
                    8382
                ],
                "name": "HyperdriveRegistry",
                "nameLocation": "305:18:22",
                "scope": 5580,
                "usedErrors": [
                    8272
                ],
                "usedEvents": [
                    8262,
                    8269
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 22
};
