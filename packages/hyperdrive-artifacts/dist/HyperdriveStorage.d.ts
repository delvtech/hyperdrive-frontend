export declare const HyperdriveStorage: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly constructor: {
                        readonly params: {
                            readonly _config: "The configuration of the Hyperdrive pool.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly constructor: {
                        readonly notice: "Instantiates Hyperdrive's storage.";
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
                readonly "contracts/src/internal/HyperdriveStorage.sol": "HyperdriveStorage";
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
                readonly keccak256: "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94";
                readonly urls: readonly ["bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb", "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3";
                readonly urls: readonly ["bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660", "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5";
                readonly urls: readonly ["bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171", "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28";
                readonly urls: readonly ["bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2", "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862";
                readonly urls: readonly ["bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355", "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec";
                readonly urls: readonly ["bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c", "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f";
                readonly urls: readonly ["bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d", "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf";
                readonly urls: readonly ["bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d", "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744";
                readonly urls: readonly ["bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a", "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b";
                readonly urls: readonly ["bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1", "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346";
                readonly urls: readonly ["bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6", "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
        readonly id: 13479;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [14585];
            readonly HyperdriveMath: readonly [15315];
            readonly HyperdriveStorage: readonly [13478];
            readonly IERC20: readonly [6793];
            readonly IHyperdrive: readonly [7480];
            readonly ONE: readonly [13820];
            readonly ReentrancyGuard: readonly [67358];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:6825:70";
        readonly nodes: readonly [{
            readonly id: 13272;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:70";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 13274;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:70";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
            readonly file: "openzeppelin/utils/ReentrancyGuard.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13479;
            readonly sourceUnit: 67359;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 13273;
                    readonly name: "ReentrancyGuard";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67358;
                    readonly src: "73:15:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13276;
            readonly nodeType: "ImportDirective";
            readonly src: "138:50:70";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13479;
            readonly sourceUnit: 6794;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 13275;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6793;
                    readonly src: "147:6:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13278;
            readonly nodeType: "ImportDirective";
            readonly src: "189:60:70";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13479;
            readonly sourceUnit: 7481;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 13277;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7480;
                    readonly src: "198:11:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13281;
            readonly nodeType: "ImportDirective";
            readonly src: "250:70:70";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13479;
            readonly sourceUnit: 14586;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 13279;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14585;
                    readonly src: "259:14:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 13280;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13820;
                    readonly src: "275:3:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13283;
            readonly nodeType: "ImportDirective";
            readonly src: "321:65:70";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13479;
            readonly sourceUnit: 15316;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 13282;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15315;
                    readonly src: "330:14:70";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13478;
            readonly nodeType: "ContractDefinition";
            readonly src: "701:6162:70";
            readonly nodes: readonly [{
                readonly id: 13289;
                readonly nodeType: "UsingForDirective";
                readonly src: "762:33:70";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 13287;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["768:14:70"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14585;
                    readonly src: "768:14:70";
                };
                readonly typeName: {
                    readonly id: 13288;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "787:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 13293;
                readonly nodeType: "VariableDeclaration";
                readonly src: "850:36:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13290;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "821:24:70";
                    readonly text: "@dev The base asset.";
                };
                readonly mutability: "immutable";
                readonly name: "_baseToken";
                readonly nameLocation: "876:10:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IERC20_$6793";
                    readonly typeString: "contract IERC20";
                };
                readonly typeName: {
                    readonly id: 13292;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 13291;
                        readonly name: "IERC20";
                        readonly nameLocations: readonly ["850:6:70"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 6793;
                        readonly src: "850:6:70";
                    };
                    readonly referencedDeclaration: 6793;
                    readonly src: "850:6:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$6793";
                        readonly typeString: "contract IERC20";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13296;
                readonly nodeType: "VariableDeclaration";
                readonly src: "985:46:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13294;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "911:69:70";
                    readonly text: "@dev The amount of seconds between vault share price checkpoints.";
                };
                readonly mutability: "immutable";
                readonly name: "_checkpointDuration";
                readonly nameLocation: "1012:19:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13295;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "985:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13299;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1116:44:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13297;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1038:73:70";
                    readonly text: "@dev The amount of seconds that elapse before a bond can be redeemed.";
                };
                readonly mutability: "immutable";
                readonly name: "_positionDuration";
                readonly nameLocation: "1143:17:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13298;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1116:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13302;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1238:39:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13300;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1167:66:70";
                    readonly text: "@dev A parameter that decreases slippage around a target rate.";
                };
                readonly mutability: "immutable";
                readonly name: "_timeStretch";
                readonly nameLocation: "1265:12:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13301;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1238:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13305;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1367:36:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13303;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1302:60:70";
                    readonly text: "@dev The LP fee applied to the curve portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_curveFee";
                readonly nameLocation: "1394:9:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13304;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1367:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13308;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1474:35:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13306;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1410:59:70";
                    readonly text: "@dev The LP fee applied to the flat portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_flatFee";
                readonly nameLocation: "1501:8:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13307;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1474:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13311;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1580:43:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13309;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1516:59:70";
                    readonly text: "@dev The portion of the LP fee that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceLPFee";
                readonly nameLocation: "1607:16:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13310;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1580:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13314;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1703:47:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13312;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1630:68:70";
                    readonly text: "@dev The portion of the zombie interest that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceZombieFee";
                readonly nameLocation: "1730:20:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13313;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1703:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13317;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1852:50:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13315;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1783:64:70";
                    readonly text: "@dev The vault share price at the time the pool was created.";
                };
                readonly mutability: "immutable";
                readonly name: "_initialVaultSharePrice";
                readonly nameLocation: "1879:23:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13316;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1852:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13320;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2198:48:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13318;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1909:284:70";
                    readonly text: "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumShareReserves";
                readonly nameLocation: "2225:21:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13319;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2198:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13323;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2354:52:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13321;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2253:96:70";
                    readonly text: "@dev The minimum amount of tokens that a position can be opened or\n      closed with.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumTransactionAmount";
                readonly nameLocation: "2381:25:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13322;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2354:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13327;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2560:45:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13324;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2413:142:70";
                    readonly text: "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency.";
                };
                readonly mutability: "mutable";
                readonly name: "_marketState";
                readonly nameLocation: "2593:12:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_MarketState_$7181_storage";
                    readonly typeString: "struct IHyperdrive.MarketState";
                };
                readonly typeName: {
                    readonly id: 13326;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 13325;
                        readonly name: "IHyperdrive.MarketState";
                        readonly nameLocations: readonly ["2560:11:70", "2572:11:70"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7181;
                        readonly src: "2560:23:70";
                    };
                    readonly referencedDeclaration: 7181;
                    readonly src: "2560:23:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_MarketState_$7181_storage_ptr";
                        readonly typeString: "struct IHyperdrive.MarketState";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13331;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2671:47:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13328;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2612:54:70";
                    readonly text: "@dev The state corresponding to the withdraw pool.";
                };
                readonly mutability: "mutable";
                readonly name: "_withdrawPool";
                readonly nameLocation: "2705:13:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_WithdrawPool_$7192_storage";
                    readonly typeString: "struct IHyperdrive.WithdrawPool";
                };
                readonly typeName: {
                    readonly id: 13330;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 13329;
                        readonly name: "IHyperdrive.WithdrawPool";
                        readonly nameLocations: readonly ["2671:11:70", "2683:12:70"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7192;
                        readonly src: "2671:24:70";
                    };
                    readonly referencedDeclaration: 7192;
                    readonly src: "2671:24:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_WithdrawPool_$7192_storage_ptr";
                        readonly typeString: "struct IHyperdrive.WithdrawPool";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13337;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3019:100:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13332;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2725:289:70";
                    readonly text: "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values.";
                };
                readonly mutability: "mutable";
                readonly name: "_checkpoints";
                readonly nameLocation: "3107:12:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7185_storage_$";
                    readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                };
                readonly typeName: {
                    readonly id: 13336;
                    readonly keyName: "checkpointNumber";
                    readonly keyNameLocation: "3035:16:70";
                    readonly keyType: {
                        readonly id: 13333;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3027:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3019:70:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7185_storage_$";
                        readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                    };
                    readonly valueName: "checkpoint";
                    readonly valueNameLocation: "3078:10:70";
                    readonly valueType: {
                        readonly id: 13335;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 13334;
                            readonly name: "IHyperdrive.Checkpoint";
                            readonly nameLocations: readonly ["3055:11:70", "3067:10:70"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 7185;
                            readonly src: "3055:22:70";
                        };
                        readonly referencedDeclaration: 7185;
                        readonly src: "3055:22:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Checkpoint_$7185_storage_ptr";
                            readonly typeString: "struct IHyperdrive.Checkpoint";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13340;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3202:40:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13338;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3145:52:70";
                    readonly text: "@dev The address which collects governance fees.";
                };
                readonly mutability: "immutable";
                readonly name: "_feeCollector";
                readonly nameLocation: "3229:13:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 13339;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3202:7:70";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13343;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3303:28:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13341;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3249:49:70";
                    readonly text: "@dev The address that can pause the contract.";
                };
                readonly mutability: "mutable";
                readonly name: "_governance";
                readonly nameLocation: "3320:11:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 13342;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3303:7:70";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13346;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3422:39:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13344;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3338:79:70";
                    readonly text: "@dev Governance fees that haven't been collected yet denominated in shares.";
                };
                readonly mutability: "mutable";
                readonly name: "_governanceFeesAccrued";
                readonly nameLocation: "3439:22:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 13345;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3422:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13351;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3609:56:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13347;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3468:136:70";
                    readonly text: "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality.";
                };
                readonly mutability: "mutable";
                readonly name: "_pausers";
                readonly nameLocation: "3657:8:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                    readonly typeString: "mapping(address => bool)";
                };
                readonly typeName: {
                    readonly id: 13350;
                    readonly keyName: "user";
                    readonly keyNameLocation: "3625:4:70";
                    readonly keyType: {
                        readonly id: 13348;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3617:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3609:38:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                        readonly typeString: "mapping(address => bool)";
                    };
                    readonly valueName: "isPauser";
                    readonly valueNameLocation: "3638:8:70";
                    readonly valueType: {
                        readonly id: 13349;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3633:4:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13354;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3793:41:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13352;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3696:92:70";
                    readonly text: "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerFactory";
                readonly nameLocation: "3820:14:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 13353;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3793:7:70";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13357;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3953:42:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13355;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3841:107:70";
                    readonly text: "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerCodeHash";
                readonly nameLocation: "3980:15:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 13356;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3953:7:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13364;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4047:96:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13358;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4002:40:70";
                    readonly text: "@dev Allows loading of each balance.";
                };
                readonly mutability: "mutable";
                readonly name: "_balanceOf";
                readonly nameLocation: "4133:10:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                };
                readonly typeName: {
                    readonly id: 13363;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4063:7:70";
                    readonly keyType: {
                        readonly id: 13359;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4055:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4047:68:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 13362;
                        readonly keyName: "user";
                        readonly keyNameLocation: "4090:4:70";
                        readonly keyType: {
                            readonly id: 13360;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4082:7:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4074:40:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                            readonly typeString: "mapping(address => uint256)";
                        };
                        readonly valueName: "balance";
                        readonly valueNameLocation: "4106:7:70";
                        readonly valueType: {
                            readonly id: 13361;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4098:7:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13369;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4200:64:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13365;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4150:45:70";
                    readonly text: "@dev Allows loading of each total supply.";
                };
                readonly mutability: "mutable";
                readonly name: "_totalSupply";
                readonly nameLocation: "4252:12:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                    readonly typeString: "mapping(uint256 => uint256)";
                };
                readonly typeName: {
                    readonly id: 13368;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4216:7:70";
                    readonly keyType: {
                        readonly id: 13366;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4208:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4200:42:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                        readonly typeString: "mapping(uint256 => uint256)";
                    };
                    readonly valueName: "supply";
                    readonly valueNameLocation: "4235:6:70";
                    readonly valueType: {
                        readonly id: 13367;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4227:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13376;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4317:102:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13370;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4271:41:70";
                    readonly text: "@dev Uniform approval for all tokens.";
                };
                readonly mutability: "mutable";
                readonly name: "_isApprovedForAll";
                readonly nameLocation: "4402:17:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                    readonly typeString: "mapping(address => mapping(address => bool))";
                };
                readonly typeName: {
                    readonly id: 13375;
                    readonly keyName: "from";
                    readonly keyNameLocation: "4333:4:70";
                    readonly keyType: {
                        readonly id: 13371;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4325:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4317:67:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                        readonly typeString: "mapping(address => mapping(address => bool))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 13374;
                        readonly keyName: "caller";
                        readonly keyNameLocation: "4357:6:70";
                        readonly keyType: {
                            readonly id: 13372;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4349:7:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4341:42:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                            readonly typeString: "mapping(address => bool)";
                        };
                        readonly valueName: "isApproved";
                        readonly valueNameLocation: "4372:10:70";
                        readonly valueType: {
                            readonly id: 13373;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4367:4:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13385;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4580:132:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13377;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4426:149:70";
                    readonly text: "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface.";
                };
                readonly mutability: "mutable";
                readonly name: "_perTokenApprovals";
                readonly nameLocation: "4694:18:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                };
                readonly typeName: {
                    readonly id: 13384;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4596:7:70";
                    readonly keyType: {
                        readonly id: 13378;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4588:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4580:96:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 13383;
                        readonly keyName: "from";
                        readonly keyNameLocation: "4623:4:70";
                        readonly keyType: {
                            readonly id: 13379;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4615:7:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4607:68:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                            readonly typeString: "mapping(address => mapping(address => uint256))";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 13382;
                            readonly keyName: "caller";
                            readonly keyNameLocation: "4647:6:70";
                            readonly keyType: {
                                readonly id: 13380;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4639:7:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Mapping";
                            readonly src: "4631:43:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                readonly typeString: "mapping(address => uint256)";
                            };
                            readonly valueName: "approved";
                            readonly valueNameLocation: "4665:8:70";
                            readonly valueType: {
                                readonly id: 13381;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4657:7:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13390;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4786:55:70";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 13386;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4719:62:70";
                    readonly text: "@dev A mapping to track the permitForAll signature nonces.";
                };
                readonly mutability: "mutable";
                readonly name: "_nonces";
                readonly nameLocation: "4834:7:70";
                readonly scope: 13478;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 13389;
                    readonly keyName: "user";
                    readonly keyNameLocation: "4802:4:70";
                    readonly keyType: {
                        readonly id: 13387;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4794:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4786:38:70";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "nonce";
                    readonly valueNameLocation: "4818:5:70";
                    readonly valueType: {
                        readonly id: 13388;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4810:7:70";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 13477;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4989:1872:70";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 13476;
                    readonly nodeType: "Block";
                    readonly src: "5040:1821:70";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 13400;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13397;
                                readonly name: "_baseToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13293;
                                readonly src: "5096:10:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13398;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "5109:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13399;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5117:9:70";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7245;
                                readonly src: "5109:17:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "5096:30:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 13401;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5096:30:70";
                    }, {
                        readonly expression: {
                            readonly id: 13405;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13402;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13317;
                                readonly src: "5190:23:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13403;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "5216:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13404;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5224:22:70";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7254;
                                readonly src: "5216:30:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5190:56:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13406;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5190:56:70";
                    }, {
                        readonly expression: {
                            readonly id: 13410;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13407;
                                readonly name: "_minimumShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13320;
                                readonly src: "5645:21:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13408;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "5669:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13409;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5677:20:70";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7257;
                                readonly src: "5669:28:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5645:52:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13411;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5645:52:70";
                    }, {
                        readonly expression: {
                            readonly id: 13415;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13412;
                                readonly name: "_minimumTransactionAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13323;
                                readonly src: "5957:25:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13413;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "5985:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13414;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5993:24:70";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7260;
                                readonly src: "5985:32:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5957:60:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13416;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5957:60:70";
                    }, {
                        readonly expression: {
                            readonly id: 13420;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13417;
                                readonly name: "_checkpointDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13296;
                                readonly src: "6178:19:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13418;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6200:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13419;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6208:18:70";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7266;
                                readonly src: "6200:26:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6178:48:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13421;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6178:48:70";
                    }, {
                        readonly expression: {
                            readonly id: 13425;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13422;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13299;
                                readonly src: "6236:17:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13423;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6256:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13424;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6264:16:70";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7263;
                                readonly src: "6256:24:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6236:44:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13426;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6236:44:70";
                    }, {
                        readonly expression: {
                            readonly id: 13430;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13427;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13302;
                                readonly src: "6290:12:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13428;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6305:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13429;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6313:11:70";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7269;
                                readonly src: "6305:19:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6290:34:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13431;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6290:34:70";
                    }, {
                        readonly expression: {
                            readonly id: 13436;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13432;
                                readonly name: "_curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13305;
                                readonly src: "6377:9:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 13433;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13394;
                                        readonly src: "6389:7:70";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 13434;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6397:4:70";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7279;
                                    readonly src: "6389:12:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 13435;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6402:5:70";
                                readonly memberName: "curve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7195;
                                readonly src: "6389:18:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6377:30:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13437;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6377:30:70";
                    }, {
                        readonly expression: {
                            readonly id: 13442;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13438;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13308;
                                readonly src: "6417:8:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 13439;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13394;
                                        readonly src: "6428:7:70";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 13440;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6436:4:70";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7279;
                                    readonly src: "6428:12:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 13441;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6441:4:70";
                                readonly memberName: "flat";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7198;
                                readonly src: "6428:17:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6417:28:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13443;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6417:28:70";
                    }, {
                        readonly expression: {
                            readonly id: 13448;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13444;
                                readonly name: "_governanceLPFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13311;
                                readonly src: "6455:16:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 13445;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13394;
                                        readonly src: "6474:7:70";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 13446;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6482:4:70";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7279;
                                    readonly src: "6474:12:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 13447;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6487:12:70";
                                readonly memberName: "governanceLP";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7201;
                                readonly src: "6474:25:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6455:44:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13449;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6455:44:70";
                    }, {
                        readonly expression: {
                            readonly id: 13454;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13450;
                                readonly name: "_governanceZombieFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13314;
                                readonly src: "6509:20:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 13451;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13394;
                                        readonly src: "6532:7:70";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 13452;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6540:4:70";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 7279;
                                    readonly src: "6532:12:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$7205_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 13453;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6545:16:70";
                                readonly memberName: "governanceZombie";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7204;
                                readonly src: "6532:29:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6509:52:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 13455;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6509:52:70";
                    }, {
                        readonly expression: {
                            readonly id: 13459;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13456;
                                readonly name: "_linkerFactory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13354;
                                readonly src: "6621:14:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13457;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6638:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13458;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6646:13:70";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7248;
                                readonly src: "6638:21:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6621:38:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 13460;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6621:38:70";
                    }, {
                        readonly expression: {
                            readonly id: 13464;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13461;
                                readonly name: "_linkerCodeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13357;
                                readonly src: "6669:15:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13462;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6687:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13463;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6695:14:70";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7251;
                                readonly src: "6687:22:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "6669:40:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 13465;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6669:40:70";
                    }, {
                        readonly expression: {
                            readonly id: 13469;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13466;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13343;
                                readonly src: "6776:11:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13467;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6790:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13468;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6798:10:70";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7272;
                                readonly src: "6790:18:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6776:32:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 13470;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6776:32:70";
                    }, {
                        readonly expression: {
                            readonly id: 13474;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 13471;
                                readonly name: "_feeCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13340;
                                readonly src: "6818:13:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 13472;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13394;
                                    readonly src: "6834:7:70";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 13473;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6842:12:70";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 7275;
                                readonly src: "6834:20:70";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6818:36:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 13475;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6818:36:70";
                    }];
                };
                readonly documentation: {
                    readonly id: 13391;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4873:111:70";
                    readonly text: "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 13395;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13394;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "5031:7:70";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13477;
                        readonly src: "5001:37:70";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 13393;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 13392;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["5001:11:70", "5013:10:70"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7280;
                                readonly src: "5001:22:70";
                            };
                            readonly referencedDeclaration: 7280;
                            readonly src: "5001:22:70";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5000:39:70";
                };
                readonly returnParameters: {
                    readonly id: 13396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5040:0:70";
                };
                readonly scope: 13478;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 13285;
                    readonly name: "ReentrancyGuard";
                    readonly nameLocations: readonly ["740:15:70"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67358;
                    readonly src: "740:15:70";
                };
                readonly id: 13286;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "740:15:70";
            }];
            readonly canonicalName: "HyperdriveStorage";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 13284;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "388:313:70";
                readonly text: "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [13478, 67358];
            readonly name: "HyperdriveStorage";
            readonly nameLocation: "719:17:70";
            readonly scope: 13479;
            readonly usedErrors: readonly [67303];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 70;
};
//# sourceMappingURL=HyperdriveStorage.d.ts.map