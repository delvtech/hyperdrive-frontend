export const HyperdriveStorage = {
    "abi": [
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_sweepCollector\":{\"details\":\"The address which collects swept tokens.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                    "name": "ReentrancyGuardReentrantCall"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "constructor": {
                        "params": {
                            "_config": "The configuration of the Hyperdrive pool."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "constructor": {
                        "notice": "Instantiates Hyperdrive's storage."
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
                "contracts/src/internal/HyperdriveStorage.sol": "HyperdriveStorage"
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
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
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
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a",
                "urls": [
                    "bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195",
                    "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "id": 18320,
        "exportedSymbols": {
            "FixedPointMath": [
                19394
            ],
            "HyperdriveMath": [
                20142
            ],
            "HyperdriveStorage": [
                18319
            ],
            "IERC20": [
                10319
            ],
            "IHyperdrive": [
                11028
            ],
            "ONE": [
                18628
            ],
            "ReentrancyGuard": [
                71995
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:6980:120",
        "nodes": [
            {
                "id": 18105,
                "nodeType": "PragmaDirective",
                "src": "39:23:120",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 18107,
                "nodeType": "ImportDirective",
                "src": "64:73:120",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
                "file": "openzeppelin/utils/ReentrancyGuard.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18320,
                "sourceUnit": 71996,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18106,
                            "name": "ReentrancyGuard",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71995,
                            "src": "73:15:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18109,
                "nodeType": "ImportDirective",
                "src": "138:50:120",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18320,
                "sourceUnit": 10320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18108,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10319,
                            "src": "147:6:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18111,
                "nodeType": "ImportDirective",
                "src": "189:60:120",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18320,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18110,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "198:11:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18114,
                "nodeType": "ImportDirective",
                "src": "250:70:120",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18320,
                "sourceUnit": 19395,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18112,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19394,
                            "src": "259:14:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 18113,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18628,
                            "src": "275:3:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18116,
                "nodeType": "ImportDirective",
                "src": "321:65:120",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 18320,
                "sourceUnit": 20143,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 18115,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20142,
                            "src": "330:14:120",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 18319,
                "nodeType": "ContractDefinition",
                "src": "701:6317:120",
                "nodes": [
                    {
                        "id": 18122,
                        "nodeType": "UsingForDirective",
                        "src": "762:33:120",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 18120,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "768:14:120"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19394,
                            "src": "768:14:120"
                        },
                        "typeName": {
                            "id": 18121,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "787:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 18126,
                        "nodeType": "VariableDeclaration",
                        "src": "850:36:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18123,
                            "nodeType": "StructuredDocumentation",
                            "src": "821:24:120",
                            "text": "@dev The base asset."
                        },
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "876:10:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$10319",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 18125,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 18124,
                                "name": "IERC20",
                                "nameLocations": [
                                    "850:6:120"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10319,
                                "src": "850:6:120"
                            },
                            "referencedDeclaration": 10319,
                            "src": "850:6:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$10319",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18129,
                        "nodeType": "VariableDeclaration",
                        "src": "985:46:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18127,
                            "nodeType": "StructuredDocumentation",
                            "src": "911:69:120",
                            "text": "@dev The amount of seconds between vault share price checkpoints."
                        },
                        "mutability": "immutable",
                        "name": "_checkpointDuration",
                        "nameLocation": "1012:19:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18128,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "985:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18132,
                        "nodeType": "VariableDeclaration",
                        "src": "1116:44:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18130,
                            "nodeType": "StructuredDocumentation",
                            "src": "1038:73:120",
                            "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
                        },
                        "mutability": "immutable",
                        "name": "_positionDuration",
                        "nameLocation": "1143:17:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18131,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1116:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18135,
                        "nodeType": "VariableDeclaration",
                        "src": "1238:39:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18133,
                            "nodeType": "StructuredDocumentation",
                            "src": "1167:66:120",
                            "text": "@dev A parameter that decreases slippage around a target rate."
                        },
                        "mutability": "immutable",
                        "name": "_timeStretch",
                        "nameLocation": "1265:12:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18134,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1238:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18138,
                        "nodeType": "VariableDeclaration",
                        "src": "1367:36:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18136,
                            "nodeType": "StructuredDocumentation",
                            "src": "1302:60:120",
                            "text": "@dev The LP fee applied to the curve portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_curveFee",
                        "nameLocation": "1394:9:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18137,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1367:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18141,
                        "nodeType": "VariableDeclaration",
                        "src": "1474:35:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18139,
                            "nodeType": "StructuredDocumentation",
                            "src": "1410:59:120",
                            "text": "@dev The LP fee applied to the flat portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_flatFee",
                        "nameLocation": "1501:8:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18140,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1474:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18144,
                        "nodeType": "VariableDeclaration",
                        "src": "1580:43:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18142,
                            "nodeType": "StructuredDocumentation",
                            "src": "1516:59:120",
                            "text": "@dev The portion of the LP fee that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceLPFee",
                        "nameLocation": "1607:16:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18143,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1580:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18147,
                        "nodeType": "VariableDeclaration",
                        "src": "1703:47:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18145,
                            "nodeType": "StructuredDocumentation",
                            "src": "1630:68:120",
                            "text": "@dev The portion of the zombie interest that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceZombieFee",
                        "nameLocation": "1730:20:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18146,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1703:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18150,
                        "nodeType": "VariableDeclaration",
                        "src": "1852:50:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18148,
                            "nodeType": "StructuredDocumentation",
                            "src": "1783:64:120",
                            "text": "@dev The vault share price at the time the pool was created."
                        },
                        "mutability": "immutable",
                        "name": "_initialVaultSharePrice",
                        "nameLocation": "1879:23:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18149,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1852:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18153,
                        "nodeType": "VariableDeclaration",
                        "src": "2198:48:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18151,
                            "nodeType": "StructuredDocumentation",
                            "src": "1909:284:120",
                            "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
                        },
                        "mutability": "immutable",
                        "name": "_minimumShareReserves",
                        "nameLocation": "2225:21:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18152,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2198:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18156,
                        "nodeType": "VariableDeclaration",
                        "src": "2354:52:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18154,
                            "nodeType": "StructuredDocumentation",
                            "src": "2253:96:120",
                            "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
                        },
                        "mutability": "immutable",
                        "name": "_minimumTransactionAmount",
                        "nameLocation": "2381:25:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18155,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2354:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18160,
                        "nodeType": "VariableDeclaration",
                        "src": "2560:45:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18157,
                            "nodeType": "StructuredDocumentation",
                            "src": "2413:142:120",
                            "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
                        },
                        "mutability": "mutable",
                        "name": "_marketState",
                        "nameLocation": "2593:12:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                            "typeString": "struct IHyperdrive.MarketState"
                        },
                        "typeName": {
                            "id": 18159,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 18158,
                                "name": "IHyperdrive.MarketState",
                                "nameLocations": [
                                    "2560:11:120",
                                    "2572:11:120"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10714,
                                "src": "2560:23:120"
                            },
                            "referencedDeclaration": 10714,
                            "src": "2560:23:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$10714_storage_ptr",
                                "typeString": "struct IHyperdrive.MarketState"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18164,
                        "nodeType": "VariableDeclaration",
                        "src": "2671:47:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18161,
                            "nodeType": "StructuredDocumentation",
                            "src": "2612:54:120",
                            "text": "@dev The state corresponding to the withdraw pool."
                        },
                        "mutability": "mutable",
                        "name": "_withdrawPool",
                        "nameLocation": "2705:13:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool"
                        },
                        "typeName": {
                            "id": 18163,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 18162,
                                "name": "IHyperdrive.WithdrawPool",
                                "nameLocations": [
                                    "2671:11:120",
                                    "2683:12:120"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10725,
                                "src": "2671:24:120"
                            },
                            "referencedDeclaration": 10725,
                            "src": "2671:24:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage_ptr",
                                "typeString": "struct IHyperdrive.WithdrawPool"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18170,
                        "nodeType": "VariableDeclaration",
                        "src": "3019:100:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18165,
                            "nodeType": "StructuredDocumentation",
                            "src": "2725:289:120",
                            "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values."
                        },
                        "mutability": "mutable",
                        "name": "_checkpoints",
                        "nameLocation": "3107:12:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10718_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                        },
                        "typeName": {
                            "id": 18169,
                            "keyName": "checkpointNumber",
                            "keyNameLocation": "3035:16:120",
                            "keyType": {
                                "id": 18166,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3027:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3019:70:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10718_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                            },
                            "valueName": "checkpoint",
                            "valueNameLocation": "3078:10:120",
                            "valueType": {
                                "id": 18168,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 18167,
                                    "name": "IHyperdrive.Checkpoint",
                                    "nameLocations": [
                                        "3055:11:120",
                                        "3067:10:120"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 10718,
                                    "src": "3055:22:120"
                                },
                                "referencedDeclaration": 10718,
                                "src": "3055:22:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Checkpoint_$10718_storage_ptr",
                                    "typeString": "struct IHyperdrive.Checkpoint"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18173,
                        "nodeType": "VariableDeclaration",
                        "src": "3202:30:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18171,
                            "nodeType": "StructuredDocumentation",
                            "src": "3145:52:120",
                            "text": "@dev The address which collects governance fees."
                        },
                        "mutability": "mutable",
                        "name": "_feeCollector",
                        "nameLocation": "3219:13:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 18172,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3202:7:120",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18176,
                        "nodeType": "VariableDeclaration",
                        "src": "3293:32:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18174,
                            "nodeType": "StructuredDocumentation",
                            "src": "3239:49:120",
                            "text": "@dev The address which collects swept tokens."
                        },
                        "mutability": "mutable",
                        "name": "_sweepCollector",
                        "nameLocation": "3310:15:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 18175,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3293:7:120",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18179,
                        "nodeType": "VariableDeclaration",
                        "src": "3386:28:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18177,
                            "nodeType": "StructuredDocumentation",
                            "src": "3332:49:120",
                            "text": "@dev The address that can pause the contract."
                        },
                        "mutability": "mutable",
                        "name": "_governance",
                        "nameLocation": "3403:11:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 18178,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3386:7:120",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18182,
                        "nodeType": "VariableDeclaration",
                        "src": "3505:39:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18180,
                            "nodeType": "StructuredDocumentation",
                            "src": "3421:79:120",
                            "text": "@dev Governance fees that haven't been collected yet denominated in shares."
                        },
                        "mutability": "mutable",
                        "name": "_governanceFeesAccrued",
                        "nameLocation": "3522:22:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 18181,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3505:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18187,
                        "nodeType": "VariableDeclaration",
                        "src": "3692:56:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18183,
                            "nodeType": "StructuredDocumentation",
                            "src": "3551:136:120",
                            "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
                        },
                        "mutability": "mutable",
                        "name": "_pausers",
                        "nameLocation": "3740:8:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 18186,
                            "keyName": "user",
                            "keyNameLocation": "3708:4:120",
                            "keyType": {
                                "id": 18184,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3700:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3692:38:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueName": "isPauser",
                            "valueNameLocation": "3721:8:120",
                            "valueType": {
                                "id": 18185,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "3716:4:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18190,
                        "nodeType": "VariableDeclaration",
                        "src": "3876:41:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18188,
                            "nodeType": "StructuredDocumentation",
                            "src": "3779:92:120",
                            "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
                        },
                        "mutability": "immutable",
                        "name": "_linkerFactory",
                        "nameLocation": "3903:14:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 18189,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3876:7:120",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18193,
                        "nodeType": "VariableDeclaration",
                        "src": "4036:42:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18191,
                            "nodeType": "StructuredDocumentation",
                            "src": "3924:107:120",
                            "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
                        },
                        "mutability": "immutable",
                        "name": "_linkerCodeHash",
                        "nameLocation": "4063:15:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 18192,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "4036:7:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18200,
                        "nodeType": "VariableDeclaration",
                        "src": "4130:96:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18194,
                            "nodeType": "StructuredDocumentation",
                            "src": "4085:40:120",
                            "text": "@dev Allows loading of each balance."
                        },
                        "mutability": "mutable",
                        "name": "_balanceOf",
                        "nameLocation": "4216:10:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 18199,
                            "keyName": "tokenId",
                            "keyNameLocation": "4146:7:120",
                            "keyType": {
                                "id": 18195,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4138:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4130:68:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 18198,
                                "keyName": "user",
                                "keyNameLocation": "4173:4:120",
                                "keyType": {
                                    "id": 18196,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4165:7:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4157:40:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueName": "balance",
                                "valueNameLocation": "4189:7:120",
                                "valueType": {
                                    "id": 18197,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4181:7:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18205,
                        "nodeType": "VariableDeclaration",
                        "src": "4283:64:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18201,
                            "nodeType": "StructuredDocumentation",
                            "src": "4233:45:120",
                            "text": "@dev Allows loading of each total supply."
                        },
                        "mutability": "mutable",
                        "name": "_totalSupply",
                        "nameLocation": "4335:12:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 18204,
                            "keyName": "tokenId",
                            "keyNameLocation": "4299:7:120",
                            "keyType": {
                                "id": 18202,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4291:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4283:42:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueName": "supply",
                            "valueNameLocation": "4318:6:120",
                            "valueType": {
                                "id": 18203,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4310:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18212,
                        "nodeType": "VariableDeclaration",
                        "src": "4400:102:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18206,
                            "nodeType": "StructuredDocumentation",
                            "src": "4354:41:120",
                            "text": "@dev Uniform approval for all tokens."
                        },
                        "mutability": "mutable",
                        "name": "_isApprovedForAll",
                        "nameLocation": "4485:17:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                        },
                        "typeName": {
                            "id": 18211,
                            "keyName": "from",
                            "keyNameLocation": "4416:4:120",
                            "keyType": {
                                "id": 18207,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4408:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4400:67:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                "typeString": "mapping(address => mapping(address => bool))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 18210,
                                "keyName": "caller",
                                "keyNameLocation": "4440:6:120",
                                "keyType": {
                                    "id": 18208,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4432:7:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4424:42:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                },
                                "valueName": "isApproved",
                                "valueNameLocation": "4455:10:120",
                                "valueType": {
                                    "id": 18209,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4450:4:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18221,
                        "nodeType": "VariableDeclaration",
                        "src": "4663:132:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18213,
                            "nodeType": "StructuredDocumentation",
                            "src": "4509:149:120",
                            "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
                        },
                        "mutability": "mutable",
                        "name": "_perTokenApprovals",
                        "nameLocation": "4777:18:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                            "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                        },
                        "typeName": {
                            "id": 18220,
                            "keyName": "tokenId",
                            "keyNameLocation": "4679:7:120",
                            "keyType": {
                                "id": 18214,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4671:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4663:96:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 18219,
                                "keyName": "from",
                                "keyNameLocation": "4706:4:120",
                                "keyType": {
                                    "id": 18215,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4698:7:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4690:68:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 18218,
                                    "keyName": "caller",
                                    "keyNameLocation": "4730:6:120",
                                    "keyType": {
                                        "id": 18216,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4722:7:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "4714:43:120",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                    },
                                    "valueName": "approved",
                                    "valueNameLocation": "4748:8:120",
                                    "valueType": {
                                        "id": 18217,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4740:7:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    }
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18226,
                        "nodeType": "VariableDeclaration",
                        "src": "4869:55:120",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 18222,
                            "nodeType": "StructuredDocumentation",
                            "src": "4802:62:120",
                            "text": "@dev A mapping to track the permitForAll signature nonces."
                        },
                        "mutability": "mutable",
                        "name": "_nonces",
                        "nameLocation": "4917:7:120",
                        "scope": 18319,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 18225,
                            "keyName": "user",
                            "keyNameLocation": "4885:4:120",
                            "keyType": {
                                "id": 18223,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4877:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4869:38:120",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "nonce",
                            "valueNameLocation": "4901:5:120",
                            "valueType": {
                                "id": 18224,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4893:7:120",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 18318,
                        "nodeType": "FunctionDefinition",
                        "src": "5072:1944:120",
                        "nodes": [],
                        "body": {
                            "id": 18317,
                            "nodeType": "Block",
                            "src": "5123:1893:120",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 18236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18233,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18126,
                                            "src": "5179:10:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$10319",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18234,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "5192:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18235,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5200:9:120",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10781,
                                            "src": "5192:17:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$10319",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "5179:30:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$10319",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 18237,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5179:30:120"
                                },
                                {
                                    "expression": {
                                        "id": 18241,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18238,
                                            "name": "_initialVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18150,
                                            "src": "5273:23:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18239,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "5299:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18240,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5307:22:120",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10790,
                                            "src": "5299:30:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5273:56:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18242,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5273:56:120"
                                },
                                {
                                    "expression": {
                                        "id": 18246,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18243,
                                            "name": "_minimumShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18153,
                                            "src": "5728:21:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18244,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "5752:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18245,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5760:20:120",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10793,
                                            "src": "5752:28:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5728:52:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18247,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5728:52:120"
                                },
                                {
                                    "expression": {
                                        "id": 18251,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18248,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18156,
                                            "src": "6040:25:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18249,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6068:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18250,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6076:24:120",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10796,
                                            "src": "6068:32:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6040:60:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18252,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6040:60:120"
                                },
                                {
                                    "expression": {
                                        "id": 18256,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18253,
                                            "name": "_checkpointDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18129,
                                            "src": "6261:19:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18254,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6283:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18255,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6291:18:120",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10802,
                                            "src": "6283:26:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6261:48:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18257,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6261:48:120"
                                },
                                {
                                    "expression": {
                                        "id": 18261,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18258,
                                            "name": "_positionDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18132,
                                            "src": "6319:17:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18259,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6339:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18260,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6347:16:120",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10799,
                                            "src": "6339:24:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6319:44:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18262,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6319:44:120"
                                },
                                {
                                    "expression": {
                                        "id": 18266,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18263,
                                            "name": "_timeStretch",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18135,
                                            "src": "6373:12:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18264,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6388:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18265,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6396:11:120",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10805,
                                            "src": "6388:19:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6373:34:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18267,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6373:34:120"
                                },
                                {
                                    "expression": {
                                        "id": 18272,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18268,
                                            "name": "_curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18138,
                                            "src": "6460:9:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "expression": {
                                                    "id": 18269,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18230,
                                                    "src": "6472:7:120",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 18270,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6480:4:120",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10818,
                                                "src": "6472:12:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 18271,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6485:5:120",
                                            "memberName": "curve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10728,
                                            "src": "6472:18:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6460:30:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18273,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6460:30:120"
                                },
                                {
                                    "expression": {
                                        "id": 18278,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18274,
                                            "name": "_flatFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18141,
                                            "src": "6500:8:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "expression": {
                                                    "id": 18275,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18230,
                                                    "src": "6511:7:120",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 18276,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6519:4:120",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10818,
                                                "src": "6511:12:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 18277,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6524:4:120",
                                            "memberName": "flat",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10731,
                                            "src": "6511:17:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6500:28:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18279,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6500:28:120"
                                },
                                {
                                    "expression": {
                                        "id": 18284,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18280,
                                            "name": "_governanceLPFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18144,
                                            "src": "6538:16:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "expression": {
                                                    "id": 18281,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18230,
                                                    "src": "6557:7:120",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 18282,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6565:4:120",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10818,
                                                "src": "6557:12:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 18283,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6570:12:120",
                                            "memberName": "governanceLP",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10734,
                                            "src": "6557:25:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6538:44:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18285,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6538:44:120"
                                },
                                {
                                    "expression": {
                                        "id": 18290,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18286,
                                            "name": "_governanceZombieFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18147,
                                            "src": "6592:20:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "expression": {
                                                    "id": 18287,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18230,
                                                    "src": "6615:7:120",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 18288,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6623:4:120",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10818,
                                                "src": "6615:12:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10738_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 18289,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6628:16:120",
                                            "memberName": "governanceZombie",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10737,
                                            "src": "6615:29:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6592:52:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 18291,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6592:52:120"
                                },
                                {
                                    "expression": {
                                        "id": 18295,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18292,
                                            "name": "_linkerFactory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18190,
                                            "src": "6704:14:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18293,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6721:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18294,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6729:13:120",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10784,
                                            "src": "6721:21:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6704:38:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 18296,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6704:38:120"
                                },
                                {
                                    "expression": {
                                        "id": 18300,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18297,
                                            "name": "_linkerCodeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18193,
                                            "src": "6752:15:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18298,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6770:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18299,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6778:14:120",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10787,
                                            "src": "6770:22:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "6752:40:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 18301,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6752:40:120"
                                },
                                {
                                    "expression": {
                                        "id": 18305,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18302,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18179,
                                            "src": "6881:11:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18303,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6895:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18304,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6903:10:120",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10808,
                                            "src": "6895:18:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6881:32:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 18306,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6881:32:120"
                                },
                                {
                                    "expression": {
                                        "id": 18310,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18307,
                                            "name": "_feeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18173,
                                            "src": "6923:13:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18308,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6939:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18309,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6947:12:120",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10811,
                                            "src": "6939:20:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6923:36:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 18311,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6923:36:120"
                                },
                                {
                                    "expression": {
                                        "id": 18315,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18312,
                                            "name": "_sweepCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18176,
                                            "src": "6969:15:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 18313,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18230,
                                                "src": "6987:7:120",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 18314,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6995:14:120",
                                            "memberName": "sweepCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10814,
                                            "src": "6987:22:120",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6969:40:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 18316,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6969:40:120"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 18227,
                            "nodeType": "StructuredDocumentation",
                            "src": "4956:111:120",
                            "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 18231,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 18230,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "5114:7:120",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 18318,
                                    "src": "5084:37:120",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10819_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 18229,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 18228,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "5084:11:120",
                                                "5096:10:120"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10819,
                                            "src": "5084:22:120"
                                        },
                                        "referencedDeclaration": 10819,
                                        "src": "5084:22:120",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10819_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5083:39:120"
                        },
                        "returnParameters": {
                            "id": 18232,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5123:0:120"
                        },
                        "scope": 18319,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 18118,
                            "name": "ReentrancyGuard",
                            "nameLocations": [
                                "740:15:120"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71995,
                            "src": "740:15:120"
                        },
                        "id": 18119,
                        "nodeType": "InheritanceSpecifier",
                        "src": "740:15:120"
                    }
                ],
                "canonicalName": "HyperdriveStorage",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 18117,
                    "nodeType": "StructuredDocumentation",
                    "src": "388:313:120",
                    "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    18319,
                    71995
                ],
                "name": "HyperdriveStorage",
                "nameLocation": "719:17:120",
                "scope": 18320,
                "usedErrors": [
                    71940
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 120
};
