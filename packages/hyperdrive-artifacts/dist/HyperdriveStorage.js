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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
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
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
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
        "id": 13843,
        "exportedSymbols": {
            "FixedPointMath": [
                14917
            ],
            "HyperdriveMath": [
                15630
            ],
            "HyperdriveStorage": [
                13842
            ],
            "IERC20": [
                6920
            ],
            "IHyperdrive": [
                7616
            ],
            "ONE": [
                14151
            ],
            "ReentrancyGuard": [
                67058
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:6825:70",
        "nodes": [
            {
                "id": 13636,
                "nodeType": "PragmaDirective",
                "src": "39:23:70",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 13638,
                "nodeType": "ImportDirective",
                "src": "64:73:70",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
                "file": "openzeppelin/utils/ReentrancyGuard.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13843,
                "sourceUnit": 67059,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13637,
                            "name": "ReentrancyGuard",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67058,
                            "src": "73:15:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13640,
                "nodeType": "ImportDirective",
                "src": "138:50:70",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13843,
                "sourceUnit": 6921,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13639,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6920,
                            "src": "147:6:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13642,
                "nodeType": "ImportDirective",
                "src": "189:60:70",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13843,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13641,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "198:11:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13645,
                "nodeType": "ImportDirective",
                "src": "250:70:70",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13843,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13643,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14917,
                            "src": "259:14:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 13644,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14151,
                            "src": "275:3:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13647,
                "nodeType": "ImportDirective",
                "src": "321:65:70",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13843,
                "sourceUnit": 15631,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13646,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15630,
                            "src": "330:14:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13842,
                "nodeType": "ContractDefinition",
                "src": "701:6162:70",
                "nodes": [
                    {
                        "id": 13653,
                        "nodeType": "UsingForDirective",
                        "src": "762:33:70",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 13651,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "768:14:70"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "768:14:70"
                        },
                        "typeName": {
                            "id": 13652,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "787:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 13657,
                        "nodeType": "VariableDeclaration",
                        "src": "850:36:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13654,
                            "nodeType": "StructuredDocumentation",
                            "src": "821:24:70",
                            "text": "@dev The base asset."
                        },
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "876:10:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6920",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 13656,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13655,
                                "name": "IERC20",
                                "nameLocations": [
                                    "850:6:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 6920,
                                "src": "850:6:70"
                            },
                            "referencedDeclaration": 6920,
                            "src": "850:6:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6920",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13660,
                        "nodeType": "VariableDeclaration",
                        "src": "985:46:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13658,
                            "nodeType": "StructuredDocumentation",
                            "src": "911:69:70",
                            "text": "@dev The amount of seconds between vault share price checkpoints."
                        },
                        "mutability": "immutable",
                        "name": "_checkpointDuration",
                        "nameLocation": "1012:19:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13659,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "985:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13663,
                        "nodeType": "VariableDeclaration",
                        "src": "1116:44:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13661,
                            "nodeType": "StructuredDocumentation",
                            "src": "1038:73:70",
                            "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
                        },
                        "mutability": "immutable",
                        "name": "_positionDuration",
                        "nameLocation": "1143:17:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13662,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1116:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13666,
                        "nodeType": "VariableDeclaration",
                        "src": "1238:39:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13664,
                            "nodeType": "StructuredDocumentation",
                            "src": "1167:66:70",
                            "text": "@dev A parameter that decreases slippage around a target rate."
                        },
                        "mutability": "immutable",
                        "name": "_timeStretch",
                        "nameLocation": "1265:12:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13665,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1238:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13669,
                        "nodeType": "VariableDeclaration",
                        "src": "1367:36:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13667,
                            "nodeType": "StructuredDocumentation",
                            "src": "1302:60:70",
                            "text": "@dev The LP fee applied to the curve portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_curveFee",
                        "nameLocation": "1394:9:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13668,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1367:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13672,
                        "nodeType": "VariableDeclaration",
                        "src": "1474:35:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13670,
                            "nodeType": "StructuredDocumentation",
                            "src": "1410:59:70",
                            "text": "@dev The LP fee applied to the flat portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_flatFee",
                        "nameLocation": "1501:8:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13671,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1474:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13675,
                        "nodeType": "VariableDeclaration",
                        "src": "1580:43:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13673,
                            "nodeType": "StructuredDocumentation",
                            "src": "1516:59:70",
                            "text": "@dev The portion of the LP fee that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceLPFee",
                        "nameLocation": "1607:16:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13674,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1580:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13678,
                        "nodeType": "VariableDeclaration",
                        "src": "1703:47:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13676,
                            "nodeType": "StructuredDocumentation",
                            "src": "1630:68:70",
                            "text": "@dev The portion of the zombie interest that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceZombieFee",
                        "nameLocation": "1730:20:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13677,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1703:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13681,
                        "nodeType": "VariableDeclaration",
                        "src": "1852:50:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13679,
                            "nodeType": "StructuredDocumentation",
                            "src": "1783:64:70",
                            "text": "@dev The vault share price at the time the pool was created."
                        },
                        "mutability": "immutable",
                        "name": "_initialVaultSharePrice",
                        "nameLocation": "1879:23:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13680,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1852:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13684,
                        "nodeType": "VariableDeclaration",
                        "src": "2198:48:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13682,
                            "nodeType": "StructuredDocumentation",
                            "src": "1909:284:70",
                            "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
                        },
                        "mutability": "immutable",
                        "name": "_minimumShareReserves",
                        "nameLocation": "2225:21:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13683,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2198:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13687,
                        "nodeType": "VariableDeclaration",
                        "src": "2354:52:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13685,
                            "nodeType": "StructuredDocumentation",
                            "src": "2253:96:70",
                            "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
                        },
                        "mutability": "immutable",
                        "name": "_minimumTransactionAmount",
                        "nameLocation": "2381:25:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13686,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2354:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13691,
                        "nodeType": "VariableDeclaration",
                        "src": "2560:45:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13688,
                            "nodeType": "StructuredDocumentation",
                            "src": "2413:142:70",
                            "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
                        },
                        "mutability": "mutable",
                        "name": "_marketState",
                        "nameLocation": "2593:12:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                            "typeString": "struct IHyperdrive.MarketState"
                        },
                        "typeName": {
                            "id": 13690,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13689,
                                "name": "IHyperdrive.MarketState",
                                "nameLocations": [
                                    "2560:11:70",
                                    "2572:11:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 7308,
                                "src": "2560:23:70"
                            },
                            "referencedDeclaration": 7308,
                            "src": "2560:23:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7308_storage_ptr",
                                "typeString": "struct IHyperdrive.MarketState"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13695,
                        "nodeType": "VariableDeclaration",
                        "src": "2671:47:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13692,
                            "nodeType": "StructuredDocumentation",
                            "src": "2612:54:70",
                            "text": "@dev The state corresponding to the withdraw pool."
                        },
                        "mutability": "mutable",
                        "name": "_withdrawPool",
                        "nameLocation": "2705:13:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool"
                        },
                        "typeName": {
                            "id": 13694,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13693,
                                "name": "IHyperdrive.WithdrawPool",
                                "nameLocations": [
                                    "2671:11:70",
                                    "2683:12:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 7319,
                                "src": "2671:24:70"
                            },
                            "referencedDeclaration": 7319,
                            "src": "2671:24:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage_ptr",
                                "typeString": "struct IHyperdrive.WithdrawPool"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13701,
                        "nodeType": "VariableDeclaration",
                        "src": "3019:100:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13696,
                            "nodeType": "StructuredDocumentation",
                            "src": "2725:289:70",
                            "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values."
                        },
                        "mutability": "mutable",
                        "name": "_checkpoints",
                        "nameLocation": "3107:12:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7312_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                        },
                        "typeName": {
                            "id": 13700,
                            "keyName": "checkpointNumber",
                            "keyNameLocation": "3035:16:70",
                            "keyType": {
                                "id": 13697,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3027:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3019:70:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7312_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                            },
                            "valueName": "checkpoint",
                            "valueNameLocation": "3078:10:70",
                            "valueType": {
                                "id": 13699,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 13698,
                                    "name": "IHyperdrive.Checkpoint",
                                    "nameLocations": [
                                        "3055:11:70",
                                        "3067:10:70"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7312,
                                    "src": "3055:22:70"
                                },
                                "referencedDeclaration": 7312,
                                "src": "3055:22:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Checkpoint_$7312_storage_ptr",
                                    "typeString": "struct IHyperdrive.Checkpoint"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13704,
                        "nodeType": "VariableDeclaration",
                        "src": "3202:40:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13702,
                            "nodeType": "StructuredDocumentation",
                            "src": "3145:52:70",
                            "text": "@dev The address which collects governance fees."
                        },
                        "mutability": "immutable",
                        "name": "_feeCollector",
                        "nameLocation": "3229:13:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13703,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3202:7:70",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13707,
                        "nodeType": "VariableDeclaration",
                        "src": "3303:28:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13705,
                            "nodeType": "StructuredDocumentation",
                            "src": "3249:49:70",
                            "text": "@dev The address that can pause the contract."
                        },
                        "mutability": "mutable",
                        "name": "_governance",
                        "nameLocation": "3320:11:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13706,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3303:7:70",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13710,
                        "nodeType": "VariableDeclaration",
                        "src": "3422:39:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13708,
                            "nodeType": "StructuredDocumentation",
                            "src": "3338:79:70",
                            "text": "@dev Governance fees that haven't been collected yet denominated in shares."
                        },
                        "mutability": "mutable",
                        "name": "_governanceFeesAccrued",
                        "nameLocation": "3439:22:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13709,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3422:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13715,
                        "nodeType": "VariableDeclaration",
                        "src": "3609:56:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13711,
                            "nodeType": "StructuredDocumentation",
                            "src": "3468:136:70",
                            "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
                        },
                        "mutability": "mutable",
                        "name": "_pausers",
                        "nameLocation": "3657:8:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 13714,
                            "keyName": "user",
                            "keyNameLocation": "3625:4:70",
                            "keyType": {
                                "id": 13712,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3617:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3609:38:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueName": "isPauser",
                            "valueNameLocation": "3638:8:70",
                            "valueType": {
                                "id": 13713,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "3633:4:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13718,
                        "nodeType": "VariableDeclaration",
                        "src": "3793:41:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13716,
                            "nodeType": "StructuredDocumentation",
                            "src": "3696:92:70",
                            "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
                        },
                        "mutability": "immutable",
                        "name": "_linkerFactory",
                        "nameLocation": "3820:14:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13717,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3793:7:70",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13721,
                        "nodeType": "VariableDeclaration",
                        "src": "3953:42:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13719,
                            "nodeType": "StructuredDocumentation",
                            "src": "3841:107:70",
                            "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
                        },
                        "mutability": "immutable",
                        "name": "_linkerCodeHash",
                        "nameLocation": "3980:15:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 13720,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "3953:7:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13728,
                        "nodeType": "VariableDeclaration",
                        "src": "4047:96:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13722,
                            "nodeType": "StructuredDocumentation",
                            "src": "4002:40:70",
                            "text": "@dev Allows loading of each balance."
                        },
                        "mutability": "mutable",
                        "name": "_balanceOf",
                        "nameLocation": "4133:10:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 13727,
                            "keyName": "tokenId",
                            "keyNameLocation": "4063:7:70",
                            "keyType": {
                                "id": 13723,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4055:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4047:68:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 13726,
                                "keyName": "user",
                                "keyNameLocation": "4090:4:70",
                                "keyType": {
                                    "id": 13724,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4082:7:70",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4074:40:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueName": "balance",
                                "valueNameLocation": "4106:7:70",
                                "valueType": {
                                    "id": 13725,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4098:7:70",
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
                        "id": 13733,
                        "nodeType": "VariableDeclaration",
                        "src": "4200:64:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13729,
                            "nodeType": "StructuredDocumentation",
                            "src": "4150:45:70",
                            "text": "@dev Allows loading of each total supply."
                        },
                        "mutability": "mutable",
                        "name": "_totalSupply",
                        "nameLocation": "4252:12:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 13732,
                            "keyName": "tokenId",
                            "keyNameLocation": "4216:7:70",
                            "keyType": {
                                "id": 13730,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4208:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4200:42:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueName": "supply",
                            "valueNameLocation": "4235:6:70",
                            "valueType": {
                                "id": 13731,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4227:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13740,
                        "nodeType": "VariableDeclaration",
                        "src": "4317:102:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13734,
                            "nodeType": "StructuredDocumentation",
                            "src": "4271:41:70",
                            "text": "@dev Uniform approval for all tokens."
                        },
                        "mutability": "mutable",
                        "name": "_isApprovedForAll",
                        "nameLocation": "4402:17:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                        },
                        "typeName": {
                            "id": 13739,
                            "keyName": "from",
                            "keyNameLocation": "4333:4:70",
                            "keyType": {
                                "id": 13735,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4325:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4317:67:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                "typeString": "mapping(address => mapping(address => bool))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 13738,
                                "keyName": "caller",
                                "keyNameLocation": "4357:6:70",
                                "keyType": {
                                    "id": 13736,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4349:7:70",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4341:42:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                },
                                "valueName": "isApproved",
                                "valueNameLocation": "4372:10:70",
                                "valueType": {
                                    "id": 13737,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4367:4:70",
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
                        "id": 13749,
                        "nodeType": "VariableDeclaration",
                        "src": "4580:132:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13741,
                            "nodeType": "StructuredDocumentation",
                            "src": "4426:149:70",
                            "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
                        },
                        "mutability": "mutable",
                        "name": "_perTokenApprovals",
                        "nameLocation": "4694:18:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                            "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                        },
                        "typeName": {
                            "id": 13748,
                            "keyName": "tokenId",
                            "keyNameLocation": "4596:7:70",
                            "keyType": {
                                "id": 13742,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4588:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4580:96:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 13747,
                                "keyName": "from",
                                "keyNameLocation": "4623:4:70",
                                "keyType": {
                                    "id": 13743,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4615:7:70",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "4607:68:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 13746,
                                    "keyName": "caller",
                                    "keyNameLocation": "4647:6:70",
                                    "keyType": {
                                        "id": 13744,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4639:7:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "4631:43:70",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                    },
                                    "valueName": "approved",
                                    "valueNameLocation": "4665:8:70",
                                    "valueType": {
                                        "id": 13745,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4657:7:70",
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
                        "id": 13754,
                        "nodeType": "VariableDeclaration",
                        "src": "4786:55:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13750,
                            "nodeType": "StructuredDocumentation",
                            "src": "4719:62:70",
                            "text": "@dev A mapping to track the permitForAll signature nonces."
                        },
                        "mutability": "mutable",
                        "name": "_nonces",
                        "nameLocation": "4834:7:70",
                        "scope": 13842,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 13753,
                            "keyName": "user",
                            "keyNameLocation": "4802:4:70",
                            "keyType": {
                                "id": 13751,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4794:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "4786:38:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "nonce",
                            "valueNameLocation": "4818:5:70",
                            "valueType": {
                                "id": 13752,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "4810:7:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13841,
                        "nodeType": "FunctionDefinition",
                        "src": "4989:1872:70",
                        "nodes": [],
                        "body": {
                            "id": 13840,
                            "nodeType": "Block",
                            "src": "5040:1821:70",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 13764,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13761,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13657,
                                            "src": "5096:10:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6920",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13762,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "5109:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13763,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5117:9:70",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7372,
                                            "src": "5109:17:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6920",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "5096:30:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6920",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 13765,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5096:30:70"
                                },
                                {
                                    "expression": {
                                        "id": 13769,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13766,
                                            "name": "_initialVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13681,
                                            "src": "5190:23:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13767,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "5216:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13768,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5224:22:70",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7381,
                                            "src": "5216:30:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5190:56:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13770,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5190:56:70"
                                },
                                {
                                    "expression": {
                                        "id": 13774,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13771,
                                            "name": "_minimumShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13684,
                                            "src": "5645:21:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13772,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "5669:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13773,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5677:20:70",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7384,
                                            "src": "5669:28:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5645:52:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13775,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5645:52:70"
                                },
                                {
                                    "expression": {
                                        "id": 13779,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13776,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13687,
                                            "src": "5957:25:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13777,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "5985:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13778,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5993:24:70",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7387,
                                            "src": "5985:32:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5957:60:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13780,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5957:60:70"
                                },
                                {
                                    "expression": {
                                        "id": 13784,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13781,
                                            "name": "_checkpointDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13660,
                                            "src": "6178:19:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13782,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6200:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13783,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6208:18:70",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7393,
                                            "src": "6200:26:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6178:48:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13785,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6178:48:70"
                                },
                                {
                                    "expression": {
                                        "id": 13789,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13786,
                                            "name": "_positionDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13663,
                                            "src": "6236:17:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13787,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6256:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13788,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6264:16:70",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7390,
                                            "src": "6256:24:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6236:44:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13790,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6236:44:70"
                                },
                                {
                                    "expression": {
                                        "id": 13794,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13791,
                                            "name": "_timeStretch",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13666,
                                            "src": "6290:12:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13792,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6305:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13793,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6313:11:70",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7396,
                                            "src": "6305:19:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6290:34:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13795,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6290:34:70"
                                },
                                {
                                    "expression": {
                                        "id": 13800,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13796,
                                            "name": "_curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13669,
                                            "src": "6377:9:70",
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
                                                    "id": 13797,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13758,
                                                    "src": "6389:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13798,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6397:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7406,
                                                "src": "6389:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13799,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6402:5:70",
                                            "memberName": "curve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7322,
                                            "src": "6389:18:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6377:30:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13801,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6377:30:70"
                                },
                                {
                                    "expression": {
                                        "id": 13806,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13802,
                                            "name": "_flatFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13672,
                                            "src": "6417:8:70",
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
                                                    "id": 13803,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13758,
                                                    "src": "6428:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13804,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6436:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7406,
                                                "src": "6428:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13805,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6441:4:70",
                                            "memberName": "flat",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7325,
                                            "src": "6428:17:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6417:28:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13807,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6417:28:70"
                                },
                                {
                                    "expression": {
                                        "id": 13812,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13808,
                                            "name": "_governanceLPFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13675,
                                            "src": "6455:16:70",
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
                                                    "id": 13809,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13758,
                                                    "src": "6474:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13810,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6482:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7406,
                                                "src": "6474:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13811,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6487:12:70",
                                            "memberName": "governanceLP",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7328,
                                            "src": "6474:25:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6455:44:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13813,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6455:44:70"
                                },
                                {
                                    "expression": {
                                        "id": 13818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13814,
                                            "name": "_governanceZombieFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13678,
                                            "src": "6509:20:70",
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
                                                    "id": 13815,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13758,
                                                    "src": "6532:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13816,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6540:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7406,
                                                "src": "6532:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7332_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13817,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6545:16:70",
                                            "memberName": "governanceZombie",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7331,
                                            "src": "6532:29:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6509:52:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 13819,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6509:52:70"
                                },
                                {
                                    "expression": {
                                        "id": 13823,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13820,
                                            "name": "_linkerFactory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13718,
                                            "src": "6621:14:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13821,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6638:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13822,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6646:13:70",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7375,
                                            "src": "6638:21:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6621:38:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 13824,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6621:38:70"
                                },
                                {
                                    "expression": {
                                        "id": 13828,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13825,
                                            "name": "_linkerCodeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13721,
                                            "src": "6669:15:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13826,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6687:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13827,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6695:14:70",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7378,
                                            "src": "6687:22:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "6669:40:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 13829,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6669:40:70"
                                },
                                {
                                    "expression": {
                                        "id": 13833,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13830,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13707,
                                            "src": "6776:11:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13831,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6790:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13832,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6798:10:70",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7399,
                                            "src": "6790:18:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6776:32:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 13834,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6776:32:70"
                                },
                                {
                                    "expression": {
                                        "id": 13838,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13835,
                                            "name": "_feeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13704,
                                            "src": "6818:13:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13836,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13758,
                                                "src": "6834:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13837,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6842:12:70",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7402,
                                            "src": "6834:20:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6818:36:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 13839,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6818:36:70"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 13755,
                            "nodeType": "StructuredDocumentation",
                            "src": "4873:111:70",
                            "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 13759,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 13758,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "5031:7:70",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 13841,
                                    "src": "5001:37:70",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 13757,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 13756,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "5001:11:70",
                                                "5013:10:70"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "5001:22:70"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "5001:22:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5000:39:70"
                        },
                        "returnParameters": {
                            "id": 13760,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5040:0:70"
                        },
                        "scope": 13842,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 13649,
                            "name": "ReentrancyGuard",
                            "nameLocations": [
                                "740:15:70"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 67058,
                            "src": "740:15:70"
                        },
                        "id": 13650,
                        "nodeType": "InheritanceSpecifier",
                        "src": "740:15:70"
                    }
                ],
                "canonicalName": "HyperdriveStorage",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 13648,
                    "nodeType": "StructuredDocumentation",
                    "src": "388:313:70",
                    "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    13842,
                    67058
                ],
                "name": "HyperdriveStorage",
                "nameLocation": "719:17:70",
                "scope": 13843,
                "usedErrors": [
                    67003
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 70
};
