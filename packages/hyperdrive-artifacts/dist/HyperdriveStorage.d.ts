export declare const HyperdriveStorage: {
    readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_sweepCollector\":{\"details\":\"The address which collects swept tokens.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a";
                readonly urls: readonly ["bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195", "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
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
        readonly id: 18498;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [19572];
            readonly HyperdriveMath: readonly [20320];
            readonly HyperdriveStorage: readonly [18497];
            readonly IERC20: readonly [10417];
            readonly IHyperdrive: readonly [11143];
            readonly ONE: readonly [18806];
            readonly ReentrancyGuard: readonly [72173];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:6980:124";
        readonly nodes: readonly [{
            readonly id: 18283;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:124";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 18285;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:124";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
            readonly file: "openzeppelin/utils/ReentrancyGuard.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18498;
            readonly sourceUnit: 72174;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18284;
                    readonly name: "ReentrancyGuard";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72173;
                    readonly src: "73:15:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18287;
            readonly nodeType: "ImportDirective";
            readonly src: "138:50:124";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18498;
            readonly sourceUnit: 10418;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18286;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10417;
                    readonly src: "147:6:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18289;
            readonly nodeType: "ImportDirective";
            readonly src: "189:60:124";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18498;
            readonly sourceUnit: 11144;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18288;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11143;
                    readonly src: "198:11:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18292;
            readonly nodeType: "ImportDirective";
            readonly src: "250:70:124";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18498;
            readonly sourceUnit: 19573;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18290;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19572;
                    readonly src: "259:14:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 18291;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18806;
                    readonly src: "275:3:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18294;
            readonly nodeType: "ImportDirective";
            readonly src: "321:65:124";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 18498;
            readonly sourceUnit: 20321;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 18293;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 20320;
                    readonly src: "330:14:124";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 18497;
            readonly nodeType: "ContractDefinition";
            readonly src: "701:6317:124";
            readonly nodes: readonly [{
                readonly id: 18300;
                readonly nodeType: "UsingForDirective";
                readonly src: "762:33:124";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 18298;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["768:14:124"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19572;
                    readonly src: "768:14:124";
                };
                readonly typeName: {
                    readonly id: 18299;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "787:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 18304;
                readonly nodeType: "VariableDeclaration";
                readonly src: "850:36:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18301;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "821:24:124";
                    readonly text: "@dev The base asset.";
                };
                readonly mutability: "immutable";
                readonly name: "_baseToken";
                readonly nameLocation: "876:10:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                    readonly typeString: "contract IERC20";
                };
                readonly typeName: {
                    readonly id: 18303;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 18302;
                        readonly name: "IERC20";
                        readonly nameLocations: readonly ["850:6:124"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 10417;
                        readonly src: "850:6:124";
                    };
                    readonly referencedDeclaration: 10417;
                    readonly src: "850:6:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                        readonly typeString: "contract IERC20";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18307;
                readonly nodeType: "VariableDeclaration";
                readonly src: "985:46:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18305;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "911:69:124";
                    readonly text: "@dev The amount of seconds between vault share price checkpoints.";
                };
                readonly mutability: "immutable";
                readonly name: "_checkpointDuration";
                readonly nameLocation: "1012:19:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18306;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "985:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18310;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1116:44:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18308;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1038:73:124";
                    readonly text: "@dev The amount of seconds that elapse before a bond can be redeemed.";
                };
                readonly mutability: "immutable";
                readonly name: "_positionDuration";
                readonly nameLocation: "1143:17:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18309;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1116:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18313;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1238:39:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18311;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1167:66:124";
                    readonly text: "@dev A parameter that decreases slippage around a target rate.";
                };
                readonly mutability: "immutable";
                readonly name: "_timeStretch";
                readonly nameLocation: "1265:12:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18312;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1238:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18316;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1367:36:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18314;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1302:60:124";
                    readonly text: "@dev The LP fee applied to the curve portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_curveFee";
                readonly nameLocation: "1394:9:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18315;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1367:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18319;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1474:35:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18317;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1410:59:124";
                    readonly text: "@dev The LP fee applied to the flat portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_flatFee";
                readonly nameLocation: "1501:8:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18318;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1474:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18322;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1580:43:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18320;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1516:59:124";
                    readonly text: "@dev The portion of the LP fee that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceLPFee";
                readonly nameLocation: "1607:16:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18321;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1580:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18325;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1703:47:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18323;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1630:68:124";
                    readonly text: "@dev The portion of the zombie interest that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceZombieFee";
                readonly nameLocation: "1730:20:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18324;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1703:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18328;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1852:50:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18326;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1783:64:124";
                    readonly text: "@dev The vault share price at the time the pool was created.";
                };
                readonly mutability: "immutable";
                readonly name: "_initialVaultSharePrice";
                readonly nameLocation: "1879:23:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18327;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1852:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18331;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2198:48:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18329;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1909:284:124";
                    readonly text: "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumShareReserves";
                readonly nameLocation: "2225:21:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18330;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2198:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18334;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2354:52:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18332;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2253:96:124";
                    readonly text: "@dev The minimum amount of tokens that a position can be opened or\n      closed with.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumTransactionAmount";
                readonly nameLocation: "2381:25:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18333;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2354:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18338;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2560:45:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18335;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2413:142:124";
                    readonly text: "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency.";
                };
                readonly mutability: "mutable";
                readonly name: "_marketState";
                readonly nameLocation: "2593:12:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                    readonly typeString: "struct IHyperdrive.MarketState";
                };
                readonly typeName: {
                    readonly id: 18337;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 18336;
                        readonly name: "IHyperdrive.MarketState";
                        readonly nameLocations: readonly ["2560:11:124", "2572:11:124"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 10829;
                        readonly src: "2560:23:124";
                    };
                    readonly referencedDeclaration: 10829;
                    readonly src: "2560:23:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage_ptr";
                        readonly typeString: "struct IHyperdrive.MarketState";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18342;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2671:47:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18339;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2612:54:124";
                    readonly text: "@dev The state corresponding to the withdraw pool.";
                };
                readonly mutability: "mutable";
                readonly name: "_withdrawPool";
                readonly nameLocation: "2705:13:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_WithdrawPool_$10840_storage";
                    readonly typeString: "struct IHyperdrive.WithdrawPool";
                };
                readonly typeName: {
                    readonly id: 18341;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 18340;
                        readonly name: "IHyperdrive.WithdrawPool";
                        readonly nameLocations: readonly ["2671:11:124", "2683:12:124"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 10840;
                        readonly src: "2671:24:124";
                    };
                    readonly referencedDeclaration: 10840;
                    readonly src: "2671:24:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10840_storage_ptr";
                        readonly typeString: "struct IHyperdrive.WithdrawPool";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18348;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3019:100:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18343;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2725:289:124";
                    readonly text: "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values.";
                };
                readonly mutability: "mutable";
                readonly name: "_checkpoints";
                readonly nameLocation: "3107:12:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10833_storage_$";
                    readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                };
                readonly typeName: {
                    readonly id: 18347;
                    readonly keyName: "checkpointNumber";
                    readonly keyNameLocation: "3035:16:124";
                    readonly keyType: {
                        readonly id: 18344;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3027:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3019:70:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10833_storage_$";
                        readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                    };
                    readonly valueName: "checkpoint";
                    readonly valueNameLocation: "3078:10:124";
                    readonly valueType: {
                        readonly id: 18346;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 18345;
                            readonly name: "IHyperdrive.Checkpoint";
                            readonly nameLocations: readonly ["3055:11:124", "3067:10:124"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 10833;
                            readonly src: "3055:22:124";
                        };
                        readonly referencedDeclaration: 10833;
                        readonly src: "3055:22:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Checkpoint_$10833_storage_ptr";
                            readonly typeString: "struct IHyperdrive.Checkpoint";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18351;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3202:30:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18349;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3145:52:124";
                    readonly text: "@dev The address which collects governance fees.";
                };
                readonly mutability: "mutable";
                readonly name: "_feeCollector";
                readonly nameLocation: "3219:13:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 18350;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3202:7:124";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18354;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3293:32:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18352;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3239:49:124";
                    readonly text: "@dev The address which collects swept tokens.";
                };
                readonly mutability: "mutable";
                readonly name: "_sweepCollector";
                readonly nameLocation: "3310:15:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 18353;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3293:7:124";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18357;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3386:28:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18355;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3332:49:124";
                    readonly text: "@dev The address that can pause the contract.";
                };
                readonly mutability: "mutable";
                readonly name: "_governance";
                readonly nameLocation: "3403:11:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 18356;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3386:7:124";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18360;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3505:39:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18358;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3421:79:124";
                    readonly text: "@dev Governance fees that haven't been collected yet denominated in shares.";
                };
                readonly mutability: "mutable";
                readonly name: "_governanceFeesAccrued";
                readonly nameLocation: "3522:22:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 18359;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3505:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18365;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3692:56:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18361;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3551:136:124";
                    readonly text: "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality.";
                };
                readonly mutability: "mutable";
                readonly name: "_pausers";
                readonly nameLocation: "3740:8:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                    readonly typeString: "mapping(address => bool)";
                };
                readonly typeName: {
                    readonly id: 18364;
                    readonly keyName: "user";
                    readonly keyNameLocation: "3708:4:124";
                    readonly keyType: {
                        readonly id: 18362;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3700:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3692:38:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                        readonly typeString: "mapping(address => bool)";
                    };
                    readonly valueName: "isPauser";
                    readonly valueNameLocation: "3721:8:124";
                    readonly valueType: {
                        readonly id: 18363;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3716:4:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18368;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3876:41:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18366;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3779:92:124";
                    readonly text: "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerFactory";
                readonly nameLocation: "3903:14:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 18367;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3876:7:124";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18371;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4036:42:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18369;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3924:107:124";
                    readonly text: "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerCodeHash";
                readonly nameLocation: "4063:15:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 18370;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4036:7:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18378;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4130:96:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18372;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4085:40:124";
                    readonly text: "@dev Allows loading of each balance.";
                };
                readonly mutability: "mutable";
                readonly name: "_balanceOf";
                readonly nameLocation: "4216:10:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                };
                readonly typeName: {
                    readonly id: 18377;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4146:7:124";
                    readonly keyType: {
                        readonly id: 18373;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4138:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4130:68:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 18376;
                        readonly keyName: "user";
                        readonly keyNameLocation: "4173:4:124";
                        readonly keyType: {
                            readonly id: 18374;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4165:7:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4157:40:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                            readonly typeString: "mapping(address => uint256)";
                        };
                        readonly valueName: "balance";
                        readonly valueNameLocation: "4189:7:124";
                        readonly valueType: {
                            readonly id: 18375;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4181:7:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18383;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4283:64:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18379;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4233:45:124";
                    readonly text: "@dev Allows loading of each total supply.";
                };
                readonly mutability: "mutable";
                readonly name: "_totalSupply";
                readonly nameLocation: "4335:12:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                    readonly typeString: "mapping(uint256 => uint256)";
                };
                readonly typeName: {
                    readonly id: 18382;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4299:7:124";
                    readonly keyType: {
                        readonly id: 18380;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4291:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4283:42:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                        readonly typeString: "mapping(uint256 => uint256)";
                    };
                    readonly valueName: "supply";
                    readonly valueNameLocation: "4318:6:124";
                    readonly valueType: {
                        readonly id: 18381;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4310:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18390;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4400:102:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18384;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4354:41:124";
                    readonly text: "@dev Uniform approval for all tokens.";
                };
                readonly mutability: "mutable";
                readonly name: "_isApprovedForAll";
                readonly nameLocation: "4485:17:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                    readonly typeString: "mapping(address => mapping(address => bool))";
                };
                readonly typeName: {
                    readonly id: 18389;
                    readonly keyName: "from";
                    readonly keyNameLocation: "4416:4:124";
                    readonly keyType: {
                        readonly id: 18385;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4408:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4400:67:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                        readonly typeString: "mapping(address => mapping(address => bool))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 18388;
                        readonly keyName: "caller";
                        readonly keyNameLocation: "4440:6:124";
                        readonly keyType: {
                            readonly id: 18386;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4432:7:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4424:42:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                            readonly typeString: "mapping(address => bool)";
                        };
                        readonly valueName: "isApproved";
                        readonly valueNameLocation: "4455:10:124";
                        readonly valueType: {
                            readonly id: 18387;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4450:4:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18399;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4663:132:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18391;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4509:149:124";
                    readonly text: "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface.";
                };
                readonly mutability: "mutable";
                readonly name: "_perTokenApprovals";
                readonly nameLocation: "4777:18:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                };
                readonly typeName: {
                    readonly id: 18398;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4679:7:124";
                    readonly keyType: {
                        readonly id: 18392;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4671:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4663:96:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 18397;
                        readonly keyName: "from";
                        readonly keyNameLocation: "4706:4:124";
                        readonly keyType: {
                            readonly id: 18393;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4698:7:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4690:68:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                            readonly typeString: "mapping(address => mapping(address => uint256))";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 18396;
                            readonly keyName: "caller";
                            readonly keyNameLocation: "4730:6:124";
                            readonly keyType: {
                                readonly id: 18394;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4722:7:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Mapping";
                            readonly src: "4714:43:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                readonly typeString: "mapping(address => uint256)";
                            };
                            readonly valueName: "approved";
                            readonly valueNameLocation: "4748:8:124";
                            readonly valueType: {
                                readonly id: 18395;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4740:7:124";
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
                readonly id: 18404;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4869:55:124";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 18400;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4802:62:124";
                    readonly text: "@dev A mapping to track the permitForAll signature nonces.";
                };
                readonly mutability: "mutable";
                readonly name: "_nonces";
                readonly nameLocation: "4917:7:124";
                readonly scope: 18497;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 18403;
                    readonly keyName: "user";
                    readonly keyNameLocation: "4885:4:124";
                    readonly keyType: {
                        readonly id: 18401;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4877:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4869:38:124";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "nonce";
                    readonly valueNameLocation: "4901:5:124";
                    readonly valueType: {
                        readonly id: 18402;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4893:7:124";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 18496;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5072:1944:124";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 18495;
                    readonly nodeType: "Block";
                    readonly src: "5123:1893:124";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 18414;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18411;
                                readonly name: "_baseToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18304;
                                readonly src: "5179:10:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18412;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "5192:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18413;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5200:9:124";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10896;
                                readonly src: "5192:17:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "5179:30:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 18415;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5179:30:124";
                    }, {
                        readonly expression: {
                            readonly id: 18419;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18416;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18328;
                                readonly src: "5273:23:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18417;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "5299:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18418;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5307:22:124";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10905;
                                readonly src: "5299:30:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5273:56:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18420;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5273:56:124";
                    }, {
                        readonly expression: {
                            readonly id: 18424;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18421;
                                readonly name: "_minimumShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18331;
                                readonly src: "5728:21:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18422;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "5752:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18423;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5760:20:124";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10908;
                                readonly src: "5752:28:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5728:52:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18425;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5728:52:124";
                    }, {
                        readonly expression: {
                            readonly id: 18429;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18426;
                                readonly name: "_minimumTransactionAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18334;
                                readonly src: "6040:25:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18427;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6068:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18428;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6076:24:124";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10911;
                                readonly src: "6068:32:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6040:60:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18430;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6040:60:124";
                    }, {
                        readonly expression: {
                            readonly id: 18434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18431;
                                readonly name: "_checkpointDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18307;
                                readonly src: "6261:19:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18432;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6283:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18433;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6291:18:124";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10917;
                                readonly src: "6283:26:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6261:48:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18435;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6261:48:124";
                    }, {
                        readonly expression: {
                            readonly id: 18439;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18436;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18310;
                                readonly src: "6319:17:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18437;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6339:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18438;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6347:16:124";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10914;
                                readonly src: "6339:24:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6319:44:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18440;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6319:44:124";
                    }, {
                        readonly expression: {
                            readonly id: 18444;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18441;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18313;
                                readonly src: "6373:12:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18442;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6388:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18443;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6396:11:124";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10920;
                                readonly src: "6388:19:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6373:34:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18445;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6373:34:124";
                    }, {
                        readonly expression: {
                            readonly id: 18450;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18446;
                                readonly name: "_curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18316;
                                readonly src: "6460:9:124";
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
                                        readonly id: 18447;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18408;
                                        readonly src: "6472:7:124";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 18448;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6480:4:124";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10933;
                                    readonly src: "6472:12:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10853_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 18449;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6485:5:124";
                                readonly memberName: "curve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10843;
                                readonly src: "6472:18:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6460:30:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18451;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6460:30:124";
                    }, {
                        readonly expression: {
                            readonly id: 18456;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18452;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18319;
                                readonly src: "6500:8:124";
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
                                        readonly id: 18453;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18408;
                                        readonly src: "6511:7:124";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 18454;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6519:4:124";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10933;
                                    readonly src: "6511:12:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10853_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 18455;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6524:4:124";
                                readonly memberName: "flat";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10846;
                                readonly src: "6511:17:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6500:28:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18457;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6500:28:124";
                    }, {
                        readonly expression: {
                            readonly id: 18462;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18458;
                                readonly name: "_governanceLPFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18322;
                                readonly src: "6538:16:124";
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
                                        readonly id: 18459;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18408;
                                        readonly src: "6557:7:124";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 18460;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6565:4:124";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10933;
                                    readonly src: "6557:12:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10853_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 18461;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6570:12:124";
                                readonly memberName: "governanceLP";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10849;
                                readonly src: "6557:25:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6538:44:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18463;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6538:44:124";
                    }, {
                        readonly expression: {
                            readonly id: 18468;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18464;
                                readonly name: "_governanceZombieFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18325;
                                readonly src: "6592:20:124";
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
                                        readonly id: 18465;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18408;
                                        readonly src: "6615:7:124";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 18466;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6623:4:124";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10933;
                                    readonly src: "6615:12:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10853_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 18467;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6628:16:124";
                                readonly memberName: "governanceZombie";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10852;
                                readonly src: "6615:29:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6592:52:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 18469;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6592:52:124";
                    }, {
                        readonly expression: {
                            readonly id: 18473;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18470;
                                readonly name: "_linkerFactory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18368;
                                readonly src: "6704:14:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18471;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6721:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18472;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6729:13:124";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10899;
                                readonly src: "6721:21:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6704:38:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 18474;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6704:38:124";
                    }, {
                        readonly expression: {
                            readonly id: 18478;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18475;
                                readonly name: "_linkerCodeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18371;
                                readonly src: "6752:15:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18476;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6770:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18477;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6778:14:124";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10902;
                                readonly src: "6770:22:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "6752:40:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 18479;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6752:40:124";
                    }, {
                        readonly expression: {
                            readonly id: 18483;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18480;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18357;
                                readonly src: "6881:11:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18481;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6895:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18482;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6903:10:124";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10923;
                                readonly src: "6895:18:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6881:32:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 18484;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6881:32:124";
                    }, {
                        readonly expression: {
                            readonly id: 18488;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18485;
                                readonly name: "_feeCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18351;
                                readonly src: "6923:13:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18486;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6939:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18487;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6947:12:124";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10926;
                                readonly src: "6939:20:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6923:36:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 18489;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6923:36:124";
                    }, {
                        readonly expression: {
                            readonly id: 18493;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 18490;
                                readonly name: "_sweepCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18354;
                                readonly src: "6969:15:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 18491;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18408;
                                    readonly src: "6987:7:124";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 18492;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6995:14:124";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10929;
                                readonly src: "6987:22:124";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6969:40:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 18494;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6969:40:124";
                    }];
                };
                readonly documentation: {
                    readonly id: 18405;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4956:111:124";
                    readonly text: "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 18409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 18408;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "5114:7:124";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 18496;
                        readonly src: "5084:37:124";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 18407;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 18406;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["5084:11:124", "5096:10:124"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "5084:22:124";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "5084:22:124";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5083:39:124";
                };
                readonly returnParameters: {
                    readonly id: 18410;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5123:0:124";
                };
                readonly scope: 18497;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 18296;
                    readonly name: "ReentrancyGuard";
                    readonly nameLocations: readonly ["740:15:124"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72173;
                    readonly src: "740:15:124";
                };
                readonly id: 18297;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "740:15:124";
            }];
            readonly canonicalName: "HyperdriveStorage";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 18295;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "388:313:124";
                readonly text: "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [18497, 72173];
            readonly name: "HyperdriveStorage";
            readonly nameLocation: "719:17:124";
            readonly scope: 18498;
            readonly usedErrors: readonly [72118];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 124;
};
//# sourceMappingURL=HyperdriveStorage.d.ts.map