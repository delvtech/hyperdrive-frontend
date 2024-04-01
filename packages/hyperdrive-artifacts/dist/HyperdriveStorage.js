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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_sweepCollector\":{\"details\":\"The address which collects swept tokens.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_vaultSharesToken\":{\"details\":\"The vault shares asset.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
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
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4",
                "urls": [
                    "bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e",
                    "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"
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
        "id": 17991,
        "exportedSymbols": {
            "FixedPointMath": [
                19065
            ],
            "HyperdriveMath": [
                19813
            ],
            "HyperdriveStorage": [
                17990
            ],
            "IERC20": [
                9980
            ],
            "IHyperdrive": [
                10676
            ],
            "ONE": [
                18299
            ],
            "ReentrancyGuard": [
                71674
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:7140:118",
        "nodes": [
            {
                "id": 17767,
                "nodeType": "PragmaDirective",
                "src": "39:23:118",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 17769,
                "nodeType": "ImportDirective",
                "src": "64:73:118",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
                "file": "openzeppelin/utils/ReentrancyGuard.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17991,
                "sourceUnit": 71675,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17768,
                            "name": "ReentrancyGuard",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71674,
                            "src": "73:15:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17771,
                "nodeType": "ImportDirective",
                "src": "138:50:118",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17991,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17770,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "147:6:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17773,
                "nodeType": "ImportDirective",
                "src": "189:60:118",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17991,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17772,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "198:11:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17776,
                "nodeType": "ImportDirective",
                "src": "250:70:118",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17991,
                "sourceUnit": 19066,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17774,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19065,
                            "src": "259:14:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 17775,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18299,
                            "src": "275:3:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17778,
                "nodeType": "ImportDirective",
                "src": "321:65:118",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 17991,
                "sourceUnit": 19814,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 17777,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19813,
                            "src": "330:14:118",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 17990,
                "nodeType": "ContractDefinition",
                "src": "701:6477:118",
                "nodes": [
                    {
                        "id": 17784,
                        "nodeType": "UsingForDirective",
                        "src": "762:33:118",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 17782,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "768:14:118"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "768:14:118"
                        },
                        "typeName": {
                            "id": 17783,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "787:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 17788,
                        "nodeType": "VariableDeclaration",
                        "src": "850:36:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17785,
                            "nodeType": "StructuredDocumentation",
                            "src": "821:24:118",
                            "text": "@dev The base asset."
                        },
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "876:10:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$9980",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 17787,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 17786,
                                "name": "IERC20",
                                "nameLocations": [
                                    "850:6:118"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 9980,
                                "src": "850:6:118"
                            },
                            "referencedDeclaration": 9980,
                            "src": "850:6:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17792,
                        "nodeType": "VariableDeclaration",
                        "src": "930:43:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17789,
                            "nodeType": "StructuredDocumentation",
                            "src": "893:32:118",
                            "text": "@dev The vault shares asset."
                        },
                        "mutability": "immutable",
                        "name": "_vaultSharesToken",
                        "nameLocation": "956:17:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$9980",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 17791,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 17790,
                                "name": "IERC20",
                                "nameLocations": [
                                    "930:6:118"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 9980,
                                "src": "930:6:118"
                            },
                            "referencedDeclaration": 9980,
                            "src": "930:6:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17795,
                        "nodeType": "VariableDeclaration",
                        "src": "1072:46:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17793,
                            "nodeType": "StructuredDocumentation",
                            "src": "998:69:118",
                            "text": "@dev The amount of seconds between vault share price checkpoints."
                        },
                        "mutability": "immutable",
                        "name": "_checkpointDuration",
                        "nameLocation": "1099:19:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17794,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1072:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17798,
                        "nodeType": "VariableDeclaration",
                        "src": "1203:44:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17796,
                            "nodeType": "StructuredDocumentation",
                            "src": "1125:73:118",
                            "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
                        },
                        "mutability": "immutable",
                        "name": "_positionDuration",
                        "nameLocation": "1230:17:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17797,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1203:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17801,
                        "nodeType": "VariableDeclaration",
                        "src": "1325:39:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17799,
                            "nodeType": "StructuredDocumentation",
                            "src": "1254:66:118",
                            "text": "@dev A parameter that decreases slippage around a target rate."
                        },
                        "mutability": "immutable",
                        "name": "_timeStretch",
                        "nameLocation": "1352:12:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17800,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1325:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17804,
                        "nodeType": "VariableDeclaration",
                        "src": "1454:36:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17802,
                            "nodeType": "StructuredDocumentation",
                            "src": "1389:60:118",
                            "text": "@dev The LP fee applied to the curve portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_curveFee",
                        "nameLocation": "1481:9:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17803,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1454:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17807,
                        "nodeType": "VariableDeclaration",
                        "src": "1561:35:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17805,
                            "nodeType": "StructuredDocumentation",
                            "src": "1497:59:118",
                            "text": "@dev The LP fee applied to the flat portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_flatFee",
                        "nameLocation": "1588:8:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17806,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1561:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17810,
                        "nodeType": "VariableDeclaration",
                        "src": "1667:43:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17808,
                            "nodeType": "StructuredDocumentation",
                            "src": "1603:59:118",
                            "text": "@dev The portion of the LP fee that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceLPFee",
                        "nameLocation": "1694:16:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17809,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1667:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17813,
                        "nodeType": "VariableDeclaration",
                        "src": "1790:47:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17811,
                            "nodeType": "StructuredDocumentation",
                            "src": "1717:68:118",
                            "text": "@dev The portion of the zombie interest that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceZombieFee",
                        "nameLocation": "1817:20:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17812,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1790:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17816,
                        "nodeType": "VariableDeclaration",
                        "src": "1939:50:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17814,
                            "nodeType": "StructuredDocumentation",
                            "src": "1870:64:118",
                            "text": "@dev The vault share price at the time the pool was created."
                        },
                        "mutability": "immutable",
                        "name": "_initialVaultSharePrice",
                        "nameLocation": "1966:23:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17815,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1939:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17819,
                        "nodeType": "VariableDeclaration",
                        "src": "2285:48:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17817,
                            "nodeType": "StructuredDocumentation",
                            "src": "1996:284:118",
                            "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
                        },
                        "mutability": "immutable",
                        "name": "_minimumShareReserves",
                        "nameLocation": "2312:21:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17818,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2285:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17822,
                        "nodeType": "VariableDeclaration",
                        "src": "2441:52:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17820,
                            "nodeType": "StructuredDocumentation",
                            "src": "2340:96:118",
                            "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
                        },
                        "mutability": "immutable",
                        "name": "_minimumTransactionAmount",
                        "nameLocation": "2468:25:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17821,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2441:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17826,
                        "nodeType": "VariableDeclaration",
                        "src": "2647:45:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17823,
                            "nodeType": "StructuredDocumentation",
                            "src": "2500:142:118",
                            "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
                        },
                        "mutability": "mutable",
                        "name": "_marketState",
                        "nameLocation": "2680:12:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                            "typeString": "struct IHyperdrive.MarketState"
                        },
                        "typeName": {
                            "id": 17825,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 17824,
                                "name": "IHyperdrive.MarketState",
                                "nameLocations": [
                                    "2647:11:118",
                                    "2659:11:118"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10357,
                                "src": "2647:23:118"
                            },
                            "referencedDeclaration": 10357,
                            "src": "2647:23:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$10357_storage_ptr",
                                "typeString": "struct IHyperdrive.MarketState"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17830,
                        "nodeType": "VariableDeclaration",
                        "src": "2758:47:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17827,
                            "nodeType": "StructuredDocumentation",
                            "src": "2699:54:118",
                            "text": "@dev The state corresponding to the withdraw pool."
                        },
                        "mutability": "mutable",
                        "name": "_withdrawPool",
                        "nameLocation": "2792:13:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool"
                        },
                        "typeName": {
                            "id": 17829,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 17828,
                                "name": "IHyperdrive.WithdrawPool",
                                "nameLocations": [
                                    "2758:11:118",
                                    "2770:12:118"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10368,
                                "src": "2758:24:118"
                            },
                            "referencedDeclaration": 10368,
                            "src": "2758:24:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_WithdrawPool_$10368_storage_ptr",
                                "typeString": "struct IHyperdrive.WithdrawPool"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17836,
                        "nodeType": "VariableDeclaration",
                        "src": "3106:100:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17831,
                            "nodeType": "StructuredDocumentation",
                            "src": "2812:289:118",
                            "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values."
                        },
                        "mutability": "mutable",
                        "name": "_checkpoints",
                        "nameLocation": "3194:12:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                        },
                        "typeName": {
                            "id": 17835,
                            "keyName": "checkpointNumber",
                            "keyNameLocation": "3122:16:118",
                            "keyType": {
                                "id": 17832,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3114:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3106:70:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                            },
                            "valueName": "checkpoint",
                            "valueNameLocation": "3165:10:118",
                            "valueType": {
                                "id": 17834,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 17833,
                                    "name": "IHyperdrive.Checkpoint",
                                    "nameLocations": [
                                        "3142:11:118",
                                        "3154:10:118"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 10361,
                                    "src": "3142:22:118"
                                },
                                "referencedDeclaration": 10361,
                                "src": "3142:22:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                    "typeString": "struct IHyperdrive.Checkpoint"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17839,
                        "nodeType": "VariableDeclaration",
                        "src": "3289:30:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17837,
                            "nodeType": "StructuredDocumentation",
                            "src": "3232:52:118",
                            "text": "@dev The address which collects governance fees."
                        },
                        "mutability": "mutable",
                        "name": "_feeCollector",
                        "nameLocation": "3306:13:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 17838,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3289:7:118",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17842,
                        "nodeType": "VariableDeclaration",
                        "src": "3380:32:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17840,
                            "nodeType": "StructuredDocumentation",
                            "src": "3326:49:118",
                            "text": "@dev The address which collects swept tokens."
                        },
                        "mutability": "mutable",
                        "name": "_sweepCollector",
                        "nameLocation": "3397:15:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 17841,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3380:7:118",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17845,
                        "nodeType": "VariableDeclaration",
                        "src": "3473:28:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17843,
                            "nodeType": "StructuredDocumentation",
                            "src": "3419:49:118",
                            "text": "@dev The address that can pause the contract."
                        },
                        "mutability": "mutable",
                        "name": "_governance",
                        "nameLocation": "3490:11:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 17844,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3473:7:118",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17848,
                        "nodeType": "VariableDeclaration",
                        "src": "3592:39:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17846,
                            "nodeType": "StructuredDocumentation",
                            "src": "3508:79:118",
                            "text": "@dev Governance fees that haven't been collected yet denominated in shares."
                        },
                        "mutability": "mutable",
                        "name": "_governanceFeesAccrued",
                        "nameLocation": "3609:22:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 17847,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3592:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17853,
                        "nodeType": "VariableDeclaration",
                        "src": "3779:56:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17849,
                            "nodeType": "StructuredDocumentation",
                            "src": "3638:136:118",
                            "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
                        },
                        "mutability": "mutable",
                        "name": "_pausers",
                        "nameLocation": "3827:8:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 17852,
                            "keyName": "user",
                            "keyNameLocation": "3795:4:118",
                            "keyType": {
                                "id": 17850,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3787:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3779:38:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueName": "isPauser",
                            "valueNameLocation": "3808:8:118",
                            "valueType": {
                                "id": 17851,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "3803:4:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17856,
                        "nodeType": "VariableDeclaration",
                        "src": "3963:41:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17854,
                            "nodeType": "StructuredDocumentation",
                            "src": "3866:92:118",
                            "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
                        },
                        "mutability": "immutable",
                        "name": "_linkerFactory",
                        "nameLocation": "3990:14:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 17855,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3963:7:118",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17859,
                        "nodeType": "VariableDeclaration",
                        "src": "4123:42:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17857,
                            "nodeType": "StructuredDocumentation",
                            "src": "4011:107:118",
                            "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
                        },
                        "mutability": "immutable",
                        "name": "_linkerCodeHash",
                        "nameLocation": "4150:15:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 17858,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "4123:7:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17866,
                        "nodeType": "VariableDeclaration",
                        "src": "4217:96:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17860,
                            "nodeType": "StructuredDocumentation",
                            "src": "4172:40:118",
                            "text": "@dev Allows loading of each balance."
                        },
                        "mutability": "mutable",
                        "name": "_balanceOf",
                        "nameLocation": "4303:10:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 17865,
                            "keyName": "tokenId",
                            "keyNameLocation": "4233:7:118",
                            "keyType": {
                                "id": 17861,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4225:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4217:68:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 17864,
                                "keyName": "user",
                                "keyNameLocation": "4260:4:118",
                                "keyType": {
                                    "id": 17862,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4252:7:118",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4244:40:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueName": "balance",
                                "valueNameLocation": "4276:7:118",
                                "valueType": {
                                    "id": 17863,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4268:7:118",
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
                        "id": 17871,
                        "nodeType": "VariableDeclaration",
                        "src": "4370:64:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17867,
                            "nodeType": "StructuredDocumentation",
                            "src": "4320:45:118",
                            "text": "@dev Allows loading of each total supply."
                        },
                        "mutability": "mutable",
                        "name": "_totalSupply",
                        "nameLocation": "4422:12:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 17870,
                            "keyName": "tokenId",
                            "keyNameLocation": "4386:7:118",
                            "keyType": {
                                "id": 17868,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4378:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4370:42:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueName": "supply",
                            "valueNameLocation": "4405:6:118",
                            "valueType": {
                                "id": 17869,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4397:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17878,
                        "nodeType": "VariableDeclaration",
                        "src": "4487:102:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17872,
                            "nodeType": "StructuredDocumentation",
                            "src": "4441:41:118",
                            "text": "@dev Uniform approval for all tokens."
                        },
                        "mutability": "mutable",
                        "name": "_isApprovedForAll",
                        "nameLocation": "4572:17:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                        },
                        "typeName": {
                            "id": 17877,
                            "keyName": "from",
                            "keyNameLocation": "4503:4:118",
                            "keyType": {
                                "id": 17873,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4495:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4487:67:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                "typeString": "mapping(address => mapping(address => bool))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 17876,
                                "keyName": "caller",
                                "keyNameLocation": "4527:6:118",
                                "keyType": {
                                    "id": 17874,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4519:7:118",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4511:42:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                },
                                "valueName": "isApproved",
                                "valueNameLocation": "4542:10:118",
                                "valueType": {
                                    "id": 17875,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4537:4:118",
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
                        "id": 17887,
                        "nodeType": "VariableDeclaration",
                        "src": "4750:132:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17879,
                            "nodeType": "StructuredDocumentation",
                            "src": "4596:149:118",
                            "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
                        },
                        "mutability": "mutable",
                        "name": "_perTokenApprovals",
                        "nameLocation": "4864:18:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                            "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                        },
                        "typeName": {
                            "id": 17886,
                            "keyName": "tokenId",
                            "keyNameLocation": "4766:7:118",
                            "keyType": {
                                "id": 17880,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4758:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4750:96:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 17885,
                                "keyName": "from",
                                "keyNameLocation": "4793:4:118",
                                "keyType": {
                                    "id": 17881,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4785:7:118",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4777:68:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 17884,
                                    "keyName": "caller",
                                    "keyNameLocation": "4817:6:118",
                                    "keyType": {
                                        "id": 17882,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4809:7:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "4801:43:118",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                    },
                                    "valueName": "approved",
                                    "valueNameLocation": "4835:8:118",
                                    "valueType": {
                                        "id": 17883,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4827:7:118",
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
                        "id": 17892,
                        "nodeType": "VariableDeclaration",
                        "src": "4956:55:118",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 17888,
                            "nodeType": "StructuredDocumentation",
                            "src": "4889:62:118",
                            "text": "@dev A mapping to track the permitForAll signature nonces."
                        },
                        "mutability": "mutable",
                        "name": "_nonces",
                        "nameLocation": "5004:7:118",
                        "scope": 17990,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 17891,
                            "keyName": "user",
                            "keyNameLocation": "4972:4:118",
                            "keyType": {
                                "id": 17889,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4964:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4956:38:118",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "nonce",
                            "valueNameLocation": "4988:5:118",
                            "valueType": {
                                "id": 17890,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4980:7:118",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 17989,
                        "nodeType": "FunctionDefinition",
                        "src": "5159:2017:118",
                        "nodes": [],
                        "body": {
                            "id": 17988,
                            "nodeType": "Block",
                            "src": "5210:1966:118",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 17902,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17899,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17788,
                                            "src": "5285:10:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17900,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "5298:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17901,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5306:9:118",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10428,
                                            "src": "5298:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "5285:30:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 17903,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5285:30:118"
                                },
                                {
                                    "expression": {
                                        "id": 17907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17904,
                                            "name": "_vaultSharesToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17792,
                                            "src": "5325:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17905,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "5345:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17906,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5353:16:118",
                                            "memberName": "vaultSharesToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10432,
                                            "src": "5345:24:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "5325:44:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 17908,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5325:44:118"
                                },
                                {
                                    "expression": {
                                        "id": 17912,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17909,
                                            "name": "_initialVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17816,
                                            "src": "5433:23:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17910,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "5459:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17911,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5467:22:118",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10441,
                                            "src": "5459:30:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5433:56:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17913,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5433:56:118"
                                },
                                {
                                    "expression": {
                                        "id": 17917,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17914,
                                            "name": "_minimumShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17819,
                                            "src": "5888:21:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17915,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "5912:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17916,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5920:20:118",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10444,
                                            "src": "5912:28:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5888:52:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17918,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5888:52:118"
                                },
                                {
                                    "expression": {
                                        "id": 17922,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17919,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17822,
                                            "src": "6200:25:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17920,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6228:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17921,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6236:24:118",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10447,
                                            "src": "6228:32:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6200:60:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17923,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6200:60:118"
                                },
                                {
                                    "expression": {
                                        "id": 17927,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17924,
                                            "name": "_checkpointDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17795,
                                            "src": "6421:19:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17925,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6443:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17926,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6451:18:118",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10453,
                                            "src": "6443:26:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6421:48:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17928,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6421:48:118"
                                },
                                {
                                    "expression": {
                                        "id": 17932,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17929,
                                            "name": "_positionDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17798,
                                            "src": "6479:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17930,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6499:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17931,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6507:16:118",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10450,
                                            "src": "6499:24:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6479:44:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17933,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6479:44:118"
                                },
                                {
                                    "expression": {
                                        "id": 17937,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17934,
                                            "name": "_timeStretch",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17801,
                                            "src": "6533:12:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17935,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6548:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17936,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6556:11:118",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10456,
                                            "src": "6548:19:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6533:34:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17938,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6533:34:118"
                                },
                                {
                                    "expression": {
                                        "id": 17943,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17939,
                                            "name": "_curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17804,
                                            "src": "6620:9:118",
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
                                                    "id": 17940,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17896,
                                                    "src": "6632:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 17941,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6640:4:118",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10469,
                                                "src": "6632:12:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 17942,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6645:5:118",
                                            "memberName": "curve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10371,
                                            "src": "6632:18:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6620:30:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17944,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6620:30:118"
                                },
                                {
                                    "expression": {
                                        "id": 17949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17945,
                                            "name": "_flatFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17807,
                                            "src": "6660:8:118",
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
                                                    "id": 17946,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17896,
                                                    "src": "6671:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 17947,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6679:4:118",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10469,
                                                "src": "6671:12:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 17948,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6684:4:118",
                                            "memberName": "flat",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10374,
                                            "src": "6671:17:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6660:28:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17950,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6660:28:118"
                                },
                                {
                                    "expression": {
                                        "id": 17955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17951,
                                            "name": "_governanceLPFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17810,
                                            "src": "6698:16:118",
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
                                                    "id": 17952,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17896,
                                                    "src": "6717:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 17953,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6725:4:118",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10469,
                                                "src": "6717:12:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 17954,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6730:12:118",
                                            "memberName": "governanceLP",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10377,
                                            "src": "6717:25:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6698:44:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17956,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6698:44:118"
                                },
                                {
                                    "expression": {
                                        "id": 17961,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17957,
                                            "name": "_governanceZombieFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17813,
                                            "src": "6752:20:118",
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
                                                    "id": 17958,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17896,
                                                    "src": "6775:7:118",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 17959,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6783:4:118",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10469,
                                                "src": "6775:12:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$10381_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 17960,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6788:16:118",
                                            "memberName": "governanceZombie",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10380,
                                            "src": "6775:29:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6752:52:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 17962,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6752:52:118"
                                },
                                {
                                    "expression": {
                                        "id": 17966,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17963,
                                            "name": "_linkerFactory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17856,
                                            "src": "6864:14:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17964,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6881:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17965,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6889:13:118",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10435,
                                            "src": "6881:21:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6864:38:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 17967,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6864:38:118"
                                },
                                {
                                    "expression": {
                                        "id": 17971,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17968,
                                            "name": "_linkerCodeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17859,
                                            "src": "6912:15:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17969,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "6930:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17970,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6938:14:118",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10438,
                                            "src": "6930:22:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "6912:40:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 17972,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6912:40:118"
                                },
                                {
                                    "expression": {
                                        "id": 17976,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17973,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17845,
                                            "src": "7041:11:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17974,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "7055:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17975,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7063:10:118",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10459,
                                            "src": "7055:18:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7041:32:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 17977,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7041:32:118"
                                },
                                {
                                    "expression": {
                                        "id": 17981,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17978,
                                            "name": "_feeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17839,
                                            "src": "7083:13:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17979,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "7099:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17980,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7107:12:118",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10462,
                                            "src": "7099:20:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7083:36:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 17982,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7083:36:118"
                                },
                                {
                                    "expression": {
                                        "id": 17986,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 17983,
                                            "name": "_sweepCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17842,
                                            "src": "7129:15:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 17984,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17896,
                                                "src": "7147:7:118",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 17985,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7155:14:118",
                                            "memberName": "sweepCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10465,
                                            "src": "7147:22:118",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7129:40:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 17987,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7129:40:118"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 17893,
                            "nodeType": "StructuredDocumentation",
                            "src": "5043:111:118",
                            "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 17897,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 17896,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "5201:7:118",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 17989,
                                    "src": "5171:37:118",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10470_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 17895,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 17894,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "5171:11:118",
                                                "5183:10:118"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10470,
                                            "src": "5171:22:118"
                                        },
                                        "referencedDeclaration": 10470,
                                        "src": "5171:22:118",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10470_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5170:39:118"
                        },
                        "returnParameters": {
                            "id": 17898,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5210:0:118"
                        },
                        "scope": 17990,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 17780,
                            "name": "ReentrancyGuard",
                            "nameLocations": [
                                "740:15:118"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 71674,
                            "src": "740:15:118"
                        },
                        "id": 17781,
                        "nodeType": "InheritanceSpecifier",
                        "src": "740:15:118"
                    }
                ],
                "canonicalName": "HyperdriveStorage",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 17779,
                    "nodeType": "StructuredDocumentation",
                    "src": "388:313:118",
                    "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    17990,
                    71674
                ],
                "name": "HyperdriveStorage",
                "nameLocation": "719:17:118",
                "scope": 17991,
                "usedErrors": [
                    71619
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 118
};
