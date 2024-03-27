export declare const IMockHyperdrive: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "accrue";
        readonly inputs: readonly [{
            readonly name: "time";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "apr";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "calculateTimeRemaining";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "calculateTimeRemainingScaled";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGovernanceFeesAccrued";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestCheckpoint";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setReserves";
        readonly inputs: readonly [{
            readonly name: "shareReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bondReserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateLiquidity";
        readonly inputs: readonly [{
            readonly name: "shareReservesDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    readonly methodIdentifiers: {
        readonly "accrue(uint256,int256)": "68096239";
        readonly "calculateTimeRemaining(uint256)": "68c2ecb8";
        readonly "calculateTimeRemainingScaled(uint256)": "ca6d38f7";
        readonly "getGovernanceFeesAccrued()": "8e67f87e";
        readonly "latestCheckpoint()": "907c0f92";
        readonly "setReserves(uint256,uint256)": "8392b8c0";
        readonly "updateLiquidity(uint256)": "ced09112";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGovernanceFeesAccrued\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"IMockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "time";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "int256";
                    readonly name: "apr";
                    readonly type: "int256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "accrue";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maturityTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "calculateTimeRemaining";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maturityTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "calculateTimeRemainingScaled";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getGovernanceFeesAccrued";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "latestCheckpoint";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReserves";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondReserves";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setReserves";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "shareReservesDelta";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "updateLiquidity";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
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
                readonly "contracts/test/MockHyperdrive.sol": "IMockHyperdrive";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/Hyperdrive.sol": {
                readonly keccak256: "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8";
                readonly urls: readonly ["bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67", "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d";
                readonly urls: readonly ["bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597", "dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da";
                readonly urls: readonly ["bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e", "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79";
                readonly urls: readonly ["bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39", "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1";
                readonly urls: readonly ["bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a", "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa";
                readonly urls: readonly ["bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886", "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"];
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
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d";
                readonly urls: readonly ["bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603", "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649";
                readonly urls: readonly ["bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7", "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d";
                readonly urls: readonly ["bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2", "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832";
                readonly urls: readonly ["bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7", "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5";
                readonly urls: readonly ["bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006", "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a";
                readonly urls: readonly ["bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195", "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
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
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067";
                readonly urls: readonly ["bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f", "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"];
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
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1";
                readonly urls: readonly ["bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace", "dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                readonly keccak256: "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80";
                readonly urls: readonly ["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229", "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                readonly keccak256: "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2";
                readonly urls: readonly ["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850", "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                readonly keccak256: "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386";
                readonly urls: readonly ["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0", "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdrive.sol";
        readonly id: 25863;
        readonly exportedSymbols: {
            readonly ERC20Mintable: readonly [24109];
            readonly ETH: readonly [18778];
            readonly FixedPointMath: readonly [19572];
            readonly Hyperdrive: readonly [4609];
            readonly HyperdriveBase: readonly [14511];
            readonly HyperdriveTarget0: readonly [5409];
            readonly HyperdriveTarget1: readonly [5522];
            readonly HyperdriveTarget2: readonly [5611];
            readonly HyperdriveTarget3: readonly [5699];
            readonly HyperdriveTarget4: readonly [5778];
            readonly HyperdriveUtils: readonly [161566];
            readonly IHyperdrive: readonly [11143];
            readonly IMockHyperdrive: readonly [24909];
            readonly MockHyperdrive: readonly [25773];
            readonly MockHyperdriveBase: readonly [25444];
            readonly MockHyperdriveTarget0: readonly [25802];
            readonly MockHyperdriveTarget1: readonly [25817];
            readonly MockHyperdriveTarget2: readonly [25832];
            readonly MockHyperdriveTarget3: readonly [25847];
            readonly MockHyperdriveTarget4: readonly [25862];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14795:141";
        readonly nodes: readonly [{
            readonly id: 24839;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:141";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24841;
            readonly nodeType: "ImportDirective";
            readonly src: "64:67:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
            readonly file: "contracts/src/external/Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 4610;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24840;
                    readonly name: "Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 4609;
                    readonly src: "73:10:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24843;
            readonly nodeType: "ImportDirective";
            readonly src: "132:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5410;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24842;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5409;
                    readonly src: "141:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24845;
            readonly nodeType: "ImportDirective";
            readonly src: "214:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget1.sol";
            readonly file: "contracts/src/external/HyperdriveTarget1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5523;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24844;
                    readonly name: "HyperdriveTarget1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5522;
                    readonly src: "223:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24847;
            readonly nodeType: "ImportDirective";
            readonly src: "296:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget2.sol";
            readonly file: "contracts/src/external/HyperdriveTarget2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5612;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24846;
                    readonly name: "HyperdriveTarget2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5611;
                    readonly src: "305:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24849;
            readonly nodeType: "ImportDirective";
            readonly src: "378:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget3.sol";
            readonly file: "contracts/src/external/HyperdriveTarget3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5700;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24848;
                    readonly name: "HyperdriveTarget3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5699;
                    readonly src: "387:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24851;
            readonly nodeType: "ImportDirective";
            readonly src: "460:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "contracts/src/external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5779;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24850;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5778;
                    readonly src: "469:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24853;
            readonly nodeType: "ImportDirective";
            readonly src: "542:75:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "contracts/src/internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 14512;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24852;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14511;
                    readonly src: "551:14:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24855;
            readonly nodeType: "ImportDirective";
            readonly src: "618:71:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 11144;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24854;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11143;
                    readonly src: "627:11:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24857;
            readonly nodeType: "ImportDirective";
            readonly src: "690:71:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 11144;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24856;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11143;
                    readonly src: "699:11:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24859;
            readonly nodeType: "ImportDirective";
            readonly src: "762:60:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Constants.sol";
            readonly file: "contracts/src/libraries/Constants.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 18779;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24858;
                    readonly name: "ETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18778;
                    readonly src: "771:3:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24861;
            readonly nodeType: "ImportDirective";
            readonly src: "823:76:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "contracts/src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 19573;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24860;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19572;
                    readonly src: "832:14:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24863;
            readonly nodeType: "ImportDirective";
            readonly src: "900:65:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "contracts/test/ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 24110;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24862;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 24109;
                    readonly src: "909:13:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24865;
            readonly nodeType: "ImportDirective";
            readonly src: "966:65:141";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 161567;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24864;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 161566;
                    readonly src: "975:15:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24909;
            readonly nodeType: "ContractDefinition";
            readonly src: "1033:594:141";
            readonly nodes: readonly [{
                readonly id: 24872;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1065:51:141";
                readonly nodes: readonly [];
                readonly functionSelector: "68096239";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "1074:6:141";
                readonly parameters: {
                    readonly id: 24870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24867;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "1089:4:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24872;
                        readonly src: "1081:12:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24866;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1081:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24869;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "1102:3:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24872;
                        readonly src: "1095:10:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24868;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1095:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1080:26:141";
                };
                readonly returnParameters: {
                    readonly id: 24871;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1115:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24879;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1122:101:141";
                readonly nodes: readonly [];
                readonly functionSelector: "68c2ecb8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "1131:22:141";
                readonly parameters: {
                    readonly id: 24875;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24874;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1171:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24879;
                        readonly src: "1163:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24873;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1153:37:141";
                };
                readonly returnParameters: {
                    readonly id: 24878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24877;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24879;
                        readonly src: "1214:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24876;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1214:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1213:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24886;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:107:141";
                readonly nodes: readonly [];
                readonly functionSelector: "ca6d38f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "1238:28:141";
                readonly parameters: {
                    readonly id: 24882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24881;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1284:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24886;
                        readonly src: "1276:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24880;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1276:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1266:37:141";
                };
                readonly returnParameters: {
                    readonly id: 24885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24884;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24886;
                        readonly src: "1327:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1327:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1326:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24891;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1342:60:141";
                readonly nodes: readonly [];
                readonly functionSelector: "907c0f92";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "1351:16:141";
                readonly parameters: {
                    readonly id: 24887;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1367:2:141";
                };
                readonly returnParameters: {
                    readonly id: 24890;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24889;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24891;
                        readonly src: "1393:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24888;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1393:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1392:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24896;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1408:62:141";
                readonly nodes: readonly [];
                readonly functionSelector: "ced09112";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "1417:15:141";
                readonly parameters: {
                    readonly id: 24894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24893;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "1441:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24896;
                        readonly src: "1433:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24892;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1433:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1432:28:141";
                };
                readonly returnParameters: {
                    readonly id: 24895;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1469:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24903;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1476:75:141";
                readonly nodes: readonly [];
                readonly functionSelector: "8392b8c0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "1485:11:141";
                readonly parameters: {
                    readonly id: 24901;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24898;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "1505:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "1497:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24897;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1497:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24900;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "1528:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "1520:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24899;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1520:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1496:45:141";
                };
                readonly returnParameters: {
                    readonly id: 24902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24908;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1557:68:141";
                readonly nodes: readonly [];
                readonly functionSelector: "8e67f87e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "1566:24:141";
                readonly parameters: {
                    readonly id: 24904;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1590:2:141";
                };
                readonly returnParameters: {
                    readonly id: 24907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24906;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24908;
                        readonly src: "1616:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24905;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1616:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMockHyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24909];
            readonly name: "IMockHyperdrive";
            readonly nameLocation: "1043:15:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 25444;
            readonly nodeType: "ContractDefinition";
            readonly src: "1629:7833:141";
            readonly nodes: readonly [{
                readonly id: 24914;
                readonly nodeType: "UsingForDirective";
                readonly src: "1690:33:141";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24912;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1696:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19572;
                    readonly src: "1696:14:141";
                };
                readonly typeName: {
                    readonly id: 24913;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1715:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24916;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1729:28:141";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1746:11:141";
                readonly scope: 25444;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24915;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1729:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 25049;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2054:1483:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25048;
                    readonly nodeType: "Block";
                    readonly src: "2194:1343:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24930];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24930;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "2261:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2253:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24929;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2253:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24931;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2253:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24934;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "2289:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24933;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2281:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24932;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2281:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24935;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2281:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24936;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "2304:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2281:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24957;
                            readonly nodeType: "Block";
                            readonly src: "2370:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24955;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24947;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "2384:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24952;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2422:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24951;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2414:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24950;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2414:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24953;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2414:13:141";
                                            readonly tryCall: false;
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
                                            readonly expression: {
                                                readonly id: 24948;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "2393:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24949;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2404:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "2393:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24954;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2393:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2384:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24956;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2384:44:141";
                            }];
                        };
                        readonly id: 24958;
                        readonly nodeType: "IfStatement";
                        readonly src: "2277:162:141";
                        readonly trueBody: {
                            readonly id: 24946;
                            readonly nodeType: "Block";
                            readonly src: "2309:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24944;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24938;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "2323:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24941;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2340:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24940;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2332:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24939;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2332:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24942;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2332:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24943;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2346:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2332:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2323:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24945;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2323:30:141";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24960];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24960;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "2585:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2580:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24959;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2580:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24962;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24961;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2595:4:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2580:19:141";
                    }, {
                        readonly assignments: readonly [24964];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24964;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2617:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2609:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24963;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2609:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24965;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2609:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24971;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24968;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "2645:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24967;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2637:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24966;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2637:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24969;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2637:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24970;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "2660:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2637:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25004;
                            readonly nodeType: "Block";
                            readonly src: "2838:160:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25002;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24991;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24960;
                                        readonly src: "2852:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 24994;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2903:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24995;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2907:6:141";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2903:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24998;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2939:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24997;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2931:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24996;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2931:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24999;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2931:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25000;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "2962:11:141";
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
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24992;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "2862:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24993;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2873:12:141";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10374;
                                            readonly src: "2862:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25001;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2862:125:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "2852:135:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25003;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2852:135:141";
                            }];
                        };
                        readonly id: 25005;
                        readonly nodeType: "IfStatement";
                        readonly src: "2633:365:141";
                        readonly trueBody: {
                            readonly id: 24990;
                            readonly nodeType: "Block";
                            readonly src: "2665:167:141";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24975;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24972;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2683:3:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24973;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2687:5:141";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2683:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24974;
                                        readonly name: "_baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24919;
                                        readonly src: "2695:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2683:23:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24982;
                                readonly nodeType: "IfStatement";
                                readonly src: "2679:97:141";
                                readonly trueBody: {
                                    readonly id: 24981;
                                    readonly nodeType: "Block";
                                    readonly src: "2708:68:141";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24976;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11143;
                                                    readonly src: "2733:11:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24978;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2745:14:141";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11088;
                                                readonly src: "2733:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24979;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2733:28:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24980;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "2726:35:141";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24983;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "2789:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 24987;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24984;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2798:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24985;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2802:5:141";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2798:9:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24986;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "2810:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2798:23:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2789:32:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24989;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2789:32:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25007;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3011:8:141";
                            readonly subExpression: {
                                readonly id: 25006;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24960;
                                readonly src: "3012:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25014;
                        readonly nodeType: "IfStatement";
                        readonly src: "3007:74:141";
                        readonly trueBody: {
                            readonly id: 25013;
                            readonly nodeType: "Block";
                            readonly src: "3021:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25008;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "3042:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25010;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3054:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "3042:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25011;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3042:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25012;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3035:35:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 25017;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25015;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "3216:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25016;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3231:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3216:16:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25046;
                            readonly nodeType: "Block";
                            readonly src: "3365:166:141";
                            readonly statements: readonly [{
                                readonly assignments: readonly [25031];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 25031;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "3387:9:141";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 25046;
                                    readonly src: "3379:17:141";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 25030;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3379:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 25037;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 25034;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3422:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25035;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "3435:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 25032;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "3399:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 25033;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3411:10:141";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18834;
                                        readonly src: "3399:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 25036;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3399:43:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3379:63:141";
                            }, {
                                readonly expression: {
                                    readonly id: 25040;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25038;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3456:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 25039;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25031;
                                        readonly src: "3471:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3456:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25041;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3456:24:141";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 25042;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25031;
                                        readonly src: "3502:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25043;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "3513:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 25044;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3501:19:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24928;
                                readonly id: 25045;
                                readonly nodeType: "Return";
                                readonly src: "3494:26:141";
                            }];
                        };
                        readonly id: 25047;
                        readonly nodeType: "IfStatement";
                        readonly src: "3212:319:141";
                        readonly trueBody: {
                            readonly id: 25029;
                            readonly nodeType: "Block";
                            readonly src: "3234:125:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25023;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25018;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3248:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25021;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18328;
                                            readonly src: "3282:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 25019;
                                                readonly name: "_baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24919;
                                                readonly src: "3262:11:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 25020;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3274:7:141";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18870;
                                            readonly src: "3262:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 25022;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3262:44:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3248:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25024;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3248:58:141";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 25025;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3328:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25026;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "3341:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 25027;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3327:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24928;
                                readonly id: 25028;
                                readonly nodeType: "Return";
                                readonly src: "3320:28:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13542];
                readonly documentation: {
                    readonly id: 24917;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1764:285:141";
                    readonly text: "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "2063:16:141";
                readonly overrides: {
                    readonly id: 24923;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2158:8:141";
                };
                readonly parameters: {
                    readonly id: 24922;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24919;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "2097:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2089:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24918;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2089:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24921;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2118:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24920;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2118:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2079:69:141";
                };
                readonly returnParameters: {
                    readonly id: 24928;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24925;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2176:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24924;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2176:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24927;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2185:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24926;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2185:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2175:18:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25144;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3655:1226:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25143;
                    readonly nodeType: "Block";
                    readonly src: "3771:1110:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25059];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25059;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "3842:10:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "3834:18:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25058;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3834:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25063;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25061;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25052;
                                readonly src: "3870:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25060;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "3855:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25062;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3855:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3834:49:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 25066;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25064;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "4019:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25065;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4034:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4019:16:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25085;
                            readonly nodeType: "Block";
                            readonly src: "4125:111:141";
                            readonly statements: readonly [{
                                readonly assignments: readonly [25076];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 25076;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "4147:9:141";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 25085;
                                    readonly src: "4139:17:141";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 25075;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4139:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 25080;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 25078;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25059;
                                        readonly src: "4176:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 25077;
                                        readonly name: "_convertToShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [25414];
                                        readonly referencedDeclaration: 25414;
                                        readonly src: "4159:16:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 25079;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4159:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "4139:48:141";
                            }, {
                                readonly expression: {
                                    readonly id: 25083;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25081;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "4201:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 25082;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25076;
                                        readonly src: "4216:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4201:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25084;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4201:24:141";
                            }];
                        };
                        readonly id: 25086;
                        readonly nodeType: "IfStatement";
                        readonly src: "4015:221:141";
                        readonly trueBody: {
                            readonly id: 25074;
                            readonly nodeType: "Block";
                            readonly src: "4037:82:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25072;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25067;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "4051:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25070;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18328;
                                            readonly src: "4084:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 25068;
                                                readonly name: "baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25059;
                                                readonly src: "4065:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 25069;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4076:7:141";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18870;
                                            readonly src: "4065:18:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 25071;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4065:43:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4051:57:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25073;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4051:57:141";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [25088];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25088;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4382:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "4377:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25087;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4377:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25090;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 25089;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4392:4:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4377:19:141";
                    }, {
                        readonly assignments: readonly [25092];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25092;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "4414:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "4406:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25091;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4406:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25093;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4406:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25099;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25096;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "4442:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25095;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4434:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25094;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4434:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25097;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4434:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25098;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "4457:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4434:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25132;
                            readonly nodeType: "Block";
                            readonly src: "4633:159:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25130;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25119;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25088;
                                        readonly src: "4647:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 25122;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4698:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 25123;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4702:6:141";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4698:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25126;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "4734:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25125;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4726:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25124;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4726:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25127;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4726:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25128;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25059;
                                            readonly src: "4757:10:141";
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
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 25120;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "4657:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25121;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4668:12:141";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10374;
                                            readonly src: "4657:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25129;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4657:124:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "4647:134:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25131;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4647:134:141";
                            }];
                        };
                        readonly id: 25133;
                        readonly nodeType: "IfStatement";
                        readonly src: "4430:362:141";
                        readonly trueBody: {
                            readonly id: 25118;
                            readonly nodeType: "Block";
                            readonly src: "4462:165:141";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 25103;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 25100;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "4480:3:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 25101;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4484:5:141";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4480:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 25102;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25059;
                                        readonly src: "4492:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4480:22:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25110;
                                readonly nodeType: "IfStatement";
                                readonly src: "4476:96:141";
                                readonly trueBody: {
                                    readonly id: 25109;
                                    readonly nodeType: "Block";
                                    readonly src: "4504:68:141";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 25104;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11143;
                                                    readonly src: "4529:11:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 25106;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "4541:14:141";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11088;
                                                readonly src: "4529:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 25107;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4529:28:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 25108;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "4522:35:141";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25116;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25111;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25092;
                                        readonly src: "4585:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 25115;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 25112;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4594:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 25113;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4598:5:141";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4594:9:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 25114;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25059;
                                            readonly src: "4606:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4594:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4585:31:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25117;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4585:31:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25135;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4805:8:141";
                            readonly subExpression: {
                                readonly id: 25134;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25088;
                                readonly src: "4806:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25142;
                        readonly nodeType: "IfStatement";
                        readonly src: "4801:74:141";
                        readonly trueBody: {
                            readonly id: 25141;
                            readonly nodeType: "Block";
                            readonly src: "4815:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25136;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "4836:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25138;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4848:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "4836:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25139;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4836:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25140;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4829:35:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13550];
                readonly documentation: {
                    readonly id: 25050;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3543:107:141";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "3664:18:141";
                readonly overrides: {
                    readonly id: 25056;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3762:8:141";
                };
                readonly parameters: {
                    readonly id: 25055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25052;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3700:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25144;
                        readonly src: "3692:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25051;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3692:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25054;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25144;
                        readonly src: "3722:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25053;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3722:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3682:70:141";
                };
                readonly returnParameters: {
                    readonly id: 25057;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3771:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25221;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5177:986:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25220;
                    readonly nodeType: "Block";
                    readonly src: "5356:807:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25164;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25157;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5478:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 25160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 25158;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25147;
                                        readonly src: "5493:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 25159;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "5508:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5493:26:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 25162;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25147;
                                    readonly src: "5536:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25163;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5493:55:141";
                                readonly trueExpression: {
                                    readonly id: 25161;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "5522:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5478:70:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25165;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5478:70:141";
                    }, {
                        readonly assignments: readonly [25167];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25167;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "5607:13:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25220;
                            readonly src: "5599:21:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25166;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5599:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25171;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25169;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5638:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25168;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "5623:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25170;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5623:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5599:52:141";
                    }, {
                        readonly expression: {
                            readonly id: 25174;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25172;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "5740:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 25173;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5755:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5740:27:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25175;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5740:27:141";
                    }, {
                        readonly assignments: readonly [25177];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25177;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5782:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25220;
                            readonly src: "5777:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25176;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5777:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25178;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5777:12:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25184;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25181;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "5811:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25180;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5803:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25179;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5803:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25182;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5803:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25183;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "5826:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5803:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25207;
                            readonly nodeType: "Block";
                            readonly src: "5960:83:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25205;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25199;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25177;
                                        readonly src: "5974:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25202;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25149;
                                            readonly src: "6004:12:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25203;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25167;
                                            readonly src: "6018:13:141";
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
                                            readonly expression: {
                                                readonly id: 25200;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "5984:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25201;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5995:8:141";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10362;
                                            readonly src: "5984:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25204;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5984:48:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5974:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25206;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5974:58:141";
                            }];
                        };
                        readonly id: 25208;
                        readonly nodeType: "IfStatement";
                        readonly src: "5799:244:141";
                        readonly trueBody: {
                            readonly id: 25198;
                            readonly nodeType: "Block";
                            readonly src: "5831:123:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25196;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 25185;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25177;
                                            readonly src: "5846:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 25186;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "5845:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 25194;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5927:2:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 25189;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 25149;
                                                        readonly src: "5867:12:141";
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
                                                        readonly id: 25188;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5859:8:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25187;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5859:8:141";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25190;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5859:21:141";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 25191;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5881:4:141";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5859:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 25193;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 25192;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25167;
                                                readonly src: "5894:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "5859:50:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 25195;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5859:84:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "5845:98:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25197;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5845:98:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25210;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6056:8:141";
                            readonly subExpression: {
                                readonly id: 25209;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25177;
                                readonly src: "6057:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25217;
                        readonly nodeType: "IfStatement";
                        readonly src: "6052:74:141";
                        readonly trueBody: {
                            readonly id: 25216;
                            readonly nodeType: "Block";
                            readonly src: "6066:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25211;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "6087:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25213;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6099:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "6087:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25214;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6087:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25215;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6080:35:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 25218;
                            readonly name: "withdrawValue";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25167;
                            readonly src: "6143:13:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25156;
                        readonly id: 25219;
                        readonly nodeType: "Return";
                        readonly src: "6136:20:141";
                    }];
                };
                readonly baseFunctions: readonly [13562];
                readonly documentation: {
                    readonly id: 25145;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4887:285:141";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "5186:17:141";
                readonly overrides: {
                    readonly id: 25153;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5313:8:141";
                };
                readonly parameters: {
                    readonly id: 25152;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25147;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "5221:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5213:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25146;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5213:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25149;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "5251:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5243:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 25148;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:7:141";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25151;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5273:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25150;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5273:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5203:100:141";
                };
                readonly returnParameters: {
                    readonly id: 25156;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25155;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "5339:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5331:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25154;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5331:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5330:25:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25294;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6405:923:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25293;
                    readonly nodeType: "Block";
                    readonly src: "6552:776:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25239;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25232;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6674:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 25235;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 25233;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25224;
                                        readonly src: "6689:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 25234;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "6704:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6689:26:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 25237;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25224;
                                    readonly src: "6732:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25238;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "6689:55:141";
                                readonly trueExpression: {
                                    readonly id: 25236;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "6718:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6674:70:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25240;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6674:70:141";
                    }, {
                        readonly assignments: readonly [25242];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25242;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "6803:13:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25293;
                            readonly src: "6795:21:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25241;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6795:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25246;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25244;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6834:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25243;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "6819:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25245;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6819:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6795:52:141";
                    }, {
                        readonly expression: {
                            readonly id: 25249;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25247;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "6936:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 25248;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6951:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6936:27:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25250;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6936:27:141";
                    }, {
                        readonly assignments: readonly [25252];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25252;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6978:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25293;
                            readonly src: "6973:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25251;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6973:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25253;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6973:12:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25259;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25256;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "7007:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25255;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6999:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25254;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6999:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25257;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6999:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25258;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "7022:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6999:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25282;
                            readonly nodeType: "Block";
                            readonly src: "7156:83:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25280;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25274;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25252;
                                        readonly src: "7170:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25277;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25226;
                                            readonly src: "7200:12:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25278;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25242;
                                            readonly src: "7214:13:141";
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
                                            readonly expression: {
                                                readonly id: 25275;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "7180:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25276;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7191:8:141";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10362;
                                            readonly src: "7180:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25279;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7180:48:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "7170:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25281;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7170:58:141";
                            }];
                        };
                        readonly id: 25283;
                        readonly nodeType: "IfStatement";
                        readonly src: "6995:244:141";
                        readonly trueBody: {
                            readonly id: 25273;
                            readonly nodeType: "Block";
                            readonly src: "7027:123:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25271;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 25260;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25252;
                                            readonly src: "7042:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 25261;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7041:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 25269;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7123:2:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 25264;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 25226;
                                                        readonly src: "7063:12:141";
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
                                                        readonly id: 25263;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7055:8:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25262;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7055:8:141";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25265;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7055:21:141";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 25266;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7077:4:141";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "7055:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 25268;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 25267;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25242;
                                                readonly src: "7090:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "7055:50:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 25270;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7055:84:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "7041:98:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25272;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7041:98:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25285;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7252:8:141";
                            readonly subExpression: {
                                readonly id: 25284;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25252;
                                readonly src: "7253:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25292;
                        readonly nodeType: "IfStatement";
                        readonly src: "7248:74:141";
                        readonly trueBody: {
                            readonly id: 25291;
                            readonly nodeType: "Block";
                            readonly src: "7262:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25286;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "7283:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25288;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7295:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "7283:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25289;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7283:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25290;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7276:35:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13572];
                readonly documentation: {
                    readonly id: 25222;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6169:231:141";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "6414:19:141";
                readonly overrides: {
                    readonly id: 25230;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6543:8:141";
                };
                readonly parameters: {
                    readonly id: 25229;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25224;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6451:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6443:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25223;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6443:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25226;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "6481:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6473:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 25225;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6473:7:141";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25228;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6503:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25227;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6503:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6433:100:141";
                };
                readonly returnParameters: {
                    readonly id: 25231;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6552:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25317;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7513:174:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25316;
                    readonly nodeType: "Block";
                    readonly src: "7566:121:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 25308;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 25303;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 25300;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18304;
                                        readonly src: "7588:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 25299;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "7580:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 25298;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7580:7:141";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25301;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7580:19:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 25302;
                                    readonly name: "ETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18778;
                                    readonly src: "7603:3:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "7580:26:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 25307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 25304;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "7610:3:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 25305;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7614:5:141";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7610:9:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25306;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "7622:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "7610:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7580:43:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25315;
                        readonly nodeType: "IfStatement";
                        readonly src: "7576:105:141";
                        readonly trueBody: {
                            readonly id: 25314;
                            readonly nodeType: "Block";
                            readonly src: "7625:56:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25309;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "7646:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25311;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7658:10:141";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11062;
                                        readonly src: "7646:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25312;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7646:24:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25313;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7639:31:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13576];
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7522:18:141";
                readonly overrides: {
                    readonly id: 25296;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7557:8:141";
                };
                readonly parameters: {
                    readonly id: 25295;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7540:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25297;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7566:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25368;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7848:460:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25367;
                    readonly nodeType: "Block";
                    readonly src: "7949:359:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25327];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25327;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8027:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25367;
                            readonly src: "8019:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25326;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8019:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25328;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8019:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25334;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25331;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "8055:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25330;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8047:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25329;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8047:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25332;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8047:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25333;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "8070:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8047:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25354;
                            readonly nodeType: "Block";
                            readonly src: "8136:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25352;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25344;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25327;
                                        readonly src: "8150:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25349;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8188:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25348;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8180:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25347;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8180:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25350;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8180:13:141";
                                            readonly tryCall: false;
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
                                            readonly expression: {
                                                readonly id: 25345;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "8159:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25346;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8170:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "8159:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 25351;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8159:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8150:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25353;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8150:44:141";
                            }];
                        };
                        readonly id: 25355;
                        readonly nodeType: "IfStatement";
                        readonly src: "8043:162:141";
                        readonly trueBody: {
                            readonly id: 25343;
                            readonly nodeType: "Block";
                            readonly src: "8075:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25341;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25335;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25327;
                                        readonly src: "8089:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 25338;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8106:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25337;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8098:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25336;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8098:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25339;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8098:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 25340;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8112:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8098:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8089:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25342;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8089:30:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 25358;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25356;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "8234:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25357;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8249:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8234:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 25364;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8300:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 25365;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "8234:67:141";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25361;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25327;
                                    readonly src: "8277:6:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25362;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "8285:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 25359;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25320;
                                        readonly src: "8253:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 25360;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8266:10:141";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18834;
                                    readonly src: "8253:23:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 25363;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8253:44:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25325;
                        readonly id: 25366;
                        readonly nodeType: "Return";
                        readonly src: "8215:86:141";
                    }];
                };
                readonly baseFunctions: readonly [13606];
                readonly documentation: {
                    readonly id: 25318;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7693:150:141";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "7857:14:141";
                readonly overrides: {
                    readonly id: 25322;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7922:8:141";
                };
                readonly parameters: {
                    readonly id: 25321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25320;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7889:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25368;
                        readonly src: "7881:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25319;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7881:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7871:36:141";
                };
                readonly returnParameters: {
                    readonly id: 25325;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25324;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25368;
                        readonly src: "7940:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25323;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7940:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7939:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25414;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8468:425:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25413;
                    readonly nodeType: "Block";
                    readonly src: "8570:323:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25378];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25378;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8648:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25413;
                            readonly src: "8640:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25377;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8640:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25379;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8640:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25385;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25382;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "8676:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25381;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8668:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25380;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8668:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25383;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8668:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25384;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "8691:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8668:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25405;
                            readonly nodeType: "Block";
                            readonly src: "8757:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25403;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25395;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25378;
                                        readonly src: "8771:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25400;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8809:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25399;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8801:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25398;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8801:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25401;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8801:13:141";
                                            readonly tryCall: false;
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
                                            readonly expression: {
                                                readonly id: 25396;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "8780:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25397;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8791:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "8780:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 25402;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8780:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8771:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25404;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8771:44:141";
                            }];
                        };
                        readonly id: 25406;
                        readonly nodeType: "IfStatement";
                        readonly src: "8664:162:141";
                        readonly trueBody: {
                            readonly id: 25394;
                            readonly nodeType: "Block";
                            readonly src: "8696:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25392;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25386;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25378;
                                        readonly src: "8710:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 25389;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8727:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25388;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8719:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25387;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8719:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25390;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8719:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 25391;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8733:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8719:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8710:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25393;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8710:30:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25409;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "8866:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25410;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25378;
                                readonly src: "8879:6:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 25407;
                                    readonly name: "_baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25371;
                                    readonly src: "8843:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25408;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8855:10:141";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18834;
                                readonly src: "8843:22:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25411;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8843:43:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25376;
                        readonly id: 25412;
                        readonly nodeType: "Return";
                        readonly src: "8836:50:141";
                    }];
                };
                readonly baseFunctions: readonly [13614];
                readonly documentation: {
                    readonly id: 25369;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8314:149:141";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8477:16:141";
                readonly overrides: {
                    readonly id: 25373;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "8543:8:141";
                };
                readonly parameters: {
                    readonly id: 25372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25371;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8511:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25414;
                        readonly src: "8503:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25370;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8503:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8493:35:141";
                };
                readonly returnParameters: {
                    readonly id: 25376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25375;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25414;
                        readonly src: "8561:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25374;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8561:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8560:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25430;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9013:122:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25429;
                    readonly nodeType: "Block";
                    readonly src: "9076:59:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25425;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "9122:4:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    }];
                                    readonly id: 25424;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9114:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25423;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9114:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25426;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9114:13:141";
                                readonly tryCall: false;
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
                                readonly expression: {
                                    readonly id: 25421;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "9093:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 25422;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9104:9:141";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10416;
                                readonly src: "9093:20:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 25427;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9093:35:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25420;
                        readonly id: 25428;
                        readonly nodeType: "Return";
                        readonly src: "9086:42:141";
                    }];
                };
                readonly baseFunctions: readonly [13620];
                readonly documentation: {
                    readonly id: 25415;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8899:109:141";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "9022:10:141";
                readonly overrides: {
                    readonly id: 25417;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9049:8:141";
                };
                readonly parameters: {
                    readonly id: 25416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9032:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25420;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25419;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25430;
                        readonly src: "9067:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25418;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9067:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9066:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25443;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9293:167:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25442;
                    readonly nodeType: "Block";
                    readonly src: "9406:54:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 25438;
                                    readonly name: "_totalBase";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [25430];
                                    readonly referencedDeclaration: 25430;
                                    readonly src: "9440:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 25439;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9440:12:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25437;
                                readonly name: "_convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25414];
                                readonly referencedDeclaration: 25414;
                                readonly src: "9423:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25440;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9423:30:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25436;
                        readonly id: 25441;
                        readonly nodeType: "Return";
                        readonly src: "9416:37:141";
                    }];
                };
                readonly baseFunctions: readonly [13626];
                readonly documentation: {
                    readonly id: 25431;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9141:147:141";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9302:12:141";
                readonly overrides: {
                    readonly id: 25433;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9355:8:141";
                };
                readonly parameters: {
                    readonly id: 25432;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9314:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25436;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25435;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9389:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25443;
                        readonly src: "9381:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25434;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9381:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9380:21:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24910;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1669:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14511;
                    readonly src: "1669:14:141";
                };
                readonly id: 24911;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1669:14:141";
            }];
            readonly canonicalName: "MockHyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [25444, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveBase";
            readonly nameLocation: "1647:18:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25773;
            readonly nodeType: "ContractDefinition";
            readonly src: "9464:4336:141";
            readonly nodes: readonly [{
                readonly id: 25451;
                readonly nodeType: "UsingForDirective";
                readonly src: "9528:33:141";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 25449;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["9534:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19572;
                    readonly src: "9534:14:141";
                };
                readonly typeName: {
                    readonly id: 25450;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9553:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 25501;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9567:406:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25500;
                    readonly nodeType: "Block";
                    readonly src: "9971:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25457;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25454;
                        readonly src: "9664:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25463;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9719:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25462;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9693:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25802_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                };
                                readonly typeName: {
                                    readonly id: 25461;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25460;
                                        readonly name: "MockHyperdriveTarget0";
                                        readonly nameLocations: readonly ["9697:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25802;
                                        readonly src: "9697:21:141";
                                    };
                                    readonly referencedDeclaration: 25802;
                                    readonly src: "9697:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                };
                            };
                            readonly id: 25464;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9693:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            }];
                            readonly id: 25459;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9685:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25458;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9685:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25465;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9685:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25471;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9776:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25470;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9750:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25817_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)";
                                };
                                readonly typeName: {
                                    readonly id: 25469;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25468;
                                        readonly name: "MockHyperdriveTarget1";
                                        readonly nameLocations: readonly ["9754:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25817;
                                        readonly src: "9754:21:141";
                                    };
                                    readonly referencedDeclaration: 25817;
                                    readonly src: "9754:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                        readonly typeString: "contract MockHyperdriveTarget1";
                                    };
                                };
                            };
                            readonly id: 25472;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9750:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            }];
                            readonly id: 25467;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9742:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25466;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9742:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25473;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9742:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25479;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9833:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25478;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9807:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25832_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)";
                                };
                                readonly typeName: {
                                    readonly id: 25477;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25476;
                                        readonly name: "MockHyperdriveTarget2";
                                        readonly nameLocations: readonly ["9811:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25832;
                                        readonly src: "9811:21:141";
                                    };
                                    readonly referencedDeclaration: 25832;
                                    readonly src: "9811:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                        readonly typeString: "contract MockHyperdriveTarget2";
                                    };
                                };
                            };
                            readonly id: 25480;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9807:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            }];
                            readonly id: 25475;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9799:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25474;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9799:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25481;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9799:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25487;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9890:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25486;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9864:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25847_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)";
                                };
                                readonly typeName: {
                                    readonly id: 25485;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25484;
                                        readonly name: "MockHyperdriveTarget3";
                                        readonly nameLocations: readonly ["9868:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25847;
                                        readonly src: "9868:21:141";
                                    };
                                    readonly referencedDeclaration: 25847;
                                    readonly src: "9868:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                        readonly typeString: "contract MockHyperdriveTarget3";
                                    };
                                };
                            };
                            readonly id: 25488;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9864:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            }];
                            readonly id: 25483;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9856:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25482;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9856:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25489;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9856:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25495;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9947:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25494;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9921:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25862_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)";
                                };
                                readonly typeName: {
                                    readonly id: 25493;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25492;
                                        readonly name: "MockHyperdriveTarget4";
                                        readonly nameLocations: readonly ["9925:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25862;
                                        readonly src: "9925:21:141";
                                    };
                                    readonly referencedDeclaration: 25862;
                                    readonly src: "9925:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                        readonly typeString: "contract MockHyperdriveTarget4";
                                    };
                                };
                            };
                            readonly id: 25496;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9921:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            }];
                            readonly id: 25491;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9913:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25490;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9913:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25497;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9913:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 25498;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25456;
                        readonly name: "Hyperdrive";
                        readonly nameLocations: readonly ["9640:10:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 4609;
                        readonly src: "9640:10:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "9640:326:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25454;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "9618:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25501;
                        readonly src: "9588:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25453;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25452;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["9588:11:141", "9600:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "9588:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "9588:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9578:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25499;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9971:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25513;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9998:138:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25512;
                    readonly nodeType: "Block";
                    readonly src: "10091:45:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25510;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25508;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18338;
                                readonly src: "10101:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25509;
                                readonly name: "_marketState_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25505;
                                readonly src: "10116:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10829_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.MarketState memory";
                                };
                            };
                            readonly src: "10101:28:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                            };
                        };
                        readonly id: 25511;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10101:28:141";
                    }];
                };
                readonly documentation: {
                    readonly id: 25502;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9979:14:141";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "f45cf2e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setMarketState";
                readonly nameLocation: "10007:14:141";
                readonly parameters: {
                    readonly id: 25506;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25505;
                        readonly mutability: "mutable";
                        readonly name: "_marketState_";
                        readonly nameLocation: "10062:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25513;
                        readonly src: "10031:44:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10829_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 25504;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25503;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["10031:11:141", "10043:11:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10829;
                                readonly src: "10031:23:141";
                            };
                            readonly referencedDeclaration: 10829;
                            readonly src: "10031:23:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10829_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10021:60:141";
                };
                readonly returnParameters: {
                    readonly id: 25507;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10091:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25523;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10142:98:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25522;
                    readonly nodeType: "Block";
                    readonly src: "10197:43:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25520;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25518;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "10207:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25519;
                                readonly name: "_totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25515;
                                readonly src: "10221:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10207:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25521;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10207:26:141";
                    }];
                };
                readonly functionSelector: "a77384c1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setTotalShares";
                readonly nameLocation: "10151:14:141";
                readonly parameters: {
                    readonly id: 25516;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25515;
                        readonly mutability: "mutable";
                        readonly name: "_totalShares";
                        readonly nameLocation: "10174:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25523;
                        readonly src: "10166:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25514;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10166:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10165:22:141";
                };
                readonly returnParameters: {
                    readonly id: 25517;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10197:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25591;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10372:566:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25590;
                    readonly nodeType: "Block";
                    readonly src: "10423:515:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [null, 25531];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 25531;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "10443:8:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25590;
                            readonly src: "10436:15:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 25530;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10436:6:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25544;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 25538;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "10539:4:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                            readonly typeString: "contract MockHyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                            readonly typeString: "contract MockHyperdrive";
                                        }];
                                        readonly id: 25537;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10531:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 25536;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10531:7:141";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25539;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10531:13:141";
                                    readonly tryCall: false;
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
                                    readonly expression: {
                                        readonly id: 25534;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18304;
                                        readonly src: "10510:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 25535;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10521:9:141";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10416;
                                    readonly src: "10510:20:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 25540;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10510:35:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25541;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25527;
                                readonly src: "10559:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25542;
                                readonly name: "time";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25525;
                                readonly src: "10576:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 25532;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 161566;
                                    readonly src: "10455:15:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$161566_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25533;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10471:25:141";
                                readonly memberName: "calculateCompoundInterest";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 159394;
                                readonly src: "10455:41:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$";
                                    readonly typeString: "function (uint256,int256,uint256) pure returns (uint256,int256)";
                                };
                            };
                            readonly id: 25543;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10455:135:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$";
                                readonly typeString: "tuple(uint256,int256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10433:157:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 25547;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25545;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25531;
                                readonly src: "10605:8:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25546;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10616:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "10605:12:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 25568;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25566;
                                    readonly name: "interest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25531;
                                    readonly src: "10773:8:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25567;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10784:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "10773:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 25588;
                            readonly nodeType: "IfStatement";
                            readonly src: "10769:163:141";
                            readonly trueBody: {
                                readonly id: 25587;
                                readonly nodeType: "Block";
                                readonly src: "10787:145:141";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25578;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "10866:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                    readonly typeString: "contract MockHyperdrive";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                    readonly typeString: "contract MockHyperdrive";
                                                }];
                                                readonly id: 25577;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10858:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25576;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10858:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25579;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10858:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25583;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "10897:9:141";
                                                readonly subExpression: {
                                                    readonly id: 25582;
                                                    readonly name: "interest";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 25531;
                                                    readonly src: "10898:8:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                }];
                                                readonly id: 25581;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10889:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25580;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10889:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25584;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10889:18:141";
                                            readonly tryCall: false;
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
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly id: 25572;
                                                        readonly name: "_baseToken";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18304;
                                                        readonly src: "10823:10:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                            readonly typeString: "contract IERC20";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                            readonly typeString: "contract IERC20";
                                                        }];
                                                        readonly id: 25571;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "10815:7:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25570;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "10815:7:141";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25573;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "10815:19:141";
                                                    readonly tryCall: false;
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
                                                    readonly id: 25569;
                                                    readonly name: "ERC20Mintable";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 24109;
                                                    readonly src: "10801:13:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$24109_$";
                                                        readonly typeString: "type(contract ERC20Mintable)";
                                                    };
                                                };
                                                readonly id: 25574;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10801:34:141";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$24109";
                                                    readonly typeString: "contract ERC20Mintable";
                                                };
                                            };
                                            readonly id: 25575;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10836:4:141";
                                            readonly memberName: "burn";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 24108;
                                            readonly src: "10801:39:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256) external";
                                            };
                                        };
                                        readonly id: 25585;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10801:120:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 25586;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "10801:120:141";
                                }];
                            };
                        };
                        readonly id: 25589;
                        readonly nodeType: "IfStatement";
                        readonly src: "10601:331:141";
                        readonly trueBody: {
                            readonly id: 25565;
                            readonly nodeType: "Block";
                            readonly src: "10619:144:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 25557;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "10698:4:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                readonly typeString: "contract MockHyperdrive";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                readonly typeString: "contract MockHyperdrive";
                                            }];
                                            readonly id: 25556;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10690:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25555;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10690:7:141";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25558;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10690:13:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 25561;
                                            readonly name: "interest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25531;
                                            readonly src: "10729:8:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            }];
                                            readonly id: 25560;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10721:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25559;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10721:7:141";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25562;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10721:17:141";
                                        readonly tryCall: false;
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
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly id: 25551;
                                                    readonly name: "_baseToken";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18304;
                                                    readonly src: "10655:10:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                        readonly typeString: "contract IERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                        readonly typeString: "contract IERC20";
                                                    }];
                                                    readonly id: 25550;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "10647:7:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 25549;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "10647:7:141";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 25552;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10647:19:141";
                                                readonly tryCall: false;
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
                                                readonly id: 25548;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24109;
                                                readonly src: "10633:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$24109_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 25553;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10633:34:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$24109";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 25554;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10668:4:141";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 24079;
                                        readonly src: "10633:39:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256) external";
                                        };
                                    };
                                    readonly id: 25563;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10633:119:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25564;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10633:119:141";
                            }];
                        };
                    }];
                };
                readonly functionSelector: "68096239";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "10381:6:141";
                readonly parameters: {
                    readonly id: 25528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25525;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "10396:4:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25591;
                        readonly src: "10388:12:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25524;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10388:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25527;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "10409:3:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25591;
                        readonly src: "10402:10:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25526;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10402:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10387:26:141";
                };
                readonly returnParameters: {
                    readonly id: 25529;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10423:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25619;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10944:411:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25618;
                    readonly nodeType: "Block";
                    readonly src: "11144:211:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25612;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25604;
                                    readonly name: "curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25600;
                                    readonly src: "11155:8:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25605;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25602;
                                    readonly src: "11165:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25606;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11154:30:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25608;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25593;
                                    readonly src: "11226:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25609;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25595;
                                    readonly src: "11252:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25610;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25597;
                                    readonly src: "11276:15:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 25607;
                                    readonly name: "_calculateFeesGivenShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14362;
                                    readonly src: "11187:25:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                    };
                                };
                                readonly id: 25611;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11187:114:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly src: "11154:147:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25613;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11154:147:141";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25614;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25600;
                                readonly src: "11319:8:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25615;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25602;
                                readonly src: "11329:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25616;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11318:30:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25603;
                        readonly id: 25617;
                        readonly nodeType: "Return";
                        readonly src: "11311:37:141";
                    }];
                };
                readonly functionSelector: "71f88b7c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenShares";
                readonly nameLocation: "10953:24:141";
                readonly parameters: {
                    readonly id: 25598;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25593;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "10995:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "10987:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25592;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10987:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25595;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11025:10:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11017:18:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25594;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11017:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25597;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11053:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11045:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25596;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11045:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10977:97:141";
                };
                readonly returnParameters: {
                    readonly id: 25603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25600;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "11106:8:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11098:16:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25599;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11098:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25602;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11124:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11116:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25601;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11116:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11097:46:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25658;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11361:822:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25657;
                    readonly nodeType: "Block";
                    readonly src: "11742:441:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25649;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25638;
                                    readonly name: "totalCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25630;
                                    readonly src: "11766:13:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25639;
                                    readonly name: "totalFlatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25632;
                                    readonly src: "11793:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25640;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25634;
                                    readonly src: "11819:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25641;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25636;
                                    readonly src: "11851:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25642;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11752:127:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25644;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25621;
                                    readonly src: "11920:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25645;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25623;
                                    readonly src: "11945:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25646;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25625;
                                    readonly src: "11983:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25647;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25627;
                                    readonly src: "12007:15:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 25643;
                                    readonly name: "_calculateFeesGivenBonds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14432;
                                    readonly src: "11882:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 25648;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11882:150:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "11752:280:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25650;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11752:280:141";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25651;
                                readonly name: "totalCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25630;
                                readonly src: "12063:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25652;
                                readonly name: "totalFlatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25632;
                                readonly src: "12090:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25653;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25634;
                                readonly src: "12116:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25654;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25636;
                                readonly src: "12148:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25655;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "12049:127:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25637;
                        readonly id: 25656;
                        readonly nodeType: "Return";
                        readonly src: "12042:134:141";
                    }];
                };
                readonly functionSelector: "22d5506b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenBonds";
                readonly nameLocation: "11370:23:141";
                readonly parameters: {
                    readonly id: 25628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25621;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11411:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11403:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25620;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11403:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25623;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "11440:24:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11432:32:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11432:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25625;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11482:10:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11474:18:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25624;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11474:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25627;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11510:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11502:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25626;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11502:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11393:138:141";
                };
                readonly returnParameters: {
                    readonly id: 25637;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25630;
                        readonly mutability: "mutable";
                        readonly name: "totalCurveFee";
                        readonly nameLocation: "11600:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11592:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11592:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25632;
                        readonly mutability: "mutable";
                        readonly name: "totalFlatFee";
                        readonly nameLocation: "11635:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11627:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25631;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11627:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25634;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11669:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11661:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25633;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11661:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25636;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "11709:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11701:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25635;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11701:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11578:159:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25677;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12232:351:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25676;
                    readonly nodeType: "Block";
                    readonly src: "12509:74:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25672;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25660;
                                readonly src: "12545:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25673;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25662;
                                readonly src: "12559:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25671;
                                readonly name: "_calculateOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16672;
                                readonly src: "12526:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12526:50:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25670;
                        readonly id: 25675;
                        readonly nodeType: "Return";
                        readonly src: "12519:57:141";
                    }];
                };
                readonly functionSelector: "9bd33498";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "12241:17:141";
                readonly parameters: {
                    readonly id: 25663;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25660;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "12276:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12268:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25659;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12268:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25662;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12306:16:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12298:24:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25661;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12298:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12258:70:141";
                };
                readonly returnParameters: {
                    readonly id: 25670;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25665;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "12397:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12389:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25664;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12389:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25667;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "12437:17:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12429:25:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25666;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12429:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25669;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "12476:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12468:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25668;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12468:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12375:129:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12589:177:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25688;
                    readonly nodeType: "Block";
                    readonly src: "12704:62:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25685;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25679;
                                readonly src: "12745:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25684;
                                readonly name: "_calculateTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13682;
                                readonly src: "12721:23:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12721:38:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25683;
                        readonly id: 25687;
                        readonly nodeType: "Return";
                        readonly src: "12714:45:141";
                    }];
                };
                readonly functionSelector: "68c2ecb8";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "12598:22:141";
                readonly parameters: {
                    readonly id: 25680;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25679;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12638:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25689;
                        readonly src: "12630:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25678;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12630:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12620:37:141";
                };
                readonly returnParameters: {
                    readonly id: 25683;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25682;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12689:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25689;
                        readonly src: "12681:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25681;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12681:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12680:23:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25701;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12772:189:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25700;
                    readonly nodeType: "Block";
                    readonly src: "12893:68:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25697;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25691;
                                readonly src: "12940:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25696;
                                readonly name: "_calculateTimeRemainingScaled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13718;
                                readonly src: "12910:29:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25698;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12910:44:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25695;
                        readonly id: 25699;
                        readonly nodeType: "Return";
                        readonly src: "12903:51:141";
                    }];
                };
                readonly functionSelector: "ca6d38f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "12781:28:141";
                readonly parameters: {
                    readonly id: 25692;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25691;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12827:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25701;
                        readonly src: "12819:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25690;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12819:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12809:37:141";
                };
                readonly returnParameters: {
                    readonly id: 25695;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25694;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12878:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25701;
                        readonly src: "12870:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25693;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12870:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12869:23:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25710;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12967:118:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25709;
                    readonly nodeType: "Block";
                    readonly src: "13042:43:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 25706;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13736;
                                readonly src: "13059:17:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 25707;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13059:19:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25705;
                        readonly id: 25708;
                        readonly nodeType: "Return";
                        readonly src: "13052:26:141";
                    }];
                };
                readonly functionSelector: "907c0f92";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "12976:16:141";
                readonly parameters: {
                    readonly id: 25702;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12992:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25705;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25704;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "13026:14:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25710;
                        readonly src: "13018:22:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25703;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13018:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13017:24:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25720;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13091:116:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25719;
                    readonly nodeType: "Block";
                    readonly src: "13153:54:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25716;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25712;
                                readonly src: "13180:19:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 25715;
                                readonly name: "_updateLiquidity";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15876;
                                readonly src: "13163:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256)";
                                };
                            };
                            readonly id: 25717;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13163:37:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25718;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13163:37:141";
                    }];
                };
                readonly functionSelector: "8120a3e2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "13100:15:141";
                readonly parameters: {
                    readonly id: 25713;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25712;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "13123:19:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25720;
                        readonly src: "13116:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25711;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13116:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13115:28:141";
                };
                readonly returnParameters: {
                    readonly id: 25714;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13153:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25732;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13213:177:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25731;
                    readonly nodeType: "Block";
                    readonly src: "13321:69:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25728;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25722;
                                readonly src: "13366:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25727;
                                readonly name: "_calculateIdleShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 14244;
                                readonly src: "13338:27:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25729;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13338:45:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25726;
                        readonly id: 25730;
                        readonly nodeType: "Return";
                        readonly src: "13331:52:141";
                    }];
                };
                readonly functionSelector: "b1b4b170";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateIdleShareReserves";
                readonly nameLocation: "13222:26:141";
                readonly parameters: {
                    readonly id: 25723;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25722;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13266:16:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25732;
                        readonly src: "13258:24:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25721;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13258:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13248:40:141";
                };
                readonly returnParameters: {
                    readonly id: 25726;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25725;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25732;
                        readonly src: "13312:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25724;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13312:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13311:9:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25740;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13396:93:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25739;
                    readonly nodeType: "Block";
                    readonly src: "13454:35:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25737;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24916;
                            readonly src: "13471:11:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25736;
                        readonly id: 25738;
                        readonly nodeType: "Return";
                        readonly src: "13464:18:141";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "13405:14:141";
                readonly parameters: {
                    readonly id: 25733;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13419:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25736;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25735;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25740;
                        readonly src: "13445:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25734;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13445:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13444:9:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25760;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13495:184:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25759;
                    readonly nodeType: "Block";
                    readonly src: "13570:109:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25751;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25747;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13580:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25749;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13593:13:141";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10795;
                                readonly src: "13580:26:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25750;
                                readonly name: "shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25742;
                                readonly src: "13609:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13580:42:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25752;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13580:42:141";
                    }, {
                        readonly expression: {
                            readonly id: 25757;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25753;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13632:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25755;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13645:12:141";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10798;
                                readonly src: "13632:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25756;
                                readonly name: "bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25744;
                                readonly src: "13660:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13632:40:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25758;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13632:40:141";
                    }];
                };
                readonly functionSelector: "702db0eb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "13504:11:141";
                readonly parameters: {
                    readonly id: 25745;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25742;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "13524:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25760;
                        readonly src: "13516:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25741;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13516:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25744;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "13547:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25760;
                        readonly src: "13539:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25743;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13539:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13515:45:141";
                };
                readonly returnParameters: {
                    readonly id: 25746;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13570:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25772;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13685:113:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25771;
                    readonly nodeType: "Block";
                    readonly src: "13741:57:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25769;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25765;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13751:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25767;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13764:12:141";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10801;
                                readonly src: "13751:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25768;
                                readonly name: "longExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25762;
                                readonly src: "13779:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13751:40:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25770;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13751:40:141";
                    }];
                };
                readonly functionSelector: "b4f8da39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setLongExposure";
                readonly nameLocation: "13694:15:141";
                readonly parameters: {
                    readonly id: 25763;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25762;
                        readonly mutability: "mutable";
                        readonly name: "longExposure";
                        readonly nameLocation: "13718:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25772;
                        readonly src: "13710:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25761;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13710:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13709:22:141";
                };
                readonly returnParameters: {
                    readonly id: 25764;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13741:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25445;
                    readonly name: "Hyperdrive";
                    readonly nameLocations: readonly ["9491:10:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 4609;
                    readonly src: "9491:10:141";
                };
                readonly id: 25446;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9491:10:141";
            }, {
                readonly baseName: {
                    readonly id: 25447;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["9503:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "9503:18:141";
                };
                readonly id: 25448;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9503:18:141";
            }];
            readonly canonicalName: "MockHyperdrive";
            readonly contractDependencies: readonly [25802, 25817, 25832, 25847, 25862];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25773, 25444, 4609, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232, 11332, 12198];
            readonly name: "MockHyperdrive";
            readonly nameLocation: "9473:14:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11017, 11050, 11094, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25802;
            readonly nodeType: "ContractDefinition";
            readonly src: "13802:327:141";
            readonly nodes: readonly [{
                readonly id: 25787;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13880:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25786;
                    readonly nodeType: "Block";
                    readonly src: "13972:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25783;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25780;
                        readonly src: "13963:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25784;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25782;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["13945:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5409;
                        readonly src: "13945:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "13945:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25781;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25780;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "13931:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25787;
                        readonly src: "13901:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25779;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25778;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["13901:11:141", "13913:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "13901:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "13901:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13891:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25785;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13972:0:141";
                };
                readonly scope: 25802;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25801;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13999:128:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25800;
                    readonly nodeType: "Block";
                    readonly src: "14067:60:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25796;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18360;
                                    readonly src: "14096:22:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 25794;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14085:3:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 25795;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14089:6:141";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14085:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 25797;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14085:34:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 25793;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "14077:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 25798;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14077:43:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25799;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14077:43:141";
                    }];
                };
                readonly documentation: {
                    readonly id: 25788;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13980:14:141";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "8e67f87e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "14008:24:141";
                readonly parameters: {
                    readonly id: 25789;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14032:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25792;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25791;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25801;
                        readonly src: "14058:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25790;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14058:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14057:9:141";
                };
                readonly scope: 25802;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25774;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["13836:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5409;
                    readonly src: "13836:17:141";
                };
                readonly id: 25775;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13836:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25776;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13855:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "13855:18:141";
                };
                readonly id: 25777;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13855:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25802, 25444, 5409, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232, 11980, 12320];
            readonly name: "MockHyperdriveTarget0";
            readonly nameLocation: "13811:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [10999, 11005, 11008, 11017, 11029, 11032, 11041, 11044, 11047, 11050, 11074, 11079, 11082, 11088, 11091, 11106, 71548, 71829, 71834, 71837, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25817;
            readonly nodeType: "ContractDefinition";
            readonly src: "14131:174:141";
            readonly nodes: readonly [{
                readonly id: 25816;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14209:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25815;
                    readonly nodeType: "Block";
                    readonly src: "14301:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25812;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25809;
                        readonly src: "14292:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25813;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25811;
                        readonly name: "HyperdriveTarget1";
                        readonly nameLocations: readonly ["14274:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5522;
                        readonly src: "14274:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14274:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25809;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14260:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25816;
                        readonly src: "14230:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25808;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25807;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14230:11:141", "14242:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14230:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14230:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14220:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25814;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14301:0:141";
                };
                readonly scope: 25817;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25803;
                    readonly name: "HyperdriveTarget1";
                    readonly nameLocations: readonly ["14165:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5522;
                    readonly src: "14165:17:141";
                };
                readonly id: 25804;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14165:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25805;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14184:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14184:18:141";
                };
                readonly id: 25806;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14184:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25817, 25444, 5522, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget1";
            readonly nameLocation: "14140:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11011, 11017, 11020, 11041, 11047, 11050, 11056, 11059, 11062, 11065, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25832;
            readonly nodeType: "ContractDefinition";
            readonly src: "14307:174:141";
            readonly nodes: readonly [{
                readonly id: 25831;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14385:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25830;
                    readonly nodeType: "Block";
                    readonly src: "14477:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25827;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25824;
                        readonly src: "14468:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25828;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25826;
                        readonly name: "HyperdriveTarget2";
                        readonly nameLocations: readonly ["14450:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5611;
                        readonly src: "14450:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14450:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25825;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25824;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14436:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25831;
                        readonly src: "14406:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25823;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25822;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14406:11:141", "14418:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14406:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14406:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14396:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14477:0:141";
                };
                readonly scope: 25832;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25818;
                    readonly name: "HyperdriveTarget2";
                    readonly nameLocations: readonly ["14341:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5611;
                    readonly src: "14341:17:141";
                };
                readonly id: 25819;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14341:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25820;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14360:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14360:18:141";
                };
                readonly id: 25821;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14360:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget2";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25832, 25444, 5611, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget2";
            readonly nameLocation: "14316:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11011, 11017, 11041, 11047, 11050, 11056, 11065, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25847;
            readonly nodeType: "ContractDefinition";
            readonly src: "14483:174:141";
            readonly nodes: readonly [{
                readonly id: 25846;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14561:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25845;
                    readonly nodeType: "Block";
                    readonly src: "14653:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25842;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25839;
                        readonly src: "14644:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25843;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25841;
                        readonly name: "HyperdriveTarget3";
                        readonly nameLocations: readonly ["14626:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5699;
                        readonly src: "14626:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14626:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25840;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25839;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14612:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25846;
                        readonly src: "14582:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25838;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25837;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14582:11:141", "14594:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14582:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14582:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14572:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25844;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14653:0:141";
                };
                readonly scope: 25847;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25833;
                    readonly name: "HyperdriveTarget3";
                    readonly nameLocations: readonly ["14517:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5699;
                    readonly src: "14517:17:141";
                };
                readonly id: 25834;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14517:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25835;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14536:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14536:18:141";
                };
                readonly id: 25836;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14536:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25847, 25444, 5699, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget3";
            readonly nameLocation: "14492:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11002, 11005, 11017, 11041, 11047, 11050, 11053, 11056, 11062, 11065, 11068, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25862;
            readonly nodeType: "ContractDefinition";
            readonly src: "14659:174:141";
            readonly nodes: readonly [{
                readonly id: 25861;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14737:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25860;
                    readonly nodeType: "Block";
                    readonly src: "14829:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25857;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25854;
                        readonly src: "14820:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25858;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25856;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["14802:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5778;
                        readonly src: "14802:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14802:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25855;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25854;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14788:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25861;
                        readonly src: "14758:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25853;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25852;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14758:11:141", "14770:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14758:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14758:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14748:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25859;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14829:0:141";
                };
                readonly scope: 25862;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25848;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["14693:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5778;
                    readonly src: "14693:17:141";
                };
                readonly id: 25849;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14693:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25850;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14712:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14712:18:141";
                };
                readonly id: 25851;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14712:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25862, 25444, 5778, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget4";
            readonly nameLocation: "14668:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11017, 11026, 11041, 11047, 11050, 11053, 11056, 11062, 11065, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 141;
};
//# sourceMappingURL=IMockHyperdrive.d.ts.map