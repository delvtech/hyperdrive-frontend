export const IMockHyperdrive = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "apr",
                    "type": "int256"
                }
            ],
            "name": "accrue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                }
            ],
            "name": "calculateTimeRemaining",
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                }
            ],
            "name": "calculateTimeRemainingScaled",
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
            "name": "getGovernanceFeesAccrued",
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
            "name": "latestCheckpoint",
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shareReserves",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondReserves",
                    "type": "uint256"
                }
            ],
            "name": "setReserves",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "shareReservesDelta",
                    "type": "uint256"
                }
            ],
            "name": "updateLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
    "methodIdentifiers": {
        "accrue(uint256,int256)": "68096239",
        "calculateTimeRemaining(uint256)": "68c2ecb8",
        "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
        "getGovernanceFeesAccrued()": "8e67f87e",
        "latestCheckpoint()": "907c0f92",
        "setReserves(uint256,uint256)": "8392b8c0",
        "updateLiquidity(uint256)": "ced09112"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGovernanceFeesAccrued\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"IMockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec\",\"dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6\",\"dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c\",\"dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0\",\"dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0\",\"dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "time",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "apr",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "accrue"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_maturityTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "calculateTimeRemaining",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_maturityTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "calculateTimeRemainingScaled",
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
                    "name": "getGovernanceFeesAccrued",
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
                    "name": "latestCheckpoint",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setReserves"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "shareReservesDelta",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateLiquidity"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
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
                "contracts/test/MockHyperdrive.sol": "IMockHyperdrive"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4",
                "urls": [
                    "bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10",
                    "dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92",
                "urls": [
                    "bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206",
                    "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf",
                "urls": [
                    "bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec",
                    "dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39",
                "urls": [
                    "bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6",
                    "dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78",
                "urls": [
                    "bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c",
                    "dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget4.sol": {
                "keccak256": "0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f",
                "urls": [
                    "bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0",
                    "dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM"
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
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8",
                "urls": [
                    "bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd",
                    "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3",
                "urls": [
                    "bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186",
                    "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7",
                "urls": [
                    "bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334",
                    "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488",
                "urls": [
                    "bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4",
                    "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc",
                "urls": [
                    "bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4",
                    "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c",
                "urls": [
                    "bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c",
                    "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e",
                "urls": [
                    "bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19",
                    "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Constants.sol": {
                "keccak256": "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d",
                "urls": [
                    "bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418",
                    "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb",
                "urls": [
                    "bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c",
                    "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424",
                "urls": [
                    "bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a",
                    "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189",
                "urls": [
                    "bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786",
                    "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e",
                "urls": [
                    "bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797",
                    "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/ERC20Mintable.sol": {
                "keccak256": "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5",
                "urls": [
                    "bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48",
                    "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockHyperdrive.sol": {
                "keccak256": "0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500",
                "urls": [
                    "bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0",
                    "dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            },
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
                "urls": [
                    "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
                    "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "test/utils/HyperdriveUtils.sol": {
                "keccak256": "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04",
                "urls": [
                    "bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6",
                    "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockHyperdrive.sol",
        "id": 25325,
        "exportedSymbols": {
            "ERC20Mintable": [
                23490
            ],
            "ETH": [
                18015
            ],
            "FixedPointMath": [
                18822
            ],
            "Hyperdrive": [
                4375
            ],
            "HyperdriveBase": [
                13667
            ],
            "HyperdriveTarget0": [
                5190
            ],
            "HyperdriveTarget1": [
                5278
            ],
            "HyperdriveTarget2": [
                5366
            ],
            "HyperdriveTarget3": [
                5468
            ],
            "HyperdriveTarget4": [
                5562
            ],
            "HyperdriveUtils": [
                158674
            ],
            "IHyperdrive": [
                10351
            ],
            "IMockHyperdrive": [
                24382
            ],
            "MockHyperdrive": [
                25235
            ],
            "MockHyperdriveBase": [
                24906
            ],
            "MockHyperdriveTarget0": [
                25264
            ],
            "MockHyperdriveTarget1": [
                25279
            ],
            "MockHyperdriveTarget2": [
                25294
            ],
            "MockHyperdriveTarget3": [
                25309
            ],
            "MockHyperdriveTarget4": [
                25324
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:14577:135",
        "nodes": [
            {
                "id": 24312,
                "nodeType": "PragmaDirective",
                "src": "39:23:135",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 24314,
                "nodeType": "ImportDirective",
                "src": "64:67:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/Hyperdrive.sol",
                "file": "contracts/src/external/Hyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 4376,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24313,
                            "name": "Hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4375,
                            "src": "73:10:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24316,
                "nodeType": "ImportDirective",
                "src": "132:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "contracts/src/external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 5191,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24315,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5190,
                            "src": "141:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24318,
                "nodeType": "ImportDirective",
                "src": "214:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
                "file": "contracts/src/external/HyperdriveTarget1.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 5279,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24317,
                            "name": "HyperdriveTarget1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5278,
                            "src": "223:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24320,
                "nodeType": "ImportDirective",
                "src": "296:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget2.sol",
                "file": "contracts/src/external/HyperdriveTarget2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 5367,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24319,
                            "name": "HyperdriveTarget2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5366,
                            "src": "305:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24322,
                "nodeType": "ImportDirective",
                "src": "378:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "contracts/src/external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 5469,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24321,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5468,
                            "src": "387:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24324,
                "nodeType": "ImportDirective",
                "src": "460:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget4.sol",
                "file": "contracts/src/external/HyperdriveTarget4.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 5563,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24323,
                            "name": "HyperdriveTarget4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5562,
                            "src": "469:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24326,
                "nodeType": "ImportDirective",
                "src": "542:75:135",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "contracts/src/internal/HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 13668,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24325,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13667,
                            "src": "551:14:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24328,
                "nodeType": "ImportDirective",
                "src": "618:71:135",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24327,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "627:11:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24330,
                "nodeType": "ImportDirective",
                "src": "690:71:135",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24329,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "699:11:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24332,
                "nodeType": "ImportDirective",
                "src": "762:60:135",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/Constants.sol",
                "file": "contracts/src/libraries/Constants.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 18016,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24331,
                            "name": "ETH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18015,
                            "src": "771:3:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24334,
                "nodeType": "ImportDirective",
                "src": "823:76:135",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "contracts/src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24333,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "832:14:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24336,
                "nodeType": "ImportDirective",
                "src": "900:65:135",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "contracts/test/ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 23491,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24335,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23490,
                            "src": "909:13:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24338,
                "nodeType": "ImportDirective",
                "src": "966:65:135",
                "nodes": [],
                "absolutePath": "test/utils/HyperdriveUtils.sol",
                "file": "test/utils/HyperdriveUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25325,
                "sourceUnit": 158675,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24337,
                            "name": "HyperdriveUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 158674,
                            "src": "975:15:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24382,
                "nodeType": "ContractDefinition",
                "src": "1033:594:135",
                "nodes": [
                    {
                        "id": 24345,
                        "nodeType": "FunctionDefinition",
                        "src": "1065:51:135",
                        "nodes": [],
                        "functionSelector": "68096239",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "accrue",
                        "nameLocation": "1074:6:135",
                        "parameters": {
                            "id": 24343,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24340,
                                    "mutability": "mutable",
                                    "name": "time",
                                    "nameLocation": "1089:4:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24345,
                                    "src": "1081:12:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24339,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1081:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24342,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "1102:3:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24345,
                                    "src": "1095:10:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24341,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1095:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1080:26:135"
                        },
                        "returnParameters": {
                            "id": 24344,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1115:0:135"
                        },
                        "scope": 24382,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24352,
                        "nodeType": "FunctionDefinition",
                        "src": "1122:101:135",
                        "nodes": [],
                        "functionSelector": "68c2ecb8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemaining",
                        "nameLocation": "1131:22:135",
                        "parameters": {
                            "id": 24348,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24347,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1171:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24352,
                                    "src": "1163:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24346,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1163:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1153:37:135"
                        },
                        "returnParameters": {
                            "id": 24351,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24350,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24352,
                                    "src": "1214:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24349,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1214:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1213:9:135"
                        },
                        "scope": 24382,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24359,
                        "nodeType": "FunctionDefinition",
                        "src": "1229:107:135",
                        "nodes": [],
                        "functionSelector": "ca6d38f7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemainingScaled",
                        "nameLocation": "1238:28:135",
                        "parameters": {
                            "id": 24355,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24354,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1284:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24359,
                                    "src": "1276:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24353,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1276:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1266:37:135"
                        },
                        "returnParameters": {
                            "id": 24358,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24357,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24359,
                                    "src": "1327:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24356,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1327:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1326:9:135"
                        },
                        "scope": 24382,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24364,
                        "nodeType": "FunctionDefinition",
                        "src": "1342:60:135",
                        "nodes": [],
                        "functionSelector": "907c0f92",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "latestCheckpoint",
                        "nameLocation": "1351:16:135",
                        "parameters": {
                            "id": 24360,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1367:2:135"
                        },
                        "returnParameters": {
                            "id": 24363,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24362,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24364,
                                    "src": "1393:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24361,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1393:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1392:9:135"
                        },
                        "scope": 24382,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24369,
                        "nodeType": "FunctionDefinition",
                        "src": "1408:62:135",
                        "nodes": [],
                        "functionSelector": "ced09112",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateLiquidity",
                        "nameLocation": "1417:15:135",
                        "parameters": {
                            "id": 24367,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24366,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "1441:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24369,
                                    "src": "1433:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24365,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1433:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1432:28:135"
                        },
                        "returnParameters": {
                            "id": 24368,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1469:0:135"
                        },
                        "scope": 24382,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24376,
                        "nodeType": "FunctionDefinition",
                        "src": "1476:75:135",
                        "nodes": [],
                        "functionSelector": "8392b8c0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setReserves",
                        "nameLocation": "1485:11:135",
                        "parameters": {
                            "id": 24374,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24371,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "1505:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24376,
                                    "src": "1497:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24370,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1497:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24373,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "1528:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24376,
                                    "src": "1520:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24372,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1520:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:45:135"
                        },
                        "returnParameters": {
                            "id": 24375,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1550:0:135"
                        },
                        "scope": 24382,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24381,
                        "nodeType": "FunctionDefinition",
                        "src": "1557:68:135",
                        "nodes": [],
                        "functionSelector": "8e67f87e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGovernanceFeesAccrued",
                        "nameLocation": "1566:24:135",
                        "parameters": {
                            "id": 24377,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1590:2:135"
                        },
                        "returnParameters": {
                            "id": 24380,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24379,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24381,
                                    "src": "1616:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24378,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1616:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1615:9:135"
                        },
                        "scope": 24382,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMockHyperdrive",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    24382
                ],
                "name": "IMockHyperdrive",
                "nameLocation": "1043:15:135",
                "scope": 25325,
                "usedErrors": [],
                "usedEvents": []
            },
            {
                "id": 24906,
                "nodeType": "ContractDefinition",
                "src": "1629:7615:135",
                "nodes": [
                    {
                        "id": 24387,
                        "nodeType": "UsingForDirective",
                        "src": "1690:33:135",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 24385,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1696:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "1696:14:135"
                        },
                        "typeName": {
                            "id": 24386,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1715:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 24389,
                        "nodeType": "VariableDeclaration",
                        "src": "1729:28:135",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalShares",
                        "nameLocation": "1746:11:135",
                        "scope": 24906,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 24388,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1729:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 24522,
                        "nodeType": "FunctionDefinition",
                        "src": "2054:1483:135",
                        "nodes": [],
                        "body": {
                            "id": 24521,
                            "nodeType": "Block",
                            "src": "2194:1343:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24403
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24403,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "2261:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24521,
                                            "src": "2253:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24402,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2253:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24404,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2253:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24410,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24407,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "2289:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24406,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2281:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24405,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2281:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24408,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2281:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24409,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "2304:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2281:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24430,
                                        "nodeType": "Block",
                                        "src": "2370:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24428,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24420,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24403,
                                                        "src": "2384:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24425,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "2422:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24424,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2414:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24423,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2414:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24426,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2414:13:135",
                                                                "tryCall": false,
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
                                                            "expression": {
                                                                "id": 24421,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "2393:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24422,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2404:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9665,
                                                            "src": "2393:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24427,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2393:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2384:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24429,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2384:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24431,
                                    "nodeType": "IfStatement",
                                    "src": "2277:162:135",
                                    "trueBody": {
                                        "id": 24419,
                                        "nodeType": "Block",
                                        "src": "2309:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24417,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24411,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24403,
                                                        "src": "2323:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24414,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "2340:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24413,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "2332:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24412,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "2332:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24415,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2332:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24416,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2346:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2332:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2323:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24418,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2323:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        24433
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24433,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "2585:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24521,
                                            "src": "2580:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24432,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2580:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24435,
                                    "initialValue": {
                                        "hexValue": "74727565",
                                        "id": 24434,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2595:4:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2580:19:135"
                                },
                                {
                                    "assignments": [
                                        24437
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24437,
                                            "mutability": "mutable",
                                            "name": "refund",
                                            "nameLocation": "2617:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24521,
                                            "src": "2609:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24436,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2609:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24438,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2609:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24444,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24441,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "2645:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24440,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2637:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24439,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2637:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24442,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2637:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24443,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "2660:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2637:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24477,
                                        "nodeType": "Block",
                                        "src": "2838:160:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24475,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24464,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24433,
                                                        "src": "2852:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 24467,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "2903:3:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 24468,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2907:6:135",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2903:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24471,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "2939:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24470,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2931:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24469,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2931:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24472,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2931:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24473,
                                                                "name": "_baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24392,
                                                                "src": "2962:11:135",
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
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24465,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "2862:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24466,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2873:12:135",
                                                            "memberName": "transferFrom",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9623,
                                                            "src": "2862:23:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24474,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2862:125:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "2852:135:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24476,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2852:135:135"
                                            }
                                        ]
                                    },
                                    "id": 24478,
                                    "nodeType": "IfStatement",
                                    "src": "2633:365:135",
                                    "trueBody": {
                                        "id": 24463,
                                        "nodeType": "Block",
                                        "src": "2665:167:135",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 24448,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 24445,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "2683:3:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 24446,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2687:5:135",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2683:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 24447,
                                                        "name": "_baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24392,
                                                        "src": "2695:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2683:23:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24455,
                                                "nodeType": "IfStatement",
                                                "src": "2679:97:135",
                                                "trueBody": {
                                                    "id": 24454,
                                                    "nodeType": "Block",
                                                    "src": "2708:68:135",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 24449,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10351,
                                                                        "src": "2733:11:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 24451,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "2745:14:135",
                                                                    "memberName": "TransferFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10296,
                                                                    "src": "2733:26:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 24452,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2733:28:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 24453,
                                                            "nodeType": "RevertStatement",
                                                            "src": "2726:35:135"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 24461,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24456,
                                                        "name": "refund",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24437,
                                                        "src": "2789:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 24460,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 24457,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "2798:3:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 24458,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2802:5:135",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "2798:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 24459,
                                                            "name": "_baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24392,
                                                            "src": "2810:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2798:23:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2789:32:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24462,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2789:32:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24480,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3011:8:135",
                                        "subExpression": {
                                            "id": 24479,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24433,
                                            "src": "3012:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24487,
                                    "nodeType": "IfStatement",
                                    "src": "3007:74:135",
                                    "trueBody": {
                                        "id": 24486,
                                        "nodeType": "Block",
                                        "src": "3021:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24481,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "3042:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24483,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3054:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10296,
                                                        "src": "3042:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24484,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3042:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24485,
                                                "nodeType": "RevertStatement",
                                                "src": "3035:35:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 24490,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 24488,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24389,
                                            "src": "3216:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 24489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3231:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "3216:16:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24519,
                                        "nodeType": "Block",
                                        "src": "3365:166:135",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    24504
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 24504,
                                                        "mutability": "mutable",
                                                        "name": "newShares",
                                                        "nameLocation": "3387:9:135",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 24519,
                                                        "src": "3379:17:135",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 24503,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3379:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 24510,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 24507,
                                                            "name": "totalShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24389,
                                                            "src": "3422:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24508,
                                                            "name": "assets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24403,
                                                            "src": "3435:6:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 24505,
                                                            "name": "_baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24392,
                                                            "src": "3399:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 24506,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3411:10:135",
                                                        "memberName": "mulDivDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18067,
                                                        "src": "3399:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 24509,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3399:43:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "3379:63:135"
                                            },
                                            {
                                                "expression": {
                                                    "id": 24513,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24511,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24389,
                                                        "src": "3456:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 24512,
                                                        "name": "newShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24504,
                                                        "src": "3471:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3456:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24514,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3456:24:135"
                                            },
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "id": 24515,
                                                            "name": "newShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24504,
                                                            "src": "3502:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24516,
                                                            "name": "refund",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24437,
                                                            "src": "3513:6:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 24517,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3501:19:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "functionReturnParameters": 24401,
                                                "id": 24518,
                                                "nodeType": "Return",
                                                "src": "3494:26:135"
                                            }
                                        ]
                                    },
                                    "id": 24520,
                                    "nodeType": "IfStatement",
                                    "src": "3212:319:135",
                                    "trueBody": {
                                        "id": 24502,
                                        "nodeType": "Block",
                                        "src": "3234:125:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24496,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24491,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24389,
                                                        "src": "3248:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24494,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17560,
                                                                "src": "3282:23:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24492,
                                                                "name": "_baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24392,
                                                                "src": "3262:11:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 24493,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3274:7:135",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18103,
                                                            "src": "3262:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24495,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3262:44:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3248:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24497,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3248:58:135"
                                            },
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "id": 24498,
                                                            "name": "totalShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24389,
                                                            "src": "3328:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24499,
                                                            "name": "refund",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24437,
                                                            "src": "3341:6:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 24500,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3327:21:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "functionReturnParameters": 24401,
                                                "id": 24501,
                                                "nodeType": "Return",
                                                "src": "3320:28:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12702
                        ],
                        "documentation": {
                            "id": 24390,
                            "nodeType": "StructuredDocumentation",
                            "src": "1764:285:135",
                            "text": "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithBase",
                        "nameLocation": "2063:16:135",
                        "overrides": {
                            "id": 24396,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2158:8:135"
                        },
                        "parameters": {
                            "id": 24395,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24392,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "2097:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24522,
                                    "src": "2089:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24391,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2089:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24394,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24522,
                                    "src": "2118:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24393,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2118:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2079:69:135"
                        },
                        "returnParameters": {
                            "id": 24401,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24398,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24522,
                                    "src": "2176:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24397,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2176:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24400,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24522,
                                    "src": "2185:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24399,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2185:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2175:18:135"
                        },
                        "scope": 24906,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24617,
                        "nodeType": "FunctionDefinition",
                        "src": "3655:1226:135",
                        "nodes": [],
                        "body": {
                            "id": 24616,
                            "nodeType": "Block",
                            "src": "3771:1110:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24532
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24532,
                                            "mutability": "mutable",
                                            "name": "baseAmount",
                                            "nameLocation": "3842:10:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24616,
                                            "src": "3834:18:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24531,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3834:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24536,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24534,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24525,
                                                "src": "3870:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 24533,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24841
                                            ],
                                            "referencedDeclaration": 24841,
                                            "src": "3855:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24535,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3855:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3834:49:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 24539,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 24537,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24389,
                                            "src": "4019:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 24538,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4034:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4019:16:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24558,
                                        "nodeType": "Block",
                                        "src": "4125:111:135",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    24549
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 24549,
                                                        "mutability": "mutable",
                                                        "name": "newShares",
                                                        "nameLocation": "4147:9:135",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 24558,
                                                        "src": "4139:17:135",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 24548,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4139:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 24553,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 24551,
                                                            "name": "baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24532,
                                                            "src": "4176:10:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 24550,
                                                        "name": "_convertToShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            24887
                                                        ],
                                                        "referencedDeclaration": 24887,
                                                        "src": "4159:16:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 24552,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4159:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "4139:48:135"
                                            },
                                            {
                                                "expression": {
                                                    "id": 24556,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24554,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24389,
                                                        "src": "4201:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 24555,
                                                        "name": "newShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24549,
                                                        "src": "4216:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4201:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24557,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4201:24:135"
                                            }
                                        ]
                                    },
                                    "id": 24559,
                                    "nodeType": "IfStatement",
                                    "src": "4015:221:135",
                                    "trueBody": {
                                        "id": 24547,
                                        "nodeType": "Block",
                                        "src": "4037:82:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24545,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24540,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24389,
                                                        "src": "4051:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24543,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17560,
                                                                "src": "4084:23:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24541,
                                                                "name": "baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24532,
                                                                "src": "4065:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 24542,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4076:7:135",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18103,
                                                            "src": "4065:18:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24544,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4065:43:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4051:57:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24546,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4051:57:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        24561
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24561,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4382:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24616,
                                            "src": "4377:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24560,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4377:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24563,
                                    "initialValue": {
                                        "hexValue": "74727565",
                                        "id": 24562,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4392:4:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4377:19:135"
                                },
                                {
                                    "assignments": [
                                        24565
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24565,
                                            "mutability": "mutable",
                                            "name": "refund",
                                            "nameLocation": "4414:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24616,
                                            "src": "4406:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24564,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4406:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24566,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4406:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24572,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24569,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "4442:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4434:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24567,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4434:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24570,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4434:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24571,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "4457:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4434:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24605,
                                        "nodeType": "Block",
                                        "src": "4633:159:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24603,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24592,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24561,
                                                        "src": "4647:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 24595,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "4698:3:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 24596,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "4702:6:135",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "4698:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24599,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "4734:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24598,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4726:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24597,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4726:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24600,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4726:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24601,
                                                                "name": "baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24532,
                                                                "src": "4757:10:135",
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
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24593,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "4657:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24594,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4668:12:135",
                                                            "memberName": "transferFrom",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9623,
                                                            "src": "4657:23:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24602,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4657:124:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "4647:134:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24604,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4647:134:135"
                                            }
                                        ]
                                    },
                                    "id": 24606,
                                    "nodeType": "IfStatement",
                                    "src": "4430:362:135",
                                    "trueBody": {
                                        "id": 24591,
                                        "nodeType": "Block",
                                        "src": "4462:165:135",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 24576,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 24573,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "4480:3:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 24574,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4484:5:135",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4480:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 24575,
                                                        "name": "baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24532,
                                                        "src": "4492:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4480:22:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24583,
                                                "nodeType": "IfStatement",
                                                "src": "4476:96:135",
                                                "trueBody": {
                                                    "id": 24582,
                                                    "nodeType": "Block",
                                                    "src": "4504:68:135",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 24577,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10351,
                                                                        "src": "4529:11:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 24579,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4541:14:135",
                                                                    "memberName": "TransferFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10296,
                                                                    "src": "4529:26:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 24580,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4529:28:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 24581,
                                                            "nodeType": "RevertStatement",
                                                            "src": "4522:35:135"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 24589,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24584,
                                                        "name": "refund",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24565,
                                                        "src": "4585:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 24588,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 24585,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "4594:3:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 24586,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4598:5:135",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4594:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 24587,
                                                            "name": "baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24532,
                                                            "src": "4606:10:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4594:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4585:31:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24590,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4585:31:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24608,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4805:8:135",
                                        "subExpression": {
                                            "id": 24607,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24561,
                                            "src": "4806:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24615,
                                    "nodeType": "IfStatement",
                                    "src": "4801:74:135",
                                    "trueBody": {
                                        "id": 24614,
                                        "nodeType": "Block",
                                        "src": "4815:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24609,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "4836:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24611,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4848:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10296,
                                                        "src": "4836:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24612,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4836:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24613,
                                                "nodeType": "RevertStatement",
                                                "src": "4829:35:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12710
                        ],
                        "documentation": {
                            "id": 24523,
                            "nodeType": "StructuredDocumentation",
                            "src": "3543:107:135",
                            "text": "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithShares",
                        "nameLocation": "3664:18:135",
                        "overrides": {
                            "id": 24529,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3762:8:135"
                        },
                        "parameters": {
                            "id": 24528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24525,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "3700:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24617,
                                    "src": "3692:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24524,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3692:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24527,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24617,
                                    "src": "3722:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24526,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3722:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3682:70:135"
                        },
                        "returnParameters": {
                            "id": 24530,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3771:0:135"
                        },
                        "scope": 24906,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24694,
                        "nodeType": "FunctionDefinition",
                        "src": "5177:986:135",
                        "nodes": [],
                        "body": {
                            "id": 24693,
                            "nodeType": "Block",
                            "src": "5356:807:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24637,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24630,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24620,
                                            "src": "5478:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 24633,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 24631,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24620,
                                                    "src": "5493:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 24632,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24389,
                                                    "src": "5508:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5493:26:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 24635,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24620,
                                                "src": "5536:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24636,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "5493:55:135",
                                            "trueExpression": {
                                                "id": 24634,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24389,
                                                "src": "5522:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5478:70:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24638,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5478:70:135"
                                },
                                {
                                    "assignments": [
                                        24640
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24640,
                                            "mutability": "mutable",
                                            "name": "withdrawValue",
                                            "nameLocation": "5607:13:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24693,
                                            "src": "5599:21:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24639,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5599:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24644,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24642,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24620,
                                                "src": "5638:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 24641,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24841
                                            ],
                                            "referencedDeclaration": 24841,
                                            "src": "5623:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24643,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5623:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5599:52:135"
                                },
                                {
                                    "expression": {
                                        "id": 24647,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24645,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24389,
                                            "src": "5740:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 24646,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24620,
                                            "src": "5755:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5740:27:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24648,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5740:27:135"
                                },
                                {
                                    "assignments": [
                                        24650
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24650,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5782:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24693,
                                            "src": "5777:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24649,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5777:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24651,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5777:12:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24657,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24654,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "5811:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24653,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5803:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24652,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5803:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24655,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5803:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24656,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "5826:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5803:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24680,
                                        "nodeType": "Block",
                                        "src": "5960:83:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24678,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24672,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24650,
                                                        "src": "5974:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24675,
                                                                "name": "_destination",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24622,
                                                                "src": "6004:12:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24676,
                                                                "name": "withdrawValue",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24640,
                                                                "src": "6018:13:135",
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
                                                            "expression": {
                                                                "id": 24673,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "5984:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24674,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5995:8:135",
                                                            "memberName": "transfer",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9611,
                                                            "src": "5984:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24677,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5984:48:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5974:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24679,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5974:58:135"
                                            }
                                        ]
                                    },
                                    "id": 24681,
                                    "nodeType": "IfStatement",
                                    "src": "5799:244:135",
                                    "trueBody": {
                                        "id": 24671,
                                        "nodeType": "Block",
                                        "src": "5831:123:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24669,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "components": [
                                                            {
                                                                "id": 24658,
                                                                "name": "success",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24650,
                                                                "src": "5846:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            null
                                                        ],
                                                        "id": 24659,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "TupleExpression",
                                                        "src": "5845:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$__$",
                                                            "typeString": "tuple(bool,)"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "",
                                                                "id": 24667,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5927:2:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                },
                                                                "value": ""
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                        "typeString": "literal_string \"\""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 24662,
                                                                            "name": "_destination",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24622,
                                                                            "src": "5867:12:135",
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
                                                                        "id": 24661,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5859:8:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                                                            "typeString": "type(address payable)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 24660,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5859:8:135",
                                                                            "stateMutability": "payable",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 24663,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5859:21:135",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "id": 24664,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5881:4:135",
                                                                "memberName": "call",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5859:26:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                                }
                                                            },
                                                            "id": 24666,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                "value"
                                                            ],
                                                            "nodeType": "FunctionCallOptions",
                                                            "options": [
                                                                {
                                                                    "id": 24665,
                                                                    "name": "withdrawValue",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24640,
                                                                    "src": "5894:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "src": "5859:50:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                            }
                                                        },
                                                        "id": 24668,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5859:84:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                                            "typeString": "tuple(bool,bytes memory)"
                                                        }
                                                    },
                                                    "src": "5845:98:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24670,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5845:98:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24683,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "6056:8:135",
                                        "subExpression": {
                                            "id": 24682,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24650,
                                            "src": "6057:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24690,
                                    "nodeType": "IfStatement",
                                    "src": "6052:74:135",
                                    "trueBody": {
                                        "id": 24689,
                                        "nodeType": "Block",
                                        "src": "6066:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24684,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "6087:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24686,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6099:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10296,
                                                        "src": "6087:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24687,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6087:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24688,
                                                "nodeType": "RevertStatement",
                                                "src": "6080:35:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 24691,
                                        "name": "withdrawValue",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24640,
                                        "src": "6143:13:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24629,
                                    "id": 24692,
                                    "nodeType": "Return",
                                    "src": "6136:20:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12722
                        ],
                        "documentation": {
                            "id": 24618,
                            "nodeType": "StructuredDocumentation",
                            "src": "4887:285:135",
                            "text": "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithBase",
                        "nameLocation": "5186:17:135",
                        "overrides": {
                            "id": 24626,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "5313:8:135"
                        },
                        "parameters": {
                            "id": 24625,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24620,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "5221:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24694,
                                    "src": "5213:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24619,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5213:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24622,
                                    "mutability": "mutable",
                                    "name": "_destination",
                                    "nameLocation": "5251:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24694,
                                    "src": "5243:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24621,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5243:7:135",
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
                                    "id": 24624,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24694,
                                    "src": "5273:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24623,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5273:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5203:100:135"
                        },
                        "returnParameters": {
                            "id": 24629,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24628,
                                    "mutability": "mutable",
                                    "name": "amountWithdrawn",
                                    "nameLocation": "5339:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24694,
                                    "src": "5331:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24627,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5331:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5330:25:135"
                        },
                        "scope": 24906,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24767,
                        "nodeType": "FunctionDefinition",
                        "src": "6405:923:135",
                        "nodes": [],
                        "body": {
                            "id": 24766,
                            "nodeType": "Block",
                            "src": "6552:776:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24712,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24705,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24697,
                                            "src": "6674:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 24708,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 24706,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24697,
                                                    "src": "6689:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 24707,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24389,
                                                    "src": "6704:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6689:26:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 24710,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24697,
                                                "src": "6732:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24711,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "6689:55:135",
                                            "trueExpression": {
                                                "id": 24709,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24389,
                                                "src": "6718:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6674:70:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24713,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6674:70:135"
                                },
                                {
                                    "assignments": [
                                        24715
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24715,
                                            "mutability": "mutable",
                                            "name": "withdrawValue",
                                            "nameLocation": "6803:13:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24766,
                                            "src": "6795:21:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24714,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6795:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24719,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24717,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24697,
                                                "src": "6834:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 24716,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24841
                                            ],
                                            "referencedDeclaration": 24841,
                                            "src": "6819:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24718,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6819:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6795:52:135"
                                },
                                {
                                    "expression": {
                                        "id": 24722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24720,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24389,
                                            "src": "6936:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 24721,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24697,
                                            "src": "6951:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6936:27:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24723,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6936:27:135"
                                },
                                {
                                    "assignments": [
                                        24725
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24725,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "6978:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24766,
                                            "src": "6973:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24724,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6973:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24726,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6973:12:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24732,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24729,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "7007:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24728,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "6999:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24727,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6999:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24730,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6999:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24731,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "7022:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6999:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24755,
                                        "nodeType": "Block",
                                        "src": "7156:83:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24753,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24747,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24725,
                                                        "src": "7170:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24750,
                                                                "name": "_destination",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24699,
                                                                "src": "7200:12:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24751,
                                                                "name": "withdrawValue",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24715,
                                                                "src": "7214:13:135",
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
                                                            "expression": {
                                                                "id": 24748,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "7180:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24749,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7191:8:135",
                                                            "memberName": "transfer",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9611,
                                                            "src": "7180:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24752,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7180:48:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "7170:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24754,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7170:58:135"
                                            }
                                        ]
                                    },
                                    "id": 24756,
                                    "nodeType": "IfStatement",
                                    "src": "6995:244:135",
                                    "trueBody": {
                                        "id": 24746,
                                        "nodeType": "Block",
                                        "src": "7027:123:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24744,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "components": [
                                                            {
                                                                "id": 24733,
                                                                "name": "success",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24725,
                                                                "src": "7042:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            null
                                                        ],
                                                        "id": 24734,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7041:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$__$",
                                                            "typeString": "tuple(bool,)"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "",
                                                                "id": 24742,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7123:2:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                },
                                                                "value": ""
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                        "typeString": "literal_string \"\""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 24737,
                                                                            "name": "_destination",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24699,
                                                                            "src": "7063:12:135",
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
                                                                        "id": 24736,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "7055:8:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                                                            "typeString": "type(address payable)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 24735,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "7055:8:135",
                                                                            "stateMutability": "payable",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 24738,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "7055:21:135",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "id": 24739,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "7077:4:135",
                                                                "memberName": "call",
                                                                "nodeType": "MemberAccess",
                                                                "src": "7055:26:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                                }
                                                            },
                                                            "id": 24741,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                "value"
                                                            ],
                                                            "nodeType": "FunctionCallOptions",
                                                            "options": [
                                                                {
                                                                    "id": 24740,
                                                                    "name": "withdrawValue",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24715,
                                                                    "src": "7090:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "src": "7055:50:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                            }
                                                        },
                                                        "id": 24743,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7055:84:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                                            "typeString": "tuple(bool,bytes memory)"
                                                        }
                                                    },
                                                    "src": "7041:98:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24745,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7041:98:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24758,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "7252:8:135",
                                        "subExpression": {
                                            "id": 24757,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24725,
                                            "src": "7253:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24765,
                                    "nodeType": "IfStatement",
                                    "src": "7248:74:135",
                                    "trueBody": {
                                        "id": 24764,
                                        "nodeType": "Block",
                                        "src": "7262:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24759,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "7283:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24761,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7295:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10296,
                                                        "src": "7283:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24762,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7283:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24763,
                                                "nodeType": "RevertStatement",
                                                "src": "7276:35:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12732
                        ],
                        "documentation": {
                            "id": 24695,
                            "nodeType": "StructuredDocumentation",
                            "src": "6169:231:135",
                            "text": "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithShares",
                        "nameLocation": "6414:19:135",
                        "overrides": {
                            "id": 24703,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "6543:8:135"
                        },
                        "parameters": {
                            "id": 24702,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24697,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "6451:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24767,
                                    "src": "6443:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24696,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6443:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24699,
                                    "mutability": "mutable",
                                    "name": "_destination",
                                    "nameLocation": "6481:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24767,
                                    "src": "6473:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24698,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6473:7:135",
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
                                    "id": 24701,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24767,
                                    "src": "6503:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24700,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6503:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6433:100:135"
                        },
                        "returnParameters": {
                            "id": 24704,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6552:0:135"
                        },
                        "scope": 24906,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24790,
                        "nodeType": "FunctionDefinition",
                        "src": "7513:175:135",
                        "nodes": [],
                        "body": {
                            "id": 24789,
                            "nodeType": "Block",
                            "src": "7566:122:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 24781,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 24776,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 24773,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17532,
                                                        "src": "7588:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 24772,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "7580:7:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 24771,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "7580:7:135",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 24774,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7580:19:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 24775,
                                                "name": "ETH",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18015,
                                                "src": "7603:3:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "7580:26:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 24780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 24777,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "7610:3:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 24778,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7614:5:135",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "7610:9:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 24779,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7623:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "7610:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7580:44:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24788,
                                    "nodeType": "IfStatement",
                                    "src": "7576:106:135",
                                    "trueBody": {
                                        "id": 24787,
                                        "nodeType": "Block",
                                        "src": "7626:56:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24782,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "7647:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24784,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7659:10:135",
                                                        "memberName": "NotPayable",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10270,
                                                        "src": "7647:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24785,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7647:24:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24786,
                                                "nodeType": "RevertStatement",
                                                "src": "7640:31:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12736
                        ],
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkMessageValue",
                        "nameLocation": "7522:18:135",
                        "overrides": {
                            "id": 24769,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "7557:8:135"
                        },
                        "parameters": {
                            "id": 24768,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7540:2:135"
                        },
                        "returnParameters": {
                            "id": 24770,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7566:0:135"
                        },
                        "scope": 24906,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24841,
                        "nodeType": "FunctionDefinition",
                        "src": "7849:460:135",
                        "nodes": [],
                        "body": {
                            "id": 24840,
                            "nodeType": "Block",
                            "src": "7950:359:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24800
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24800,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "8028:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24840,
                                            "src": "8020:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24799,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8020:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24801,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8020:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24807,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24804,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "8056:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24803,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "8048:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24802,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "8048:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24805,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8048:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24806,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "8071:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "8048:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24827,
                                        "nodeType": "Block",
                                        "src": "8137:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24825,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24817,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24800,
                                                        "src": "8151:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24822,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "8189:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24821,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "8181:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24820,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "8181:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24823,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8181:13:135",
                                                                "tryCall": false,
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
                                                            "expression": {
                                                                "id": 24818,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "8160:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24819,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8171:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9665,
                                                            "src": "8160:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24824,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8160:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8151:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24826,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8151:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24828,
                                    "nodeType": "IfStatement",
                                    "src": "8044:162:135",
                                    "trueBody": {
                                        "id": 24816,
                                        "nodeType": "Block",
                                        "src": "8076:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24814,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24808,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24800,
                                                        "src": "8090:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24811,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "8107:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24810,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "8099:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24809,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "8099:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24812,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8099:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24813,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8113:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "8099:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8090:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24815,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8090:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 24831,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 24829,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24389,
                                                "src": "8235:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 24830,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8250:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "8235:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "30",
                                            "id": 24837,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "8301:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "id": 24838,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "8235:67:135",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24834,
                                                    "name": "assets",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24800,
                                                    "src": "8278:6:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 24835,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24389,
                                                    "src": "8286:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 24832,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24793,
                                                    "src": "8254:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24833,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "8267:10:135",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18067,
                                                "src": "8254:23:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 24836,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8254:44:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24798,
                                    "id": 24839,
                                    "nodeType": "Return",
                                    "src": "8216:86:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12766
                        ],
                        "documentation": {
                            "id": 24791,
                            "nodeType": "StructuredDocumentation",
                            "src": "7694:150:135",
                            "text": "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToBase",
                        "nameLocation": "7858:14:135",
                        "overrides": {
                            "id": 24795,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "7923:8:135"
                        },
                        "parameters": {
                            "id": 24794,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24793,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "7890:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24841,
                                    "src": "7882:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24792,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7882:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7872:36:135"
                        },
                        "returnParameters": {
                            "id": 24798,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24797,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24841,
                                    "src": "7941:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24796,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7941:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7940:9:135"
                        },
                        "scope": 24906,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24887,
                        "nodeType": "FunctionDefinition",
                        "src": "8469:425:135",
                        "nodes": [],
                        "body": {
                            "id": 24886,
                            "nodeType": "Block",
                            "src": "8571:323:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24851
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24851,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "8649:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24886,
                                            "src": "8641:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24850,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8641:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24852,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8641:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24858,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24855,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17532,
                                                    "src": "8677:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9666",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24854,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "8669:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24853,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "8669:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24856,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8669:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24857,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18015,
                                            "src": "8692:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "8669:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24878,
                                        "nodeType": "Block",
                                        "src": "8758:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24876,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24868,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24851,
                                                        "src": "8772:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24873,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "8810:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24872,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "8802:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24871,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "8802:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24874,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8802:13:135",
                                                                "tryCall": false,
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
                                                            "expression": {
                                                                "id": 24869,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17532,
                                                                "src": "8781:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24870,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8792:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9665,
                                                            "src": "8781:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24875,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8781:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8772:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24877,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8772:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24879,
                                    "nodeType": "IfStatement",
                                    "src": "8665:162:135",
                                    "trueBody": {
                                        "id": 24867,
                                        "nodeType": "Block",
                                        "src": "8697:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24865,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24859,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24851,
                                                        "src": "8711:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24862,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "8728:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24861,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "8720:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24860,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "8720:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24863,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8720:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24864,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8734:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "8720:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8711:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24866,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8711:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 24882,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24389,
                                                "src": "8867:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24883,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24851,
                                                "src": "8880:6:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24880,
                                                "name": "_baseAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24844,
                                                "src": "8844:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24881,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8856:10:135",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18067,
                                            "src": "8844:22:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24884,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8844:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24849,
                                    "id": 24885,
                                    "nodeType": "Return",
                                    "src": "8837:50:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12774
                        ],
                        "documentation": {
                            "id": 24842,
                            "nodeType": "StructuredDocumentation",
                            "src": "8315:149:135",
                            "text": "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToShares",
                        "nameLocation": "8478:16:135",
                        "overrides": {
                            "id": 24846,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "8544:8:135"
                        },
                        "parameters": {
                            "id": 24845,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24844,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "8512:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24887,
                                    "src": "8504:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24843,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8504:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8494:35:135"
                        },
                        "returnParameters": {
                            "id": 24849,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24848,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24887,
                                    "src": "8562:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24847,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8562:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8561:9:135"
                        },
                        "scope": 24906,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24905,
                        "nodeType": "FunctionDefinition",
                        "src": "9052:190:135",
                        "nodes": [],
                        "body": {
                            "id": 24904,
                            "nodeType": "Block",
                            "src": "9165:77:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 24899,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "9228:4:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                    "typeString": "contract MockHyperdriveBase"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$24906",
                                                                    "typeString": "contract MockHyperdriveBase"
                                                                }
                                                            ],
                                                            "id": 24898,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "9220:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 24897,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "9220:7:135",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 24900,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9220:13:135",
                                                        "tryCall": false,
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
                                                    "expression": {
                                                        "id": 24895,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17532,
                                                        "src": "9199:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 24896,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9210:9:135",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 9665,
                                                    "src": "9199:20:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 24901,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9199:35:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 24894,
                                            "name": "_convertToShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24887
                                            ],
                                            "referencedDeclaration": 24887,
                                            "src": "9182:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24902,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9182:53:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24893,
                                    "id": 24903,
                                    "nodeType": "Return",
                                    "src": "9175:60:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12780
                        ],
                        "documentation": {
                            "id": 24888,
                            "nodeType": "StructuredDocumentation",
                            "src": "8900:147:135",
                            "text": "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_totalShares",
                        "nameLocation": "9061:12:135",
                        "overrides": {
                            "id": 24890,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "9114:8:135"
                        },
                        "parameters": {
                            "id": 24889,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9073:2:135"
                        },
                        "returnParameters": {
                            "id": 24893,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24892,
                                    "mutability": "mutable",
                                    "name": "shareAmount",
                                    "nameLocation": "9148:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24905,
                                    "src": "9140:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24891,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9140:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9139:21:135"
                        },
                        "scope": 24906,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 24383,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "1669:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13667,
                            "src": "1669:14:135"
                        },
                        "id": 24384,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1669:14:135"
                    }
                ],
                "canonicalName": "MockHyperdriveBase",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    24906,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459
                ],
                "name": "MockHyperdriveBase",
                "nameLocation": "1647:18:135",
                "scope": 25325,
                "usedErrors": [
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25235,
                "nodeType": "ContractDefinition",
                "src": "9246:4336:135",
                "nodes": [
                    {
                        "id": 24913,
                        "nodeType": "UsingForDirective",
                        "src": "9310:33:135",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 24911,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "9316:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "9316:14:135"
                        },
                        "typeName": {
                            "id": 24912,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9335:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 24963,
                        "nodeType": "FunctionDefinition",
                        "src": "9349:406:135",
                        "nodes": [],
                        "body": {
                            "id": 24962,
                            "nodeType": "Block",
                            "src": "9753:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 24919,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24916,
                                        "src": "9446:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24925,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24916,
                                                        "src": "9501:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24924,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9475:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25264_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                                                    },
                                                    "typeName": {
                                                        "id": 24923,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24922,
                                                            "name": "MockHyperdriveTarget0",
                                                            "nameLocations": [
                                                                "9479:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25264,
                                                            "src": "9479:21:135"
                                                        },
                                                        "referencedDeclaration": 25264,
                                                        "src": "9479:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25264",
                                                            "typeString": "contract MockHyperdriveTarget0"
                                                        }
                                                    }
                                                },
                                                "id": 24926,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9475:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25264",
                                                    "typeString": "contract MockHyperdriveTarget0"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25264",
                                                    "typeString": "contract MockHyperdriveTarget0"
                                                }
                                            ],
                                            "id": 24921,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9467:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24920,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9467:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24927,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9467:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24933,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24916,
                                                        "src": "9558:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24932,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9532:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25279_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)"
                                                    },
                                                    "typeName": {
                                                        "id": 24931,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24930,
                                                            "name": "MockHyperdriveTarget1",
                                                            "nameLocations": [
                                                                "9536:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25279,
                                                            "src": "9536:21:135"
                                                        },
                                                        "referencedDeclaration": 25279,
                                                        "src": "9536:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25279",
                                                            "typeString": "contract MockHyperdriveTarget1"
                                                        }
                                                    }
                                                },
                                                "id": 24934,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9532:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25279",
                                                    "typeString": "contract MockHyperdriveTarget1"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25279",
                                                    "typeString": "contract MockHyperdriveTarget1"
                                                }
                                            ],
                                            "id": 24929,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9524:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24928,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9524:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24935,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9524:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24941,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24916,
                                                        "src": "9615:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24940,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9589:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25294_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)"
                                                    },
                                                    "typeName": {
                                                        "id": 24939,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24938,
                                                            "name": "MockHyperdriveTarget2",
                                                            "nameLocations": [
                                                                "9593:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25294,
                                                            "src": "9593:21:135"
                                                        },
                                                        "referencedDeclaration": 25294,
                                                        "src": "9593:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25294",
                                                            "typeString": "contract MockHyperdriveTarget2"
                                                        }
                                                    }
                                                },
                                                "id": 24942,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9589:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25294",
                                                    "typeString": "contract MockHyperdriveTarget2"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25294",
                                                    "typeString": "contract MockHyperdriveTarget2"
                                                }
                                            ],
                                            "id": 24937,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9581:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24936,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9581:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24943,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9581:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24949,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24916,
                                                        "src": "9672:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24948,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9646:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25309_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)"
                                                    },
                                                    "typeName": {
                                                        "id": 24947,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24946,
                                                            "name": "MockHyperdriveTarget3",
                                                            "nameLocations": [
                                                                "9650:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25309,
                                                            "src": "9650:21:135"
                                                        },
                                                        "referencedDeclaration": 25309,
                                                        "src": "9650:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25309",
                                                            "typeString": "contract MockHyperdriveTarget3"
                                                        }
                                                    }
                                                },
                                                "id": 24950,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9646:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25309",
                                                    "typeString": "contract MockHyperdriveTarget3"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25309",
                                                    "typeString": "contract MockHyperdriveTarget3"
                                                }
                                            ],
                                            "id": 24945,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9638:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24944,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9638:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24951,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9638:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24957,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24916,
                                                        "src": "9729:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24956,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9703:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25324_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)"
                                                    },
                                                    "typeName": {
                                                        "id": 24955,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24954,
                                                            "name": "MockHyperdriveTarget4",
                                                            "nameLocations": [
                                                                "9707:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25324,
                                                            "src": "9707:21:135"
                                                        },
                                                        "referencedDeclaration": 25324,
                                                        "src": "9707:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25324",
                                                            "typeString": "contract MockHyperdriveTarget4"
                                                        }
                                                    }
                                                },
                                                "id": 24958,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9703:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25324",
                                                    "typeString": "contract MockHyperdriveTarget4"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25324",
                                                    "typeString": "contract MockHyperdriveTarget4"
                                                }
                                            ],
                                            "id": 24953,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9695:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24952,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9695:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24959,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9695:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 24960,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 24918,
                                    "name": "Hyperdrive",
                                    "nameLocations": [
                                        "9422:10:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 4375,
                                    "src": "9422:10:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "9422:326:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 24917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24916,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "9400:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24963,
                                    "src": "9370:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 24915,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 24914,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "9370:11:135",
                                                "9382:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "9370:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "9370:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9360:53:135"
                        },
                        "returnParameters": {
                            "id": 24961,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9753:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 24975,
                        "nodeType": "FunctionDefinition",
                        "src": "9780:138:135",
                        "nodes": [],
                        "body": {
                            "id": 24974,
                            "nodeType": "Block",
                            "src": "9873:45:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24972,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24970,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17570,
                                            "src": "9883:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 24971,
                                            "name": "_marketState_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24967,
                                            "src": "9898:13:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_memory_ptr",
                                                "typeString": "struct IHyperdrive.MarketState memory"
                                            }
                                        },
                                        "src": "9883:28:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                        }
                                    },
                                    "id": 24973,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9883:28:135"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 24964,
                            "nodeType": "StructuredDocumentation",
                            "src": "9761:14:135",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "f45cf2e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setMarketState",
                        "nameLocation": "9789:14:135",
                        "parameters": {
                            "id": 24968,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24967,
                                    "mutability": "mutable",
                                    "name": "_marketState_",
                                    "nameLocation": "9844:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24975,
                                    "src": "9813:44:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$10041_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 24966,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 24965,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "9813:11:135",
                                                "9825:11:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10041,
                                            "src": "9813:23:135"
                                        },
                                        "referencedDeclaration": 10041,
                                        "src": "9813:23:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9803:60:135"
                        },
                        "returnParameters": {
                            "id": 24969,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9873:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24985,
                        "nodeType": "FunctionDefinition",
                        "src": "9924:98:135",
                        "nodes": [],
                        "body": {
                            "id": 24984,
                            "nodeType": "Block",
                            "src": "9979:43:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24982,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24980,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24389,
                                            "src": "9989:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 24981,
                                            "name": "_totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24977,
                                            "src": "10003:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9989:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24983,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9989:26:135"
                                }
                            ]
                        },
                        "functionSelector": "a77384c1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setTotalShares",
                        "nameLocation": "9933:14:135",
                        "parameters": {
                            "id": 24978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24977,
                                    "mutability": "mutable",
                                    "name": "_totalShares",
                                    "nameLocation": "9956:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "9948:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24976,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9948:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9947:22:135"
                        },
                        "returnParameters": {
                            "id": 24979,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9979:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25053,
                        "nodeType": "FunctionDefinition",
                        "src": "10154:566:135",
                        "nodes": [],
                        "body": {
                            "id": 25052,
                            "nodeType": "Block",
                            "src": "10205:515:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        null,
                                        24993
                                    ],
                                    "declarations": [
                                        null,
                                        {
                                            "constant": false,
                                            "id": 24993,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "10225:8:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 25052,
                                            "src": "10218:15:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 24992,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10218:6:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 25006,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 25000,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "10321:4:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                    "typeString": "contract MockHyperdrive"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                    "typeString": "contract MockHyperdrive"
                                                                }
                                                            ],
                                                            "id": 24999,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "10313:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 24998,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "10313:7:135",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 25001,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10313:13:135",
                                                        "tryCall": false,
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
                                                    "expression": {
                                                        "id": 24996,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17532,
                                                        "src": "10292:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 24997,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10303:9:135",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 9665,
                                                    "src": "10292:20:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 25002,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10292:35:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25003,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24989,
                                                "src": "10341:3:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 25004,
                                                "name": "time",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24987,
                                                "src": "10358:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24994,
                                                "name": "HyperdriveUtils",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 158674,
                                                "src": "10237:15:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$158674_$",
                                                    "typeString": "type(library HyperdriveUtils)"
                                                }
                                            },
                                            "id": 24995,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10253:25:135",
                                            "memberName": "calculateCompoundInterest",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 156502,
                                            "src": "10237:41:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                                                "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                                            }
                                        },
                                        "id": 25005,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10237:135:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                                            "typeString": "tuple(uint256,int256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10215:157:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 25009,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 25007,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24993,
                                            "src": "10387:8:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 25008,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10398:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "10387:12:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 25030,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 25028,
                                                "name": "interest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24993,
                                                "src": "10555:8:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 25029,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10566:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "10555:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 25050,
                                        "nodeType": "IfStatement",
                                        "src": "10551:163:135",
                                        "trueBody": {
                                            "id": 25049,
                                            "nodeType": "Block",
                                            "src": "10569:145:135",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 25040,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "10648:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                            "typeString": "contract MockHyperdrive"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                            "typeString": "contract MockHyperdrive"
                                                                        }
                                                                    ],
                                                                    "id": 25039,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "10640:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 25038,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "10640:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 25041,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10640:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 25045,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "UnaryOperation",
                                                                        "operator": "-",
                                                                        "prefix": true,
                                                                        "src": "10679:9:135",
                                                                        "subExpression": {
                                                                            "id": 25044,
                                                                            "name": "interest",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24993,
                                                                            "src": "10680:8:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        },
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    ],
                                                                    "id": 25043,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "10671:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 25042,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "10671:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 25046,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10671:18:135",
                                                                "tryCall": false,
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
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "id": 25034,
                                                                                "name": "_baseToken",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 17532,
                                                                                "src": "10605:10:135",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                                    "typeString": "contract IERC20"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                                    "typeString": "contract IERC20"
                                                                                }
                                                                            ],
                                                                            "id": 25033,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "10597:7:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                                "typeString": "type(address)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 25032,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "10597:7:135",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 25035,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "10597:19:135",
                                                                        "tryCall": false,
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
                                                                    "id": 25031,
                                                                    "name": "ERC20Mintable",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23490,
                                                                    "src": "10583:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$23490_$",
                                                                        "typeString": "type(contract ERC20Mintable)"
                                                                    }
                                                                },
                                                                "id": 25036,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10583:34:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                                                    "typeString": "contract ERC20Mintable"
                                                                }
                                                            },
                                                            "id": 25037,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10618:4:135",
                                                            "memberName": "burn",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 23489,
                                                            "src": "10583:39:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256) external"
                                                            }
                                                        },
                                                        "id": 25047,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10583:120:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 25048,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "10583:120:135"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 25051,
                                    "nodeType": "IfStatement",
                                    "src": "10383:331:135",
                                    "trueBody": {
                                        "id": 25027,
                                        "nodeType": "Block",
                                        "src": "10401:144:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 25019,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "10480:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                        "typeString": "contract MockHyperdrive"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdrive_$25235",
                                                                        "typeString": "contract MockHyperdrive"
                                                                    }
                                                                ],
                                                                "id": 25018,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "10472:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 25017,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "10472:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 25020,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10472:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 25023,
                                                                    "name": "interest",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24993,
                                                                    "src": "10511:8:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                ],
                                                                "id": 25022,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "10503:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 25021,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "10503:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 25024,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10503:17:135",
                                                            "tryCall": false,
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
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 25013,
                                                                            "name": "_baseToken",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 17532,
                                                                            "src": "10437:10:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                                "typeString": "contract IERC20"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                                "typeString": "contract IERC20"
                                                                            }
                                                                        ],
                                                                        "id": 25012,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "10429:7:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 25011,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "10429:7:135",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 25014,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "10429:19:135",
                                                                    "tryCall": false,
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
                                                                "id": 25010,
                                                                "name": "ERC20Mintable",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23490,
                                                                "src": "10415:13:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$23490_$",
                                                                    "typeString": "type(contract ERC20Mintable)"
                                                                }
                                                            },
                                                            "id": 25015,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10415:34:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_ERC20Mintable_$23490",
                                                                "typeString": "contract ERC20Mintable"
                                                            }
                                                        },
                                                        "id": 25016,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10450:4:135",
                                                        "memberName": "mint",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 23460,
                                                        "src": "10415:39:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                            "typeString": "function (address,uint256) external"
                                                        }
                                                    },
                                                    "id": 25025,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10415:119:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 25026,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10415:119:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "functionSelector": "68096239",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "accrue",
                        "nameLocation": "10163:6:135",
                        "parameters": {
                            "id": 24990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24987,
                                    "mutability": "mutable",
                                    "name": "time",
                                    "nameLocation": "10178:4:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25053,
                                    "src": "10170:12:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24986,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10170:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24989,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "10191:3:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25053,
                                    "src": "10184:10:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24988,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10184:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10169:26:135"
                        },
                        "returnParameters": {
                            "id": 24991,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10205:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25081,
                        "nodeType": "FunctionDefinition",
                        "src": "10726:411:135",
                        "nodes": [],
                        "body": {
                            "id": 25080,
                            "nodeType": "Block",
                            "src": "10926:211:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25074,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 25066,
                                                    "name": "curveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25062,
                                                    "src": "10937:8:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25067,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25064,
                                                    "src": "10947:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 25068,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "10936:30:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 25070,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25055,
                                                    "src": "11008:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25071,
                                                    "name": "_spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25057,
                                                    "src": "11034:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25072,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25059,
                                                    "src": "11058:15:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 25069,
                                                "name": "_calculateFeesGivenShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13518,
                                                "src": "10969:25:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 25073,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10969:114:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "10936:147:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25075,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10936:147:135"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 25076,
                                                "name": "curveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25062,
                                                "src": "11101:8:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25077,
                                                "name": "governanceCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25064,
                                                "src": "11111:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 25078,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "11100:30:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 25065,
                                    "id": 25079,
                                    "nodeType": "Return",
                                    "src": "11093:37:135"
                                }
                            ]
                        },
                        "functionSelector": "71f88b7c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateFeesGivenShares",
                        "nameLocation": "10735:24:135",
                        "parameters": {
                            "id": 25060,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25055,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "10777:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25081,
                                    "src": "10769:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25054,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10769:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25057,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "10807:10:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25081,
                                    "src": "10799:18:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25056,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10799:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25059,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "10835:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25081,
                                    "src": "10827:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25058,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10827:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10759:97:135"
                        },
                        "returnParameters": {
                            "id": 25065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25062,
                                    "mutability": "mutable",
                                    "name": "curveFee",
                                    "nameLocation": "10888:8:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25081,
                                    "src": "10880:16:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25061,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10880:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25064,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "10906:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25081,
                                    "src": "10898:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25063,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10898:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10879:46:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25120,
                        "nodeType": "FunctionDefinition",
                        "src": "11143:822:135",
                        "nodes": [],
                        "body": {
                            "id": 25119,
                            "nodeType": "Block",
                            "src": "11524:441:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 25100,
                                                    "name": "totalCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25092,
                                                    "src": "11548:13:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25101,
                                                    "name": "totalFlatFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25094,
                                                    "src": "11575:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25102,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25096,
                                                    "src": "11601:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25103,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25098,
                                                    "src": "11633:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 25104,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "11534:127:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 25106,
                                                    "name": "_bondAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25083,
                                                    "src": "11702:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25107,
                                                    "name": "_normalizedTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25085,
                                                    "src": "11727:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25108,
                                                    "name": "_spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25087,
                                                    "src": "11765:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25109,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25089,
                                                    "src": "11789:15:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 25105,
                                                "name": "_calculateFeesGivenBonds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13588,
                                                "src": "11664:24:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                                                }
                                            },
                                            "id": 25110,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11664:150:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "src": "11534:280:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25112,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11534:280:135"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 25113,
                                                "name": "totalCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25092,
                                                "src": "11845:13:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25114,
                                                "name": "totalFlatFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25094,
                                                "src": "11872:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25115,
                                                "name": "governanceCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25096,
                                                "src": "11898:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25116,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25098,
                                                "src": "11930:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 25117,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "11831:127:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 25099,
                                    "id": 25118,
                                    "nodeType": "Return",
                                    "src": "11824:134:135"
                                }
                            ]
                        },
                        "functionSelector": "22d5506b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateFeesGivenBonds",
                        "nameLocation": "11152:23:135",
                        "parameters": {
                            "id": 25090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25083,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "11193:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11185:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25082,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11185:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25085,
                                    "mutability": "mutable",
                                    "name": "_normalizedTimeRemaining",
                                    "nameLocation": "11222:24:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11214:32:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25084,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11214:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25087,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "11264:10:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11256:18:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25086,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11256:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25089,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "11292:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11284:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25088,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11284:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11175:138:135"
                        },
                        "returnParameters": {
                            "id": 25099,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25092,
                                    "mutability": "mutable",
                                    "name": "totalCurveFee",
                                    "nameLocation": "11382:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11374:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25091,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11374:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25094,
                                    "mutability": "mutable",
                                    "name": "totalFlatFee",
                                    "nameLocation": "11417:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11409:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25093,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11409:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25096,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "11451:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11443:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25095,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11443:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25098,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "11491:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25120,
                                    "src": "11483:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25097,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11483:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11360:159:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25139,
                        "nodeType": "FunctionDefinition",
                        "src": "12014:351:135",
                        "nodes": [],
                        "body": {
                            "id": 25138,
                            "nodeType": "Block",
                            "src": "12291:74:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25134,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25122,
                                                "src": "12327:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25135,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25124,
                                                "src": "12341:16:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 25133,
                                            "name": "_calculateOpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15915,
                                            "src": "12308:18:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256)"
                                            }
                                        },
                                        "id": 25136,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12308:50:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 25132,
                                    "id": 25137,
                                    "nodeType": "Return",
                                    "src": "12301:57:135"
                                }
                            ]
                        },
                        "functionSelector": "9bd33498",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateOpenLong",
                        "nameLocation": "12023:17:135",
                        "parameters": {
                            "id": 25125,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25122,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "12058:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25139,
                                    "src": "12050:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25121,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12050:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25124,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "12088:16:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25139,
                                    "src": "12080:24:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25123,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12080:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12040:70:135"
                        },
                        "returnParameters": {
                            "id": 25132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25127,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "12179:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25139,
                                    "src": "12171:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25126,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12171:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25129,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "12219:17:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25139,
                                    "src": "12211:25:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25128,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12211:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25131,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "12258:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25139,
                                    "src": "12250:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25130,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12250:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12157:129:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25151,
                        "nodeType": "FunctionDefinition",
                        "src": "12371:177:135",
                        "nodes": [],
                        "body": {
                            "id": 25150,
                            "nodeType": "Block",
                            "src": "12486:62:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25147,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25141,
                                                "src": "12527:13:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 25146,
                                            "name": "_calculateTimeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12838,
                                            "src": "12503:23:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25148,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12503:38:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25145,
                                    "id": 25149,
                                    "nodeType": "Return",
                                    "src": "12496:45:135"
                                }
                            ]
                        },
                        "functionSelector": "68c2ecb8",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemaining",
                        "nameLocation": "12380:22:135",
                        "parameters": {
                            "id": 25142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25141,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "12420:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25151,
                                    "src": "12412:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25140,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12412:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12402:37:135"
                        },
                        "returnParameters": {
                            "id": 25145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25144,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "12471:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25151,
                                    "src": "12463:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25143,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12463:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12462:23:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25163,
                        "nodeType": "FunctionDefinition",
                        "src": "12554:189:135",
                        "nodes": [],
                        "body": {
                            "id": 25162,
                            "nodeType": "Block",
                            "src": "12675:68:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25159,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25153,
                                                "src": "12722:13:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 25158,
                                            "name": "_calculateTimeRemainingScaled",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12874,
                                            "src": "12692:29:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25160,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12692:44:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25157,
                                    "id": 25161,
                                    "nodeType": "Return",
                                    "src": "12685:51:135"
                                }
                            ]
                        },
                        "functionSelector": "ca6d38f7",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemainingScaled",
                        "nameLocation": "12563:28:135",
                        "parameters": {
                            "id": 25154,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25153,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "12609:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25163,
                                    "src": "12601:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25152,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12601:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12591:37:135"
                        },
                        "returnParameters": {
                            "id": 25157,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25156,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "12660:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25163,
                                    "src": "12652:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25155,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12652:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12651:23:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25172,
                        "nodeType": "FunctionDefinition",
                        "src": "12749:118:135",
                        "nodes": [],
                        "body": {
                            "id": 25171,
                            "nodeType": "Block",
                            "src": "12824:43:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 25168,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12892,
                                            "src": "12841:17:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 25169,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12841:19:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25167,
                                    "id": 25170,
                                    "nodeType": "Return",
                                    "src": "12834:26:135"
                                }
                            ]
                        },
                        "functionSelector": "907c0f92",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "latestCheckpoint",
                        "nameLocation": "12758:16:135",
                        "parameters": {
                            "id": 25164,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12774:2:135"
                        },
                        "returnParameters": {
                            "id": 25167,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25166,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "12808:14:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25172,
                                    "src": "12800:22:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12800:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12799:24:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25182,
                        "nodeType": "FunctionDefinition",
                        "src": "12873:116:135",
                        "nodes": [],
                        "body": {
                            "id": 25181,
                            "nodeType": "Block",
                            "src": "12935:54:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25178,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25174,
                                                "src": "12962:19:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "id": 25177,
                                            "name": "_updateLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15038,
                                            "src": "12945:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                "typeString": "function (int256)"
                                            }
                                        },
                                        "id": 25179,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12945:37:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25180,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12945:37:135"
                                }
                            ]
                        },
                        "functionSelector": "8120a3e2",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateLiquidity",
                        "nameLocation": "12882:15:135",
                        "parameters": {
                            "id": 25175,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25174,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "12905:19:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25182,
                                    "src": "12898:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 25173,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12898:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12897:28:135"
                        },
                        "returnParameters": {
                            "id": 25176,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12935:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25194,
                        "nodeType": "FunctionDefinition",
                        "src": "12995:177:135",
                        "nodes": [],
                        "body": {
                            "id": 25193,
                            "nodeType": "Block",
                            "src": "13103:69:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25190,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25184,
                                                "src": "13148:16:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 25189,
                                            "name": "_calculateIdleShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13400,
                                            "src": "13120:27:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13120:45:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25188,
                                    "id": 25192,
                                    "nodeType": "Return",
                                    "src": "13113:52:135"
                                }
                            ]
                        },
                        "functionSelector": "b1b4b170",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateIdleShareReserves",
                        "nameLocation": "13004:26:135",
                        "parameters": {
                            "id": 25185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25184,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "13048:16:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25194,
                                    "src": "13040:24:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13040:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13030:40:135"
                        },
                        "returnParameters": {
                            "id": 25188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25187,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25194,
                                    "src": "13094:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25186,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13094:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13093:9:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25202,
                        "nodeType": "FunctionDefinition",
                        "src": "13178:93:135",
                        "nodes": [],
                        "body": {
                            "id": 25201,
                            "nodeType": "Block",
                            "src": "13236:35:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25199,
                                        "name": "totalShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24389,
                                        "src": "13253:11:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25198,
                                    "id": 25200,
                                    "nodeType": "Return",
                                    "src": "13246:18:135"
                                }
                            ]
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "13187:14:135",
                        "parameters": {
                            "id": 25195,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13201:2:135"
                        },
                        "returnParameters": {
                            "id": 25198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25197,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25202,
                                    "src": "13227:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25196,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13227:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13226:9:135"
                        },
                        "scope": 25235,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25222,
                        "nodeType": "FunctionDefinition",
                        "src": "13277:184:135",
                        "nodes": [],
                        "body": {
                            "id": 25221,
                            "nodeType": "Block",
                            "src": "13352:109:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25209,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "13362:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25211,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13375:13:135",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10007,
                                            "src": "13362:26:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25212,
                                            "name": "shareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25204,
                                            "src": "13391:13:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13362:42:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25214,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13362:42:135"
                                },
                                {
                                    "expression": {
                                        "id": 25219,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25215,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "13414:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25217,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13427:12:135",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10010,
                                            "src": "13414:25:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25218,
                                            "name": "bondReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25206,
                                            "src": "13442:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13414:40:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25220,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13414:40:135"
                                }
                            ]
                        },
                        "functionSelector": "702db0eb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setReserves",
                        "nameLocation": "13286:11:135",
                        "parameters": {
                            "id": 25207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25204,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "13306:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25222,
                                    "src": "13298:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25203,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13298:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25206,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "13329:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25222,
                                    "src": "13321:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25205,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13321:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13297:45:135"
                        },
                        "returnParameters": {
                            "id": 25208,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13352:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25234,
                        "nodeType": "FunctionDefinition",
                        "src": "13467:113:135",
                        "nodes": [],
                        "body": {
                            "id": 25233,
                            "nodeType": "Block",
                            "src": "13523:57:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25231,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25227,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "13533:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25229,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13546:12:135",
                                            "memberName": "longExposure",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10013,
                                            "src": "13533:25:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25230,
                                            "name": "longExposure",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25224,
                                            "src": "13561:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13533:40:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25232,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13533:40:135"
                                }
                            ]
                        },
                        "functionSelector": "b4f8da39",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLongExposure",
                        "nameLocation": "13476:15:135",
                        "parameters": {
                            "id": 25225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25224,
                                    "mutability": "mutable",
                                    "name": "longExposure",
                                    "nameLocation": "13500:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25234,
                                    "src": "13492:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25223,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13492:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13491:22:135"
                        },
                        "returnParameters": {
                            "id": 25226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13523:0:135"
                        },
                        "scope": 25235,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 24907,
                            "name": "Hyperdrive",
                            "nameLocations": [
                                "9273:10:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 4375,
                            "src": "9273:10:135"
                        },
                        "id": 24908,
                        "nodeType": "InheritanceSpecifier",
                        "src": "9273:10:135"
                    },
                    {
                        "baseName": {
                            "id": 24909,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "9285:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "9285:18:135"
                        },
                        "id": 24910,
                        "nodeType": "InheritanceSpecifier",
                        "src": "9285:18:135"
                    }
                ],
                "canonicalName": "MockHyperdrive",
                "contractDependencies": [
                    25264,
                    25279,
                    25294,
                    25309,
                    25324
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25235,
                    24906,
                    4375,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459,
                    10542,
                    11425
                ],
                "name": "MockHyperdrive",
                "nameLocation": "9255:14:135",
                "scope": 25325,
                "usedErrors": [
                    10219,
                    10228,
                    10258,
                    10302,
                    10308,
                    10311,
                    10314,
                    10320,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25264,
                "nodeType": "ContractDefinition",
                "src": "13584:327:135",
                "nodes": [
                    {
                        "id": 25249,
                        "nodeType": "FunctionDefinition",
                        "src": "13662:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25248,
                            "nodeType": "Block",
                            "src": "13754:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25245,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25242,
                                        "src": "13745:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25246,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25244,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "13727:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5190,
                                    "src": "13727:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "13727:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25242,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "13713:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25249,
                                    "src": "13683:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25241,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25240,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "13683:11:135",
                                                "13695:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "13683:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "13683:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13673:53:135"
                        },
                        "returnParameters": {
                            "id": 25247,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13754:0:135"
                        },
                        "scope": 25264,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 25263,
                        "nodeType": "FunctionDefinition",
                        "src": "13781:128:135",
                        "nodes": [],
                        "body": {
                            "id": 25262,
                            "nodeType": "Block",
                            "src": "13849:60:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 25258,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17592,
                                                        "src": "13878:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 25256,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "13867:3:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 25257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13871:6:135",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "13867:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 25259,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13867:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 25255,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5189,
                                            "src": "13859:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 25260,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13859:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25261,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13859:43:135"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 25250,
                            "nodeType": "StructuredDocumentation",
                            "src": "13762:14:135",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "8e67f87e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGovernanceFeesAccrued",
                        "nameLocation": "13790:24:135",
                        "parameters": {
                            "id": 25251,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13814:2:135"
                        },
                        "returnParameters": {
                            "id": 25254,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25253,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25263,
                                    "src": "13840:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25252,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13840:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13839:9:135"
                        },
                        "scope": 25264,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25236,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "13618:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5190,
                            "src": "13618:17:135"
                        },
                        "id": 25237,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13618:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25238,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "13637:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "13637:18:135"
                        },
                        "id": 25239,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13637:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25264,
                    24906,
                    5190,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459,
                    11207,
                    11547
                ],
                "name": "MockHyperdriveTarget0",
                "nameLocation": "13593:21:135",
                "scope": 25325,
                "usedErrors": [
                    10213,
                    10219,
                    10222,
                    10237,
                    10240,
                    10249,
                    10252,
                    10255,
                    10258,
                    10282,
                    10287,
                    10290,
                    10296,
                    10299,
                    10314,
                    71120,
                    71401,
                    71406,
                    71409,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25279,
                "nodeType": "ContractDefinition",
                "src": "13913:174:135",
                "nodes": [
                    {
                        "id": 25278,
                        "nodeType": "FunctionDefinition",
                        "src": "13991:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25277,
                            "nodeType": "Block",
                            "src": "14083:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25274,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25271,
                                        "src": "14074:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25275,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25273,
                                    "name": "HyperdriveTarget1",
                                    "nameLocations": [
                                        "14056:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5278,
                                    "src": "14056:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14056:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25272,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25271,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14042:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25278,
                                    "src": "14012:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25270,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25269,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14012:11:135",
                                                "14024:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "14012:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "14012:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14002:53:135"
                        },
                        "returnParameters": {
                            "id": 25276,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14083:0:135"
                        },
                        "scope": 25279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25265,
                            "name": "HyperdriveTarget1",
                            "nameLocations": [
                                "13947:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5278,
                            "src": "13947:17:135"
                        },
                        "id": 25266,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13947:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25267,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "13966:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "13966:18:135"
                        },
                        "id": 25268,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13966:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget1",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25279,
                    24906,
                    5278,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459
                ],
                "name": "MockHyperdriveTarget1",
                "nameLocation": "13922:21:135",
                "scope": 25325,
                "usedErrors": [
                    10219,
                    10225,
                    10228,
                    10249,
                    10255,
                    10258,
                    10264,
                    10273,
                    10282,
                    10293,
                    10296,
                    10305,
                    10308,
                    10311,
                    10314,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25294,
                "nodeType": "ContractDefinition",
                "src": "14089:174:135",
                "nodes": [
                    {
                        "id": 25293,
                        "nodeType": "FunctionDefinition",
                        "src": "14167:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25292,
                            "nodeType": "Block",
                            "src": "14259:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25289,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25286,
                                        "src": "14250:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25290,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25288,
                                    "name": "HyperdriveTarget2",
                                    "nameLocations": [
                                        "14232:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5366,
                                    "src": "14232:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14232:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25287,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25286,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14218:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25293,
                                    "src": "14188:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25285,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25284,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14188:11:135",
                                                "14200:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "14188:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "14188:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14178:53:135"
                        },
                        "returnParameters": {
                            "id": 25291,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14259:0:135"
                        },
                        "scope": 25294,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25280,
                            "name": "HyperdriveTarget2",
                            "nameLocations": [
                                "14123:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5366,
                            "src": "14123:17:135"
                        },
                        "id": 25281,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14123:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25282,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14142:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "14142:18:135"
                        },
                        "id": 25283,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14142:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget2",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25294,
                    24906,
                    5366,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459
                ],
                "name": "MockHyperdriveTarget2",
                "nameLocation": "14098:21:135",
                "scope": 25325,
                "usedErrors": [
                    10219,
                    10225,
                    10228,
                    10249,
                    10255,
                    10258,
                    10264,
                    10273,
                    10282,
                    10293,
                    10296,
                    10305,
                    10308,
                    10311,
                    10314,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25309,
                "nodeType": "ContractDefinition",
                "src": "14265:174:135",
                "nodes": [
                    {
                        "id": 25308,
                        "nodeType": "FunctionDefinition",
                        "src": "14343:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25307,
                            "nodeType": "Block",
                            "src": "14435:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25304,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25301,
                                        "src": "14426:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25305,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25303,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "14408:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5468,
                                    "src": "14408:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14408:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25302,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25301,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14394:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25308,
                                    "src": "14364:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25300,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25299,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14364:11:135",
                                                "14376:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "14364:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "14364:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14354:53:135"
                        },
                        "returnParameters": {
                            "id": 25306,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14435:0:135"
                        },
                        "scope": 25309,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25295,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "14299:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5468,
                            "src": "14299:17:135"
                        },
                        "id": 25296,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14299:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25297,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14318:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "14318:18:135"
                        },
                        "id": 25298,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14318:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget3",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25309,
                    24906,
                    5468,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459
                ],
                "name": "MockHyperdriveTarget3",
                "nameLocation": "14274:21:135",
                "scope": 25325,
                "usedErrors": [
                    10216,
                    10219,
                    10228,
                    10234,
                    10249,
                    10255,
                    10258,
                    10261,
                    10264,
                    10270,
                    10273,
                    10276,
                    10279,
                    10282,
                    10293,
                    10296,
                    10305,
                    10308,
                    10311,
                    10314,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            },
            {
                "id": 25324,
                "nodeType": "ContractDefinition",
                "src": "14441:174:135",
                "nodes": [
                    {
                        "id": 25323,
                        "nodeType": "FunctionDefinition",
                        "src": "14519:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25322,
                            "nodeType": "Block",
                            "src": "14611:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25319,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25316,
                                        "src": "14602:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25320,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25318,
                                    "name": "HyperdriveTarget4",
                                    "nameLocations": [
                                        "14584:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5562,
                                    "src": "14584:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14584:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25316,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14570:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25323,
                                    "src": "14540:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10154_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25315,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25314,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14540:11:135",
                                                "14552:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10154,
                                            "src": "14540:22:135"
                                        },
                                        "referencedDeclaration": 10154,
                                        "src": "14540:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10154_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14530:53:135"
                        },
                        "returnParameters": {
                            "id": 25321,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14611:0:135"
                        },
                        "scope": 25324,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25310,
                            "name": "HyperdriveTarget4",
                            "nameLocations": [
                                "14475:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5562,
                            "src": "14475:17:135"
                        },
                        "id": 25311,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14475:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25312,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14494:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24906,
                            "src": "14494:18:135"
                        },
                        "id": 25313,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14494:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget4",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25324,
                    24906,
                    5562,
                    14161,
                    17512,
                    16054,
                    15127,
                    16538,
                    12497,
                    13667,
                    17734,
                    71745,
                    10887,
                    11459
                ],
                "name": "MockHyperdriveTarget4",
                "nameLocation": "14450:21:135",
                "scope": 25325,
                "usedErrors": [
                    10219,
                    10228,
                    10231,
                    10249,
                    10255,
                    10258,
                    10261,
                    10264,
                    10267,
                    10270,
                    10273,
                    10279,
                    10282,
                    10293,
                    10296,
                    10305,
                    10308,
                    10311,
                    10314,
                    10320,
                    71690
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 135
};
