export const HyperdriveUtils = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220891f352fa6dcf257c707a3b13b8fb7f7f512016d4a64de020ec7dbfc7172bd0964736f6c63430008130033",
    "sourceMap": "436:21864:163:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;436:21864:163;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220891f352fa6dcf257c707a3b13b8fb7f7f512016d4a64de020ec7dbfc7172bd0964736f6c63430008130033",
    "sourceMap": "436:21864:163:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/utils/HyperdriveUtils.sol\":\"HyperdriveUtils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82\",\"dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "test/utils/HyperdriveUtils.sol": "HyperdriveUtils"
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
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
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
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c",
        "urls": [
          "bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82",
          "dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/utils/HyperdriveUtils.sol",
    "id": 122443,
    "exportedSymbols": {
      "AssetId": [
        7731
      ],
      "FixedPointMath": [
        8486
      ],
      "HyperdriveMath": [
        10772
      ],
      "HyperdriveUtils": [
        122442
      ],
      "IHyperdrive": [
        7103
      ],
      "ONE": [
        7738
      ],
      "YieldSpaceMath": [
        11319
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:22262:163",
    "nodes": [
      {
        "id": 120943,
        "nodeType": "PragmaDirective",
        "src": "39:23:163",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 120945,
        "nodeType": "ImportDirective",
        "src": "64:71:163",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 122443,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120944,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "73:11:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120947,
        "nodeType": "ImportDirective",
        "src": "136:62:163",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "contracts/src/libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 122443,
        "sourceUnit": 7732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120946,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7731,
              "src": "145:7:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120950,
        "nodeType": "ImportDirective",
        "src": "199:81:163",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 122443,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120948,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "208:14:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 120949,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7738,
              "src": "224:3:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120952,
        "nodeType": "ImportDirective",
        "src": "281:76:163",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "contracts/src/libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 122443,
        "sourceUnit": 10773,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120951,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10772,
              "src": "290:14:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 120954,
        "nodeType": "ImportDirective",
        "src": "358:76:163",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "contracts/src/libraries/YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 122443,
        "sourceUnit": 11320,
        "symbolAliases": [
          {
            "foreign": {
              "id": 120953,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11319,
              "src": "367:14:163",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 122442,
        "nodeType": "ContractDefinition",
        "src": "436:21864:163",
        "nodes": [
          {
            "id": 120956,
            "nodeType": "UsingForDirective",
            "src": "466:28:163",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 120955,
              "name": "HyperdriveUtils",
              "nameLocations": [
                "472:15:163"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 122442,
              "src": "472:15:163"
            }
          },
          {
            "id": 120959,
            "nodeType": "UsingForDirective",
            "src": "499:33:163",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 120957,
              "name": "FixedPointMath",
              "nameLocations": [
                "505:14:163"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "505:14:163"
            },
            "typeName": {
              "id": 120958,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "524:7:163",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 120980,
            "nodeType": "FunctionDefinition",
            "src": "538:227:163",
            "nodes": [],
            "body": {
              "id": 120979,
              "nodeType": "Block",
              "src": "634:131:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 120977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 120967,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "663:5:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 120968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "669:9:163",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "663:15:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 120975,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 120969,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "694:5:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 120970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "700:9:163",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "694:15:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "expression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "id": 120971,
                                  "name": "hyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 120962,
                                  "src": "712:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                    "typeString": "contract IHyperdrive"
                                  }
                                },
                                "id": 120972,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "723:13:163",
                                "memberName": "getPoolConfig",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7160,
                                "src": "712:24:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                                  "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                                }
                              },
                              "id": 120973,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "712:26:163",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 120974,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "739:18:163",
                            "memberName": "checkpointDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6904,
                            "src": "712:45:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "694:63:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 120976,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "693:65:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "663:95:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 120966,
                  "id": 120978,
                  "nodeType": "Return",
                  "src": "644:114:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "547:16:163",
            "parameters": {
              "id": 120963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120962,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "585:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 120980,
                  "src": "573:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 120961,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 120960,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "573:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "573:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "573:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "563:38:163"
            },
            "returnParameters": {
              "id": 120966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120965,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 120980,
                  "src": "625:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120964,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "624:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121019,
            "nodeType": "FunctionDefinition",
            "src": "771:449:163",
            "nodes": [],
            "body": {
              "id": 121018,
              "nodeType": "Block",
              "src": "919:301:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 121003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 120990,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120988,
                      "src": "929:13:163",
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
                        "id": 120995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 120991,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120985,
                          "src": "945:13:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 120993,
                              "name": "_hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120983,
                              "src": "978:11:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            ],
                            "id": 120992,
                            "name": "latestCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120980,
                            "src": "961:16:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                              "typeString": "function (contract IHyperdrive) view returns (uint256)"
                            }
                          },
                          "id": 120994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "961:29:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "945:45:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 121001,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1065:1:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 121002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "945:121:163",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 120996,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120985,
                          "src": "1005:13:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 120998,
                              "name": "_hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120983,
                              "src": "1038:11:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            ],
                            "id": 120997,
                            "name": "latestCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120980,
                            "src": "1021:16:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                              "typeString": "function (contract IHyperdrive) view returns (uint256)"
                            }
                          },
                          "id": 120999,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1021:29:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1005:45:163",
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
                    "src": "929:137:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 121004,
                  "nodeType": "ExpressionStatement",
                  "src": "929:137:163"
                },
                {
                  "expression": {
                    "id": 121014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 121005,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120988,
                      "src": "1076:13:163",
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
                          "expression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 121009,
                                "name": "_hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 120983,
                                "src": "1129:11:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                  "typeString": "contract IHyperdrive"
                                }
                              },
                              "id": 121010,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1141:13:163",
                              "memberName": "getPoolConfig",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7160,
                              "src": "1129:25:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                                "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                              }
                            },
                            "id": 121011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1129:27:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 121012,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1157:16:163",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6901,
                          "src": "1129:44:163",
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
                          "components": [
                            {
                              "id": 121006,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 120988,
                              "src": "1093:13:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 121007,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1092:15:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 121008,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1108:7:163",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7802,
                        "src": "1092:23:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 121013,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1092:91:163",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1076:107:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 121015,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:107:163"
                },
                {
                  "expression": {
                    "id": 121016,
                    "name": "timeRemaining",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 120988,
                    "src": "1200:13:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 120989,
                  "id": 121017,
                  "nodeType": "Return",
                  "src": "1193:20:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "780:22:163",
            "parameters": {
              "id": 120986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120983,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "824:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121019,
                  "src": "812:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 120982,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 120981,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "812:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "812:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "812:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120985,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "853:13:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121019,
                  "src": "845:21:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120984,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "802:70:163"
            },
            "returnParameters": {
              "id": 120989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120988,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "904:13:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121019,
                  "src": "896:21:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 120987,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "896:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "895:23:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121037,
            "nodeType": "FunctionDefinition",
            "src": "1226:237:163",
            "nodes": [],
            "body": {
              "id": 121036,
              "nodeType": "Block",
              "src": "1339:124:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 121028,
                          "name": "_hyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121022,
                          "src": "1385:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                            "typeString": "contract IHyperdrive"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                            "typeString": "contract IHyperdrive"
                          }
                        ],
                        "id": 121027,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120980,
                        "src": "1368:16:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                          "typeString": "function (contract IHyperdrive) view returns (uint256)"
                        }
                      },
                      "id": 121029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1368:29:163",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121030,
                            "name": "_hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121022,
                            "src": "1412:11:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1424:13:163",
                          "memberName": "getPoolConfig",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7160,
                          "src": "1412:25:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                            "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                          }
                        },
                        "id": 121032,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1412:27:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 121033,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1440:16:163",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6901,
                      "src": "1412:44:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1368:88:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121026,
                  "id": 121035,
                  "nodeType": "Return",
                  "src": "1349:107:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maturityTimeFromLatestCheckpoint",
            "nameLocation": "1235:32:163",
            "parameters": {
              "id": 121023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121022,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "1289:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121037,
                  "src": "1277:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121021,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121020,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "1277:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "1277:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "1277:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1267:39:163"
            },
            "returnParameters": {
              "id": 121026,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121025,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121037,
                  "src": "1330:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121024,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1329:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121081,
            "nodeType": "FunctionDefinition",
            "src": "1469:633:163",
            "nodes": [],
            "body": {
              "id": 121080,
              "nodeType": "Block",
              "src": "1568:534:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121049
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121049,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "1608:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121080,
                      "src": "1578:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121048,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121047,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "1578:11:163",
                            "1590:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "1578:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "1578:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121053,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121050,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121040,
                        "src": "1621:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1633:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "1621:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1621:27:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1578:70:163"
                },
                {
                  "assignments": [
                    121058
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121058,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "1686:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121080,
                      "src": "1658:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121057,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121056,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "1658:11:163",
                            "1670:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "1658:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "1658:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121062,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121059,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121040,
                        "src": "1697:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121060,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1709:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "1697:23:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1697:25:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1658:64:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121067,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121058,
                              "src": "1870:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121068,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1879:13:163",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6927,
                            "src": "1870:22:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121069,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121058,
                              "src": "1914:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121070,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1923:15:163",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6930,
                            "src": "1914:24:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
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
                            }
                          ],
                          "expression": {
                            "id": 121065,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "1802:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1817:31:163",
                          "memberName": "calculateEffectiveShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10771,
                          "src": "1802:46:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,int256) pure returns (uint256)"
                          }
                        },
                        "id": 121071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1802:154:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121072,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121058,
                          "src": "1974:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121073,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1983:12:163",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6933,
                        "src": "1974:21:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121074,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121049,
                          "src": "2013:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121075,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2024:17:163",
                        "memberName": "initialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6892,
                        "src": "2013:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121076,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121049,
                          "src": "2059:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121077,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2070:11:163",
                        "memberName": "timeStretch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6907,
                        "src": "2059:22:163",
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
                      "expression": {
                        "id": 121063,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "1751:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121064,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1766:18:163",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8533,
                      "src": "1751:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1751:344:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121044,
                  "id": 121079,
                  "nodeType": "Return",
                  "src": "1732:363:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "1478:18:163",
            "parameters": {
              "id": 121041,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121040,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "1518:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121081,
                  "src": "1506:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121039,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121038,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "1506:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "1506:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "1506:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1496:39:163"
            },
            "returnParameters": {
              "id": 121044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121043,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121081,
                  "src": "1559:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121042,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1558:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121127,
            "nodeType": "FunctionDefinition",
            "src": "2108:690:163",
            "nodes": [],
            "body": {
              "id": 121126,
              "nodeType": "Block",
              "src": "2213:585:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121093
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121093,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "2253:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121126,
                      "src": "2223:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121092,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121091,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "2223:11:163",
                            "2235:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "2223:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "2223:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121097,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121094,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121084,
                        "src": "2266:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121095,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2278:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "2266:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2266:27:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2223:70:163"
                },
                {
                  "assignments": [
                    121102
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121102,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "2331:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121126,
                      "src": "2303:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121101,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121100,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "2303:11:163",
                            "2315:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "2303:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "2303:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121106,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121103,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121084,
                        "src": "2342:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2354:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "2342:23:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2342:25:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2303:64:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121111,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121102,
                              "src": "2521:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121112,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2530:13:163",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6927,
                            "src": "2521:22:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121113,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121102,
                              "src": "2565:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121114,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2574:15:163",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6930,
                            "src": "2565:24:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
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
                            }
                          ],
                          "expression": {
                            "id": 121109,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "2453:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2468:31:163",
                          "memberName": "calculateEffectiveShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10771,
                          "src": "2453:46:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,int256) pure returns (uint256)"
                          }
                        },
                        "id": 121115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2453:154:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121116,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121102,
                          "src": "2625:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121117,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2634:12:163",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6933,
                        "src": "2625:21:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121118,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121093,
                          "src": "2664:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121119,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2675:17:163",
                        "memberName": "initialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6892,
                        "src": "2664:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121120,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121093,
                          "src": "2710:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121121,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2721:16:163",
                        "memberName": "positionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6901,
                        "src": "2710:27:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121122,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121093,
                          "src": "2755:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121123,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2766:11:163",
                        "memberName": "timeStretch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6907,
                        "src": "2755:22:163",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 121107,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "2396:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2411:24:163",
                      "memberName": "calculateAPRFromReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8571,
                      "src": "2396:39:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2396:395:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121088,
                  "id": 121125,
                  "nodeType": "Return",
                  "src": "2377:414:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateAPRFromReserves",
            "nameLocation": "2117:24:163",
            "parameters": {
              "id": 121085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121084,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "2163:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121127,
                  "src": "2151:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121083,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121082,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "2151:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "2151:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "2151:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2141:39:163"
            },
            "returnParameters": {
              "id": 121088,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121087,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121127,
                  "src": "2204:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121086,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2204:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2203:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121161,
            "nodeType": "FunctionDefinition",
            "src": "2804:603:163",
            "nodes": [],
            "body": {
              "id": 121160,
              "nodeType": "Block",
              "src": "2968:439:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 121145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 121141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 121139,
                            "name": "timeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121133,
                            "src": "3172:13:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "hexValue": "31653138",
                            "id": 121140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3189:4:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          "src": "3172:21:163",
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
                          "id": 121144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 121142,
                            "name": "timeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121133,
                            "src": "3197:13:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 121143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3213:1:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3197:17:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3172:42:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "457870656374696e67204e6f726d616c697a656454696d6552656d61696e696e67",
                        "id": 121146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3228:35:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f6bed8350536a611c3f5aa1607d036e667248cfc544b671ec115b04e29d87c30",
                          "typeString": "literal_string \"Expecting NormalizedTimeRemaining\""
                        },
                        "value": "Expecting NormalizedTimeRemaining"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f6bed8350536a611c3f5aa1607d036e667248cfc544b671ec115b04e29d87c30",
                          "typeString": "literal_string \"Expecting NormalizedTimeRemaining\""
                        }
                      ],
                      "id": 121138,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3151:7:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 121147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3151:122:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121148,
                  "nodeType": "ExpressionStatement",
                  "src": "3151:122:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 121156,
                            "name": "timeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121133,
                            "src": "3372:13:163",
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
                            "id": 121154,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121129,
                            "src": "3353:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 121155,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3364:7:163",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7784,
                          "src": "3353:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 121157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3353:33:163",
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
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 121151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 121149,
                              "name": "bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121131,
                              "src": "3303:10:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 121150,
                              "name": "baseAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121129,
                              "src": "3316:10:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3303:23:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 121152,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3302:25:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3328:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "3302:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3302:98:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121137,
                  "id": 121159,
                  "nodeType": "Return",
                  "src": "3283:117:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateAPRFromRealizedPrice",
            "nameLocation": "2813:29:163",
            "parameters": {
              "id": 121134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121129,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2860:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121161,
                  "src": "2852:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2852:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121131,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2888:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121161,
                  "src": "2880:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2880:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121133,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "2916:13:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121161,
                  "src": "2908:21:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2908:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2842:93:163"
            },
            "returnParameters": {
              "id": 121137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121161,
                  "src": "2959:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2959:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2958:9:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121242,
            "nodeType": "FunctionDefinition",
            "src": "3681:1279:163",
            "nodes": [],
            "body": {
              "id": 121241,
              "nodeType": "Block",
              "src": "3821:1139:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121176
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121176,
                      "mutability": "mutable",
                      "name": "checkpoint",
                      "nameLocation": "3861:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121241,
                      "src": "3831:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                        "typeString": "struct IHyperdrive.Checkpoint"
                      },
                      "typeName": {
                        "id": 121175,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121174,
                          "name": "IHyperdrive.Checkpoint",
                          "nameLocations": [
                            "3831:11:163",
                            "3843:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6868,
                          "src": "3831:22:163"
                        },
                        "referencedDeclaration": 6868,
                        "src": "3831:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$6868_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121183,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121179,
                            "name": "_hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121165,
                            "src": "3913:11:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3925:16:163",
                          "memberName": "latestCheckpoint",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 120980,
                          "src": "3913:28:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "function (contract IHyperdrive) view returns (uint256)"
                          }
                        },
                        "id": 121181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3913:30:163",
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
                      "expression": {
                        "id": 121177,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121165,
                        "src": "3874:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3886:13:163",
                      "memberName": "getCheckpoint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7148,
                      "src": "3874:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        "typeString": "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)"
                      }
                    },
                    "id": 121182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3874:79:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                      "typeString": "struct IHyperdrive.Checkpoint memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3831:122:163"
                },
                {
                  "assignments": [
                    121188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121188,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "3991:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121241,
                      "src": "3963:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121187,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121186,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "3963:11:163",
                            "3975:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "3963:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "3963:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121192,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121189,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121165,
                        "src": "4002:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121190,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4014:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "4002:23:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4002:25:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3963:64:163"
                },
                {
                  "assignments": [
                    121197
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121197,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "4067:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121241,
                      "src": "4037:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121196,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121195,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "4037:11:163",
                            "4049:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "4037:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "4037:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121201,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121198,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121165,
                        "src": "4080:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4092:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "4080:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4080:27:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4037:70:163"
                },
                {
                  "expression": {
                    "id": 121237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 121202,
                          "name": "baseAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121170,
                          "src": "4118:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null
                      ],
                      "id": 121203,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4117:14:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$",
                        "typeString": "tuple(uint256,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 121208,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4242:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121209,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4251:13:163",
                              "memberName": "shareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6927,
                              "src": "4242:22:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121210,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4299:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121211,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4308:15:163",
                              "memberName": "shareAdjustment",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6930,
                              "src": "4299:24:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121212,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4355:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121213,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4364:12:163",
                              "memberName": "bondReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6933,
                              "src": "4355:21:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121214,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4412:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121215,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4421:16:163",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6942,
                              "src": "4412:25:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121216,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4469:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121217,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4478:12:163",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6963,
                              "src": "4469:21:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121218,
                                "name": "poolConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121197,
                                "src": "4521:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              "id": 121219,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4532:11:163",
                              "memberName": "timeStretch",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6907,
                              "src": "4521:22:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121220,
                                "name": "poolInfo",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121188,
                                "src": "4573:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolInfo memory"
                                }
                              },
                              "id": 121221,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4582:10:163",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6939,
                              "src": "4573:19:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121222,
                                "name": "poolConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121197,
                                "src": "4629:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              "id": 121223,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4640:17:163",
                              "memberName": "initialSharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6892,
                              "src": "4629:28:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 121224,
                                "name": "poolConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121197,
                                "src": "4697:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              "id": 121225,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4708:20:163",
                              "memberName": "minimumShareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6895,
                              "src": "4697:31:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "expression": {
                                  "id": 121226,
                                  "name": "poolConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121197,
                                  "src": "4756:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 121227,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4767:4:163",
                                "memberName": "fees",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6917,
                                "src": "4756:15:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
                                }
                              },
                              "id": 121228,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4772:5:163",
                              "memberName": "curve",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6878,
                              "src": "4756:21:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "expression": {
                                  "id": 121229,
                                  "name": "poolConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121197,
                                  "src": "4810:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 121230,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4821:4:163",
                                "memberName": "fees",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6917,
                                "src": "4810:15:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
                                }
                              },
                              "id": 121231,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4826:10:163",
                              "memberName": "governance",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6884,
                              "src": "4810:26:163",
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
                            "expression": {
                              "id": 121206,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10772,
                              "src": "4179:14:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 121207,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4194:14:163",
                            "memberName": "MaxTradeParams",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8934,
                            "src": "4179:29:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_MaxTradeParams_$8934_storage_ptr_$",
                              "typeString": "type(struct HyperdriveMath.MaxTradeParams storage pointer)"
                            }
                          },
                          "id": 121232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "4227:13:163",
                            "4282:15:163",
                            "4341:12:163",
                            "4394:16:163",
                            "4455:12:163",
                            "4508:11:163",
                            "4561:10:163",
                            "4610:17:163",
                            "4675:20:163",
                            "4746:8:163",
                            "4795:13:163"
                          ],
                          "names": [
                            "shareReserves",
                            "shareAdjustment",
                            "bondReserves",
                            "longsOutstanding",
                            "longExposure",
                            "timeStretch",
                            "sharePrice",
                            "initialSharePrice",
                            "minimumShareReserves",
                            "curveFee",
                            "governanceFee"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "4179:672:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MaxTradeParams_$8934_memory_ptr",
                            "typeString": "struct HyperdriveMath.MaxTradeParams memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 121233,
                            "name": "checkpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121176,
                            "src": "4865:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                              "typeString": "struct IHyperdrive.Checkpoint memory"
                            }
                          },
                          "id": 121234,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4876:12:163",
                          "memberName": "longExposure",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6867,
                          "src": "4865:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        {
                          "id": 121235,
                          "name": "_maxIterations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121167,
                          "src": "4902:14:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_MaxTradeParams_$8934_memory_ptr",
                            "typeString": "struct HyperdriveMath.MaxTradeParams memory"
                          },
                          {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 121204,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10772,
                          "src": "4134:14:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 121205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4149:16:163",
                        "memberName": "calculateMaxLong",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9154,
                        "src": "4134:31:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_MaxTradeParams_$8934_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (struct HyperdriveMath.MaxTradeParams memory,int256,uint256) pure returns (uint256,uint256)"
                        }
                      },
                      "id": 121236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4134:792:163",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4117:809:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121238,
                  "nodeType": "ExpressionStatement",
                  "src": "4117:809:163"
                },
                {
                  "expression": {
                    "id": 121239,
                    "name": "baseAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 121170,
                    "src": "4943:10:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121171,
                  "id": 121240,
                  "nodeType": "Return",
                  "src": "4936:17:163"
                }
              ]
            },
            "documentation": {
              "id": 121162,
              "nodeType": "StructuredDocumentation",
              "src": "3413:263:163",
              "text": "@dev Calculates the maximum amount of longs that can be opened.\n @param _hyperdrive A Hyperdrive instance.\n @param _maxIterations The maximum number of iterations to use.\n @return baseAmount The cost of buying the maximum amount of longs."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxLong",
            "nameLocation": "3690:16:163",
            "parameters": {
              "id": 121168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121165,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "3728:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121242,
                  "src": "3716:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121164,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121163,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "3716:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "3716:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "3716:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121167,
                  "mutability": "mutable",
                  "name": "_maxIterations",
                  "nameLocation": "3757:14:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121242,
                  "src": "3749:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121166,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3749:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3706:71:163"
            },
            "returnParameters": {
              "id": 121171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121170,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "3809:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121242,
                  "src": "3801:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3801:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3800:20:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121257,
            "nodeType": "FunctionDefinition",
            "src": "5163:164:163",
            "nodes": [],
            "body": {
              "id": 121256,
              "nodeType": "Block",
              "src": "5271:56:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 121252,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121246,
                        "src": "5305:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      {
                        "hexValue": "37",
                        "id": 121253,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5318:1:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        },
                        {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        }
                      ],
                      "id": 121251,
                      "name": "calculateMaxLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        121242,
                        121257
                      ],
                      "referencedDeclaration": 121242,
                      "src": "5288:16:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IHyperdrive,uint256) view returns (uint256)"
                      }
                    },
                    "id": 121254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5288:32:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121250,
                  "id": 121255,
                  "nodeType": "Return",
                  "src": "5281:39:163"
                }
              ]
            },
            "documentation": {
              "id": 121243,
              "nodeType": "StructuredDocumentation",
              "src": "4966:192:163",
              "text": "@dev Calculates the maximum amount of longs that can be opened.\n @param _hyperdrive A Hyperdrive instance.\n @return baseAmount The cost of buying the maximum amount of longs."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxLong",
            "nameLocation": "5172:16:163",
            "parameters": {
              "id": 121247,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121246,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "5210:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121257,
                  "src": "5198:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121245,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121244,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "5198:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "5198:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "5198:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5188:39:163"
            },
            "returnParameters": {
              "id": 121250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121249,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "5259:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121257,
                  "src": "5251:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5251:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5250:20:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121333,
            "nodeType": "FunctionDefinition",
            "src": "5592:1309:163",
            "nodes": [],
            "body": {
              "id": 121332,
              "nodeType": "Block",
              "src": "5722:1179:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121272
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121272,
                      "mutability": "mutable",
                      "name": "checkpoint",
                      "nameLocation": "5762:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121332,
                      "src": "5732:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                        "typeString": "struct IHyperdrive.Checkpoint"
                      },
                      "typeName": {
                        "id": 121271,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121270,
                          "name": "IHyperdrive.Checkpoint",
                          "nameLocations": [
                            "5732:11:163",
                            "5744:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6868,
                          "src": "5732:22:163"
                        },
                        "referencedDeclaration": 6868,
                        "src": "5732:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$6868_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121279,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121275,
                            "name": "_hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121261,
                            "src": "5814:11:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121276,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5826:16:163",
                          "memberName": "latestCheckpoint",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 120980,
                          "src": "5814:28:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "function (contract IHyperdrive) view returns (uint256)"
                          }
                        },
                        "id": 121277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5814:30:163",
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
                      "expression": {
                        "id": 121273,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121261,
                        "src": "5775:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5787:13:163",
                      "memberName": "getCheckpoint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7148,
                      "src": "5775:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        "typeString": "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)"
                      }
                    },
                    "id": 121278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5775:79:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                      "typeString": "struct IHyperdrive.Checkpoint memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5732:122:163"
                },
                {
                  "assignments": [
                    121284
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121284,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "5892:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121332,
                      "src": "5864:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121283,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121282,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "5864:11:163",
                            "5876:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "5864:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "5864:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121288,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121285,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121261,
                        "src": "5903:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5915:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "5903:23:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5903:25:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5864:64:163"
                },
                {
                  "assignments": [
                    121293
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121293,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "5968:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121332,
                      "src": "5938:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121292,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121291,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "5938:11:163",
                            "5950:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "5938:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "5938:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121297,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121294,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121261,
                        "src": "5981:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5993:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "5981:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5981:27:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5938:70:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121302,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6154:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121303,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6163:13:163",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6927,
                            "src": "6154:22:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121304,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6215:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121305,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6224:15:163",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6930,
                            "src": "6215:24:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121306,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6275:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121307,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6284:12:163",
                            "memberName": "bondReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6933,
                            "src": "6275:21:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121308,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6336:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121309,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6345:16:163",
                            "memberName": "longsOutstanding",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6942,
                            "src": "6336:25:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121310,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6397:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121311,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6406:12:163",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6963,
                            "src": "6397:21:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121312,
                              "name": "poolConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121293,
                              "src": "6453:10:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 121313,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6464:11:163",
                            "memberName": "timeStretch",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6907,
                            "src": "6453:22:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121314,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121284,
                              "src": "6509:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121315,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6518:10:163",
                            "memberName": "sharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6939,
                            "src": "6509:19:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121316,
                              "name": "poolConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121293,
                              "src": "6569:10:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 121317,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6580:17:163",
                            "memberName": "initialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6892,
                            "src": "6569:28:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121318,
                              "name": "poolConfig",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121293,
                              "src": "6641:10:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 121319,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6652:20:163",
                            "memberName": "minimumShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6895,
                            "src": "6641:31:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "expression": {
                                "id": 121320,
                                "name": "poolConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121293,
                                "src": "6704:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              "id": 121321,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6715:4:163",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6917,
                              "src": "6704:15:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 121322,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6720:5:163",
                            "memberName": "curve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6878,
                            "src": "6704:21:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "expression": {
                                "id": 121323,
                                "name": "poolConfig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121293,
                                "src": "6762:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                  "typeString": "struct IHyperdrive.PoolConfig memory"
                                }
                              },
                              "id": 121324,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6773:4:163",
                              "memberName": "fees",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6917,
                              "src": "6762:15:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                                "typeString": "struct IHyperdrive.Fees memory"
                              }
                            },
                            "id": 121325,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6778:10:163",
                            "memberName": "governance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6884,
                            "src": "6762:26:163",
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
                          "expression": {
                            "id": 121300,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "6087:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6102:14:163",
                          "memberName": "MaxTradeParams",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8934,
                          "src": "6087:29:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_MaxTradeParams_$8934_storage_ptr_$",
                            "typeString": "type(struct HyperdriveMath.MaxTradeParams storage pointer)"
                          }
                        },
                        "id": 121326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "nameLocations": [
                          "6139:13:163",
                          "6198:15:163",
                          "6261:12:163",
                          "6318:16:163",
                          "6383:12:163",
                          "6440:11:163",
                          "6497:10:163",
                          "6550:17:163",
                          "6619:20:163",
                          "6694:8:163",
                          "6747:13:163"
                        ],
                        "names": [
                          "shareReserves",
                          "shareAdjustment",
                          "bondReserves",
                          "longsOutstanding",
                          "longExposure",
                          "timeStretch",
                          "sharePrice",
                          "initialSharePrice",
                          "minimumShareReserves",
                          "curveFee",
                          "governanceFee"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "6087:720:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$8934_memory_ptr",
                          "typeString": "struct HyperdriveMath.MaxTradeParams memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 121327,
                          "name": "checkpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121272,
                          "src": "6825:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                            "typeString": "struct IHyperdrive.Checkpoint memory"
                          }
                        },
                        "id": 121328,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6836:12:163",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6867,
                        "src": "6825:23:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      {
                        "id": 121329,
                        "name": "_maxIterations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121263,
                        "src": "6866:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_MaxTradeParams_$8934_memory_ptr",
                          "typeString": "struct HyperdriveMath.MaxTradeParams memory"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 121298,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "6037:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6052:17:163",
                      "memberName": "calculateMaxShort",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9900,
                      "src": "6037:32:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_MaxTradeParams_$8934_memory_ptr_$_t_int256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (struct HyperdriveMath.MaxTradeParams memory,int256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6037:857:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121267,
                  "id": 121331,
                  "nodeType": "Return",
                  "src": "6018:876:163"
                }
              ]
            },
            "documentation": {
              "id": 121258,
              "nodeType": "StructuredDocumentation",
              "src": "5333:254:163",
              "text": "@dev Calculates the maximum amount of shorts that can be opened.\n @param _hyperdrive A Hyperdrive instance.\n @param _maxIterations The maximum number of iterations to use.\n @return The maximum amount of bonds that can be shorted."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxShort",
            "nameLocation": "5601:17:163",
            "parameters": {
              "id": 121264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121261,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "5640:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121333,
                  "src": "5628:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121260,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121259,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "5628:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "5628:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "5628:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121263,
                  "mutability": "mutable",
                  "name": "_maxIterations",
                  "nameLocation": "5669:14:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121333,
                  "src": "5661:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5661:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5618:71:163"
            },
            "returnParameters": {
              "id": 121267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121266,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121333,
                  "src": "5713:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5713:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5712:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121348,
            "nodeType": "FunctionDefinition",
            "src": "7095:155:163",
            "nodes": [],
            "body": {
              "id": 121347,
              "nodeType": "Block",
              "src": "7193:57:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 121343,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121337,
                        "src": "7228:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      {
                        "hexValue": "37",
                        "id": 121344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7241:1:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        },
                        "value": "7"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        },
                        {
                          "typeIdentifier": "t_rational_7_by_1",
                          "typeString": "int_const 7"
                        }
                      ],
                      "id": 121342,
                      "name": "calculateMaxShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        121333,
                        121348
                      ],
                      "referencedDeclaration": 121333,
                      "src": "7210:17:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IHyperdrive,uint256) view returns (uint256)"
                      }
                    },
                    "id": 121345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7210:33:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121341,
                  "id": 121346,
                  "nodeType": "Return",
                  "src": "7203:40:163"
                }
              ]
            },
            "documentation": {
              "id": 121334,
              "nodeType": "StructuredDocumentation",
              "src": "6907:183:163",
              "text": "@dev Calculates the maximum amount of shorts that can be opened.\n @param _hyperdrive A Hyperdrive instance.\n @return The maximum amount of bonds that can be shorted."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateMaxShort",
            "nameLocation": "7104:17:163",
            "parameters": {
              "id": 121338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121337,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "7143:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121348,
                  "src": "7131:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121336,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121335,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "7131:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "7131:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "7131:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7121:39:163"
            },
            "returnParameters": {
              "id": 121341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121340,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121348,
                  "src": "7184:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121339,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7184:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7183:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121421,
            "nodeType": "FunctionDefinition",
            "src": "7648:602:163",
            "nodes": [],
            "body": {
              "id": 121420,
              "nodeType": "Block",
              "src": "7814:436:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121363
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121363,
                      "mutability": "mutable",
                      "name": "normalizedTime",
                      "nameLocation": "7879:14:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121420,
                      "src": "7871:22:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121362,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7871:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121368,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 121366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7910:8:163",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "id": 121364,
                        "name": "_time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121355,
                        "src": "7896:5:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7902:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "7896:13:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7896:23:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7871:48:163"
                },
                {
                  "expression": {
                    "id": 121402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 121369,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121360,
                      "src": "7929:8:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 121372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121370,
                          "name": "_apr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121353,
                          "src": "7940:4:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 121371,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7948:1:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "7940:9:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 121400,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "-",
                        "prefix": true,
                        "src": "8044:97:163",
                        "subExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 121396,
                                      "name": "normalizedTime",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121363,
                                      "src": "8111:14:163",
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
                                      "arguments": [
                                        {
                                          "id": 121393,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "UnaryOperation",
                                          "operator": "-",
                                          "prefix": true,
                                          "src": "8096:5:163",
                                          "subExpression": {
                                            "id": 121392,
                                            "name": "_apr",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 121353,
                                            "src": "8097:4:163",
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
                                        "id": 121391,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8088:7:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 121390,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "8088:7:163",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 121394,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8088:14:163",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 121395,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "8103:7:163",
                                    "memberName": "mulDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 7784,
                                    "src": "8088:22:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 121397,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8088:38:163",
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
                                "expression": {
                                  "id": 121388,
                                  "name": "_principal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121351,
                                  "src": "8069:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 121389,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8080:7:163",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7784,
                                "src": "8069:18:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 121398,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8069:58:163",
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
                            "id": 121387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8045:6:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 121386,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8045:6:163",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 121399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8045:96:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 121401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "7940:201:163",
                      "trueExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 121382,
                                    "name": "normalizedTime",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121363,
                                    "src": "8012:14:163",
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
                                    "arguments": [
                                      {
                                        "id": 121379,
                                        "name": "_apr",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 121353,
                                        "src": "7998:4:163",
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
                                      "id": 121378,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "7990:7:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 121377,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7990:7:163",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 121380,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7990:13:163",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 121381,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8004:7:163",
                                  "memberName": "mulDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7784,
                                  "src": "7990:21:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 121383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7990:37:163",
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
                              "expression": {
                                "id": 121375,
                                "name": "_principal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121351,
                                "src": "7971:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121376,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7982:7:163",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7784,
                              "src": "7971:18:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 121384,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7971:57:163",
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
                          "id": 121374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7964:6:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 121373,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7964:6:163",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 121385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7964:65:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "7929:212:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 121403,
                  "nodeType": "ExpressionStatement",
                  "src": "7929:212:163"
                },
                {
                  "expression": {
                    "id": 121414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 121404,
                      "name": "totalAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121358,
                      "src": "8151:11:163",
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
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 121412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 121409,
                                "name": "_principal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121351,
                                "src": "8180:10:163",
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
                              "id": 121408,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "8173:6:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int256_$",
                                "typeString": "type(int256)"
                              },
                              "typeName": {
                                "id": 121407,
                                "name": "int256",
                                "nodeType": "ElementaryTypeName",
                                "src": "8173:6:163",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 121410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8173:18:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 121411,
                            "name": "interest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121360,
                            "src": "8194:8:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "8173:29:163",
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
                        "id": 121406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8165:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 121405,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8165:7:163",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 121413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8165:38:163",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8151:52:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 121415,
                  "nodeType": "ExpressionStatement",
                  "src": "8151:52:163"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 121416,
                        "name": "totalAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121358,
                        "src": "8221:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 121417,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121360,
                        "src": "8234:8:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "id": 121418,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8220:23:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "functionReturnParameters": 121361,
                  "id": 121419,
                  "nodeType": "Return",
                  "src": "8213:30:163"
                }
              ]
            },
            "documentation": {
              "id": 121349,
              "nodeType": "StructuredDocumentation",
              "src": "7256:387:163",
              "text": "@dev Calculates the non-compounded interest over a period.\n @param _principal The principal amount that will accrue interest.\n @param _apr Annual percentage rate\n @param _time Amount of time in seconds over which interest accrues.\n @return totalAmount The total amount of capital after interest accrues.\n @return interest The interest that accrued."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInterest",
            "nameLocation": "7657:17:163",
            "parameters": {
              "id": 121356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121351,
                  "mutability": "mutable",
                  "name": "_principal",
                  "nameLocation": "7692:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121421,
                  "src": "7684:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7684:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121353,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "7719:4:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121421,
                  "src": "7712:11:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121352,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7712:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121355,
                  "mutability": "mutable",
                  "name": "_time",
                  "nameLocation": "7741:5:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121421,
                  "src": "7733:13:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7733:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7674:78:163"
            },
            "returnParameters": {
              "id": 121361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121358,
                  "mutability": "mutable",
                  "name": "totalAmount",
                  "nameLocation": "7784:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121421,
                  "src": "7776:19:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121357,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7776:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121360,
                  "mutability": "mutable",
                  "name": "interest",
                  "nameLocation": "7804:8:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121421,
                  "src": "7797:15:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121359,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7797:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7775:38:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121534,
            "nodeType": "FunctionDefinition",
            "src": "8691:1028:163",
            "nodes": [],
            "body": {
              "id": 121533,
              "nodeType": "Block",
              "src": "8865:854:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121436,
                      "mutability": "mutable",
                      "name": "normalizedTime",
                      "nameLocation": "8930:14:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121533,
                      "src": "8922:22:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8922:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121441,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 121439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8961:8:163",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "id": 121437,
                        "name": "_time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121428,
                        "src": "8947:5:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121438,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8953:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "8947:13:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121440,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8947:23:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8922:48:163"
                },
                {
                  "assignments": [
                    121443
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121443,
                      "mutability": "mutable",
                      "name": "rt",
                      "nameLocation": "8988:2:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121533,
                      "src": "8980:10:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121442,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8980:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121457,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121455,
                        "name": "normalizedTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121436,
                        "src": "9034:14:163",
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
                        "arguments": [
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 121448,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 121446,
                                "name": "_apr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121426,
                                "src": "9001:4:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "<",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 121447,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9008:1:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "9001:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseExpression": {
                              "id": 121451,
                              "name": "_apr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121426,
                              "src": "9020:4:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "id": 121452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "Conditional",
                            "src": "9001:23:163",
                            "trueExpression": {
                              "id": 121450,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "9012:5:163",
                              "subExpression": {
                                "id": 121449,
                                "name": "_apr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121426,
                                "src": "9013:4:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
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
                          "id": 121445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8993:7:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 121444,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "8993:7:163",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 121453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8993:32:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9026:7:163",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7784,
                      "src": "8993:40:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8993:56:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8980:69:163"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 121460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121458,
                      "name": "_apr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121426,
                      "src": "9064:4:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 121459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9071:1:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9064:8:163",
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
                      "id": 121493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121491,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121426,
                        "src": "9313:4:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 121492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9320:1:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "9313:8:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 121527,
                    "nodeType": "IfStatement",
                    "src": "9309:372:163",
                    "trueBody": {
                      "id": 121526,
                      "nodeType": "Block",
                      "src": "9323:358:163",
                      "statements": [
                        {
                          "expression": {
                            "id": 121508,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 121494,
                              "name": "totalAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121431,
                              "src": "9458:11:163",
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
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "id": 121503,
                                              "name": "rt",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 121443,
                                              "src": "9542:2:163",
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
                                            "id": 121502,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9535:6:163",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_int256_$",
                                              "typeString": "type(int256)"
                                            },
                                            "typeName": {
                                              "id": 121501,
                                              "name": "int256",
                                              "nodeType": "ElementaryTypeName",
                                              "src": "9535:6:163",
                                              "typeDescriptions": {}
                                            }
                                          },
                                          "id": 121504,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "9535:10:163",
                                          "tryCall": false,
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
                                        "expression": {
                                          "id": 121499,
                                          "name": "FixedPointMath",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8486,
                                          "src": "9516:14:163",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                            "typeString": "type(library FixedPointMath)"
                                          }
                                        },
                                        "id": 121500,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "9531:3:163",
                                        "memberName": "exp",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8108,
                                        "src": "9516:18:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                          "typeString": "function (int256) pure returns (int256)"
                                        }
                                      },
                                      "id": 121505,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "9516:30:163",
                                      "tryCall": false,
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
                                    "id": 121498,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "9508:7:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 121497,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "9508:7:163",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 121506,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9508:39:163",
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
                                "expression": {
                                  "id": 121495,
                                  "name": "_principal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121424,
                                  "src": "9472:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 121496,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "9483:7:163",
                                "memberName": "divDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7802,
                                "src": "9472:18:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 121507,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9472:89:163",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "9458:103:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 121509,
                          "nodeType": "ExpressionStatement",
                          "src": "9458:103:163"
                        },
                        {
                          "expression": {
                            "id": 121520,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 121510,
                              "name": "interest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121433,
                              "src": "9575:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 121519,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 121513,
                                    "name": "totalAmount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121431,
                                    "src": "9593:11:163",
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
                                  "id": 121512,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9586:6:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int256_$",
                                    "typeString": "type(int256)"
                                  },
                                  "typeName": {
                                    "id": 121511,
                                    "name": "int256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9586:6:163",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 121514,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9586:19:163",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "id": 121517,
                                    "name": "_principal",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121424,
                                    "src": "9615:10:163",
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
                                  "id": 121516,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9608:6:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int256_$",
                                    "typeString": "type(int256)"
                                  },
                                  "typeName": {
                                    "id": 121515,
                                    "name": "int256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9608:6:163",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 121518,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9608:18:163",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "9586:40:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "9575:51:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 121521,
                          "nodeType": "ExpressionStatement",
                          "src": "9575:51:163"
                        },
                        {
                          "expression": {
                            "components": [
                              {
                                "id": 121522,
                                "name": "totalAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121431,
                                "src": "9648:11:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 121523,
                                "name": "interest",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121433,
                                "src": "9661:8:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 121524,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "9647:23:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                              "typeString": "tuple(uint256,int256)"
                            }
                          },
                          "functionReturnParameters": 121434,
                          "id": 121525,
                          "nodeType": "Return",
                          "src": "9640:30:163"
                        }
                      ]
                    }
                  },
                  "id": 121528,
                  "nodeType": "IfStatement",
                  "src": "9060:621:163",
                  "trueBody": {
                    "id": 121490,
                    "nodeType": "Block",
                    "src": "9074:229:163",
                    "statements": [
                      {
                        "expression": {
                          "id": 121475,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 121461,
                            "name": "totalAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121431,
                            "src": "9088:11:163",
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
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "id": 121470,
                                            "name": "rt",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 121443,
                                            "src": "9172:2:163",
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
                                          "id": 121469,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "9165:6:163",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_int256_$",
                                            "typeString": "type(int256)"
                                          },
                                          "typeName": {
                                            "id": 121468,
                                            "name": "int256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9165:6:163",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 121471,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9165:10:163",
                                        "tryCall": false,
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
                                      "expression": {
                                        "id": 121466,
                                        "name": "FixedPointMath",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8486,
                                        "src": "9146:14:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                          "typeString": "type(library FixedPointMath)"
                                        }
                                      },
                                      "id": 121467,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "9161:3:163",
                                      "memberName": "exp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 8108,
                                      "src": "9146:18:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                                        "typeString": "function (int256) pure returns (int256)"
                                      }
                                    },
                                    "id": 121472,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "9146:30:163",
                                    "tryCall": false,
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
                                  "id": 121465,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9138:7:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 121464,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9138:7:163",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 121473,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9138:39:163",
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
                              "expression": {
                                "id": 121462,
                                "name": "_principal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121424,
                                "src": "9102:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121463,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9113:7:163",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7784,
                              "src": "9102:18:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 121474,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9102:89:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9088:103:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 121476,
                        "nodeType": "ExpressionStatement",
                        "src": "9088:103:163"
                      },
                      {
                        "expression": {
                          "id": 121484,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 121477,
                            "name": "interest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121433,
                            "src": "9205:8:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 121482,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 121480,
                                  "name": "totalAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121431,
                                  "src": "9223:11:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 121481,
                                  "name": "_principal",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121424,
                                  "src": "9237:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "9223:24:163",
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
                              "id": 121479,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9216:6:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int256_$",
                                "typeString": "type(int256)"
                              },
                              "typeName": {
                                "id": 121478,
                                "name": "int256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9216:6:163",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 121483,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9216:32:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "9205:43:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 121485,
                        "nodeType": "ExpressionStatement",
                        "src": "9205:43:163"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 121486,
                              "name": "totalAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121431,
                              "src": "9270:11:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 121487,
                              "name": "interest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121433,
                              "src": "9283:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 121488,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9269:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                            "typeString": "tuple(uint256,int256)"
                          }
                        },
                        "functionReturnParameters": 121434,
                        "id": 121489,
                        "nodeType": "Return",
                        "src": "9262:30:163"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 121529,
                        "name": "_principal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121424,
                        "src": "9698:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 121530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9710:1:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "id": 121531,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "9697:15:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_rational_0_by_1_$",
                      "typeString": "tuple(uint256,int_const 0)"
                    }
                  },
                  "functionReturnParameters": 121434,
                  "id": 121532,
                  "nodeType": "Return",
                  "src": "9690:22:163"
                }
              ]
            },
            "documentation": {
              "id": 121422,
              "nodeType": "StructuredDocumentation",
              "src": "8256:430:163",
              "text": "@dev Calculates principal + compounded rate of interest over a period\n      principal * e ^ (rate * time)\n @param _principal The initial amount interest will be accrued on\n @param _apr Annual percentage rate\n @param _time Number of seconds compounding will occur for\n @return totalAmount The total amount of capital after interest accrues.\n @return interest The interest that accrued."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCompoundInterest",
            "nameLocation": "8700:25:163",
            "parameters": {
              "id": 121429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121424,
                  "mutability": "mutable",
                  "name": "_principal",
                  "nameLocation": "8743:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121534,
                  "src": "8735:18:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121423,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8735:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121426,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "8770:4:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121534,
                  "src": "8763:11:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121425,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8763:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121428,
                  "mutability": "mutable",
                  "name": "_time",
                  "nameLocation": "8792:5:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121534,
                  "src": "8784:13:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8784:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8725:78:163"
            },
            "returnParameters": {
              "id": 121434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121431,
                  "mutability": "mutable",
                  "name": "totalAmount",
                  "nameLocation": "8835:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121534,
                  "src": "8827:19:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8827:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121433,
                  "mutability": "mutable",
                  "name": "interest",
                  "nameLocation": "8855:8:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121534,
                  "src": "8848:15:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121432,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8848:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8826:38:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121566,
            "nodeType": "FunctionDefinition",
            "src": "9725:262:163",
            "nodes": [],
            "body": {
              "id": 121565,
              "nodeType": "Block",
              "src": "9800:187:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121542,
                      "mutability": "mutable",
                      "name": "timeStretch",
                      "nameLocation": "9818:11:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121565,
                      "src": "9810:19:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121541,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9810:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121558,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 121555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 121553,
                              "name": "apr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121536,
                              "src": "9901:3:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 121554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9907:3:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "9901:9:163",
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
                            "arguments": [
                              {
                                "hexValue": "302e3034363635653138",
                                "id": 121550,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9881:10:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_46650000000000000_by_1",
                                  "typeString": "int_const 46650000000000000"
                                },
                                "value": "0.04665e18"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_46650000000000000_by_1",
                                  "typeString": "int_const 46650000000000000"
                                }
                              ],
                              "id": 121549,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9873:7:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 121548,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "9873:7:163",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 121551,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9873:19:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 121552,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9893:7:163",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7784,
                          "src": "9873:27:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 121556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9873:38:163",
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
                      "expression": {
                        "arguments": [
                          {
                            "hexValue": "352e3234353932653138",
                            "id": 121545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9840:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5245920000000000000_by_1",
                              "typeString": "int_const 5245920000000000000"
                            },
                            "value": "5.24592e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_5245920000000000000_by_1",
                              "typeString": "int_const 5245920000000000000"
                            }
                          ],
                          "id": 121544,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9832:7:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 121543,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9832:7:163",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 121546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9832:19:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9852:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "9832:27:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9832:89:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9810:111:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 121562,
                        "name": "timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121542,
                        "src": "9968:11:163",
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
                        "expression": {
                          "id": 121559,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8486,
                          "src": "9938:14:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 121560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "9953:6:163",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7745,
                        "src": "9938:21:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9960:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "9938:29:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9938:42:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121540,
                  "id": 121564,
                  "nodeType": "Return",
                  "src": "9931:49:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeStretch",
            "nameLocation": "9734:20:163",
            "parameters": {
              "id": 121537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121536,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "9763:3:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121566,
                  "src": "9755:11:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9755:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9754:13:163"
            },
            "returnParameters": {
              "id": 121540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121539,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121566,
                  "src": "9791:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9791:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9790:9:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121730,
            "nodeType": "FunctionDefinition",
            "src": "10031:2428:163",
            "nodes": [],
            "body": {
              "id": 121729,
              "nodeType": "Block",
              "src": "10166:2293:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121580
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121580,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "10248:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10218:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121579,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121578,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "10218:11:163",
                            "10230:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "10218:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "10218:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121584,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121581,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121569,
                        "src": "10261:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10273:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "10261:25:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10261:27:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10218:70:163"
                },
                {
                  "assignments": [
                    121589
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121589,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "10326:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10298:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121588,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121587,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "10298:11:163",
                            "10310:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "10298:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "10298:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121593,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121590,
                        "name": "_hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121569,
                        "src": "10337:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10349:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "10337:23:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10337:25:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10298:64:163"
                },
                {
                  "assignments": [
                    121595
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121595,
                      "mutability": "mutable",
                      "name": "openSharePrice",
                      "nameLocation": "10380:14:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10372:22:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121594,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10372:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121596,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10372:22:163"
                },
                {
                  "assignments": [
                    121598
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121598,
                      "mutability": "mutable",
                      "name": "timeRemaining",
                      "nameLocation": "10412:13:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10404:21:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121597,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10404:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121599,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10404:21:163"
                },
                {
                  "id": 121628,
                  "nodeType": "Block",
                  "src": "10435:310:163",
                  "statements": [
                    {
                      "assignments": [
                        121601
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 121601,
                          "mutability": "mutable",
                          "name": "checkpoint",
                          "nameLocation": "10457:10:163",
                          "nodeType": "VariableDeclaration",
                          "scope": 121628,
                          "src": "10449:18:163",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 121600,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10449:7:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 121605,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 121603,
                            "name": "_hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121569,
                            "src": "10487:11:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          ],
                          "id": 121602,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 120980,
                          "src": "10470:16:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            "typeString": "function (contract IHyperdrive) view returns (uint256)"
                          }
                        },
                        "id": 121604,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10470:29:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10449:50:163"
                    },
                    {
                      "assignments": [
                        121607
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 121607,
                          "mutability": "mutable",
                          "name": "maturityTime",
                          "nameLocation": "10521:12:163",
                          "nodeType": "VariableDeclaration",
                          "scope": 121628,
                          "src": "10513:20:163",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 121606,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10513:7:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 121612,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121608,
                          "name": "checkpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121601,
                          "src": "10536:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "expression": {
                            "id": 121609,
                            "name": "poolConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121580,
                            "src": "10549:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 121610,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10560:16:163",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6901,
                          "src": "10549:27:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10536:40:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10513:63:163"
                    },
                    {
                      "expression": {
                        "id": 121618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 121613,
                          "name": "timeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121598,
                          "src": "10590:13:163",
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
                              "id": 121615,
                              "name": "_hyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121569,
                              "src": "10629:11:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              }
                            },
                            {
                              "id": 121616,
                              "name": "maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121607,
                              "src": "10642:12:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                "typeString": "contract IHyperdrive"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 121614,
                            "name": "calculateTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121019,
                            "src": "10606:22:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (contract IHyperdrive,uint256) view returns (uint256)"
                            }
                          },
                          "id": 121617,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10606:49:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10590:65:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121619,
                      "nodeType": "ExpressionStatement",
                      "src": "10590:65:163"
                    },
                    {
                      "expression": {
                        "id": 121626,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 121620,
                          "name": "openSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121595,
                          "src": "10669:14:163",
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
                                "id": 121623,
                                "name": "checkpoint",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121601,
                                "src": "10712:10:163",
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
                                "id": 121621,
                                "name": "_hyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121569,
                                "src": "10686:11:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                  "typeString": "contract IHyperdrive"
                                }
                              },
                              "id": 121622,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10698:13:163",
                              "memberName": "getCheckpoint",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7148,
                              "src": "10686:25:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                                "typeString": "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)"
                              }
                            },
                            "id": 121624,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10686:37:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$6868_memory_ptr",
                              "typeString": "struct IHyperdrive.Checkpoint memory"
                            }
                          },
                          "id": 121625,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10724:10:163",
                          "memberName": "sharePrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6864,
                          "src": "10686:48:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "10669:65:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121627,
                      "nodeType": "ExpressionStatement",
                      "src": "10669:65:163"
                    }
                  ]
                },
                {
                  "assignments": [
                    121630
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121630,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "10804:22:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10796:30:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121629,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10796:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121638,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 121633,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "10906:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121634,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10915:13:163",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6927,
                        "src": "10906:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121635,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "10946:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121636,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10955:15:163",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6930,
                        "src": "10946:24:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                        }
                      ],
                      "expression": {
                        "id": 121631,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "10829:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10857:31:163",
                      "memberName": "calculateEffectiveShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10771,
                      "src": "10829:59:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 121637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10829:155:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10796:188:163"
                },
                {
                  "assignments": [
                    121640
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121640,
                      "mutability": "mutable",
                      "name": "shareProceeds",
                      "nameLocation": "11002:13:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "10994:21:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121639,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10994:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121654,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121643,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121630,
                        "src": "11065:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121644,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "11101:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121645,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11110:12:163",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6933,
                        "src": "11101:21:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 121646,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121571,
                        "src": "11136:11:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121647,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121580,
                          "src": "11161:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121648,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11172:11:163",
                        "memberName": "timeStretch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6907,
                        "src": "11161:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121649,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "11197:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121650,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11206:10:163",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6939,
                        "src": "11197:19:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121651,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121580,
                          "src": "11230:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121652,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11241:17:163",
                        "memberName": "initialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6892,
                        "src": "11230:28:163",
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
                      "expression": {
                        "id": 121641,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "11018:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11033:18:163",
                      "memberName": "calculateOpenShort",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8742,
                      "src": "11018:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11018:250:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10994:274:163"
                },
                {
                  "assignments": [
                    121656
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121656,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "11349:9:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "11341:17:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121655,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11341:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121667,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121659,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121630,
                        "src": "11408:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121660,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "11444:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121661,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11453:12:163",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6933,
                        "src": "11444:21:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121662,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121580,
                          "src": "11479:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121663,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11490:17:163",
                        "memberName": "initialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6892,
                        "src": "11479:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121664,
                          "name": "poolConfig",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121580,
                          "src": "11521:10:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121665,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11532:11:163",
                        "memberName": "timeStretch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6907,
                        "src": "11521:22:163",
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
                      "expression": {
                        "id": 121657,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "11361:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 121658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11376:18:163",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8533,
                      "src": "11361:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11361:192:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11341:212:163"
                },
                {
                  "assignments": [
                    121669
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121669,
                      "mutability": "mutable",
                      "name": "curveFee",
                      "nameLocation": "11612:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "11604:16:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121668,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11604:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121688,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 121684,
                        "name": "timeRemaining",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121598,
                        "src": "11761:13:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121685,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "11776:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121686,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11785:10:163",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6939,
                        "src": "11776:19:163",
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
                        "arguments": [
                          {
                            "id": 121681,
                            "name": "_bondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121571,
                            "src": "11724:11:163",
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
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 121676,
                                    "name": "poolConfig",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121580,
                                    "src": "11680:10:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                      "typeString": "struct IHyperdrive.PoolConfig memory"
                                    }
                                  },
                                  "id": 121677,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11691:4:163",
                                  "memberName": "fees",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 6917,
                                  "src": "11680:15:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                                    "typeString": "struct IHyperdrive.Fees memory"
                                  }
                                },
                                "id": 121678,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11696:5:163",
                                "memberName": "curve",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6878,
                                "src": "11680:21:163",
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
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 121673,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "expression": {
                                        "id": 121670,
                                        "name": "FixedPointMath",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8486,
                                        "src": "11624:14:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                          "typeString": "type(library FixedPointMath)"
                                        }
                                      },
                                      "id": 121671,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberLocation": "11639:6:163",
                                      "memberName": "ONE_18",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7745,
                                      "src": "11624:21:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 121672,
                                      "name": "spotPrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 121656,
                                      "src": "11648:9:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "11624:33:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 121674,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "11623:35:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121675,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11672:7:163",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7784,
                              "src": "11623:56:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 121679,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11623:79:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 121680,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11716:7:163",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7784,
                          "src": "11623:100:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 121682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11623:113:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11750:10:163",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7766,
                      "src": "11623:137:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11623:173:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11604:192:163"
                },
                {
                  "assignments": [
                    121690
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121690,
                      "mutability": "mutable",
                      "name": "flatFee",
                      "nameLocation": "11814:7:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121729,
                      "src": "11806:15:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 121689,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11806:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121706,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 121702,
                            "name": "poolConfig",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121580,
                            "src": "11985:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 121703,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11996:4:163",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6917,
                          "src": "11985:15:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$6885_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 121704,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12001:4:163",
                        "memberName": "flat",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6881,
                        "src": "11985:20:163",
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
                        "components": [
                          {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 121696,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "id": 121693,
                                    "name": "FixedPointMath",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8486,
                                    "src": "11878:14:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                      "typeString": "type(library FixedPointMath)"
                                    }
                                  },
                                  "id": 121694,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "11893:6:163",
                                  "memberName": "ONE_18",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7745,
                                  "src": "11878:21:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 121695,
                                  "name": "timeRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121598,
                                  "src": "11902:13:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "11878:37:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121697,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121589,
                                  "src": "11933:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121698,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11942:10:163",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6939,
                                "src": "11933:19:163",
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
                                "id": 121691,
                                "name": "_bondAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 121571,
                                "src": "11838:11:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11850:10:163",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7766,
                              "src": "11838:22:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 121699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11838:128:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 121700,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "11824:152:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121701,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11977:7:163",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7784,
                      "src": "11824:160:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11824:182:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11806:200:163"
                },
                {
                  "expression": {
                    "id": 121711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 121707,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121640,
                      "src": "12016:13:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 121710,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 121708,
                        "name": "curveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121669,
                        "src": "12033:8:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 121709,
                        "name": "flatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121690,
                        "src": "12044:7:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "12033:18:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12016:35:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 121712,
                  "nodeType": "ExpressionStatement",
                  "src": "12016:35:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 121725,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121589,
                          "src": "12432:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121726,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12441:10:163",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6939,
                        "src": "12432:19:163",
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
                        "arguments": [
                          {
                            "id": 121715,
                            "name": "_bondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121571,
                            "src": "12201:11:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 121716,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121640,
                            "src": "12234:13:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 121717,
                            "name": "openSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121595,
                            "src": "12269:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121718,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121589,
                              "src": "12305:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121719,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12314:10:163",
                            "memberName": "sharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6939,
                            "src": "12305:19:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121720,
                              "name": "poolInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121589,
                              "src": "12346:8:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121721,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12355:10:163",
                            "memberName": "sharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6939,
                            "src": "12346:19:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "30",
                            "id": 121722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12387:1:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "expression": {
                            "id": 121713,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "12125:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12157:22:163",
                          "memberName": "calculateShortProceeds",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10707,
                          "src": "12125:54:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 121723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12125:281:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12424:7:163",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7784,
                      "src": "12125:306:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12125:327:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121575,
                  "id": 121728,
                  "nodeType": "Return",
                  "src": "12106:346:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShortDeposit",
            "nameLocation": "10040:25:163",
            "parameters": {
              "id": 121572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121569,
                  "mutability": "mutable",
                  "name": "_hyperdrive",
                  "nameLocation": "10087:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121730,
                  "src": "10075:23:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121568,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121567,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "10075:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "10075:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "10075:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 121571,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "10116:11:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121730,
                  "src": "10108:19:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10108:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10065:68:163"
            },
            "returnParameters": {
              "id": 121575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121574,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121730,
                  "src": "10157:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10157:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10156:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121808,
            "nodeType": "FunctionDefinition",
            "src": "12465:1649:163",
            "nodes": [],
            "body": {
              "id": 121807,
              "nodeType": "Block",
              "src": "12557:1557:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121742
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121742,
                      "mutability": "mutable",
                      "name": "poolConfig",
                      "nameLocation": "12597:10:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121807,
                      "src": "12567:40:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121741,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121740,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "12567:11:163",
                            "12579:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "12567:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "12567:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121746,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121743,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121733,
                        "src": "12610:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12621:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "12610:24:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12610:26:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12567:69:163"
                },
                {
                  "assignments": [
                    121751
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121751,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "12674:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121807,
                      "src": "12646:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121750,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121749,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "12646:11:163",
                            "12658:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "12646:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "12646:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121755,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121752,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121733,
                        "src": "12685:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12696:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "12685:22:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12685:24:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12646:63:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 121803,
                          "name": "poolInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121751,
                          "src": "14087:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121804,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14096:10:163",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6939,
                        "src": "14087:19:163",
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
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 121760,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "12888:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121761,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "12897:13:163",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6927,
                                "src": "12888:22:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121762,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "12953:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121763,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "12962:15:163",
                                "memberName": "shareAdjustment",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6930,
                                "src": "12953:24:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121764,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "13017:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121765,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13026:12:163",
                                "memberName": "bondReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6933,
                                "src": "13017:21:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121766,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "13076:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121767,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13085:10:163",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6939,
                                "src": "13076:19:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121768,
                                  "name": "poolConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121742,
                                  "src": "13140:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 121769,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13151:17:163",
                                "memberName": "initialSharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6892,
                                "src": "13140:28:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121770,
                                  "name": "poolConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121742,
                                  "src": "13216:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 121771,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13227:20:163",
                                "memberName": "minimumShareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6895,
                                "src": "13216:31:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121772,
                                  "name": "poolConfig",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121742,
                                  "src": "13286:10:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 121773,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13297:11:163",
                                "memberName": "timeStretch",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6907,
                                "src": "13286:22:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121774,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "13352:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121775,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13361:16:163",
                                "memberName": "longsOutstanding",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6942,
                                "src": "13352:25:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 121777,
                                    "name": "hyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121733,
                                    "src": "13481:10:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                      "typeString": "contract IHyperdrive"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "hexValue": "31653336",
                                        "id": 121784,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "13602:4:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                                          "typeString": "int_const 1000...(29 digits omitted)...0000"
                                        },
                                        "value": "1e36"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                                          "typeString": "int_const 1000...(29 digits omitted)...0000"
                                        }
                                      ],
                                      "expression": {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 121780,
                                              "name": "poolInfo",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 121751,
                                              "src": "13529:8:163",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolInfo memory"
                                              }
                                            },
                                            "id": 121781,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13538:23:163",
                                            "memberName": "longAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6945,
                                            "src": "13529:32:163",
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
                                          "id": 121779,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "13521:7:163",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint256_$",
                                            "typeString": "type(uint256)"
                                          },
                                          "typeName": {
                                            "id": 121778,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "13521:7:163",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 121782,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13521:41:163",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 121783,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "13563:5:163",
                                      "memberName": "divUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7852,
                                      "src": "13521:47:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 121785,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "13521:115:163",
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
                                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                      "typeString": "contract IHyperdrive"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 121776,
                                  "name": "calculateTimeRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121019,
                                  "src": "13429:22:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (contract IHyperdrive,uint256) view returns (uint256)"
                                  }
                                },
                                "id": 121786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13429:233:163",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 121787,
                                  "name": "poolInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121751,
                                  "src": "13707:8:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121788,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13716:17:163",
                                "memberName": "shortsOutstanding",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6948,
                                "src": "13707:26:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 121790,
                                    "name": "hyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 121733,
                                    "src": "13838:10:163",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                      "typeString": "contract IHyperdrive"
                                    }
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "hexValue": "31653336",
                                        "id": 121797,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "13960:4:163",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                                          "typeString": "int_const 1000...(29 digits omitted)...0000"
                                        },
                                        "value": "1e36"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_1000000000000000000000000000000000000_by_1",
                                          "typeString": "int_const 1000...(29 digits omitted)...0000"
                                        }
                                      ],
                                      "expression": {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 121793,
                                              "name": "poolInfo",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 121751,
                                              "src": "13886:8:163",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                                "typeString": "struct IHyperdrive.PoolInfo memory"
                                              }
                                            },
                                            "id": 121794,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13895:24:163",
                                            "memberName": "shortAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6951,
                                            "src": "13886:33:163",
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
                                          "id": 121792,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "13878:7:163",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint256_$",
                                            "typeString": "type(uint256)"
                                          },
                                          "typeName": {
                                            "id": 121791,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "13878:7:163",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 121795,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13878:42:163",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 121796,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "13921:5:163",
                                      "memberName": "divUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7852,
                                      "src": "13878:48:163",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 121798,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "13878:116:163",
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
                                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                                      "typeString": "contract IHyperdrive"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 121789,
                                  "name": "calculateTimeRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121019,
                                  "src": "13786:22:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (contract IHyperdrive,uint256) view returns (uint256)"
                                  }
                                },
                                "id": 121799,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13786:234:163",
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
                                },
                                {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
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
                              "expression": {
                                "id": 121758,
                                "name": "HyperdriveMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10772,
                                "src": "12813:14:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                                  "typeString": "type(library HyperdriveMath)"
                                }
                              },
                              "id": 121759,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12828:18:163",
                              "memberName": "PresentValueParams",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10414,
                              "src": "12813:33:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_PresentValueParams_$10414_storage_ptr_$",
                                "typeString": "type(struct HyperdriveMath.PresentValueParams storage pointer)"
                              }
                            },
                            "id": 121800,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "12873:13:163",
                              "12936:15:163",
                              "13003:12:163",
                              "13064:10:163",
                              "13121:17:163",
                              "13194:20:163",
                              "13273:11:163",
                              "13334:16:163",
                              "13403:24:163",
                              "13688:17:163",
                              "13759:25:163"
                            ],
                            "names": [
                              "shareReserves",
                              "shareAdjustment",
                              "bondReserves",
                              "sharePrice",
                              "initialSharePrice",
                              "minimumShareReserves",
                              "timeStretch",
                              "longsOutstanding",
                              "longAverageTimeRemaining",
                              "shortsOutstanding",
                              "shortAverageTimeRemaining"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "12813:1230:163",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PresentValueParams_$10414_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          ],
                          "expression": {
                            "id": 121756,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "12738:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121757,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12770:21:163",
                          "memberName": "calculatePresentValue",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10656,
                          "src": "12738:53:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$10414_memory_ptr_$returns$_t_uint256_$",
                            "typeString": "function (struct HyperdriveMath.PresentValueParams memory) pure returns (uint256)"
                          }
                        },
                        "id": 121801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12738:1323:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14079:7:163",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7784,
                      "src": "12738:1348:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12738:1369:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121737,
                  "id": 121806,
                  "nodeType": "Return",
                  "src": "12719:1388:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "presentValue",
            "nameLocation": "12474:12:163",
            "parameters": {
              "id": 121734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121733,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "12508:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121808,
                  "src": "12496:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121732,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121731,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "12496:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "12496:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "12496:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12486:38:163"
            },
            "returnParameters": {
              "id": 121737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121736,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121808,
                  "src": "12548:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12548:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12547:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121826,
            "nodeType": "FunctionDefinition",
            "src": "14120:177:163",
            "nodes": [],
            "body": {
              "id": 121825,
              "nodeType": "Block",
              "src": "14212:85:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121820,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121811,
                            "src": "14263:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121821,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14274:13:163",
                          "memberName": "lpTotalSupply",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 121852,
                          "src": "14263:24:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "function (contract IHyperdrive) view returns (uint256)"
                          }
                        },
                        "id": 121822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14263:26:163",
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
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121816,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121811,
                            "src": "14229:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121817,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14240:12:163",
                          "memberName": "presentValue",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 121808,
                          "src": "14229:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$attached_to$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "function (contract IHyperdrive) view returns (uint256)"
                          }
                        },
                        "id": 121818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14229:25:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 121819,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14255:7:163",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "14229:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14229:61:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121815,
                  "id": 121824,
                  "nodeType": "Return",
                  "src": "14222:68:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lpSharePrice",
            "nameLocation": "14129:12:163",
            "parameters": {
              "id": 121812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121811,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "14163:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121826,
                  "src": "14151:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121810,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121809,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "14151:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "14151:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "14151:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14141:38:163"
            },
            "returnParameters": {
              "id": 121815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121814,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121826,
                  "src": "14203:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121813,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14203:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14202:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121852,
            "nodeType": "FunctionDefinition",
            "src": "14303:317:163",
            "nodes": [],
            "body": {
              "id": 121851,
              "nodeType": "Block",
              "src": "14396:224:163",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 121844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121836,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7731,
                              "src": "14448:7:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 121837,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "14456:12:163",
                            "memberName": "_LP_ASSET_ID",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7680,
                            "src": "14448:20:163",
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
                            "id": 121834,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121829,
                            "src": "14425:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14436:11:163",
                          "memberName": "totalSupply",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7498,
                          "src": "14425:22:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) view external returns (uint256)"
                          }
                        },
                        "id": 121838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14425:44:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121841,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7731,
                              "src": "14507:7:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 121842,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "14515:26:163",
                            "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7689,
                            "src": "14507:34:163",
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
                            "id": 121839,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121829,
                            "src": "14484:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14495:11:163",
                          "memberName": "totalSupply",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7498,
                          "src": "14484:22:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) view external returns (uint256)"
                          }
                        },
                        "id": 121843,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14484:58:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14425:117:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 121845,
                            "name": "hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121829,
                            "src": "14557:10:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                              "typeString": "contract IHyperdrive"
                            }
                          },
                          "id": 121846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14568:11:163",
                          "memberName": "getPoolInfo",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7177,
                          "src": "14557:22:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                            "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                          }
                        },
                        "id": 121847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14557:24:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo memory"
                        }
                      },
                      "id": 121848,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14582:31:163",
                      "memberName": "withdrawalSharesReadyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6954,
                      "src": "14557:56:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14425:188:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121833,
                  "id": 121850,
                  "nodeType": "Return",
                  "src": "14406:207:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "lpTotalSupply",
            "nameLocation": "14312:13:163",
            "parameters": {
              "id": 121830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121829,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "14347:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121852,
                  "src": "14335:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121828,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121827,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "14335:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "14335:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "14335:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14325:38:163"
            },
            "returnParameters": {
              "id": 121833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121832,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121852,
                  "src": "14387:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14387:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14386:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121901,
            "nodeType": "FunctionDefinition",
            "src": "14626:394:163",
            "nodes": [],
            "body": {
              "id": 121900,
              "nodeType": "Block",
              "src": "14699:321:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121864
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121864,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "14739:6:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121900,
                      "src": "14709:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121863,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121862,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "14709:11:163",
                            "14721:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "14709:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "14709:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121868,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121865,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121855,
                        "src": "14748:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14759:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "14748:24:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14748:26:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14709:65:163"
                },
                {
                  "assignments": [
                    121873
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121873,
                      "mutability": "mutable",
                      "name": "info",
                      "nameLocation": "14812:4:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121900,
                      "src": "14784:32:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121872,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121871,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "14784:11:163",
                            "14796:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "14784:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "14784:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121877,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121874,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121855,
                        "src": "14819:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14830:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "14819:22:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14819:24:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14784:59:163"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 121898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 121892,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121880,
                              "name": "info",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121873,
                              "src": "14879:4:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121881,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14884:13:163",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6927,
                            "src": "14879:18:163",
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
                          "id": 121879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14872:6:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 121878,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14872:6:163",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 121882,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14872:26:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 121888,
                                  "name": "info",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121873,
                                  "src": "14946:4:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121889,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "14951:10:163",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6939,
                                "src": "14946:15:163",
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
                                "expression": {
                                  "id": 121885,
                                  "name": "info",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 121873,
                                  "src": "14920:4:163",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolInfo memory"
                                  }
                                },
                                "id": 121886,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "14925:12:163",
                                "memberName": "longExposure",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6963,
                                "src": "14920:17:163",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 121887,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14938:7:163",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7802,
                              "src": "14920:25:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 121890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14920:42:163",
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
                          "id": 121884,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "14913:6:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 121883,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "14913:6:163",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 121891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14913:50:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "14872:91:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 121895,
                            "name": "config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121864,
                            "src": "14985:6:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 121896,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14992:20:163",
                          "memberName": "minimumShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6895,
                          "src": "14985:27:163",
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
                        "id": 121894,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "14978:6:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 121893,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "14978:6:163",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 121897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14978:35:163",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "14872:141:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 121859,
                  "id": 121899,
                  "nodeType": "Return",
                  "src": "14853:160:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "solvency",
            "nameLocation": "14635:8:163",
            "parameters": {
              "id": 121856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121855,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "14656:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121901,
                  "src": "14644:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121854,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121853,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "14644:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "14644:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "14644:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14643:24:163"
            },
            "returnParameters": {
              "id": 121859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121858,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121901,
                  "src": "14691:6:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 121857,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14691:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14690:8:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121953,
            "nodeType": "FunctionDefinition",
            "src": "15026:652:163",
            "nodes": [],
            "body": {
              "id": 121952,
              "nodeType": "Block",
              "src": "15093:585:163",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    121913
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121913,
                      "mutability": "mutable",
                      "name": "config",
                      "nameLocation": "15133:6:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121952,
                      "src": "15103:36:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolConfig"
                      },
                      "typeName": {
                        "id": 121912,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121911,
                          "name": "IHyperdrive.PoolConfig",
                          "nameLocations": [
                            "15103:11:163",
                            "15115:10:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6924,
                          "src": "15103:22:163"
                        },
                        "referencedDeclaration": 6924,
                        "src": "15103:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121917,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121914,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121904,
                        "src": "15142:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121915,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15153:13:163",
                      "memberName": "getPoolConfig",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7160,
                      "src": "15142:24:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolConfig memory)"
                      }
                    },
                    "id": 121916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15142:26:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15103:65:163"
                },
                {
                  "assignments": [
                    121922
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121922,
                      "mutability": "mutable",
                      "name": "info",
                      "nameLocation": "15206:4:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121952,
                      "src": "15178:32:163",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 121921,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 121920,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "15178:11:163",
                            "15190:8:163"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 6964,
                          "src": "15178:20:163"
                        },
                        "referencedDeclaration": 6964,
                        "src": "15178:20:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$6964_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121926,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121923,
                        "name": "hyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121904,
                        "src": "15213:10:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                          "typeString": "contract IHyperdrive"
                        }
                      },
                      "id": 121924,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15224:11:163",
                      "memberName": "getPoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7177,
                      "src": "15213:22:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        "typeString": "function () view external returns (struct IHyperdrive.PoolInfo memory)"
                      }
                    },
                    "id": 121925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15213:24:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15178:59:163"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121932,
                              "name": "config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121913,
                              "src": "15349:6:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 121933,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15356:17:163",
                            "memberName": "initialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6892,
                            "src": "15349:24:163",
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
                            "expression": {
                              "id": 121929,
                              "name": "info",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121922,
                              "src": "15325:4:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121930,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15330:10:163",
                            "memberName": "sharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6939,
                            "src": "15325:15:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 121931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15341:7:163",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7802,
                          "src": "15325:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 121934,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15325:49:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121935,
                          "name": "config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121913,
                          "src": "15392:6:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 121936,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15399:17:163",
                        "memberName": "initialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6892,
                        "src": "15392:24:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 121939,
                              "name": "info",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121922,
                              "src": "15502:4:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121940,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15507:13:163",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6927,
                            "src": "15502:18:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 121941,
                              "name": "info",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121922,
                              "src": "15542:4:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolInfo memory"
                              }
                            },
                            "id": 121942,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15547:15:163",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6930,
                            "src": "15542:20:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
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
                            }
                          ],
                          "expression": {
                            "id": 121937,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10772,
                            "src": "15434:14:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$10772_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 121938,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15449:31:163",
                          "memberName": "calculateEffectiveShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10771,
                          "src": "15434:46:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,int256) pure returns (uint256)"
                          }
                        },
                        "id": 121943,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15434:146:163",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 121947,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 121944,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7738,
                          "src": "15598:3:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "expression": {
                            "id": 121945,
                            "name": "config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121913,
                            "src": "15604:6:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 121946,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15611:11:163",
                          "memberName": "timeStretch",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6907,
                          "src": "15604:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "15598:24:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 121948,
                          "name": "info",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121922,
                          "src": "15640:4:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolInfo_$6964_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolInfo memory"
                          }
                        },
                        "id": 121949,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15645:12:163",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6933,
                        "src": "15640:17:163",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 121927,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11319,
                        "src": "15266:14:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$11319_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 121928,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15281:26:163",
                      "memberName": "modifiedYieldSpaceConstant",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11318,
                      "src": "15266:41:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 121950,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15266:405:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 121908,
                  "id": 121951,
                  "nodeType": "Return",
                  "src": "15247:424:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "k",
            "nameLocation": "15035:1:163",
            "parameters": {
              "id": 121905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121904,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "15049:10:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121953,
                  "src": "15037:22:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                    "typeString": "contract IHyperdrive"
                  },
                  "typeName": {
                    "id": 121903,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 121902,
                      "name": "IHyperdrive",
                      "nameLocations": [
                        "15037:11:163"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7103,
                      "src": "15037:11:163"
                    },
                    "referencedDeclaration": 7103,
                    "src": "15037:11:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IHyperdrive_$7103",
                      "typeString": "contract IHyperdrive"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15036:24:163"
            },
            "returnParameters": {
              "id": 121908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121907,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121953,
                  "src": "15084:7:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 121906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15084:7:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15083:9:163"
            },
            "scope": 122442,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 121979,
            "nodeType": "FunctionDefinition",
            "src": "15684:443:163",
            "nodes": [],
            "body": {
              "id": 121978,
              "nodeType": "Block",
              "src": "15778:349:163",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 121960,
                        "name": "_error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121955,
                        "src": "15849:6:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 121961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15856:6:163",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "15849:13:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "34",
                      "id": 121962,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "15865:1:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_4_by_1",
                        "typeString": "int_const 4"
                      },
                      "value": "4"
                    },
                    "src": "15849:17:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 121969,
                  "nodeType": "IfStatement",
                  "src": "15845:71:163",
                  "trueBody": {
                    "id": 121968,
                    "nodeType": "Block",
                    "src": "15868:48:163",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "hexValue": "496e76616c6964206572726f72",
                              "id": 121965,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "15889:15:163",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_8fa56bd1df20fc20fea8bc3d6b4e9e661f93cb0fe097bf8611bfde13f4a3beac",
                                "typeString": "literal_string \"Invalid error\""
                              },
                              "value": "Invalid error"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_8fa56bd1df20fc20fea8bc3d6b4e9e661f93cb0fe097bf8611bfde13f4a3beac",
                                "typeString": "literal_string \"Invalid error\""
                              }
                            ],
                            "id": 121964,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "15882:6:163",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 121966,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15882:23:163",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 121967,
                        "nodeType": "ExpressionStatement",
                        "src": "15882:23:163"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    121971
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 121971,
                      "mutability": "mutable",
                      "name": "selector",
                      "nameLocation": "15995:8:163",
                      "nodeType": "VariableDeclaration",
                      "scope": 121978,
                      "src": "15988:15:163",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 121970,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "15988:6:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 121972,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15988:15:163"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "16022:60:163",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16036:36:163",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "_error",
                                  "nodeType": "YulIdentifier",
                                  "src": "16058:6:163"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "16066:4:163",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16054:3:163"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16054:17:163"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "16048:5:163"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16048:24:163"
                        },
                        "variableNames": [
                          {
                            "name": "selector",
                            "nodeType": "YulIdentifier",
                            "src": "16036:8:163"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 121955,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16058:6:163",
                      "valueSize": 1
                    },
                    {
                      "declaration": 121971,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16036:8:163",
                      "valueSize": 1
                    }
                  ],
                  "id": 121973,
                  "nodeType": "InlineAssembly",
                  "src": "16013:69:163"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 121974,
                        "name": "selector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121971,
                        "src": "16098:8:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "id": 121975,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16107:11:163",
                      "memberName": "decodeError",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 122441,
                      "src": "16098:20:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes4_$returns$_t_string_memory_ptr_$attached_to$_t_bytes4_$",
                        "typeString": "function (bytes4) pure returns (string memory)"
                      }
                    },
                    "id": 121976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16098:22:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 121959,
                  "id": 121977,
                  "nodeType": "Return",
                  "src": "16091:29:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeError",
            "nameLocation": "15693:11:163",
            "parameters": {
              "id": 121956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121955,
                  "mutability": "mutable",
                  "name": "_error",
                  "nameLocation": "15727:6:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 121979,
                  "src": "15714:19:163",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 121954,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15714:5:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15704:35:163"
            },
            "returnParameters": {
              "id": 121959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121958,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121979,
                  "src": "15763:13:163",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 121957,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15763:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15762:15:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 122441,
            "nodeType": "FunctionDefinition",
            "src": "16133:6165:163",
            "nodes": [],
            "body": {
              "id": 122440,
              "nodeType": "Block",
              "src": "16224:6074:163",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 121990,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121986,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16300:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 121987,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16313:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 121988,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16325:30:163",
                        "memberName": "BaseBufferExceedsShareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6976,
                        "src": "16313:42:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 121989,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16356:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16313:51:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16300:64:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 121994,
                  "nodeType": "IfStatement",
                  "src": "16296:134:163",
                  "trueBody": {
                    "id": 121993,
                    "nodeType": "Block",
                    "src": "16366:64:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "426173654275666665724578636565647353686172655265736572766573",
                          "id": 121991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16387:32:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f1d7a213657a42e2a3d426f41a5712127186ed4962cda9d740a2da047a33b136",
                            "typeString": "literal_string \"BaseBufferExceedsShareReserves\""
                          },
                          "value": "BaseBufferExceedsShareReserves"
                        },
                        "functionReturnParameters": 121985,
                        "id": 121992,
                        "nodeType": "Return",
                        "src": "16380:39:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 121999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121995,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16443:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 121996,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16456:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 121997,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16468:24:163",
                        "memberName": "BelowMinimumContribution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6978,
                        "src": "16456:36:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 121998,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16493:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16456:45:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16443:58:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122003,
                  "nodeType": "IfStatement",
                  "src": "16439:122:163",
                  "trueBody": {
                    "id": 122002,
                    "nodeType": "Block",
                    "src": "16503:58:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "42656c6f774d696e696d756d436f6e747269627574696f6e",
                          "id": 122000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16524:26:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_3ee89966049bfb6df01787a38fe4c970c2c1c2c5e962819ab4477ca9a3c226b0",
                            "typeString": "literal_string \"BelowMinimumContribution\""
                          },
                          "value": "BelowMinimumContribution"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122001,
                        "nodeType": "Return",
                        "src": "16517:33:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122004,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16574:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122005,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16587:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16599:25:163",
                        "memberName": "BelowMinimumShareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6980,
                        "src": "16587:37:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16625:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16587:46:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16574:59:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122012,
                  "nodeType": "IfStatement",
                  "src": "16570:124:163",
                  "trueBody": {
                    "id": 122011,
                    "nodeType": "Block",
                    "src": "16635:59:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "42656c6f774d696e696d756d53686172655265736572766573",
                          "id": 122009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16656:27:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9792e21069fb07faa9f8a91f2775e70130ae7d4b8250cfb13d6682bb95c66d13",
                            "typeString": "literal_string \"BelowMinimumShareReserves\""
                          },
                          "value": "BelowMinimumShareReserves"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122010,
                        "nodeType": "Return",
                        "src": "16649:34:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122013,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16707:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122014,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16720:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16732:10:163",
                        "memberName": "InvalidApr",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6982,
                        "src": "16720:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16743:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16720:31:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16707:44:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122021,
                  "nodeType": "IfStatement",
                  "src": "16703:94:163",
                  "trueBody": {
                    "id": 122020,
                    "nodeType": "Block",
                    "src": "16753:44:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964417072",
                          "id": 122018,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16774:12:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_cc21fd95747775a2aee1f15fdca63f3e1a072c2b20cded9d4aa926bf38803041",
                            "typeString": "literal_string \"InvalidApr\""
                          },
                          "value": "InvalidApr"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122019,
                        "nodeType": "Return",
                        "src": "16767:19:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122022,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16810:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122023,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16823:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122024,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16835:16:163",
                        "memberName": "InvalidBaseToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6984,
                        "src": "16823:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16852:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16823:37:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16810:50:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122030,
                  "nodeType": "IfStatement",
                  "src": "16806:106:163",
                  "trueBody": {
                    "id": 122029,
                    "nodeType": "Block",
                    "src": "16862:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c696442617365546f6b656e",
                          "id": 122027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "16883:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_55cfd030d3507a0b7d5c76b6ec41922b57d86d60898259f7eafdabf258a25fee",
                            "typeString": "literal_string \"InvalidBaseToken\""
                          },
                          "value": "InvalidBaseToken"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122028,
                        "nodeType": "Return",
                        "src": "16876:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122031,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "16925:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122032,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "16938:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16950:21:163",
                        "memberName": "InvalidCheckpointTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6986,
                        "src": "16938:33:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122034,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16972:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "16938:42:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "16925:55:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122039,
                  "nodeType": "IfStatement",
                  "src": "16921:116:163",
                  "trueBody": {
                    "id": 122038,
                    "nodeType": "Block",
                    "src": "16982:55:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964436865636b706f696e7454696d65",
                          "id": 122036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17003:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_6db046024e1eb63bbc465c4977544c2f7212397d63491c8d6f2ecf059951dcc5",
                            "typeString": "literal_string \"InvalidCheckpointTime\""
                          },
                          "value": "InvalidCheckpointTime"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122037,
                        "nodeType": "Return",
                        "src": "16996:30:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122040,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17050:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122041,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17063:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122042,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17075:25:163",
                        "memberName": "InvalidCheckpointDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6988,
                        "src": "17063:37:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17101:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17063:46:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17050:59:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122048,
                  "nodeType": "IfStatement",
                  "src": "17046:124:163",
                  "trueBody": {
                    "id": 122047,
                    "nodeType": "Block",
                    "src": "17111:59:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964436865636b706f696e744475726174696f6e",
                          "id": 122045,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17132:27:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7164f576c376c148a2b7fc3fc4d41ddd3c8e2a17385d906273554ccdca0c520a",
                            "typeString": "literal_string \"InvalidCheckpointDuration\""
                          },
                          "value": "InvalidCheckpointDuration"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122046,
                        "nodeType": "Return",
                        "src": "17125:34:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122049,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17183:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122050,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17196:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17208:24:163",
                        "memberName": "InvalidInitialSharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6990,
                        "src": "17196:36:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17233:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17196:45:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17183:58:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122057,
                  "nodeType": "IfStatement",
                  "src": "17179:122:163",
                  "trueBody": {
                    "id": 122056,
                    "nodeType": "Block",
                    "src": "17243:58:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964496e697469616c53686172655072696365",
                          "id": 122054,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17264:26:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a9428086526cd03a6430714b0c635a201f64fcbf714f28a30b8a050c71b0bcde",
                            "typeString": "literal_string \"InvalidInitialSharePrice\""
                          },
                          "value": "InvalidInitialSharePrice"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122055,
                        "nodeType": "Return",
                        "src": "17257:33:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122058,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17314:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122059,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17327:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17339:19:163",
                        "memberName": "InvalidMaturityTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6992,
                        "src": "17327:31:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17359:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17327:40:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17314:53:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122066,
                  "nodeType": "IfStatement",
                  "src": "17310:112:163",
                  "trueBody": {
                    "id": 122065,
                    "nodeType": "Block",
                    "src": "17369:53:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c69644d6174757269747954696d65",
                          "id": 122063,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17390:21:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f1a875ca1078b16b5a851536aecb912a4cf888c6d66da34ce63e7a4dbc9cff88",
                            "typeString": "literal_string \"InvalidMaturityTime\""
                          },
                          "value": "InvalidMaturityTime"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122064,
                        "nodeType": "Return",
                        "src": "17383:28:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122067,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17435:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122068,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17448:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17460:27:163",
                        "memberName": "InvalidMinimumShareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6994,
                        "src": "17448:39:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17488:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17448:48:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17435:61:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122075,
                  "nodeType": "IfStatement",
                  "src": "17431:128:163",
                  "trueBody": {
                    "id": 122074,
                    "nodeType": "Block",
                    "src": "17498:61:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c69644d696e696d756d53686172655265736572766573",
                          "id": 122072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17519:29:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c43e482f1d12341417e816ccd17cbcb7607f22f74c7a6bd8582ad67f2fb2cbba",
                            "typeString": "literal_string \"InvalidMinimumShareReserves\""
                          },
                          "value": "InvalidMinimumShareReserves"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122073,
                        "nodeType": "Return",
                        "src": "17512:36:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122080,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122076,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17572:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122077,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17585:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17597:23:163",
                        "memberName": "InvalidPositionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6996,
                        "src": "17585:35:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122079,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17621:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17585:44:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17572:57:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122084,
                  "nodeType": "IfStatement",
                  "src": "17568:120:163",
                  "trueBody": {
                    "id": 122083,
                    "nodeType": "Block",
                    "src": "17631:57:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964506f736974696f6e4475726174696f6e",
                          "id": 122081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17652:25:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_15d24885932c93f6c3a36ff5e4ff1fe315335bd29a05837628b5d8f1303781e5",
                            "typeString": "literal_string \"InvalidPositionDuration\""
                          },
                          "value": "InvalidPositionDuration"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122082,
                        "nodeType": "Return",
                        "src": "17645:32:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122089,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122085,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17701:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122086,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17714:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17726:20:163",
                        "memberName": "InvalidShareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6998,
                        "src": "17714:32:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17747:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17714:41:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17701:54:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122093,
                  "nodeType": "IfStatement",
                  "src": "17697:114:163",
                  "trueBody": {
                    "id": 122092,
                    "nodeType": "Block",
                    "src": "17757:54:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c696453686172655265736572766573",
                          "id": 122090,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17778:22:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_09764de62acc0cabad3cb59a076483d2290c81ef0190db623d9bdff3b5d29b4c",
                            "typeString": "literal_string \"InvalidShareReserves\""
                          },
                          "value": "InvalidShareReserves"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122091,
                        "nodeType": "Return",
                        "src": "17771:29:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122098,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122094,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17824:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122095,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17837:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122096,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17849:17:163",
                        "memberName": "InvalidFeeAmounts",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7000,
                        "src": "17837:29:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122097,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17867:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17837:38:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17824:51:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122102,
                  "nodeType": "IfStatement",
                  "src": "17820:108:163",
                  "trueBody": {
                    "id": 122101,
                    "nodeType": "Block",
                    "src": "17877:51:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964466565416d6f756e7473",
                          "id": 122099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17898:19:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9a3832311abbdfc246d341df99ae103f5f82a789035e3ad3a1a618e9ff65d751",
                            "typeString": "literal_string \"InvalidFeeAmounts\""
                          },
                          "value": "InvalidFeeAmounts"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122100,
                        "nodeType": "Return",
                        "src": "17891:26:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122103,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "17941:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122104,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "17954:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17966:16:163",
                        "memberName": "NegativeInterest",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7002,
                        "src": "17954:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17983:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "17954:37:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "17941:50:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122111,
                  "nodeType": "IfStatement",
                  "src": "17937:106:163",
                  "trueBody": {
                    "id": 122110,
                    "nodeType": "Block",
                    "src": "17993:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4e65676174697665496e746572657374",
                          "id": 122108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18014:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c450ce4f29c6d54a7604cab8db28fd895585654d59d5d3dc7d672adf2f31a6ed",
                            "typeString": "literal_string \"NegativeInterest\""
                          },
                          "value": "NegativeInterest"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122109,
                        "nodeType": "Return",
                        "src": "18007:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122112,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18056:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122113,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18069:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18081:11:163",
                        "memberName": "OutputLimit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7010,
                        "src": "18069:23:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18093:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18069:32:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18056:45:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122120,
                  "nodeType": "IfStatement",
                  "src": "18052:96:163",
                  "trueBody": {
                    "id": 122119,
                    "nodeType": "Block",
                    "src": "18103:45:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4f75747075744c696d6974",
                          "id": 122117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18124:13:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4fa5869155b07d77afa4a8b138ded3514d8272fcc86f2f60182ccd985bda5629",
                            "typeString": "literal_string \"OutputLimit\""
                          },
                          "value": "OutputLimit"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122118,
                        "nodeType": "Return",
                        "src": "18117:20:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122121,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18161:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122122,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18174:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18186:6:163",
                        "memberName": "Paused",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7012,
                        "src": "18174:18:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18193:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18174:27:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18161:40:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122129,
                  "nodeType": "IfStatement",
                  "src": "18157:86:163",
                  "trueBody": {
                    "id": 122128,
                    "nodeType": "Block",
                    "src": "18203:40:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "506175736564",
                          "id": 122126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18224:8:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0eeb5248cf3d8cd81a5ba6d3cc6e1997df7b174eb894aac081867c1a2bc43c90",
                            "typeString": "literal_string \"Paused\""
                          },
                          "value": "Paused"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122127,
                        "nodeType": "Return",
                        "src": "18217:15:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122130,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18256:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122131,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18269:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18281:22:163",
                        "memberName": "PoolAlreadyInitialized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7014,
                        "src": "18269:34:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18304:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18269:43:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18256:56:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122138,
                  "nodeType": "IfStatement",
                  "src": "18252:118:163",
                  "trueBody": {
                    "id": 122137,
                    "nodeType": "Block",
                    "src": "18314:56:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "506f6f6c416c7265616479496e697469616c697a6564",
                          "id": 122135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18335:24:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_844f3ea9738d94872dbc7d26beae0943a92540a2172d05c7795ece077f52d14c",
                            "typeString": "literal_string \"PoolAlreadyInitialized\""
                          },
                          "value": "PoolAlreadyInitialized"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122136,
                        "nodeType": "Return",
                        "src": "18328:31:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122139,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18383:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122140,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18396:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18408:14:163",
                        "memberName": "TransferFailed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7018,
                        "src": "18396:26:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18423:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18396:35:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18383:48:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122147,
                  "nodeType": "IfStatement",
                  "src": "18379:102:163",
                  "trueBody": {
                    "id": 122146,
                    "nodeType": "Block",
                    "src": "18433:48:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "5472616e736665724661696c6564",
                          "id": 122144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18454:16:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_bf7e4b28b83e91981237506863a0b375ee2265268eac0c62acc77834d3da44e4",
                            "typeString": "literal_string \"TransferFailed\""
                          },
                          "value": "TransferFailed"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122145,
                        "nodeType": "Return",
                        "src": "18447:23:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122148,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18494:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122149,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18507:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18519:17:163",
                        "memberName": "UnexpectedAssetId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7020,
                        "src": "18507:29:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18537:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18507:38:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18494:51:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122156,
                  "nodeType": "IfStatement",
                  "src": "18490:108:163",
                  "trueBody": {
                    "id": 122155,
                    "nodeType": "Block",
                    "src": "18547:51:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "556e657870656374656441737365744964",
                          "id": 122153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18568:19:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_900cc40c429d3cb9e58456c6facf437f83d7f3ea0c2892f5ccc7f2f9349368ee",
                            "typeString": "literal_string \"UnexpectedAssetId\""
                          },
                          "value": "UnexpectedAssetId"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122154,
                        "nodeType": "Return",
                        "src": "18561:26:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122157,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18611:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122158,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18624:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18636:16:163",
                        "memberName": "UnexpectedSender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7022,
                        "src": "18624:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18653:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18624:37:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18611:50:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122165,
                  "nodeType": "IfStatement",
                  "src": "18607:106:163",
                  "trueBody": {
                    "id": 122164,
                    "nodeType": "Block",
                    "src": "18663:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "556e657870656374656453656e646572",
                          "id": 122162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18684:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_2a47bf112352efbeaafb4a6f88929e30325c3c940a6dcd7c0fa839b31dce4b36",
                            "typeString": "literal_string \"UnexpectedSender\""
                          },
                          "value": "UnexpectedSender"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122163,
                        "nodeType": "Return",
                        "src": "18677:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122166,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18726:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122167,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18739:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122168,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18751:16:163",
                        "memberName": "UnsupportedToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7024,
                        "src": "18739:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18768:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18739:37:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18726:50:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122174,
                  "nodeType": "IfStatement",
                  "src": "18722:106:163",
                  "trueBody": {
                    "id": 122173,
                    "nodeType": "Block",
                    "src": "18778:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "556e737570706f72746564546f6b656e",
                          "id": 122171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18799:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_cfecde7d087375c6c1bcef49ed49dc8876c721288ae8e1dac26111ffe326c5b4",
                            "typeString": "literal_string \"UnsupportedToken\""
                          },
                          "value": "UnsupportedToken"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122172,
                        "nodeType": "Return",
                        "src": "18792:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122175,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18841:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122176,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18854:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18866:14:163",
                        "memberName": "ApprovalFailed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6974,
                        "src": "18854:26:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18881:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18854:35:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18841:48:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122183,
                  "nodeType": "IfStatement",
                  "src": "18837:102:163",
                  "trueBody": {
                    "id": 122182,
                    "nodeType": "Block",
                    "src": "18891:48:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "417070726f76616c4661696c6564",
                          "id": 122180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "18912:16:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_22caf0b171e6c54e5227a137e041cf23199590479a5b2d0bbbca5931ce005561",
                            "typeString": "literal_string \"ApprovalFailed\""
                          },
                          "value": "ApprovalFailed"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122181,
                        "nodeType": "Return",
                        "src": "18905:23:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122184,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "18952:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122185,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "18965:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18977:24:163",
                        "memberName": "MinimumTransactionAmount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7028,
                        "src": "18965:36:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19002:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "18965:45:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "18952:58:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122192,
                  "nodeType": "IfStatement",
                  "src": "18948:122:163",
                  "trueBody": {
                    "id": 122191,
                    "nodeType": "Block",
                    "src": "19012:58:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4d696e696d756d5472616e73616374696f6e416d6f756e74",
                          "id": 122189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19033:26:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_492417564dc4a4c63f9c86c8498e78aaa9505ecb1df71804075a6bf3e7a5c427",
                            "typeString": "literal_string \"MinimumTransactionAmount\""
                          },
                          "value": "MinimumTransactionAmount"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122190,
                        "nodeType": "Return",
                        "src": "19026:33:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122193,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19083:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122194,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19096:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19108:17:163",
                        "memberName": "ZeroLpTotalSupply",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7030,
                        "src": "19096:29:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19126:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19096:38:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19083:51:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122201,
                  "nodeType": "IfStatement",
                  "src": "19079:108:163",
                  "trueBody": {
                    "id": 122200,
                    "nodeType": "Block",
                    "src": "19136:51:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "5a65726f4c70546f74616c537570706c79",
                          "id": 122198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19157:19:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ebd32247e921b95ef92682a652e846f1928cec2e8ff25b1154ee19b1d905edee",
                            "typeString": "literal_string \"ZeroLpTotalSupply\""
                          },
                          "value": "ZeroLpTotalSupply"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122199,
                        "nodeType": "Return",
                        "src": "19150:26:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122202,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19200:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122203,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19213:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122204,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19225:18:163",
                        "memberName": "NoAssetsToWithdraw",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7006,
                        "src": "19213:30:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19244:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19213:39:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19200:52:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122210,
                  "nodeType": "IfStatement",
                  "src": "19196:110:163",
                  "trueBody": {
                    "id": 122209,
                    "nodeType": "Block",
                    "src": "19254:52:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4e6f417373657473546f5769746864726177",
                          "id": 122207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19275:20:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9c08850cb3a3d4849cf1654531c50f8b3ae3da79084fff04a9c91018583f5d93",
                            "typeString": "literal_string \"NoAssetsToWithdraw\""
                          },
                          "value": "NoAssetsToWithdraw"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122208,
                        "nodeType": "Return",
                        "src": "19268:27:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122211,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19319:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122212,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19332:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122213,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19344:10:163",
                        "memberName": "NotPayable",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7008,
                        "src": "19332:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19355:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19332:31:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19319:44:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122219,
                  "nodeType": "IfStatement",
                  "src": "19315:94:163",
                  "trueBody": {
                    "id": 122218,
                    "nodeType": "Block",
                    "src": "19365:44:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4e6f7450617961626c65",
                          "id": 122216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19386:12:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e04447bf688189d1a327973d3a989fd0b2f46aa2492f339562fcb79bb1a996b2",
                            "typeString": "literal_string \"NotPayable\""
                          },
                          "value": "NotPayable"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122217,
                        "nodeType": "Return",
                        "src": "19379:19:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122224,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122220,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19422:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122221,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19435:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122222,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19447:15:163",
                        "memberName": "QueryOutOfRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7033,
                        "src": "19435:27:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19463:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19435:36:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19422:49:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122228,
                  "nodeType": "IfStatement",
                  "src": "19418:104:163",
                  "trueBody": {
                    "id": 122227,
                    "nodeType": "Block",
                    "src": "19473:49:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "51756572794f75744f6652616e6765",
                          "id": 122225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19494:17:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ffff016daa6ee0ecfaa879e40b382df0e94c5c7b8d4b572390879c939e8f9760",
                            "typeString": "literal_string \"QueryOutOfRange\""
                          },
                          "value": "QueryOutOfRange"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122226,
                        "nodeType": "Return",
                        "src": "19487:24:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122233,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122229,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19535:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122230,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19548:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19560:10:163",
                        "memberName": "ReturnData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7038,
                        "src": "19548:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (bytes memory) pure"
                        }
                      },
                      "id": 122232,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19571:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19548:31:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19535:44:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122237,
                  "nodeType": "IfStatement",
                  "src": "19531:94:163",
                  "trueBody": {
                    "id": 122236,
                    "nodeType": "Block",
                    "src": "19581:44:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "52657475726e44617461",
                          "id": 122234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19602:12:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_746b7e6d17d039f7609f79fdb36fefb722b13f553f16f5aa81d5f5752ca25fdc",
                            "typeString": "literal_string \"ReturnData\""
                          },
                          "value": "ReturnData"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122235,
                        "nodeType": "Return",
                        "src": "19595:19:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122238,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19638:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122239,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19651:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19663:10:163",
                        "memberName": "CallFailed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7042,
                        "src": "19651:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$_t_bytes4_$returns$__$",
                          "typeString": "function (bytes4) pure"
                        }
                      },
                      "id": 122241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19674:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19651:31:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19638:44:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122246,
                  "nodeType": "IfStatement",
                  "src": "19634:94:163",
                  "trueBody": {
                    "id": 122245,
                    "nodeType": "Block",
                    "src": "19684:44:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "43616c6c4661696c6564",
                          "id": 122243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19705:12:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_baaa713b1fb5fcf6267edfc681c5844d66ee47ca07482f98eb05ce8618e613d7",
                            "typeString": "literal_string \"CallFailed\""
                          },
                          "value": "CallFailed"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122244,
                        "nodeType": "Return",
                        "src": "19698:19:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122247,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19741:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122248,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19754:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19766:17:163",
                        "memberName": "UnexpectedSuccess",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7044,
                        "src": "19754:29:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19784:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19754:38:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19741:51:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122255,
                  "nodeType": "IfStatement",
                  "src": "19737:108:163",
                  "trueBody": {
                    "id": 122254,
                    "nodeType": "Block",
                    "src": "19794:51:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "556e657870656374656453756363657373",
                          "id": 122252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19815:19:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_934c0356e413b5125749463d23f92046442d40717df45d007e9c9ff777295825",
                            "typeString": "literal_string \"UnexpectedSuccess\""
                          },
                          "value": "UnexpectedSuccess"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122253,
                        "nodeType": "Return",
                        "src": "19808:26:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122256,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19858:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122257,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19871:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19883:12:163",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "19871:24:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19896:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19871:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19858:46:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122264,
                  "nodeType": "IfStatement",
                  "src": "19854:98:163",
                  "trueBody": {
                    "id": 122263,
                    "nodeType": "Block",
                    "src": "19906:46:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "556e617574686f72697a6564",
                          "id": 122261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19927:14:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_1b2638459828301e8cd6c7c02856073bacf975379e0867f689bb14feacb780c5",
                            "typeString": "literal_string \"Unauthorized\""
                          },
                          "value": "Unauthorized"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122262,
                        "nodeType": "Return",
                        "src": "19920:21:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122265,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "19965:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122266,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "19978:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19990:19:163",
                        "memberName": "InvalidContribution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7049,
                        "src": "19978:31:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122268,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20010:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "19978:40:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "19965:53:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122273,
                  "nodeType": "IfStatement",
                  "src": "19961:112:163",
                  "trueBody": {
                    "id": 122272,
                    "nodeType": "Block",
                    "src": "20020:53:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964436f6e747269627574696f6e",
                          "id": 122270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20041:21:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b6b5d20f6a2206c561b76a60cd9264e5d489b2ff0fbd564b89f3d89b8c64ff76",
                            "typeString": "literal_string \"InvalidContribution\""
                          },
                          "value": "InvalidContribution"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122271,
                        "nodeType": "Return",
                        "src": "20034:28:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122274,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20086:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122275,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20099:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20111:12:163",
                        "memberName": "InvalidToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7051,
                        "src": "20099:24:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20124:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20099:33:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20086:46:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122282,
                  "nodeType": "IfStatement",
                  "src": "20082:98:163",
                  "trueBody": {
                    "id": 122281,
                    "nodeType": "Block",
                    "src": "20134:46:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c6964546f6b656e",
                          "id": 122279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20155:14:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_73cfea713ea530e6ea88616f42e815a32041fbc05af94e04ae6f4408615f26be",
                            "typeString": "literal_string \"InvalidToken\""
                          },
                          "value": "InvalidToken"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122280,
                        "nodeType": "Return",
                        "src": "20148:21:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122283,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20193:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122284,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20206:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20218:13:163",
                        "memberName": "MaxFeeTooHigh",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7053,
                        "src": "20206:25:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20232:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20206:34:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20193:47:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122291,
                  "nodeType": "IfStatement",
                  "src": "20189:100:163",
                  "trueBody": {
                    "id": 122290,
                    "nodeType": "Block",
                    "src": "20242:47:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4d6178466565546f6f48696768",
                          "id": 122288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20263:15:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_532d9b4469f581053e41d8d8a9b1c987317c20437877c5761fccb6ac36a93ab1",
                            "typeString": "literal_string \"MaxFeeTooHigh\""
                          },
                          "value": "MaxFeeTooHigh"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122289,
                        "nodeType": "Return",
                        "src": "20256:22:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122292,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20302:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122293,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20315:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20327:10:163",
                        "memberName": "FeeTooHigh",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7055,
                        "src": "20315:22:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20338:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20315:31:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20302:44:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122300,
                  "nodeType": "IfStatement",
                  "src": "20298:94:163",
                  "trueBody": {
                    "id": 122299,
                    "nodeType": "Block",
                    "src": "20348:44:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "466565546f6f48696768",
                          "id": 122297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20369:12:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_07eb62c91692087e506532c1ab45900ec560211dae6c4a052ebf639b5d422cc0",
                            "typeString": "literal_string \"FeeTooHigh\""
                          },
                          "value": "FeeTooHigh"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122298,
                        "nodeType": "Return",
                        "src": "20362:19:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122305,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122301,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20405:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122302,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20418:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20430:24:163",
                        "memberName": "NonPayableInitialization",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7057,
                        "src": "20418:36:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122304,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20455:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20418:45:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20405:58:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122309,
                  "nodeType": "IfStatement",
                  "src": "20401:122:163",
                  "trueBody": {
                    "id": 122308,
                    "nodeType": "Block",
                    "src": "20465:58:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4e6f6e50617961626c65496e697469616c697a6174696f6e",
                          "id": 122306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20486:26:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_902faa1408104f6d6b75c66b31272e8f17ff31ea87be3f43731bce7caa73d557",
                            "typeString": "literal_string \"NonPayableInitialization\""
                          },
                          "value": "NonPayableInitialization"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122307,
                        "nodeType": "Return",
                        "src": "20479:33:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122314,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122310,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20536:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122311,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20549:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122312,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20561:24:163",
                        "memberName": "BatchInputLengthMismatch",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7060,
                        "src": "20549:36:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122313,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20586:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20549:45:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20536:58:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122318,
                  "nodeType": "IfStatement",
                  "src": "20532:122:163",
                  "trueBody": {
                    "id": 122317,
                    "nodeType": "Block",
                    "src": "20596:58:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4261746368496e7075744c656e6774684d69736d61746368",
                          "id": 122315,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20617:26:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ea618da14bb642637320dd95c2bef3fe3a027b95373e6f36b3f5ff77460c62cf",
                            "typeString": "literal_string \"BatchInputLengthMismatch\""
                          },
                          "value": "BatchInputLengthMismatch"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122316,
                        "nodeType": "Return",
                        "src": "20610:33:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122319,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20667:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122320,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20680:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20692:15:163",
                        "memberName": "ExpiredDeadline",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7062,
                        "src": "20680:27:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20708:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20680:36:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20667:49:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122327,
                  "nodeType": "IfStatement",
                  "src": "20663:104:163",
                  "trueBody": {
                    "id": 122326,
                    "nodeType": "Block",
                    "src": "20718:49:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "45787069726564446561646c696e65",
                          "id": 122324,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20739:17:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4f5ee0ab763a92776b03f3d100ebc98ec29e57bb6a9a20ac5254359ee66f3bca",
                            "typeString": "literal_string \"ExpiredDeadline\""
                          },
                          "value": "ExpiredDeadline"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122325,
                        "nodeType": "Return",
                        "src": "20732:24:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122328,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20780:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122329,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20793:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20805:15:163",
                        "memberName": "ExpiredDeadline",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7062,
                        "src": "20793:27:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122331,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20821:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20793:36:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20780:49:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122336,
                  "nodeType": "IfStatement",
                  "src": "20776:105:163",
                  "trueBody": {
                    "id": 122335,
                    "nodeType": "Block",
                    "src": "20831:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c69645369676e6174757265",
                          "id": 122333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20852:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_26f94074f55601aaa609f6dfadf4b7fc63d9f3c56ec02fb00e9d0804ff24ff6f",
                            "typeString": "literal_string \"InvalidSignature\""
                          },
                          "value": "InvalidSignature"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122334,
                        "nodeType": "Return",
                        "src": "20845:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122337,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "20894:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122338,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "20907:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20919:18:163",
                        "memberName": "InvalidERC20Bridge",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7066,
                        "src": "20907:30:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20938:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "20907:39:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "20894:52:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122345,
                  "nodeType": "IfStatement",
                  "src": "20890:110:163",
                  "trueBody": {
                    "id": 122344,
                    "nodeType": "Block",
                    "src": "20948:52:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c69644552433230427269646765",
                          "id": 122342,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "20969:20:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f928d8784b65b09a9c699522a251c75a090fa5c1340fcfffb23cde8d9767a790",
                            "typeString": "literal_string \"InvalidERC20Bridge\""
                          },
                          "value": "InvalidERC20Bridge"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122343,
                        "nodeType": "Return",
                        "src": "20962:27:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122346,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21013:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122347,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21026:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21038:21:163",
                        "memberName": "RestrictedZeroAddress",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7068,
                        "src": "21026:33:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21060:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21026:42:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21013:55:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122354,
                  "nodeType": "IfStatement",
                  "src": "21009:116:163",
                  "trueBody": {
                    "id": 122353,
                    "nodeType": "Block",
                    "src": "21070:55:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "526573747269637465645a65726f41646472657373",
                          "id": 122351,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21091:23:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4ea5ff73f295e447d07a6507e1b3f3488471028427dc86d62924a393c51030ba",
                            "typeString": "literal_string \"RestrictedZeroAddress\""
                          },
                          "value": "RestrictedZeroAddress"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122352,
                        "nodeType": "Return",
                        "src": "21084:30:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122355,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21138:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122356,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21151:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21163:13:163",
                        "memberName": "AlreadyClosed",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7074,
                        "src": "21151:25:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21177:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21151:34:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21138:47:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122363,
                  "nodeType": "IfStatement",
                  "src": "21134:100:163",
                  "trueBody": {
                    "id": 122362,
                    "nodeType": "Block",
                    "src": "21187:47:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "416c7265616479436c6f736564",
                          "id": 122360,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21208:15:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ebf312f35307721c4e5eab3e27a7b2d222b15cef511d9384ec8d01c644328a10",
                            "typeString": "literal_string \"AlreadyClosed\""
                          },
                          "value": "AlreadyClosed"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122361,
                        "nodeType": "Return",
                        "src": "21201:22:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122364,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21247:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122365,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21260:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21272:11:163",
                        "memberName": "BondMatured",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7076,
                        "src": "21260:23:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122367,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21284:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21260:32:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21247:45:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122372,
                  "nodeType": "IfStatement",
                  "src": "21243:96:163",
                  "trueBody": {
                    "id": 122371,
                    "nodeType": "Block",
                    "src": "21294:45:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "426f6e644d617475726564",
                          "id": 122369,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21315:13:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4a128dec33e67f6d5be78069a4b722a0349229b295f098d8469d8165a862baff",
                            "typeString": "literal_string \"BondMatured\""
                          },
                          "value": "BondMatured"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122370,
                        "nodeType": "Return",
                        "src": "21308:20:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122373,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21352:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122374,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21365:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21377:14:163",
                        "memberName": "BondNotMatured",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7078,
                        "src": "21365:26:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21392:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21365:35:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21352:48:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122381,
                  "nodeType": "IfStatement",
                  "src": "21348:102:163",
                  "trueBody": {
                    "id": 122380,
                    "nodeType": "Block",
                    "src": "21402:48:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "426f6e644e6f744d617475726564",
                          "id": 122378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21423:16:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b729d74740aebc6ed976d2ab1a75e5af53e2fff3cf32c687e02a5eafecf7711e",
                            "typeString": "literal_string \"BondNotMatured\""
                          },
                          "value": "BondNotMatured"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122379,
                        "nodeType": "Return",
                        "src": "21416:23:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122382,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21463:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122383,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21476:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21488:17:163",
                        "memberName": "InsufficientPrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7080,
                        "src": "21476:29:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21506:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21476:38:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21463:51:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122390,
                  "nodeType": "IfStatement",
                  "src": "21459:108:163",
                  "trueBody": {
                    "id": 122389,
                    "nodeType": "Block",
                    "src": "21516:51:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e73756666696369656e745072696365",
                          "id": 122387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21537:19:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_71fa1bfd7973964703dd2e2562aea89e904f4ea71bd0502724fb9639903887ff",
                            "typeString": "literal_string \"InsufficientPrice\""
                          },
                          "value": "InsufficientPrice"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122388,
                        "nodeType": "Return",
                        "src": "21530:26:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122391,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21580:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122392,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21593:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21605:18:163",
                        "memberName": "MintPercentTooHigh",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7082,
                        "src": "21593:30:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122394,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21624:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21593:39:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21580:52:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122399,
                  "nodeType": "IfStatement",
                  "src": "21576:110:163",
                  "trueBody": {
                    "id": 122398,
                    "nodeType": "Block",
                    "src": "21634:52:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4d696e7450657263656e74546f6f48696768",
                          "id": 122396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21655:20:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4fd66c7f64732dd4d9c28e5e3575e1c821f0cfe657a59341ab21f5cfb88370d9",
                            "typeString": "literal_string \"MintPercentTooHigh\""
                          },
                          "value": "MintPercentTooHigh"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122397,
                        "nodeType": "Return",
                        "src": "21648:27:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122400,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21699:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122401,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21712:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21724:16:163",
                        "memberName": "InvalidTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7085,
                        "src": "21712:28:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21741:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21712:37:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21699:50:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122408,
                  "nodeType": "IfStatement",
                  "src": "21695:106:163",
                  "trueBody": {
                    "id": 122407,
                    "nodeType": "Block",
                    "src": "21751:50:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "496e76616c696454696d657374616d70",
                          "id": 122405,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21772:18:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8b17494aae37f9a8d84378e3e577c37ec6b7caa0812d7528bafdef8debb4b247",
                            "typeString": "literal_string \"InvalidTimestamp\""
                          },
                          "value": "InvalidTimestamp"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122406,
                        "nodeType": "Return",
                        "src": "21765:25:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122409,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21814:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122410,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21827:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122411,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21839:30:163",
                        "memberName": "FixedPointMath_InvalidExponent",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7088,
                        "src": "21827:42:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "21870:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21827:51:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21814:64:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122417,
                  "nodeType": "IfStatement",
                  "src": "21810:134:163",
                  "trueBody": {
                    "id": 122416,
                    "nodeType": "Block",
                    "src": "21880:64:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4669786564506f696e744d6174685f496e76616c69644578706f6e656e74",
                          "id": 122414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "21901:32:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_60ce03e412cbced2a1e3eadcb58dfd123de317e0deea178aac6293eac900535a",
                            "typeString": "literal_string \"FixedPointMath_InvalidExponent\""
                          },
                          "value": "FixedPointMath_InvalidExponent"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122415,
                        "nodeType": "Return",
                        "src": "21894:39:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122418,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "21970:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122419,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "21983:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21995:34:163",
                        "memberName": "FixedPointMath_NegativeOrZeroInput",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7092,
                        "src": "21983:46:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "22030:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "21983:55:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "21970:68:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122426,
                  "nodeType": "IfStatement",
                  "src": "21953:164:163",
                  "trueBody": {
                    "id": 122425,
                    "nodeType": "Block",
                    "src": "22049:68:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4669786564506f696e744d6174685f4e656761746976654f725a65726f496e707574",
                          "id": 122423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "22070:36:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_50672376c631b93bb5c26aa37f8b83f495bc2ce7930253bb5102016b300f6525",
                            "typeString": "literal_string \"FixedPointMath_NegativeOrZeroInput\""
                          },
                          "value": "FixedPointMath_NegativeOrZeroInput"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122424,
                        "nodeType": "Return",
                        "src": "22063:43:163"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 122431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 122427,
                      "name": "_selector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 121981,
                      "src": "22130:9:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 122428,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "22143:11:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 122429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "22155:28:163",
                        "memberName": "FixedPointMath_NegativeInput",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7094,
                        "src": "22143:40:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 122430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "22184:8:163",
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "22143:49:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "22130:62:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 122435,
                  "nodeType": "IfStatement",
                  "src": "22126:130:163",
                  "trueBody": {
                    "id": 122434,
                    "nodeType": "Block",
                    "src": "22194:62:163",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "4669786564506f696e744d6174685f4e65676174697665496e707574",
                          "id": 122432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "22215:30:163",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_159237859af5ea7ef20a92b9030ee8e43cd660550aec1e743ae81729000b3f4d",
                            "typeString": "literal_string \"FixedPointMath_NegativeInput\""
                          },
                          "value": "FixedPointMath_NegativeInput"
                        },
                        "functionReturnParameters": 121985,
                        "id": 122433,
                        "nodeType": "Return",
                        "src": "22208:37:163"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "556e6b6e6f776e2073656c6563746f72",
                        "id": 122437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "22272:18:163",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a2c8e0e5a9bee2d87b55bbd9aa4ff259bb0b56014c3f3e170965ca97baad6ba5",
                          "typeString": "literal_string \"Unknown selector\""
                        },
                        "value": "Unknown selector"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a2c8e0e5a9bee2d87b55bbd9aa4ff259bb0b56014c3f3e170965ca97baad6ba5",
                          "typeString": "literal_string \"Unknown selector\""
                        }
                      ],
                      "id": 122436,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -19,
                        -19
                      ],
                      "referencedDeclaration": -19,
                      "src": "22265:6:163",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 122438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22265:26:163",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 122439,
                  "nodeType": "ExpressionStatement",
                  "src": "22265:26:163"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decodeError",
            "nameLocation": "16142:11:163",
            "parameters": {
              "id": 121982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121981,
                  "mutability": "mutable",
                  "name": "_selector",
                  "nameLocation": "16170:9:163",
                  "nodeType": "VariableDeclaration",
                  "scope": 122441,
                  "src": "16163:16:163",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 121980,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "16163:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16153:32:163"
            },
            "returnParameters": {
              "id": 121985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121984,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 122441,
                  "src": "16209:13:163",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 121983,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16209:6:163",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16208:15:163"
            },
            "scope": 122442,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "HyperdriveUtils",
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          122442
        ],
        "name": "HyperdriveUtils",
        "nameLocation": "444:15:163",
        "scope": 122443,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 163
} as const;
