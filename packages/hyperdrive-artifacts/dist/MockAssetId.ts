{
  "abi": [
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "decodeAssetId",
      "outputs": [
        {
          "internalType": "enum AssetId.AssetIdPrefix",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum AssetId.AssetIdPrefix",
          "name": "_prefix",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "encodeAssetId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b5061018a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636322c7511461003b5780638a227c3914610074575b600080fd5b61005d6100493660046100df565b60f881901c916001600160f81b0390911690565b60405161006b9291906100f8565b60405180910390f35b610087610082366004610124565b610095565b60405190815260200161006b565b6000806100a284846100aa565b949350505050565b60006001600160f81b038211156100d45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000602082840312156100f157600080fd5b5035919050565b604081016004841061011a57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561013757600080fd5b82356004811061014657600080fd5b94602093909301359350505056fea264697066735822122089aa0d83939fbb6638125ebf98ee27a00491e3f7109255a2012bac8b573f504864736f6c63430008130033",
    "sourceMap": "128:503:132:-:0;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80636322c7511461003b5780638a227c3914610074575b600080fd5b61005d6100493660046100df565b60f881901c916001600160f81b0390911690565b60405161006b9291906100f8565b60405180910390f35b610087610082366004610124565b610095565b60405190815260200161006b565b6000806100a284846100aa565b949350505050565b60006001600160f81b038211156100d45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000602082840312156100f157600080fd5b5035919050565b604081016004841061011a57634e487b7160e01b600052602160045260246000fd5b9281526020015290565b6000806040838503121561013757600080fd5b82356004811061014657600080fd5b94602093909301359350505056fea264697066735822122089aa0d83939fbb6638125ebf98ee27a00491e3f7109255a2012bac8b573f504864736f6c63430008130033",
    "sourceMap": "128:503:132:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;380:249;;;;;;:::i;:::-;2200:4:31;2196:14;;;;-1:-1:-1;;;;;2253:120:31;;;;380:249:132;;;;;;;;;:::i;:::-;;;;;;;;155:219;;;;;;:::i;:::-;;:::i;:::-;;;1114:25:165;;;1102:2;1087:18;155:219:132;968:177:165;155:219:132;274:7;293:10;306:42;328:7;337:10;306:21;:42::i;:::-;293:55;155:219;-1:-1:-1;;;;155:219:132:o;1198:469:31:-;1309:10;-1:-1:-1;;;;;1401:10:31;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:31;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:31;1620:18;;;;1617:34;;1198:469::o;14:180:165:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:165;;14:180;-1:-1:-1;14:180:165:o;199:417::-;377:2;362:18;;410:1;399:13;;389:144;;455:10;450:3;446:20;443:1;436:31;490:4;487:1;480:15;518:4;515:1;508:15;389:144;542:25;;;598:2;583:18;576:34;199:417;:::o;621:342::-;707:6;715;768:2;756:9;747:7;743:23;739:32;736:52;;;784:1;781;774:12;736:52;823:9;810:23;862:1;855:5;852:12;842:40;;878:1;875;868:12;842:40;901:5;953:2;938:18;;;;925:32;;-1:-1:-1;;;621:342:165:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "decodeAssetId(uint256)": "6322c751",
    "encodeAssetId(uint8,uint256)": "8a227c39"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"decodeAssetId\",\"outputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"enum AssetId.AssetIdPrefix\",\"name\":\"_prefix\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"encodeAssetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/mocks/MockAssetId.sol\":\"MockAssetId\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"test/mocks/MockAssetId.sol\":{\"keccak256\":\"0xae89033b8c2b0a4209b7f8404db2c83338815d02c5fb2fc18177464bc12ac463\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://42b1abb2d33147dec1c634b60a1d09fd29c23056c207f2be143c964df87bc81d\",\"dweb:/ipfs/QmXRAYsrgYHbkcY5DxCF5RZ3njVthak9BEbQbE4sGENXhN\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "decodeAssetId",
          "outputs": [
            {
              "internalType": "enum AssetId.AssetIdPrefix",
              "name": "",
              "type": "uint8"
            },
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
              "internalType": "enum AssetId.AssetIdPrefix",
              "name": "_prefix",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "_timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "encodeAssetId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
        "test/mocks/MockAssetId.sol": "MockAssetId"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
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
      },
      "test/mocks/MockAssetId.sol": {
        "keccak256": "0xae89033b8c2b0a4209b7f8404db2c83338815d02c5fb2fc18177464bc12ac463",
        "urls": [
          "bzz-raw://42b1abb2d33147dec1c634b60a1d09fd29c23056c207f2be143c964df87bc81d",
          "dweb:/ipfs/QmXRAYsrgYHbkcY5DxCF5RZ3njVthak9BEbQbE4sGENXhN"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/mocks/MockAssetId.sol",
    "id": 91697,
    "exportedSymbols": {
      "AssetId": [
        7731
      ],
      "MockAssetId": [
        91696
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:593:132",
    "nodes": [
      {
        "id": 91645,
        "nodeType": "PragmaDirective",
        "src": "39:23:132",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 91647,
        "nodeType": "ImportDirective",
        "src": "64:62:132",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 91697,
        "sourceUnit": 7732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91646,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7731,
              "src": "73:7:132",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91696,
        "nodeType": "ContractDefinition",
        "src": "128:503:132",
        "nodes": [
          {
            "id": 91668,
            "nodeType": "FunctionDefinition",
            "src": "155:219:132",
            "nodes": [],
            "body": {
              "id": 91667,
              "nodeType": "Block",
              "src": "283:91:132",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    91658
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 91658,
                      "mutability": "mutable",
                      "name": "id",
                      "nameLocation": "301:2:132",
                      "nodeType": "VariableDeclaration",
                      "scope": 91667,
                      "src": "293:10:132",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 91657,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "293:7:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 91664,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 91661,
                        "name": "_prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91650,
                        "src": "328:7:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 91662,
                        "name": "_timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91652,
                        "src": "337:10:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 91659,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7731,
                        "src": "306:7:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 91660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "314:13:132",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7717,
                      "src": "306:21:132",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 91663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "306:42:132",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "293:55:132"
                },
                {
                  "expression": {
                    "id": 91665,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 91658,
                    "src": "365:2:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 91656,
                  "id": 91666,
                  "nodeType": "Return",
                  "src": "358:9:132"
                }
              ]
            },
            "functionSelector": "8a227c39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "encodeAssetId",
            "nameLocation": "164:13:132",
            "parameters": {
              "id": 91653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91650,
                  "mutability": "mutable",
                  "name": "_prefix",
                  "nameLocation": "209:7:132",
                  "nodeType": "VariableDeclaration",
                  "scope": 91668,
                  "src": "187:29:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 91649,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 91648,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "187:7:132",
                        "195:13:132"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7694,
                      "src": "187:21:132"
                    },
                    "referencedDeclaration": 7694,
                    "src": "187:21:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91652,
                  "mutability": "mutable",
                  "name": "_timestamp",
                  "nameLocation": "234:10:132",
                  "nodeType": "VariableDeclaration",
                  "scope": 91668,
                  "src": "226:18:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91651,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:73:132"
            },
            "returnParameters": {
              "id": 91656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91655,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91668,
                  "src": "274:7:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91654,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "273:9:132"
            },
            "scope": 91696,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91695,
            "nodeType": "FunctionDefinition",
            "src": "380:249:132",
            "nodes": [],
            "body": {
              "id": 91694,
              "nodeType": "Block",
              "src": "485:144:132",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    91682,
                    91684
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 91682,
                      "mutability": "mutable",
                      "name": "prefix",
                      "nameLocation": "518:6:132",
                      "nodeType": "VariableDeclaration",
                      "scope": 91694,
                      "src": "496:28:132",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                        "typeString": "enum AssetId.AssetIdPrefix"
                      },
                      "typeName": {
                        "id": 91681,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 91680,
                          "name": "AssetId.AssetIdPrefix",
                          "nameLocations": [
                            "496:7:132",
                            "504:13:132"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7694,
                          "src": "496:21:132"
                        },
                        "referencedDeclaration": 7694,
                        "src": "496:21:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 91684,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "nameLocation": "534:9:132",
                      "nodeType": "VariableDeclaration",
                      "scope": 91694,
                      "src": "526:17:132",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 91683,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:7:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 91689,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 91687,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91670,
                        "src": "582:3:132",
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
                        "id": 91685,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7731,
                        "src": "547:7:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 91686,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "568:13:132",
                      "memberName": "decodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7730,
                      "src": "547:34:132",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$",
                        "typeString": "function (uint256) pure returns (enum AssetId.AssetIdPrefix,uint256)"
                      }
                    },
                    "id": 91688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:39:132",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "495:91:132"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 91690,
                        "name": "prefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91682,
                        "src": "604:6:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 91691,
                        "name": "timestamp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91684,
                        "src": "612:9:132",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 91692,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "603:19:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$",
                      "typeString": "tuple(enum AssetId.AssetIdPrefix,uint256)"
                    }
                  },
                  "functionReturnParameters": 91677,
                  "id": 91693,
                  "nodeType": "Return",
                  "src": "596:26:132"
                }
              ]
            },
            "functionSelector": "6322c751",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeAssetId",
            "nameLocation": "389:13:132",
            "parameters": {
              "id": 91671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91670,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "420:3:132",
                  "nodeType": "VariableDeclaration",
                  "scope": 91695,
                  "src": "412:11:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "412:7:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "402:27:132"
            },
            "returnParameters": {
              "id": 91677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91674,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91695,
                  "src": "453:21:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                    "typeString": "enum AssetId.AssetIdPrefix"
                  },
                  "typeName": {
                    "id": 91673,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 91672,
                      "name": "AssetId.AssetIdPrefix",
                      "nameLocations": [
                        "453:7:132",
                        "461:13:132"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7694,
                      "src": "453:21:132"
                    },
                    "referencedDeclaration": 7694,
                    "src": "453:21:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                      "typeString": "enum AssetId.AssetIdPrefix"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91676,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91695,
                  "src": "476:7:132",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:132",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "452:32:132"
            },
            "scope": 91696,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "MockAssetId",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          91696
        ],
        "name": "MockAssetId",
        "nameLocation": "137:11:132",
        "scope": 91697,
        "usedErrors": [
          7085
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 132
}