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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94",
                "urls": [
                    "bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb",
                    "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3",
                "urls": [
                    "bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660",
                    "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
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
                "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
                "urls": [
                    "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
                    "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
                "urls": [
                    "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
                    "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
                "urls": [
                    "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
                    "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
                "urls": [
                    "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
                    "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
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
        "id": 13479,
        "exportedSymbols": {
            "FixedPointMath": [
                14585
            ],
            "HyperdriveMath": [
                15315
            ],
            "HyperdriveStorage": [
                13478
            ],
            "IERC20": [
                6793
            ],
            "IHyperdrive": [
                7480
            ],
            "ONE": [
                13820
            ],
            "ReentrancyGuard": [
                67358
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:6825:70",
        "nodes": [
            {
                "id": 13272,
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
                "id": 13274,
                "nodeType": "ImportDirective",
                "src": "64:73:70",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
                "file": "openzeppelin/utils/ReentrancyGuard.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13479,
                "sourceUnit": 67359,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13273,
                            "name": "ReentrancyGuard",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67358,
                            "src": "73:15:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13276,
                "nodeType": "ImportDirective",
                "src": "138:50:70",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13479,
                "sourceUnit": 6794,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13275,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6793,
                            "src": "147:6:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13278,
                "nodeType": "ImportDirective",
                "src": "189:60:70",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13479,
                "sourceUnit": 7481,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13277,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7480,
                            "src": "198:11:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13281,
                "nodeType": "ImportDirective",
                "src": "250:70:70",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13479,
                "sourceUnit": 14586,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13279,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14585,
                            "src": "259:14:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 13280,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13820,
                            "src": "275:3:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13283,
                "nodeType": "ImportDirective",
                "src": "321:65:70",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 13479,
                "sourceUnit": 15316,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13282,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15315,
                            "src": "330:14:70",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 13478,
                "nodeType": "ContractDefinition",
                "src": "701:6162:70",
                "nodes": [
                    {
                        "id": 13289,
                        "nodeType": "UsingForDirective",
                        "src": "762:33:70",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 13287,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "768:14:70"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14585,
                            "src": "768:14:70"
                        },
                        "typeName": {
                            "id": 13288,
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
                        "id": 13293,
                        "nodeType": "VariableDeclaration",
                        "src": "850:36:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13290,
                            "nodeType": "StructuredDocumentation",
                            "src": "821:24:70",
                            "text": "@dev The base asset."
                        },
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "876:10:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6793",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 13292,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13291,
                                "name": "IERC20",
                                "nameLocations": [
                                    "850:6:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 6793,
                                "src": "850:6:70"
                            },
                            "referencedDeclaration": 6793,
                            "src": "850:6:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6793",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13296,
                        "nodeType": "VariableDeclaration",
                        "src": "985:46:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13294,
                            "nodeType": "StructuredDocumentation",
                            "src": "911:69:70",
                            "text": "@dev The amount of seconds between vault share price checkpoints."
                        },
                        "mutability": "immutable",
                        "name": "_checkpointDuration",
                        "nameLocation": "1012:19:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13295,
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
                        "id": 13299,
                        "nodeType": "VariableDeclaration",
                        "src": "1116:44:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13297,
                            "nodeType": "StructuredDocumentation",
                            "src": "1038:73:70",
                            "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
                        },
                        "mutability": "immutable",
                        "name": "_positionDuration",
                        "nameLocation": "1143:17:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13298,
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
                        "id": 13302,
                        "nodeType": "VariableDeclaration",
                        "src": "1238:39:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13300,
                            "nodeType": "StructuredDocumentation",
                            "src": "1167:66:70",
                            "text": "@dev A parameter that decreases slippage around a target rate."
                        },
                        "mutability": "immutable",
                        "name": "_timeStretch",
                        "nameLocation": "1265:12:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13301,
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
                        "id": 13305,
                        "nodeType": "VariableDeclaration",
                        "src": "1367:36:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13303,
                            "nodeType": "StructuredDocumentation",
                            "src": "1302:60:70",
                            "text": "@dev The LP fee applied to the curve portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_curveFee",
                        "nameLocation": "1394:9:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13304,
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
                        "id": 13308,
                        "nodeType": "VariableDeclaration",
                        "src": "1474:35:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13306,
                            "nodeType": "StructuredDocumentation",
                            "src": "1410:59:70",
                            "text": "@dev The LP fee applied to the flat portion of a trade."
                        },
                        "mutability": "immutable",
                        "name": "_flatFee",
                        "nameLocation": "1501:8:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13307,
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
                        "id": 13311,
                        "nodeType": "VariableDeclaration",
                        "src": "1580:43:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13309,
                            "nodeType": "StructuredDocumentation",
                            "src": "1516:59:70",
                            "text": "@dev The portion of the LP fee that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceLPFee",
                        "nameLocation": "1607:16:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13310,
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
                        "id": 13314,
                        "nodeType": "VariableDeclaration",
                        "src": "1703:47:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13312,
                            "nodeType": "StructuredDocumentation",
                            "src": "1630:68:70",
                            "text": "@dev The portion of the zombie interest that goes to governance."
                        },
                        "mutability": "immutable",
                        "name": "_governanceZombieFee",
                        "nameLocation": "1730:20:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13313,
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
                        "id": 13317,
                        "nodeType": "VariableDeclaration",
                        "src": "1852:50:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13315,
                            "nodeType": "StructuredDocumentation",
                            "src": "1783:64:70",
                            "text": "@dev The vault share price at the time the pool was created."
                        },
                        "mutability": "immutable",
                        "name": "_initialVaultSharePrice",
                        "nameLocation": "1879:23:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13316,
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
                        "id": 13320,
                        "nodeType": "VariableDeclaration",
                        "src": "2198:48:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13318,
                            "nodeType": "StructuredDocumentation",
                            "src": "1909:284:70",
                            "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
                        },
                        "mutability": "immutable",
                        "name": "_minimumShareReserves",
                        "nameLocation": "2225:21:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13319,
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
                        "id": 13323,
                        "nodeType": "VariableDeclaration",
                        "src": "2354:52:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13321,
                            "nodeType": "StructuredDocumentation",
                            "src": "2253:96:70",
                            "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
                        },
                        "mutability": "immutable",
                        "name": "_minimumTransactionAmount",
                        "nameLocation": "2381:25:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13322,
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
                        "id": 13327,
                        "nodeType": "VariableDeclaration",
                        "src": "2560:45:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13324,
                            "nodeType": "StructuredDocumentation",
                            "src": "2413:142:70",
                            "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
                        },
                        "mutability": "mutable",
                        "name": "_marketState",
                        "nameLocation": "2593:12:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7181_storage",
                            "typeString": "struct IHyperdrive.MarketState"
                        },
                        "typeName": {
                            "id": 13326,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13325,
                                "name": "IHyperdrive.MarketState",
                                "nameLocations": [
                                    "2560:11:70",
                                    "2572:11:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 7181,
                                "src": "2560:23:70"
                            },
                            "referencedDeclaration": 7181,
                            "src": "2560:23:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7181_storage_ptr",
                                "typeString": "struct IHyperdrive.MarketState"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13331,
                        "nodeType": "VariableDeclaration",
                        "src": "2671:47:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13328,
                            "nodeType": "StructuredDocumentation",
                            "src": "2612:54:70",
                            "text": "@dev The state corresponding to the withdraw pool."
                        },
                        "mutability": "mutable",
                        "name": "_withdrawPool",
                        "nameLocation": "2705:13:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$7192_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool"
                        },
                        "typeName": {
                            "id": 13330,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 13329,
                                "name": "IHyperdrive.WithdrawPool",
                                "nameLocations": [
                                    "2671:11:70",
                                    "2683:12:70"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 7192,
                                "src": "2671:24:70"
                            },
                            "referencedDeclaration": 7192,
                            "src": "2671:24:70",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_WithdrawPool_$7192_storage_ptr",
                                "typeString": "struct IHyperdrive.WithdrawPool"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13337,
                        "nodeType": "VariableDeclaration",
                        "src": "3019:100:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13332,
                            "nodeType": "StructuredDocumentation",
                            "src": "2725:289:70",
                            "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values."
                        },
                        "mutability": "mutable",
                        "name": "_checkpoints",
                        "nameLocation": "3107:12:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7185_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                        },
                        "typeName": {
                            "id": 13336,
                            "keyName": "checkpointNumber",
                            "keyNameLocation": "3035:16:70",
                            "keyType": {
                                "id": 13333,
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
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7185_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
                            },
                            "valueName": "checkpoint",
                            "valueNameLocation": "3078:10:70",
                            "valueType": {
                                "id": 13335,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 13334,
                                    "name": "IHyperdrive.Checkpoint",
                                    "nameLocations": [
                                        "3055:11:70",
                                        "3067:10:70"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7185,
                                    "src": "3055:22:70"
                                },
                                "referencedDeclaration": 7185,
                                "src": "3055:22:70",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Checkpoint_$7185_storage_ptr",
                                    "typeString": "struct IHyperdrive.Checkpoint"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 13340,
                        "nodeType": "VariableDeclaration",
                        "src": "3202:40:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13338,
                            "nodeType": "StructuredDocumentation",
                            "src": "3145:52:70",
                            "text": "@dev The address which collects governance fees."
                        },
                        "mutability": "immutable",
                        "name": "_feeCollector",
                        "nameLocation": "3229:13:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13339,
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
                        "id": 13343,
                        "nodeType": "VariableDeclaration",
                        "src": "3303:28:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13341,
                            "nodeType": "StructuredDocumentation",
                            "src": "3249:49:70",
                            "text": "@dev The address that can pause the contract."
                        },
                        "mutability": "mutable",
                        "name": "_governance",
                        "nameLocation": "3320:11:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13342,
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
                        "id": 13346,
                        "nodeType": "VariableDeclaration",
                        "src": "3422:39:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13344,
                            "nodeType": "StructuredDocumentation",
                            "src": "3338:79:70",
                            "text": "@dev Governance fees that haven't been collected yet denominated in shares."
                        },
                        "mutability": "mutable",
                        "name": "_governanceFeesAccrued",
                        "nameLocation": "3439:22:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 13345,
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
                        "id": 13351,
                        "nodeType": "VariableDeclaration",
                        "src": "3609:56:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13347,
                            "nodeType": "StructuredDocumentation",
                            "src": "3468:136:70",
                            "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
                        },
                        "mutability": "mutable",
                        "name": "_pausers",
                        "nameLocation": "3657:8:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 13350,
                            "keyName": "user",
                            "keyNameLocation": "3625:4:70",
                            "keyType": {
                                "id": 13348,
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
                                "id": 13349,
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
                        "id": 13354,
                        "nodeType": "VariableDeclaration",
                        "src": "3793:41:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13352,
                            "nodeType": "StructuredDocumentation",
                            "src": "3696:92:70",
                            "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
                        },
                        "mutability": "immutable",
                        "name": "_linkerFactory",
                        "nameLocation": "3820:14:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 13353,
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
                        "id": 13357,
                        "nodeType": "VariableDeclaration",
                        "src": "3953:42:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13355,
                            "nodeType": "StructuredDocumentation",
                            "src": "3841:107:70",
                            "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
                        },
                        "mutability": "immutable",
                        "name": "_linkerCodeHash",
                        "nameLocation": "3980:15:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 13356,
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
                        "id": 13364,
                        "nodeType": "VariableDeclaration",
                        "src": "4047:96:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13358,
                            "nodeType": "StructuredDocumentation",
                            "src": "4002:40:70",
                            "text": "@dev Allows loading of each balance."
                        },
                        "mutability": "mutable",
                        "name": "_balanceOf",
                        "nameLocation": "4133:10:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 13363,
                            "keyName": "tokenId",
                            "keyNameLocation": "4063:7:70",
                            "keyType": {
                                "id": 13359,
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
                                "id": 13362,
                                "keyName": "user",
                                "keyNameLocation": "4090:4:70",
                                "keyType": {
                                    "id": 13360,
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
                                    "id": 13361,
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
                        "id": 13369,
                        "nodeType": "VariableDeclaration",
                        "src": "4200:64:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13365,
                            "nodeType": "StructuredDocumentation",
                            "src": "4150:45:70",
                            "text": "@dev Allows loading of each total supply."
                        },
                        "mutability": "mutable",
                        "name": "_totalSupply",
                        "nameLocation": "4252:12:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 13368,
                            "keyName": "tokenId",
                            "keyNameLocation": "4216:7:70",
                            "keyType": {
                                "id": 13366,
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
                                "id": 13367,
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
                        "id": 13376,
                        "nodeType": "VariableDeclaration",
                        "src": "4317:102:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13370,
                            "nodeType": "StructuredDocumentation",
                            "src": "4271:41:70",
                            "text": "@dev Uniform approval for all tokens."
                        },
                        "mutability": "mutable",
                        "name": "_isApprovedForAll",
                        "nameLocation": "4402:17:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                        },
                        "typeName": {
                            "id": 13375,
                            "keyName": "from",
                            "keyNameLocation": "4333:4:70",
                            "keyType": {
                                "id": 13371,
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
                                "id": 13374,
                                "keyName": "caller",
                                "keyNameLocation": "4357:6:70",
                                "keyType": {
                                    "id": 13372,
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
                                    "id": 13373,
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
                        "id": 13385,
                        "nodeType": "VariableDeclaration",
                        "src": "4580:132:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13377,
                            "nodeType": "StructuredDocumentation",
                            "src": "4426:149:70",
                            "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
                        },
                        "mutability": "mutable",
                        "name": "_perTokenApprovals",
                        "nameLocation": "4694:18:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                            "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
                        },
                        "typeName": {
                            "id": 13384,
                            "keyName": "tokenId",
                            "keyNameLocation": "4596:7:70",
                            "keyType": {
                                "id": 13378,
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
                                "id": 13383,
                                "keyName": "from",
                                "keyNameLocation": "4623:4:70",
                                "keyType": {
                                    "id": 13379,
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
                                    "id": 13382,
                                    "keyName": "caller",
                                    "keyNameLocation": "4647:6:70",
                                    "keyType": {
                                        "id": 13380,
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
                                        "id": 13381,
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
                        "id": 13390,
                        "nodeType": "VariableDeclaration",
                        "src": "4786:55:70",
                        "nodes": [],
                        "constant": false,
                        "documentation": {
                            "id": 13386,
                            "nodeType": "StructuredDocumentation",
                            "src": "4719:62:70",
                            "text": "@dev A mapping to track the permitForAll signature nonces."
                        },
                        "mutability": "mutable",
                        "name": "_nonces",
                        "nameLocation": "4834:7:70",
                        "scope": 13478,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 13389,
                            "keyName": "user",
                            "keyNameLocation": "4802:4:70",
                            "keyType": {
                                "id": 13387,
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
                                "id": 13388,
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
                        "id": 13477,
                        "nodeType": "FunctionDefinition",
                        "src": "4989:1872:70",
                        "nodes": [],
                        "body": {
                            "id": 13476,
                            "nodeType": "Block",
                            "src": "5040:1821:70",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 13400,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13397,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13293,
                                            "src": "5096:10:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6793",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 13398,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "5109:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13399,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5117:9:70",
                                            "memberName": "baseToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7245,
                                            "src": "5109:17:70",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$6793",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "5096:30:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$6793",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 13401,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5096:30:70"
                                },
                                {
                                    "expression": {
                                        "id": 13405,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13402,
                                            "name": "_initialVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13317,
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
                                                "id": 13403,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "5216:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13404,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5224:22:70",
                                            "memberName": "initialVaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7254,
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
                                    "id": 13406,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5190:56:70"
                                },
                                {
                                    "expression": {
                                        "id": 13410,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13407,
                                            "name": "_minimumShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13320,
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
                                                "id": 13408,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "5669:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13409,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5677:20:70",
                                            "memberName": "minimumShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7257,
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
                                    "id": 13411,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5645:52:70"
                                },
                                {
                                    "expression": {
                                        "id": 13415,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13412,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13323,
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
                                                "id": 13413,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "5985:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13414,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5993:24:70",
                                            "memberName": "minimumTransactionAmount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7260,
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
                                    "id": 13416,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5957:60:70"
                                },
                                {
                                    "expression": {
                                        "id": 13420,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13417,
                                            "name": "_checkpointDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13296,
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
                                                "id": 13418,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6200:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13419,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6208:18:70",
                                            "memberName": "checkpointDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7266,
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
                                    "id": 13421,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6178:48:70"
                                },
                                {
                                    "expression": {
                                        "id": 13425,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13422,
                                            "name": "_positionDuration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13299,
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
                                                "id": 13423,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6256:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13424,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6264:16:70",
                                            "memberName": "positionDuration",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7263,
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
                                    "id": 13426,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6236:44:70"
                                },
                                {
                                    "expression": {
                                        "id": 13430,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13427,
                                            "name": "_timeStretch",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13302,
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
                                                "id": 13428,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6305:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13429,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6313:11:70",
                                            "memberName": "timeStretch",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7269,
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
                                    "id": 13431,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6290:34:70"
                                },
                                {
                                    "expression": {
                                        "id": 13436,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13432,
                                            "name": "_curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13305,
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
                                                    "id": 13433,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13394,
                                                    "src": "6389:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13434,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6397:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7279,
                                                "src": "6389:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13435,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6402:5:70",
                                            "memberName": "curve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7195,
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
                                    "id": 13437,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6377:30:70"
                                },
                                {
                                    "expression": {
                                        "id": 13442,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13438,
                                            "name": "_flatFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13308,
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
                                                    "id": 13439,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13394,
                                                    "src": "6428:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13440,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6436:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7279,
                                                "src": "6428:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13441,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6441:4:70",
                                            "memberName": "flat",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7198,
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
                                    "id": 13443,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6417:28:70"
                                },
                                {
                                    "expression": {
                                        "id": 13448,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13444,
                                            "name": "_governanceLPFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13311,
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
                                                    "id": 13445,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13394,
                                                    "src": "6474:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13446,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6482:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7279,
                                                "src": "6474:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13447,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6487:12:70",
                                            "memberName": "governanceLP",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7201,
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
                                    "id": 13449,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6455:44:70"
                                },
                                {
                                    "expression": {
                                        "id": 13454,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13450,
                                            "name": "_governanceZombieFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13314,
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
                                                    "id": 13451,
                                                    "name": "_config",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13394,
                                                    "src": "6532:7:70",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                        "typeString": "struct IHyperdrive.PoolConfig memory"
                                                    }
                                                },
                                                "id": 13452,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6540:4:70",
                                                "memberName": "fees",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7279,
                                                "src": "6532:12:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Fees_$7205_memory_ptr",
                                                    "typeString": "struct IHyperdrive.Fees memory"
                                                }
                                            },
                                            "id": 13453,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6545:16:70",
                                            "memberName": "governanceZombie",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7204,
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
                                    "id": 13455,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6509:52:70"
                                },
                                {
                                    "expression": {
                                        "id": 13459,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13456,
                                            "name": "_linkerFactory",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13354,
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
                                                "id": 13457,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6638:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13458,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6646:13:70",
                                            "memberName": "linkerFactory",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7248,
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
                                    "id": 13460,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6621:38:70"
                                },
                                {
                                    "expression": {
                                        "id": 13464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13461,
                                            "name": "_linkerCodeHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13357,
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
                                                "id": 13462,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6687:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13463,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6695:14:70",
                                            "memberName": "linkerCodeHash",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7251,
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
                                    "id": 13465,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6669:40:70"
                                },
                                {
                                    "expression": {
                                        "id": 13469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13466,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13343,
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
                                                "id": 13467,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6790:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13468,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6798:10:70",
                                            "memberName": "governance",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7272,
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
                                    "id": 13470,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6776:32:70"
                                },
                                {
                                    "expression": {
                                        "id": 13474,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 13471,
                                            "name": "_feeCollector",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13340,
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
                                                "id": 13472,
                                                "name": "_config",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13394,
                                                "src": "6834:7:70",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                                }
                                            },
                                            "id": 13473,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6842:12:70",
                                            "memberName": "feeCollector",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7275,
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
                                    "id": 13475,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6818:36:70"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 13391,
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
                            "id": 13395,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 13394,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "5031:7:70",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 13477,
                                    "src": "5001:37:70",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7280_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 13393,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 13392,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "5001:11:70",
                                                "5013:10:70"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7280,
                                            "src": "5001:22:70"
                                        },
                                        "referencedDeclaration": 7280,
                                        "src": "5001:22:70",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7280_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5000:39:70"
                        },
                        "returnParameters": {
                            "id": 13396,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5040:0:70"
                        },
                        "scope": 13478,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 13285,
                            "name": "ReentrancyGuard",
                            "nameLocations": [
                                "740:15:70"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 67358,
                            "src": "740:15:70"
                        },
                        "id": 13286,
                        "nodeType": "InheritanceSpecifier",
                        "src": "740:15:70"
                    }
                ],
                "canonicalName": "HyperdriveStorage",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 13284,
                    "nodeType": "StructuredDocumentation",
                    "src": "388:313:70",
                    "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    13478,
                    67358
                ],
                "name": "HyperdriveStorage",
                "nameLocation": "719:17:70",
                "scope": 13479,
                "usedErrors": [
                    67303
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 70
};
