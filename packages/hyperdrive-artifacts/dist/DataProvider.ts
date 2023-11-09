export const DataProvider = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_dataProvider",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
      "type": "error"
    },
    {
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "dataProvider",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60a060405234801561001057600080fd5b5060405161035f38038061035f83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516102ce610091600039600081816035015261013301526102ce6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b334ed861461012e575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161006d929190610171565b600060405180830381855af49150503d80600081146100a8576040519150601f19603f3d011682016040523d82523d6000602084013e6100ad565b606091505b509150915081156100d157604051638bb0a34b60e01b815260040160405180910390fd5b60006100dc82610181565b90506001600160e01b03198116636e64089360e11b146100fe57815160208301fd5b81516003198101600484019081529261011f918101602001906024016101ce565b80519650602001945050505050f35b6101557f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156101b05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156101e157600080fd5b825167ffffffffffffffff808211156101f957600080fd5b818501915085601f83011261020d57600080fd5b81518181111561021f5761021f6101b8565b604051601f8201601f19908116603f01168101908382118183101715610247576102476101b8565b81604052828152888684870101111561025f57600080fd5b600093505b828410156102815784840186015181850187015292850192610264565b60008684830101528096505050505050509291505056fea2646970667358221220ec4a58d26d6f74814a734d99ab474da23021e045d966c3fedf25ebb81fb0ed5864736f6c63430008130033",
    "sourceMap": "599:1670:0:-:0;;;798:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;843:28:0;;;599:1670;;14:290:167;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:167;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:167:o;:::-;599:1670:0;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b334ed861461012e575b60003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161006d929190610171565b600060405180830381855af49150503d80600081146100a8576040519150601f19603f3d011682016040523d82523d6000602084013e6100ad565b606091505b509150915081156100d157604051638bb0a34b60e01b815260040160405180910390fd5b60006100dc82610181565b90506001600160e01b03198116636e64089360e11b146100fe57815160208301fd5b81516003198101600484019081529261011f918101602001906024016101ce565b80519650602001945050505050f35b6101557f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156101b05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156101e157600080fd5b825167ffffffffffffffff808211156101f957600080fd5b818501915085601f83011261020d57600080fd5b81518181111561021f5761021f6101b8565b604051601f8201601f19908116603f01168101908382118183101715610247576102476101b8565b81604052828152888684870101111561025f57600080fd5b600093505b828410156102815784840186015181850187015292850192610264565b60008684830101528096505050505050509291505056fea2646970667358221220ec4a58d26d6f74814a734d99ab474da23021e045d966c3fedf25ebb81fb0ed5864736f6c63430008130033",
    "sourceMap": "599:1670:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1214:12;1481;1495:23;1522:12;-1:-1:-1;;;;;1522:25:0;1561:5;;1522:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1480:96;;;;1590:7;1586:76;;;1620:31;;-1:-1:-1;;;1620:31:0;;;;;;;;;;;1586:76;1671:15;1689:18;1696:10;1689:18;:::i;:::-;1671:36;-1:-1:-1;;;;;;;1721:43:0;;-1:-1:-1;;;1721:43:0;1717:160;;1841:10;1835:17;1830:2;1818:10;1814:19;1807:46;1717:160;2099:17;;-1:-1:-1;;2095:25:0;;2118:1;2073:20;;2066:55;;;2073:20;2201:31;;;;;;;;;;:::i;:::-;599:1670;;;-1:-1:-1;599:1670:0;;;-1:-1:-1;;;;;599:1670:0;644:37;;;;;;;;-1:-1:-1;;;;;1998:32:167;;;1980:51;;1968:2;1953:18;644:37:0;;;;;;;14:271:167;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:167:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:167;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:1041;867:6;898:2;941;929:9;920:7;916:23;912:32;909:52;;;957:1;954;947:12;909:52;990:9;984:16;1019:18;1060:2;1052:6;1049:14;1046:34;;;1076:1;1073;1066:12;1046:34;1114:6;1103:9;1099:22;1089:32;;1159:7;1152:4;1148:2;1144:13;1140:27;1130:55;;1181:1;1178;1171:12;1130:55;1210:2;1204:9;1232:2;1228;1225:10;1222:36;;;1238:18;;:::i;:::-;1313:2;1307:9;1281:2;1367:13;;-1:-1:-1;;1363:22:167;;;1387:2;1359:31;1355:40;1343:53;;;1411:18;;;1431:22;;;1408:46;1405:72;;;1457:18;;:::i;:::-;1497:10;1493:2;1486:22;1532:2;1524:6;1517:18;1572:7;1567:2;1562;1558;1554:11;1550:20;1547:33;1544:53;;;1593:1;1590;1583:12;1544:53;1615:1;1606:10;;1625:129;1639:2;1636:1;1633:9;1625:129;;;1727:10;;;1723:19;;1717:26;1696:14;;;1692:23;;1685:59;1650:10;;;;1625:129;;;1796:1;1791:2;1786;1778:6;1774:15;1770:24;1763:35;1817:6;1807:16;;;;;;;;788:1041;;;;:::o",
    "linkReferences": {},
    "immutableReferences": {
      "10": [
        {
          "start": 53,
          "length": 32
        },
        {
          "start": 307,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "dataProvider()": "b334ed86"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_dataProvider\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_dataProvider\":\"The address of the data provider.\"}}},\"title\":\"DataProvider\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Initializes the data provider.\"}},\"notice\":\"Implements a fallback function that serves as a generalized getter.         This helps contracts stay under the code size limit.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/DataProvider.sol\":\"DataProvider\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_dataProvider",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "dataProvider",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "_dataProvider": "The address of the data provider."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Initializes the data provider."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/DataProvider.sol": "DataProvider"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6",
        "urls": [
          "bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b",
          "dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/DataProvider.sol",
    "id": 77,
    "exportedSymbols": {
      "DataProvider": [
        76
      ],
      "IDataProvider": [
        6652
      ],
      "IHyperdrive": [
        7431
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2231:0",
    "nodes": [
      {
        "id": 1,
        "nodeType": "PragmaDirective",
        "src": "39:23:0",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 3,
        "nodeType": "ImportDirective",
        "src": "64:63:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IDataProvider.sol",
        "file": "./interfaces/IDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77,
        "sourceUnit": 6653,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2,
              "name": "IDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6652,
              "src": "73:13:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5,
        "nodeType": "ImportDirective",
        "src": "128:59:0",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 77,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "137:11:0",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 76,
        "nodeType": "ContractDefinition",
        "src": "599:1670:0",
        "nodes": [
          {
            "id": 10,
            "nodeType": "VariableDeclaration",
            "src": "644:37:0",
            "nodes": [],
            "baseFunctions": [
              6651
            ],
            "constant": false,
            "functionSelector": "b334ed86",
            "mutability": "immutable",
            "name": "dataProvider",
            "nameLocation": "669:12:0",
            "scope": 76,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "644:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 21,
            "nodeType": "FunctionDefinition",
            "src": "798:80:0",
            "nodes": [],
            "body": {
              "id": 20,
              "nodeType": "Block",
              "src": "833:45:0",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 16,
                      "name": "dataProvider",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "843:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17,
                      "name": "_dataProvider",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "858:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "843:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 19,
                  "nodeType": "ExpressionStatement",
                  "src": "843:28:0"
                }
              ]
            },
            "documentation": {
              "id": 11,
              "nodeType": "StructuredDocumentation",
              "src": "688:105:0",
              "text": "@notice Initializes the data provider.\n @param _dataProvider The address of the data provider."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "818:13:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "810:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "809:23:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "833:0:0"
            },
            "scope": 76,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 75,
            "nodeType": "FunctionDefinition",
            "src": "1165:1102:0",
            "nodes": [],
            "body": {
              "id": 74,
              "nodeType": "Block",
              "src": "1228:1039:0",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    30,
                    32
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1486:7:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "1481:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 29,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1481:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 32,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "1508:10:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "1495:23:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1495:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 37,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 35,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "1561:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "expression": {
                        "id": 33,
                        "name": "dataProvider",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1522:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 34,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1535:12:0",
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "1522:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 36,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1522:54:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1480:96:0"
                },
                {
                  "condition": {
                    "id": 38,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 30,
                    "src": "1590:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 45,
                  "nodeType": "IfStatement",
                  "src": "1586:76:0",
                  "trueBody": {
                    "id": 44,
                    "nodeType": "Block",
                    "src": "1599:63:0",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 39,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "1620:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 41,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1632:17:0",
                            "memberName": "UnexpectedSuccess",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7370,
                            "src": "1620:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1620:31:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 43,
                        "nodeType": "RevertStatement",
                        "src": "1613:38:0"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    47
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47,
                      "mutability": "mutable",
                      "name": "selector",
                      "nameLocation": "1678:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "1671:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 46,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "1671:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 52,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 50,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "1696:10:0",
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
                      "id": 49,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1689:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 48,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "1689:6:0",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1689:18:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1671:36:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 57,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 53,
                      "name": "selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "1721:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 54,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "1733:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 55,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1745:10:0",
                        "memberName": "ReturnData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7364,
                        "src": "1733:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (bytes memory) pure"
                        }
                      },
                      "id": 56,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1756:8:0",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "1733:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "1721:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 60,
                  "nodeType": "IfStatement",
                  "src": "1717:160:0",
                  "trueBody": {
                    "id": 59,
                    "nodeType": "Block",
                    "src": "1766:111:0",
                    "statements": [
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "1789:78:0",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "returndata",
                                        "nodeType": "YulIdentifier",
                                        "src": "1818:10:0"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1830:2:0",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1814:3:0"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1814:19:0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "returndata",
                                        "nodeType": "YulIdentifier",
                                        "src": "1841:10:0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "1835:5:0"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1835:17:0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1807:6:0"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1807:46:0"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1807:46:0"
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 32,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "1818:10:0",
                            "valueSize": 1
                          },
                          {
                            "declaration": 32,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "1841:10:0",
                            "valueSize": 1
                          }
                        ],
                        "id": 58,
                        "nodeType": "InlineAssembly",
                        "src": "1780:87:0"
                      }
                    ]
                  }
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2052:126:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "returndata",
                                  "nodeType": "YulIdentifier",
                                  "src": "2077:10:0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2089:3:0",
                                  "type": "",
                                  "value": "0x4"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2073:3:0"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2073:20:0"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "returndata",
                                      "nodeType": "YulIdentifier",
                                      "src": "2105:10:0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "2099:5:0"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2099:17:0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2118:1:0",
                                  "type": "",
                                  "value": "4"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2095:3:0"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2095:25:0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2066:6:0"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2066:55:0"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2066:55:0"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2134:34:0",
                        "value": {
                          "arguments": [
                            {
                              "name": "returndata",
                              "nodeType": "YulIdentifier",
                              "src": "2152:10:0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2164:3:0",
                              "type": "",
                              "value": "0x4"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2148:3:0"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2148:20:0"
                        },
                        "variableNames": [
                          {
                            "name": "returndata",
                            "nodeType": "YulIdentifier",
                            "src": "2134:10:0"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 32,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2077:10:0",
                      "valueSize": 1
                    },
                    {
                      "declaration": 32,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2105:10:0",
                      "valueSize": 1
                    },
                    {
                      "declaration": 32,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2134:10:0",
                      "valueSize": 1
                    },
                    {
                      "declaration": 32,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2152:10:0",
                      "valueSize": 1
                    }
                  ],
                  "id": 61,
                  "nodeType": "InlineAssembly",
                  "src": "2043:135:0"
                },
                {
                  "expression": {
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62,
                      "name": "returndata",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32,
                      "src": "2188:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 65,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "2212:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "components": [
                            {
                              "id": 67,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2225:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 66,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "2225:5:0",
                                "typeDescriptions": {}
                              }
                            }
                          ],
                          "id": 68,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2224:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          }
                        ],
                        "expression": {
                          "id": 63,
                          "name": "abi",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -1,
                          "src": "2201:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_abi",
                            "typeString": "abi"
                          }
                        },
                        "id": 64,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2205:6:0",
                        "memberName": "decode",
                        "nodeType": "MemberAccess",
                        "src": "2201:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2201:31:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes memory"
                      }
                    },
                    "src": "2188:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "2188:44:0"
                },
                {
                  "expression": {
                    "id": 72,
                    "name": "returndata",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 32,
                    "src": "2250:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 28,
                  "id": 73,
                  "nodeType": "Return",
                  "src": "2243:17:0"
                }
              ]
            },
            "documentation": {
              "id": 22,
              "nodeType": "StructuredDocumentation",
              "src": "967:193:0",
              "text": "@notice Fallback function that delegates calls to the data provider.\n @param _data The data to be passed to the data provider.\n @return The return data from the data provider."
            },
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "1189:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 75,
                  "src": "1174:20:0",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1174:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1173:22:0"
            },
            "returnParameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 75,
                  "src": "1214:12:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1214:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1213:14:0"
            },
            "scope": 76,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7,
              "name": "IDataProvider",
              "nameLocations": [
                "624:13:0"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6652,
              "src": "624:13:0"
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "624:13:0"
          }
        ],
        "canonicalName": "DataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6,
          "nodeType": "StructuredDocumentation",
          "src": "189:410:0",
          "text": "@author DELV\n @title DataProvider\n @notice Implements a fallback function that serves as a generalized getter.\n         This helps contracts stay under the code size limit.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          76,
          6652
        ],
        "name": "DataProvider",
        "nameLocation": "608:12:0",
        "scope": 77,
        "usedErrors": [
          7370
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 0
} as const;
