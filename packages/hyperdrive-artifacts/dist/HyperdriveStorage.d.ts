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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_sweepCollector\":{\"details\":\"The address which collects swept tokens.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_vaultSharesToken\":{\"details\":\"The vault shares asset.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
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
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
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
                readonly keccak256: "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4";
                readonly urls: readonly ["bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e", "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"];
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
        readonly id: 17991;
        readonly exportedSymbols: {
            readonly FixedPointMath: readonly [19065];
            readonly HyperdriveMath: readonly [19813];
            readonly HyperdriveStorage: readonly [17990];
            readonly IERC20: readonly [9980];
            readonly IHyperdrive: readonly [10676];
            readonly ONE: readonly [18299];
            readonly ReentrancyGuard: readonly [71674];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:7140:118";
        readonly nodes: readonly [{
            readonly id: 17767;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:118";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 17769;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:118";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
            readonly file: "openzeppelin/utils/ReentrancyGuard.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 17991;
            readonly sourceUnit: 71675;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17768;
                    readonly name: "ReentrancyGuard";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71674;
                    readonly src: "73:15:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 17771;
            readonly nodeType: "ImportDirective";
            readonly src: "138:50:118";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 17991;
            readonly sourceUnit: 9981;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17770;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9980;
                    readonly src: "147:6:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 17773;
            readonly nodeType: "ImportDirective";
            readonly src: "189:60:118";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 17991;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17772;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "198:11:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 17776;
            readonly nodeType: "ImportDirective";
            readonly src: "250:70:118";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 17991;
            readonly sourceUnit: 19066;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17774;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19065;
                    readonly src: "259:14:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 17775;
                    readonly name: "ONE";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18299;
                    readonly src: "275:3:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 17778;
            readonly nodeType: "ImportDirective";
            readonly src: "321:65:118";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/HyperdriveMath.sol";
            readonly file: "../libraries/HyperdriveMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 17991;
            readonly sourceUnit: 19814;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 17777;
                    readonly name: "HyperdriveMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19813;
                    readonly src: "330:14:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 17990;
            readonly nodeType: "ContractDefinition";
            readonly src: "701:6477:118";
            readonly nodes: readonly [{
                readonly id: 17784;
                readonly nodeType: "UsingForDirective";
                readonly src: "762:33:118";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 17782;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["768:14:118"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "768:14:118";
                };
                readonly typeName: {
                    readonly id: 17783;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "787:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 17788;
                readonly nodeType: "VariableDeclaration";
                readonly src: "850:36:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17785;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "821:24:118";
                    readonly text: "@dev The base asset.";
                };
                readonly mutability: "immutable";
                readonly name: "_baseToken";
                readonly nameLocation: "876:10:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                    readonly typeString: "contract IERC20";
                };
                readonly typeName: {
                    readonly id: 17787;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 17786;
                        readonly name: "IERC20";
                        readonly nameLocations: readonly ["850:6:118"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 9980;
                        readonly src: "850:6:118";
                    };
                    readonly referencedDeclaration: 9980;
                    readonly src: "850:6:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                        readonly typeString: "contract IERC20";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17792;
                readonly nodeType: "VariableDeclaration";
                readonly src: "930:43:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17789;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "893:32:118";
                    readonly text: "@dev The vault shares asset.";
                };
                readonly mutability: "immutable";
                readonly name: "_vaultSharesToken";
                readonly nameLocation: "956:17:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                    readonly typeString: "contract IERC20";
                };
                readonly typeName: {
                    readonly id: 17791;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 17790;
                        readonly name: "IERC20";
                        readonly nameLocations: readonly ["930:6:118"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 9980;
                        readonly src: "930:6:118";
                    };
                    readonly referencedDeclaration: 9980;
                    readonly src: "930:6:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                        readonly typeString: "contract IERC20";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17795;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1072:46:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17793;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "998:69:118";
                    readonly text: "@dev The amount of seconds between vault share price checkpoints.";
                };
                readonly mutability: "immutable";
                readonly name: "_checkpointDuration";
                readonly nameLocation: "1099:19:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17794;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1072:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17798;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1203:44:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17796;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1125:73:118";
                    readonly text: "@dev The amount of seconds that elapse before a bond can be redeemed.";
                };
                readonly mutability: "immutable";
                readonly name: "_positionDuration";
                readonly nameLocation: "1230:17:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17797;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1203:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17801;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1325:39:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17799;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1254:66:118";
                    readonly text: "@dev A parameter that decreases slippage around a target rate.";
                };
                readonly mutability: "immutable";
                readonly name: "_timeStretch";
                readonly nameLocation: "1352:12:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17800;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1325:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17804;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1454:36:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17802;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1389:60:118";
                    readonly text: "@dev The LP fee applied to the curve portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_curveFee";
                readonly nameLocation: "1481:9:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17803;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1454:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17807;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1561:35:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17805;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1497:59:118";
                    readonly text: "@dev The LP fee applied to the flat portion of a trade.";
                };
                readonly mutability: "immutable";
                readonly name: "_flatFee";
                readonly nameLocation: "1588:8:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17806;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1561:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17810;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1667:43:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17808;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1603:59:118";
                    readonly text: "@dev The portion of the LP fee that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceLPFee";
                readonly nameLocation: "1694:16:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17809;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1667:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17813;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1790:47:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17811;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1717:68:118";
                    readonly text: "@dev The portion of the zombie interest that goes to governance.";
                };
                readonly mutability: "immutable";
                readonly name: "_governanceZombieFee";
                readonly nameLocation: "1817:20:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17812;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1790:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17816;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1939:50:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17814;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1870:64:118";
                    readonly text: "@dev The vault share price at the time the pool was created.";
                };
                readonly mutability: "immutable";
                readonly name: "_initialVaultSharePrice";
                readonly nameLocation: "1966:23:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17815;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1939:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17819;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2285:48:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17817;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1996:284:118";
                    readonly text: "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumShareReserves";
                readonly nameLocation: "2312:21:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17818;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2285:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17822;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2441:52:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17820;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2340:96:118";
                    readonly text: "@dev The minimum amount of tokens that a position can be opened or\n      closed with.";
                };
                readonly mutability: "immutable";
                readonly name: "_minimumTransactionAmount";
                readonly nameLocation: "2468:25:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17821;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2441:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17826;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2647:45:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17823;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2500:142:118";
                    readonly text: "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency.";
                };
                readonly mutability: "mutable";
                readonly name: "_marketState";
                readonly nameLocation: "2680:12:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                    readonly typeString: "struct IHyperdrive.MarketState";
                };
                readonly typeName: {
                    readonly id: 17825;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 17824;
                        readonly name: "IHyperdrive.MarketState";
                        readonly nameLocations: readonly ["2647:11:118", "2659:11:118"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 10357;
                        readonly src: "2647:23:118";
                    };
                    readonly referencedDeclaration: 10357;
                    readonly src: "2647:23:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage_ptr";
                        readonly typeString: "struct IHyperdrive.MarketState";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17830;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2758:47:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17827;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2699:54:118";
                    readonly text: "@dev The state corresponding to the withdraw pool.";
                };
                readonly mutability: "mutable";
                readonly name: "_withdrawPool";
                readonly nameLocation: "2792:13:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_struct$_WithdrawPool_$10368_storage";
                    readonly typeString: "struct IHyperdrive.WithdrawPool";
                };
                readonly typeName: {
                    readonly id: 17829;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 17828;
                        readonly name: "IHyperdrive.WithdrawPool";
                        readonly nameLocations: readonly ["2758:11:118", "2770:12:118"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 10368;
                        readonly src: "2758:24:118";
                    };
                    readonly referencedDeclaration: 10368;
                    readonly src: "2758:24:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10368_storage_ptr";
                        readonly typeString: "struct IHyperdrive.WithdrawPool";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17836;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3106:100:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17831;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2812:289:118";
                    readonly text: "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values.";
                };
                readonly mutability: "mutable";
                readonly name: "_checkpoints";
                readonly nameLocation: "3194:12:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$";
                    readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                };
                readonly typeName: {
                    readonly id: 17835;
                    readonly keyName: "checkpointNumber";
                    readonly keyNameLocation: "3122:16:118";
                    readonly keyType: {
                        readonly id: 17832;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3114:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3106:70:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$";
                        readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint)";
                    };
                    readonly valueName: "checkpoint";
                    readonly valueNameLocation: "3165:10:118";
                    readonly valueType: {
                        readonly id: 17834;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 17833;
                            readonly name: "IHyperdrive.Checkpoint";
                            readonly nameLocations: readonly ["3142:11:118", "3154:10:118"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 10361;
                            readonly src: "3142:22:118";
                        };
                        readonly referencedDeclaration: 10361;
                        readonly src: "3142:22:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Checkpoint_$10361_storage_ptr";
                            readonly typeString: "struct IHyperdrive.Checkpoint";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17839;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3289:30:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17837;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3232:52:118";
                    readonly text: "@dev The address which collects governance fees.";
                };
                readonly mutability: "mutable";
                readonly name: "_feeCollector";
                readonly nameLocation: "3306:13:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 17838;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3289:7:118";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17842;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3380:32:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17840;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3326:49:118";
                    readonly text: "@dev The address which collects swept tokens.";
                };
                readonly mutability: "mutable";
                readonly name: "_sweepCollector";
                readonly nameLocation: "3397:15:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 17841;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3380:7:118";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17845;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3473:28:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17843;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3419:49:118";
                    readonly text: "@dev The address that can pause the contract.";
                };
                readonly mutability: "mutable";
                readonly name: "_governance";
                readonly nameLocation: "3490:11:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 17844;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3473:7:118";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17848;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3592:39:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17846;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3508:79:118";
                    readonly text: "@dev Governance fees that haven't been collected yet denominated in shares.";
                };
                readonly mutability: "mutable";
                readonly name: "_governanceFeesAccrued";
                readonly nameLocation: "3609:22:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 17847;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3592:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17853;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3779:56:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17849;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3638:136:118";
                    readonly text: "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality.";
                };
                readonly mutability: "mutable";
                readonly name: "_pausers";
                readonly nameLocation: "3827:8:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                    readonly typeString: "mapping(address => bool)";
                };
                readonly typeName: {
                    readonly id: 17852;
                    readonly keyName: "user";
                    readonly keyNameLocation: "3795:4:118";
                    readonly keyType: {
                        readonly id: 17850;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3787:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3779:38:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                        readonly typeString: "mapping(address => bool)";
                    };
                    readonly valueName: "isPauser";
                    readonly valueNameLocation: "3808:8:118";
                    readonly valueType: {
                        readonly id: 17851;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3803:4:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17856;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3963:41:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17854;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3866:92:118";
                    readonly text: "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerFactory";
                readonly nameLocation: "3990:14:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 17855;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3963:7:118";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17859;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4123:42:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17857;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4011:107:118";
                    readonly text: "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract.";
                };
                readonly mutability: "immutable";
                readonly name: "_linkerCodeHash";
                readonly nameLocation: "4150:15:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 17858;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4123:7:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17866;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4217:96:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17860;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4172:40:118";
                    readonly text: "@dev Allows loading of each balance.";
                };
                readonly mutability: "mutable";
                readonly name: "_balanceOf";
                readonly nameLocation: "4303:10:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                };
                readonly typeName: {
                    readonly id: 17865;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4233:7:118";
                    readonly keyType: {
                        readonly id: 17861;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4225:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4217:68:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 17864;
                        readonly keyName: "user";
                        readonly keyNameLocation: "4260:4:118";
                        readonly keyType: {
                            readonly id: 17862;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4252:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4244:40:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                            readonly typeString: "mapping(address => uint256)";
                        };
                        readonly valueName: "balance";
                        readonly valueNameLocation: "4276:7:118";
                        readonly valueType: {
                            readonly id: 17863;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4268:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17871;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4370:64:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17867;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4320:45:118";
                    readonly text: "@dev Allows loading of each total supply.";
                };
                readonly mutability: "mutable";
                readonly name: "_totalSupply";
                readonly nameLocation: "4422:12:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                    readonly typeString: "mapping(uint256 => uint256)";
                };
                readonly typeName: {
                    readonly id: 17870;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4386:7:118";
                    readonly keyType: {
                        readonly id: 17868;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4378:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4370:42:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                        readonly typeString: "mapping(uint256 => uint256)";
                    };
                    readonly valueName: "supply";
                    readonly valueNameLocation: "4405:6:118";
                    readonly valueType: {
                        readonly id: 17869;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4397:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17878;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4487:102:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17872;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4441:41:118";
                    readonly text: "@dev Uniform approval for all tokens.";
                };
                readonly mutability: "mutable";
                readonly name: "_isApprovedForAll";
                readonly nameLocation: "4572:17:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                    readonly typeString: "mapping(address => mapping(address => bool))";
                };
                readonly typeName: {
                    readonly id: 17877;
                    readonly keyName: "from";
                    readonly keyNameLocation: "4503:4:118";
                    readonly keyType: {
                        readonly id: 17873;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4495:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4487:67:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                        readonly typeString: "mapping(address => mapping(address => bool))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 17876;
                        readonly keyName: "caller";
                        readonly keyNameLocation: "4527:6:118";
                        readonly keyType: {
                            readonly id: 17874;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4519:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4511:42:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                            readonly typeString: "mapping(address => bool)";
                        };
                        readonly valueName: "isApproved";
                        readonly valueNameLocation: "4542:10:118";
                        readonly valueType: {
                            readonly id: 17875;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4537:4:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17887;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4750:132:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17879;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4596:149:118";
                    readonly text: "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface.";
                };
                readonly mutability: "mutable";
                readonly name: "_perTokenApprovals";
                readonly nameLocation: "4864:18:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                    readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                };
                readonly typeName: {
                    readonly id: 17886;
                    readonly keyName: "tokenId";
                    readonly keyNameLocation: "4766:7:118";
                    readonly keyType: {
                        readonly id: 17880;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4758:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4750:96:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                        readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 17885;
                        readonly keyName: "from";
                        readonly keyNameLocation: "4793:4:118";
                        readonly keyType: {
                            readonly id: 17881;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4785:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly nodeType: "Mapping";
                        readonly src: "4777:68:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                            readonly typeString: "mapping(address => mapping(address => uint256))";
                        };
                        readonly valueName: "";
                        readonly valueNameLocation: "-1:-1:-1";
                        readonly valueType: {
                            readonly id: 17884;
                            readonly keyName: "caller";
                            readonly keyNameLocation: "4817:6:118";
                            readonly keyType: {
                                readonly id: 17882;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4809:7:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Mapping";
                            readonly src: "4801:43:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                readonly typeString: "mapping(address => uint256)";
                            };
                            readonly valueName: "approved";
                            readonly valueNameLocation: "4835:8:118";
                            readonly valueType: {
                                readonly id: 17883;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4827:7:118";
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
                readonly id: 17892;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4956:55:118";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 17888;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4889:62:118";
                    readonly text: "@dev A mapping to track the permitForAll signature nonces.";
                };
                readonly mutability: "mutable";
                readonly name: "_nonces";
                readonly nameLocation: "5004:7:118";
                readonly scope: 17990;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                    readonly typeString: "mapping(address => uint256)";
                };
                readonly typeName: {
                    readonly id: 17891;
                    readonly keyName: "user";
                    readonly keyNameLocation: "4972:4:118";
                    readonly keyType: {
                        readonly id: 17889;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4964:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "4956:38:118";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                        readonly typeString: "mapping(address => uint256)";
                    };
                    readonly valueName: "nonce";
                    readonly valueNameLocation: "4988:5:118";
                    readonly valueType: {
                        readonly id: 17890;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4980:7:118";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 17989;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5159:2017:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 17988;
                    readonly nodeType: "Block";
                    readonly src: "5210:1966:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 17902;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17899;
                                readonly name: "_baseToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17788;
                                readonly src: "5285:10:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17900;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "5298:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17901;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5306:9:118";
                                readonly memberName: "baseToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10428;
                                readonly src: "5298:17:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "5285:30:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 17903;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5285:30:118";
                    }, {
                        readonly expression: {
                            readonly id: 17907;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17904;
                                readonly name: "_vaultSharesToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17792;
                                readonly src: "5325:17:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17905;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "5345:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17906;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5353:16:118";
                                readonly memberName: "vaultSharesToken";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10432;
                                readonly src: "5345:24:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly src: "5325:44:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly id: 17908;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5325:44:118";
                    }, {
                        readonly expression: {
                            readonly id: 17912;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17909;
                                readonly name: "_initialVaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17816;
                                readonly src: "5433:23:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17910;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "5459:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17911;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5467:22:118";
                                readonly memberName: "initialVaultSharePrice";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10441;
                                readonly src: "5459:30:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5433:56:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17913;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5433:56:118";
                    }, {
                        readonly expression: {
                            readonly id: 17917;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17914;
                                readonly name: "_minimumShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17819;
                                readonly src: "5888:21:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17915;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "5912:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17916;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5920:20:118";
                                readonly memberName: "minimumShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10444;
                                readonly src: "5912:28:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5888:52:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17918;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5888:52:118";
                    }, {
                        readonly expression: {
                            readonly id: 17922;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17919;
                                readonly name: "_minimumTransactionAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17822;
                                readonly src: "6200:25:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17920;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6228:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17921;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6236:24:118";
                                readonly memberName: "minimumTransactionAmount";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10447;
                                readonly src: "6228:32:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6200:60:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17923;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6200:60:118";
                    }, {
                        readonly expression: {
                            readonly id: 17927;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17924;
                                readonly name: "_checkpointDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17795;
                                readonly src: "6421:19:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17925;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6443:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17926;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6451:18:118";
                                readonly memberName: "checkpointDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10453;
                                readonly src: "6443:26:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6421:48:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17928;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6421:48:118";
                    }, {
                        readonly expression: {
                            readonly id: 17932;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17929;
                                readonly name: "_positionDuration";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17798;
                                readonly src: "6479:17:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17930;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6499:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17931;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6507:16:118";
                                readonly memberName: "positionDuration";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10450;
                                readonly src: "6499:24:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6479:44:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17933;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6479:44:118";
                    }, {
                        readonly expression: {
                            readonly id: 17937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17934;
                                readonly name: "_timeStretch";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17801;
                                readonly src: "6533:12:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17935;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6548:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17936;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6556:11:118";
                                readonly memberName: "timeStretch";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10456;
                                readonly src: "6548:19:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6533:34:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17938;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6533:34:118";
                    }, {
                        readonly expression: {
                            readonly id: 17943;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17939;
                                readonly name: "_curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17804;
                                readonly src: "6620:9:118";
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
                                        readonly id: 17940;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17896;
                                        readonly src: "6632:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 17941;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6640:4:118";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10469;
                                    readonly src: "6632:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10381_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 17942;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6645:5:118";
                                readonly memberName: "curve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10371;
                                readonly src: "6632:18:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6620:30:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17944;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6620:30:118";
                    }, {
                        readonly expression: {
                            readonly id: 17949;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17945;
                                readonly name: "_flatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17807;
                                readonly src: "6660:8:118";
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
                                        readonly id: 17946;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17896;
                                        readonly src: "6671:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 17947;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6679:4:118";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10469;
                                    readonly src: "6671:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10381_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 17948;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6684:4:118";
                                readonly memberName: "flat";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10374;
                                readonly src: "6671:17:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6660:28:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17950;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6660:28:118";
                    }, {
                        readonly expression: {
                            readonly id: 17955;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17951;
                                readonly name: "_governanceLPFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17810;
                                readonly src: "6698:16:118";
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
                                        readonly id: 17952;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17896;
                                        readonly src: "6717:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 17953;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6725:4:118";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10469;
                                    readonly src: "6717:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10381_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 17954;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6730:12:118";
                                readonly memberName: "governanceLP";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10377;
                                readonly src: "6717:25:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6698:44:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17956;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6698:44:118";
                    }, {
                        readonly expression: {
                            readonly id: 17961;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17957;
                                readonly name: "_governanceZombieFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17813;
                                readonly src: "6752:20:118";
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
                                        readonly id: 17958;
                                        readonly name: "_config";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17896;
                                        readonly src: "6775:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                        };
                                    };
                                    readonly id: 17959;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6783:4:118";
                                    readonly memberName: "fees";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10469;
                                    readonly src: "6775:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Fees_$10381_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.Fees memory";
                                    };
                                };
                                readonly id: 17960;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6788:16:118";
                                readonly memberName: "governanceZombie";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10380;
                                readonly src: "6775:29:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6752:52:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 17962;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6752:52:118";
                    }, {
                        readonly expression: {
                            readonly id: 17966;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17963;
                                readonly name: "_linkerFactory";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17856;
                                readonly src: "6864:14:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17964;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6881:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17965;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6889:13:118";
                                readonly memberName: "linkerFactory";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10435;
                                readonly src: "6881:21:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6864:38:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 17967;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6864:38:118";
                    }, {
                        readonly expression: {
                            readonly id: 17971;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17968;
                                readonly name: "_linkerCodeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17859;
                                readonly src: "6912:15:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17969;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "6930:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17970;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6938:14:118";
                                readonly memberName: "linkerCodeHash";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10438;
                                readonly src: "6930:22:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly src: "6912:40:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly id: 17972;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6912:40:118";
                    }, {
                        readonly expression: {
                            readonly id: 17976;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17973;
                                readonly name: "_governance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17845;
                                readonly src: "7041:11:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17974;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "7055:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17975;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7063:10:118";
                                readonly memberName: "governance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10459;
                                readonly src: "7055:18:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "7041:32:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 17977;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7041:32:118";
                    }, {
                        readonly expression: {
                            readonly id: 17981;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17978;
                                readonly name: "_feeCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17839;
                                readonly src: "7083:13:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17979;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "7099:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17980;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7107:12:118";
                                readonly memberName: "feeCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10462;
                                readonly src: "7099:20:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "7083:36:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 17982;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7083:36:118";
                    }, {
                        readonly expression: {
                            readonly id: 17986;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 17983;
                                readonly name: "_sweepCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17842;
                                readonly src: "7129:15:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly expression: {
                                    readonly id: 17984;
                                    readonly name: "_config";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17896;
                                    readonly src: "7147:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                };
                                readonly id: 17985;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "7155:14:118";
                                readonly memberName: "sweepCollector";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10465;
                                readonly src: "7147:22:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "7129:40:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 17987;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7129:40:118";
                    }];
                };
                readonly documentation: {
                    readonly id: 17893;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5043:111:118";
                    readonly text: "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 17897;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 17896;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "5201:7:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 17989;
                        readonly src: "5171:37:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 17895;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 17894;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["5171:11:118", "5183:10:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "5171:22:118";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "5171:22:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5170:39:118";
                };
                readonly returnParameters: {
                    readonly id: 17898;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5210:0:118";
                };
                readonly scope: 17990;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 17780;
                    readonly name: "ReentrancyGuard";
                    readonly nameLocations: readonly ["740:15:118"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 71674;
                    readonly src: "740:15:118";
                };
                readonly id: 17781;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "740:15:118";
            }];
            readonly canonicalName: "HyperdriveStorage";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 17779;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "388:313:118";
                readonly text: "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [17990, 71674];
            readonly name: "HyperdriveStorage";
            readonly nameLocation: "719:17:118";
            readonly scope: 17991;
            readonly usedErrors: readonly [71619];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 118;
};
//# sourceMappingURL=HyperdriveStorage.d.ts.map